import { NextResponse } from "next/server";
import * as googleTTS from "google-tts-api";
import { exec } from "child_process";
import fs from "fs";
import path from "path";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(req: Request) {
  try {
    const { tasks, storyboard, language } = await req.json();
    if (!tasks || !tasks.length) {
      return NextResponse.json({ error: "No tasks provided" }, { status: 400 });
    }

    const hfCredentials = process.env.HF_CREDENTIALS;
    if (!hfCredentials) {
      return NextResponse.json({ error: "No keys" }, { status: 500 });
    }

    let allCompleted = true;
    let anyFailed = false;
    const completedUrls: string[] = [];

    // Check all tasks
    for (const task of tasks) {
      const res = await fetch(task.statusUrl, {
        headers: {
          Authorization: `Key ${hfCredentials}`,
        },
      });

      if (!res.ok) {
        allCompleted = false;
        continue;
      }

      const data = await res.json();
      const status = data.state || data.status;
      if (status === "failed" || status === "nsfw" || status === "canceled") {
        anyFailed = true;
      } else if (status === "completed") {
        let finalOutputUrl = null;
        if (data.video && data.video.url) {
          finalOutputUrl = data.video.url;
        } else if (data.output_url) {
          finalOutputUrl = data.output_url;
        } else if (data.outputs && data.outputs.length > 0) {
          finalOutputUrl = data.outputs[0].url || data.outputs[0];
        } else if (data.url) {
          finalOutputUrl = data.url;
        }

        if (finalOutputUrl) {
          completedUrls.push(finalOutputUrl);
        }
      } else {
        allCompleted = false;
      }
    }

    if (anyFailed) {
      return NextResponse.json({
        status: "failed",
        error: "One or more video segments failed to generate.",
      });
    }

    if (!allCompleted || completedUrls.length === 0) {
      return NextResponse.json({ status: "processing" });
    }

    const rawVideoUrl = completedUrls[0];
    const voiceoverText = storyboard?.scenes?.[0]?.voiceoverText;

    // If there is NO voiceover text, we can just return the raw video instantly.
    if (!voiceoverText) {
      return NextResponse.json({
        status: "completed",
        videoUrl: rawVideoUrl,
      });
    }

    // --- STEP 3: THE VIDEO ASSEMBLY ENGINE (TTS + FFMPEG) ---
    const publicDir = path.join(process.cwd(), "public", "output");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    const uniqueId = Math.random().toString(36).substring(7);
    const videoPath = path.join(publicDir, `raw_${uniqueId}.mp4`);
    const audioPath = path.join(publicDir, `tts_${uniqueId}.mp3`);
    const outputPath = path.join(publicDir, `final_${uniqueId}.mp4`);
    const finalVideoUrl = `/output/final_${uniqueId}.mp4`;

    // 1. Download the raw video
    const videoRes = await fetch(rawVideoUrl);
    const videoBuffer = await videoRes.arrayBuffer();
    fs.writeFileSync(videoPath, Buffer.from(videoBuffer));

    // 2. Generate and download TTS audio
    // Map language string to Google TTS language code
    let langCode = "en";
    if (language) {
      const l = language.toLowerCase();
      if (l.includes("spanish")) langCode = "es";
      if (l.includes("french")) langCode = "fr";
      if (l.includes("german")) langCode = "de";
      if (l.includes("hindi")) langCode = "hi";
    }

    const audioUrl = googleTTS.getAudioUrl(voiceoverText, {
      lang: langCode,
      slow: false,
      host: "https://translate.google.com",
    });

    const audioRes = await fetch(audioUrl);
    const audioBuffer = await audioRes.arrayBuffer();
    fs.writeFileSync(audioPath, Buffer.from(audioBuffer));

    // 3. FFmpeg magic: Combine video (which has background SFX) and TTS audio.
    // We use complex filter to mix the original audio (lowered volume) with the TTS voice (normal volume)
    const ffmpegCmd = `"${path.join(process.cwd(), "ffmpeg.exe")}" -i "${videoPath}" -i "${audioPath}" -filter_complex "[0:a]volume=0.3[a0];[1:a]volume=1.5[a1];[a0][a1]amix=inputs=2:duration=first:dropout_transition=2[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -shortest "${outputPath}"`;

    try {
      await execAsync(ffmpegCmd);
      // Clean up temp files
      fs.unlinkSync(videoPath);
      fs.unlinkSync(audioPath);
    } catch (err: any) {
      console.error("FFmpeg error:", err);
      // If FFmpeg fails (e.g. no audio stream in the raw video), fallback to just replacing audio
      try {
        const fallbackCmd = `"${path.join(process.cwd(), "ffmpeg.exe")}" -i "${videoPath}" -i "${audioPath}" -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 -shortest "${outputPath}"`;
        await execAsync(fallbackCmd);
      } catch (fallbackErr) {
        console.error("Fallback FFmpeg error:", fallbackErr);
        // Absolute worst case: return raw video
        return NextResponse.json({
          status: "completed",
          videoUrl: rawVideoUrl,
        });
      }
    }

    return NextResponse.json({
      status: "completed",
      videoUrl: finalVideoUrl,
    });
  } catch (error) {
    console.error("Render status API error:", error);
    return NextResponse.json(
      { error: "Failed to check status" },
      { status: 500 },
    );
  }
}
