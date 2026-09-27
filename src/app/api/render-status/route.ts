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

    let allCompleted = true;
    let anyFailed = false;
    const completedUrls: string[] = [];

    // Check all tasks
    for (const task of tasks) {
      // Use the exact status_url returned by Higgsfield
      const res = await fetch(task.statusUrl, {
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
        // The output url format might vary based on the API docs, usually it's in output_url or outputs[0].url
        let finalOutputUrl = null;
        if (data.output_url) {
          finalOutputUrl = data.output_url;
        } else if (data.outputs && data.outputs.length > 0) {
          finalOutputUrl = data.outputs[0].url || data.outputs[0];
        } else if (data.url) {
          finalOutputUrl = data.url;
        } else if (data.output && data.output.url) {
          finalOutputUrl = data.output.url;
        }

        if (finalOutputUrl) {
          completedUrls.push(finalOutputUrl);
        } else {
          console.error("Task completed but could not parse output URL:", data);
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

    if (!allCompleted) {
      return NextResponse.json({ status: "processing" });
    }

    if (completedUrls.length === 0) {
      return NextResponse.json({ status: "processing" }); // Fallback if parsing failed briefly
    }

    // Return the FIRST real generated clip so the user can see it instantly!
    const finalVideo = completedUrls[0];

    return NextResponse.json({
      status: "completed",
      videoUrl: finalVideo,
    });
  } catch (error) {
    console.error("Render status API error:", error);
    return NextResponse.json(
      { error: "Failed to check status" },
      { status: 500 },
    );
  }
}
