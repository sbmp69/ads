import { NextResponse } from "next/server";
import OpenAI from "openai";
import { z } from "zod";
import { zodResponseFormat } from "openai/helpers/zod";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

const StoryboardSchema = z.object({
  scenes: z
    .array(
      z.object({
        sceneNumber: z.number(),
        durationSeconds: z
          .number()
          .describe(
            "The estimated duration of this scene in seconds. Maximum 10 seconds per scene.",
          ),
        videoPrompt: z
          .string()
          .describe(
            "The highly descriptive prompt to send to the video generation AI.",
          ),
        textOverlay: z
          .string()
          .nullable()
          .describe(
            "The punchy text overlay to display on screen, or null if no text is needed.",
          ),
      }),
    )
    .describe("The sequence of scenes making up the video ad."),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      businessType,
      offer,
      location,
      language,
      assetImage,
      assetDescription,
    } = body;

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OpenAI API key not configured." },
        { status: 500 },
      );
    }

    let userContent = `Business Type: ${businessType}\nOffer/Hook: ${offer || "N/A"}\nLocation: ${location || "N/A"}\nLanguage for on-screen text/voiceover: ${language || "English"}`;

    if (assetImage && assetDescription) {
      userContent += `\n\nCRITICAL INSTRUCTION: The client has provided a reference image. Description of the reference image: "${assetDescription}". You MUST include instructions in the videoPrompt for the AI to seamlessly integrate this specific product/avatar into the scene!`;
    }

    const completion = await openai.chat.completions.parse({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `You are a master creative director. Your job is to take a client's brief and write a highly effective storyboard for an AI-generated video ad.
          
          CRITICAL REVISION: The client wants to save money by generating the ENTIRE ad as a SINGLE contiguous 10-second scene.
          DO NOT OUTPUT 3 SCENES! Output EXACTLY ONE (1) scene that is 10 seconds long.
          
          Write a highly descriptive, cinematic prompt for the AI video generator (focus on lighting, camera movement, subjects) that will dynamically evolve over 10 seconds.
          Make sure the text overlay matches the specified Language.`,
        },
        {
          role: "user",
          content: userContent,
        },
      ],
      response_format: zodResponseFormat(StoryboardSchema, "storyboard"),
    });

    const storyboard = completion.choices[0].message.parsed;

    return NextResponse.json({ storyboard });
  } catch (error: any) {
    console.error("Error generating storyboard:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate storyboard" },
      { status: 500 },
    );
  }
}
