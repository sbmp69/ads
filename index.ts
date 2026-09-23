import { config, higgsfield } from '@higgsfield/client/v2';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function main() {
  const credentials = process.env.HF_CREDENTIALS || process.env.HF_KEY;
  if (!credentials) {
    console.error("Missing HF_CREDENTIALS or HF_KEY in .env.local");
    process.exit(1);
  }

  config({ credentials });

  console.log("Subscribing to bytedance/seedance-2.5/text-to-video...");
  try {
    const response = await higgsfield.subscribe('bytedance/seedance-2.5/text-to-video', {
      input: {
        prompt: "A cinematic scene at sunset",
        duration: 5,
        resolution: "720p",
        aspect_ratio: "16:9"
      },
      withPolling: true
    });

    if (response.status === 'completed') {
        console.log("Success! Video URL:", response.video?.url);
    } else if (response.status === 'failed') {
        console.error("Job failed:", response);
    } else if (response.status === 'nsfw' || response.status === 'moderated' as any) {
        console.error("Job moderated/nsfw:", response);
    } else if (response.status === 'canceled' as any) {
        console.error("Job canceled:", response);
    } else {
        console.error("Job did not complete successfully. Status:", response.status);
    }
  } catch (err) {
      console.error("Error executing request:", err);
  }
}

main();
