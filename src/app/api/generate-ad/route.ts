import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { z } from 'zod';
import { zodResponseFormat } from 'openai/helpers/zod';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '', // Prevent crashing if undefined on load
});

const StoryboardSchema = z.object({
  scenes: z.array(z.object({
    sceneNumber: z.number(),
    videoPrompt: z.string().describe("The prompt to send to the video generation AI (e.g. 'Cinematic slow motion shot of a barista pouring coffee, golden hour, 4k')"),
    textOverlay: z.string().describe("The punchy text overlay to display on screen for this scene (e.g. 'Your morning starts here')")
  })).length(3).describe("Exactly 3 scenes making up a 15-second ad.")
});

export async function POST(req: Request) {
  try {
    const { businessType, offer, location } = await req.json();

    if (!businessType) {
      return NextResponse.json({ error: "Missing businessType" }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key not configured." }, { status: 500 });
    }

    const completion = await openai.chat.completions.parse({
      model: "gpt-4o-mini", // Fast and cheap for this task
      messages: [
        {
          role: "system",
          content: "You are a master creative director for a high-end advertising agency. Your job is to take a client's brief and write a 3-scene storyboard for a 15-second video ad (5 seconds per scene). For each scene, provide a highly descriptive, cinematic prompt for an AI video generator, and a punchy text overlay that will be animated on screen."
        },
        {
          role: "user",
          content: `Create a 3-scene storyboard for this business:\nBusiness Type: ${businessType}\nOffer/Hook: ${offer || 'N/A'}\nLocation: ${location || 'N/A'}`
        }
      ],
      response_format: zodResponseFormat(StoryboardSchema, "storyboard"),
    });

    const storyboard = completion.choices[0].message.parsed;

    return NextResponse.json({ storyboard });

  } catch (error: any) {
    console.error("Error generating storyboard:", error);
    return NextResponse.json({ error: error.message || "Failed to generate storyboard" }, { status: 500 });
  }
}
