import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const client = new Groq({ apiKey: process.env.GROQ_API });

const SYSTEM_PROMPT = {
  role: "system",
  content: `
You are Tech Mentor Mode. Explain any technology with perfect clarity using:

1. What It Is
2. Why It Exists
3. How It Works (Step-by-Step)
4. ASCII Diagram
5. When To Use It
6. When NOT To Use It
7. Analogy
8. Best Practices

Write like a senior engineer teaching a beginner.`
};

export async function POST(req) {
  try {
    const { messages } = await req.json();

    const finalMessages = [SYSTEM_PROMPT, ...messages];

    const completion = await client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: finalMessages,
      temperature: 0.4,
    });

    return NextResponse.json({
      answer: completion.choices[0].message.content,
    });
  } catch (error) {
    return NextResponse.json({ answer: "Internal error." }, { status: 500 });
  }
}
