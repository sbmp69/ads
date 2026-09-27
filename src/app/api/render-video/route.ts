import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { storyboard, assetImage } = await req.json();
    if (!storyboard || !storyboard.scenes) {
      return NextResponse.json(
        { error: "No storyboard provided" },
        { status: 400 },
      );
    }

    const hfCredentials = process.env.HF_CREDENTIALS;
    if (!hfCredentials) {
      return NextResponse.json(
        { error: "Higgsfield credentials not found in .env.local" },
        { status: 500 },
      );
    }

    // Use image-to-video if image is provided, else text-to-video
    const ENDPOINT = assetImage
      ? "https://api.higgsfield.ai/kling-video/v2.6/pro/image-to-video"
      : "https://api.higgsfield.ai/kling-video/v2.6/pro/text-to-video";

    const generationPromises = storyboard.scenes.map(async (scene: any) => {
      const payload: any = {
        prompt: scene.videoPrompt,
        duration: 10, // Maximize the duration for the single clip
        generate_sound: true, // Enable audio generation natively from Kling!
      };

      if (assetImage) {
        payload.image = assetImage; // Base64 or URL
      }

      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Key ${hfCredentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        console.error(
          `API failed for scene ${scene.sceneNumber}:`,
          await res.text(),
        );
        return null;
      }

      const data = await res.json();
      return {
        sceneNumber: scene.sceneNumber,
        taskId: data.request_id,
        statusUrl: data.status_url,
      };
    });

    const tasks = (await Promise.all(generationPromises)).filter(
      (t) => t !== null,
    );

    if (tasks.length === 0) {
      return NextResponse.json(
        { error: "All generation requests failed." },
        { status: 500 },
      );
    }

    const jobId = "render_" + Math.random().toString(36).substring(7);

    return NextResponse.json({
      success: true,
      jobId,
      tasks,
      message: "Video generation job successfully queued!",
    });
  } catch (error) {
    console.error("Render API error:", error);
    return NextResponse.json(
      { error: "Failed to process render request" },
      { status: 500 },
    );
  }
}
