import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);

export async function POST(req) {
  const { messages } = await req.json();

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const result = await model.generateContent({
    contents: messages.map((m) => ({
      role: m.role,
      parts: [{ text: m.content }],
    })),
  });

  return NextResponse.json({
    answer: result.response.text(),
  });
}
