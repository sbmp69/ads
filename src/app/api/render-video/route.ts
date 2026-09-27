import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { storyboard } = await req.json();
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

    const KLING_ENDPOINT =
      "https://api.higgsfield.ai/kling-video/v3.0/pro/text-to-video";

    // STEP 1: TRIGGER GENERATIONS (We skip estimate now since user has balance)
    const generationPromises = storyboard.scenes.map(async (scene: any) => {
      const res = await fetch(KLING_ENDPOINT, {
        method: "POST",
        headers: {
          Authorization: `Key ${hfCredentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: scene.videoPrompt,
        }),
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

    // STEP 2: RETURN JOB ID
    const jobId = "render_" + Math.random().toString(36).substring(7);

    return NextResponse.json({
      success: true,
      jobId,
      tasks,
      message:
        "Real video generation jobs successfully queued with Higgsfield Kling 3.0!",
    });
  } catch (error) {
    console.error("Render API error:", error);
    return NextResponse.json(
      { error: "Failed to process render request" },
      { status: 500 },
    );
  }
}
