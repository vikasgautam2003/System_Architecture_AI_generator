import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `
      You are a System Architect. 
      Generate valid Mermaid.js flowchart syntax based on the user's request.
      
      RULES:
      1. Use 'graph TD' (Top-Down) or 'graph LR' (Left-Right).
      2. Use standard shapes: 
         - [Service Name] for rectangles
         - ((Start/End)) for circles
         - [(Database Name)] for databases
         - {Decision?} for logic checks
      3. Connect nodes with arrows (-->).
      4. Return ONLY the code string. Do NOT use markdown blocks.
      
      Example Output:
      graph TD
        User[User] -->|Http| API[API Gateway]
        API -->|RPC| Auth[Auth Service]
        API -->|Query| DB[(Database)]
    `;

    const result = await model.generateContent([
      systemPrompt, 
      `User Request: ${prompt}`
    ]);
    
    const responseText = result.response.text();
    const cleanCode = responseText.replace(/```mermaid|```/g, "").trim();

    return NextResponse.json({ chart: cleanCode });

  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}