// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// export async function POST(req) {
//   try {
//     const { prompt } = await req.json();

//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

//     const systemPrompt = `
//       You are a System Architect. 
//       Generate valid Mermaid.js flowchart syntax based on the user's request.
      
//       RULES:
//       1. Use 'graph TD' (Top-Down) or 'graph LR' (Left-Right).
//       2. Use standard shapes: 
//          - [Service Name] for rectangles
//          - ((Start/End)) for circles
//          - [(Database Name)] for databases
//          - {Decision?} for logic checks
//       3. Connect nodes with arrows (-->).
//       4. Return ONLY the code string. Do NOT use markdown blocks.
      
//       Example Output:
//       graph TD
//         User[User] -->|Http| API[API Gateway]
//         API -->|RPC| Auth[Auth Service]
//         API -->|Query| DB[(Database)]
//     `;

//     const result = await model.generateContent([
//       systemPrompt, 
//       `User Request: ${prompt}`
//     ]);
    
//     const responseText = result.response.text();
//     const cleanCode = responseText.replace(/```mermaid|```/g, "").trim();

//     return NextResponse.json({ chart: cleanCode });

//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json({ error: "Failed" }, { status: 500 });
//   }
// }





import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function POST(req) {
  try {
    console.log("📥 Incoming Request...");

    const { prompt } = await req.json();
    console.log("📝 User Prompt:", prompt);

    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const systemPrompt = `
      You are a specialized System Architecture Generator.
      
      OUTPUT FORMAT:
      You must output ONLY a valid, raw JSON object. 
      Do NOT wrap the output in markdown code blocks (e.g. \`\`\`json).
      Do NOT include any text outside the JSON object.

      JSON STRUCTURE:
      {
        "chart": "string (valid mermaid syntax)",
        "explanation": "string (markdown formatted technical explanation)"
      }

      MERMAID SYNTAX RULES (STRICT):
      1. Always start with 'graph TD' (Top-Down) or 'graph LR' (Left-Right).
      2. Node IDs MUST be single words (Alphanumeric only). NO SPACES in IDs.
         - ❌ WRONG: User Service[User Service] --> DB
         - ✅ RIGHT: UserService[User Service] --> DB
      3. Use standard node shapes:
         - [Name] for Services/Components
         - [(Name)] for Databases
         - ((Name)) for Start/End/Users
         - {Name} for Decisions/Logic
      4. Use standard arrows: --> or -.->

      EXPLANATION RULES:
      - Explain the choice of database, caching strategy, and communication protocols.
      - Use bullet points for readability.
    `;

    console.log("🤖 Calling Gemini API...");
    const result = await model.generateContent([
      systemPrompt,
      `User Request: ${prompt}`
    ]);

    const responseText = result.response.text();
    console.log("🟦 Gemini Raw Output:", responseText);

    const cleanJson = responseText.replace(/```json|```/g, "").trim();
    console.log("🟩 Clean JSON String:", cleanJson);

    let parsed;
    try {
      parsed = JSON.parse(cleanJson);
      console.log("✅ JSON Parsed Successfully");
    } catch (jsonErr) {
      console.error("❌ JSON Parsing Failed:", jsonErr);
      return NextResponse.json(
        { error: "AI returned invalid JSON", raw: cleanJson },
        { status: 500 }
      );
    }

    return NextResponse.json(parsed);

  } catch (error) {
    console.error("🔥 SERVER ERROR:", error);
    return NextResponse.json(
      { error: "Server error occurred", details: error.message },
      { status: 500 }
    );
  }
}
