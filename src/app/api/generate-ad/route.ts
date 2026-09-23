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
    durationSeconds: z.number().describe("The estimated duration of this scene in seconds (usually 2 to 5 seconds)."),
    videoPrompt: z.string().describe("The highly descriptive prompt to send to the video generation AI."),
    textOverlay: z.string().nullable().describe("The punchy text overlay to display on screen, or null if no text is needed.")
  })).describe("The sequence of scenes making up the video ad.")
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { businessType, offer, location, customBrief, targetDuration = 15 } = body;

    // We allow either a structured brief or a completely custom brief
    if (!businessType && !customBrief) {
      return NextResponse.json({ error: "Please provide either business details or a custom brief." }, { status: 400 });
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: "OpenAI API key not configured." }, { status: 500 });
    }

    const completion = await openai.chat.completions.parse({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `You are a master creative director for an advertising agency. Your job is to take a client's brief (which could be structured data or a free-form custom request) and write a highly effective storyboard for an AI-generated video ad.
          
          You must determine the optimal number of scenes based on the brief. The total ad duration should be around ${targetDuration} seconds.
          For each scene, provide:
          1. The duration of the scene in seconds.
          2. A highly descriptive, cinematic prompt for the AI video generator (focus on lighting, camera movement, subjects).
          3. An optional text overlay for kinetic typography (keep it punchy).`
        },
        {
          role: "user",
          content: customBrief 
            ? `Client's Custom Brief:\n${customBrief}`
            : `Create a storyboard for this business:\nBusiness Type: ${businessType}\nOffer/Hook: ${offer || 'N/A'}\nLocation: ${location || 'N/A'}`
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
