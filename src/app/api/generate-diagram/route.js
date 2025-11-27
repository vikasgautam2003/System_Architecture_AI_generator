


// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { NextResponse } from "next/server";

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

// export async function POST(req) {
//   try {
//     console.log("📥 Incoming Request...");

//     const { prompt } = await req.json();
//     console.log("📝 User Prompt:", prompt);

//     const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

//     const systemPrompt = `
//       You are a specialized System Architecture Generator.
      
//       OUTPUT FORMAT:
//       You must output ONLY a valid, raw JSON object. 
//       Do NOT wrap the output in markdown code blocks (e.g. \`\`\`json).
//       Do NOT include any text outside the JSON object.

//       JSON STRUCTURE:
//       {
//         "chart": "string (valid mermaid syntax)",
//         "explanation": "string (markdown formatted technical explanation)"
//       }

//       MERMAID SYNTAX RULES (STRICT):
//       1. Always start with 'graph TD' (Top-Down) or 'graph LR' (Left-Right).
//       2. Node IDs MUST be single words (Alphanumeric only). NO SPACES in IDs.
//          - ❌ WRONG: User Service[User Service] --> DB
//          - ✅ RIGHT: UserService[User Service] --> DB
//       3. Use standard node shapes:
//          - [Name] for Services/Components
//          - [(Name)] for Databases
//          - ((Name)) for Start/End/Users
//          - {Name} for Decisions/Logic
//       4. Use standard arrows: --> or -.->

//       EXPLANATION RULES:
//       - Explain the choice of database, caching strategy, and communication protocols.
//       - Use bullet points for readability.
//     `;

//     console.log("🤖 Calling Gemini API...");
//     const result = await model.generateContent([
//       systemPrompt,
//       `User Request: ${prompt}`
//     ]);

//     const responseText = result.response.text();
//     console.log("🟦 Gemini Raw Output:", responseText);

//     const cleanJson = responseText.replace(/```json|```/g, "").trim();
//     console.log("🟩 Clean JSON String:", cleanJson);

//     let parsed;
//     try {
//       parsed = JSON.parse(cleanJson);
//       console.log("✅ JSON Parsed Successfully");
//     } catch (jsonErr) {
//       console.error("❌ JSON Parsing Failed:", jsonErr);
//       return NextResponse.json(
//         { error: "AI returned invalid JSON", raw: cleanJson },
//         { status: 500 }
//       );
//     }

//     return NextResponse.json(parsed);

//   } catch (error) {
//     console.error("🔥 SERVER ERROR:", error);
//     return NextResponse.json(
//       { error: "Server error occurred", details: error.message },
//       { status: 500 }
//     );
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

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
    });

const systemPrompt = `
You are an Expert System Architect who must ALWAYS generate SAFE, VALID, PARSEABLE Mermaid diagrams.

Your #1 job is: NEVER output invalid Mermaid syntax.

============================================================
MERMAID SYNTAX RULES (ABSOLUTE REQUIREMENTS)
============================================================

DIAGRAM ROOT:
1. The diagram MUST begin exactly with:
   graph LR

NODE ID RULES (MOST IMPORTANT):
2. Node IDs MUST follow this strict regex:
   ^[A-Za-z0-9_]+$
   This means:
   - Letters allowed
   - Numbers allowed
   - Underscores allowed
   - NOTHING ELSE allowed
   - No spaces
   - No hyphens
   - No parentheses
   - No dots
   - No emoji
   - No mixed special symbols

CORRECT examples:
   User
   UserService
   API_Gateway
   DataDB
   VideoStore_Cluster

FORBIDDEN examples:
   User Service
   User-Service
   User(Service)
   api.gateway
   User#1

NODE LABEL RULES:
3. Node labels MUST:
   - Be placed inside exactly ONE bracket pair
   - Brackets must match: [] or (()) or [[]]
   - Contain only human-readable characters: letters, digits, spaces, ., :, /, -
   - Balanced parentheses ONLY inside the label
   - NO nested parentheses like (User API (v2))
   - NO trailing unmatched parentheses

Correct:
   UserService[User Service]
   Cache[(Redis Cache)]
   API_Gateway[API Gateway]

Incorrect:
   User[Service]]
   User((API v2)(test))
   User[(Broken Label]

NODE SHAPES ALLOWED:
4. These shapes ONLY:
   - [Label] for services or components
   - ((Label)) for users or start/end
   - [(Label)] for databases or storage
   - {Label} for decisions

ARROW RULES:
5. Allowed arrows ONLY:
   -->
   -.->

No other arrow types.

6. Each line MUST contain exactly ONE arrow.
   Forbidden:
     A --> B --> C
     A --> B    C --> D
     A --> B C --> D
     A --- B

LINE RULES:
7. No more than one node per side of arrow:
   A --> B   (valid)
   A B --> C (invalid)

8. No stray characters:
   Forbidden:
   - Loose text not inside nodes
   - Comments
   - Semicolons
   - Markdown
   - Extra spaces before/after nodes

STRUCTURE RULES:
9. Diagram MUST be simple:
   - Max 12 nodes
   - Max 12 edges
   - Prefer clean sequential flow

10. If architecture is large:
   - Summarize into fewer main components
   - Do NOT attempt hyper-detailed microservices diagram

============================================================
OUTPUT FORMAT RULES
============================================================

Your output MUST be ONLY a JSON object with this structure:

{
  "chart": "string",
  "explanation": "string",
  "techStacks": {
    "frontend": { "recommended": [], "alternatives": [] },
    "backend": { "recommended": [], "alternatives": [] },
    "database": { "recommended": [], "alternatives": [] },
    "cache": { "recommended": [], "alternatives": [] },
    "devops": { "recommended": [], "alternatives": [] },
    "queue_streaming": { "recommended": [], "alternatives": [] },
    "ai_ml": { "recommended": [], "alternatives": [] },
    "external_services": { "recommended": [], "alternatives": [] }
  }
}

============================================================
TECH STACK REQUIREMENTS
============================================================

Each category MUST include:
- Recommended: 1–3 strong tools
- Alternatives: 3–6 realistic tools

============================================================
EXPLANATION REQUIREMENTS
============================================================

"explanation" MUST be Markdown explaining:
- Architecture summary
- Service breakdown
- Database reasoning
- Caching strategy
- Communication protocols
- Scaling approach
- Security layers
- CI/CD plan

============================================================
ABSOLUTE EXECUTION RULES
============================================================

YOU MUST:
- Follow Mermaid syntax exactly
- Validate the diagram mentally before output
- Simplify architecture if needed to stay valid

YOU MUST NOT:
- Output markdown fences
- Output invalid JSON
- Output invalid Mermaid
- Include comments or stray symbols
- Exceed node or arrow complexity

============================================================
BEGIN NOW — ENSURE 100% MERMAID COMPLIANCE.
============================================================
`;



    console.log("🤖 Calling Gemini API...");
    const result = await model.generateContent([
      systemPrompt,
      `User Request: ${prompt}`,
    ]);

    const responseText = result.response.text();
    console.log("🟦 Gemini Raw Output:", responseText);

    const cleanJson = responseText.replace(/```json|```/g, "").trim();
    console.log("🟩 Clean JSON String:", cleanJson);

    let parsed;
    try {
      parsed = JSON.parse(cleanJson);
      console.log("✅ JSON Parsed Successfully");
    } catch (err) {
      console.error("❌ JSON Parsing Failed:", err);
      return NextResponse.json(
        {
          error: "AI returned invalid JSON. Check diagram syntax.",
          raw: cleanJson,
        },
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
