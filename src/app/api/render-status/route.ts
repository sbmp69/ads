import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { tasks } = await req.json();
    if (!tasks || !tasks.length) {
      return NextResponse.json({ error: "No tasks provided" }, { status: 400 });
    }

    const hfCredentials = process.env.HF_CREDENTIALS;
    if (!hfCredentials) {
      return NextResponse.json({ error: "No keys" }, { status: 500 });
    }
    const BASE_URL = "https://api.higgsfield.ai";

    let allCompleted = true;
    let anyFailed = false;
    const completedUrls: string[] = [];

    // Check all tasks
    for (const task of tasks) {
      // Mock tasks return immediately
      if (task.taskId.startsWith("mock_task")) {
        completedUrls.push("https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4");
        continue;
      }

      const res = await fetch(`${BASE_URL}/requests/${task.taskId}/status`, {
        headers: {
          Authorization: `Key ${hfCredentials}`,
        },
      });

      if (!res.ok) {
        // If API fails to return status, we assume it's still running or failed.
        allCompleted = false;
        continue;
      }

      const data = await res.json();
      const status = data.state || data.status;
      if (status === "failed" || status === "nsfw" || status === "canceled") {
        anyFailed = true;
      } else if (status === "completed") {
        completedUrls.push(data.output_url || (data.outputs && data.outputs[0]?.url));
      } else {
        allCompleted = false;
      }
    }

    if (anyFailed) {
      return NextResponse.json({ status: "failed", error: "One or more video segments failed to generate." });
    }

    if (!allCompleted) {
      return NextResponse.json({ status: "processing" });
    }

    // Since we don't have a backend stitching engine yet (FFmpeg/Remotion),
    // we will just return the FIRST generated clip so the user can see their
    // real AI output instantly in the player.
    const finalVideo = completedUrls[0];
    
    return NextResponse.json({
      status: "completed",
      videoUrl: finalVideo,
    });
  } catch (error) {
    console.error("Render status API error:", error);
    return NextResponse.json({ error: "Failed to check status" }, { status: 500 });
  }
}
