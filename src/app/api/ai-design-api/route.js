import { AIModel } from "../../../config/PromptModel";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json(); // Ensure proper JSON extraction
    if (!body.prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const response = await AIModel.sendMessage(body.prompt);

    // Ensure correct parsing based on AIModel's response structure
    const responseData = response?.response?.text
      ? JSON.parse(response.response.text())
      : response;

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("AI API Error:", error);
    return NextResponse.json(
      { error: "AI model failed to respond" },
      { status: 500 }
    );
  }
}
