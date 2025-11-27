import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const client = new Groq({ apiKey: process.env.GROQ_API });

export async function GET() {
  try {
    const models = await client.models.list();
    return NextResponse.json(models);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch models" }, { status: 500 });
  }
}
