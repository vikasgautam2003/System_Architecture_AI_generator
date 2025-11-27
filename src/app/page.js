// "use client"
// import { useState } from "react"
// import Mermaid from "@/components/Mermaid"


// const DEFAULT_CHART= `
//   graph TD
//   User[User] -->|Request| LB(Load Balancer)
//   LB --> App{App Server}
//   App -->|Read/Write| DB[(PostgreSQL)]
//   App -->|Cache| Redis[(Redis)]
// `;


// export default function ArchitectureGenerator() {
//   const [prompt, setPrompt] = useState("");
//   const [chart, setChart] = useState(DEFAULT_CHART);
//   const [loading, setLoading] = useState(false);

//   async function handleGenerate() {
//     if(!prompt) return;
//     setLoading(true);

//     try{
//       const res = await fetch("/api/generate-diagram", {
//         method:"POST",
//         body: JSON.stringify({prompt}),
//         headers: {
//           "Content-Type": "application/json"
//         }
//       });

//       const data = await res.json();

//       if(data.chart) {
//         setChart(data.chart);
//       }
//     } catch (error) {
//       alert("Error generating diagram");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//   <div className="min-h-screen bg-[#0f172a] text-white p-6 md:p-12 flex flex-col items-center">
//     <h1 className="text-4xl font-bold mb-8">AI System Architect</h1>

//     <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8">
//       <div className="bg-[#1e293b] p-6 rounded-2xl border border-slate-700">
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="e.g. Design a Netflix clone with CDN, Microservices, and Kafka."
//           className="w-full h-48 bg-[#0f172a] border border-slate-600 rounded-xl p-4 text-white resize-none"
//         />
//         <button
//           onClick={handleGenerate}
//           disabled={loading || !prompt}
//           className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl disabled:opacity-50"
//         >
//           {loading ? "Generating..." : "Generate Diagram"}
//         </button>
//       </div>

//       <div className="bg-[#1e293b] rounded-2xl border border-slate-700 p-6 flex items-center justify-center min-h-[400px]">
//         <Mermaid chart={chart} />
//       </div>
//     </div>
//   </div>
// );


// } 






// "use client";
// import { useState } from "react";
// import Mermaid from "@/components/Mermaid";

// export default function ArchitectureGenerator() {
//   const [prompt, setPrompt] = useState("");
//   const [data, setData] = useState({ chart: "", explanation: "" });
//   const [loading, setLoading] = useState(false);

//   async function handleGenerate() {
//     if (!prompt) return;
//     setLoading(true);
//     try {
//       const res = await fetch("/api/generate-diagram", {
//         method: "POST",
//         body: JSON.stringify({ prompt }),
//       });
//       const result = await res.json();
//       setData(result);
//     } catch (error) {
//       alert("Error");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-white p-6 flex flex-col items-center">
//       <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
//         <div className="bg-[#1e293b] rounded-2xl border border-slate-700 p-4 min-h-[500px]">
//           <h2 className="text-xl font-bold mb-4 text-cyan-400">Architecture Diagram</h2>
//           <Mermaid chart={data.chart} />
//         </div>

//         <div className="bg-[#1e293b] rounded-2xl border border-slate-700 p-8 min-h-[500px]">
//           <h2 className="text-xl font-bold mb-4 text-purple-400">System Design Document</h2>
//           {data.explanation ? (
//             <div className="prose prose-invert text-slate-300 whitespace-pre-wrap leading-relaxed">
//               {data.explanation}
//             </div>
//           ) : (
//             <p className="text-slate-500 italic">
//               Generate a diagram to see the architectural decisions and trade-offs...
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";
// import { useState } from "react";
// import Mermaid from "@/components/Mermaid";

// export default function ArchitectureGenerator() {
//   const [prompt, setPrompt] = useState("");
//   const [data, setData] = useState({ chart: "", explanation: "" });
//   const [loading, setLoading] = useState(false);

//   async function handleGenerate() {
//     if (!prompt) return;
//     setLoading(true);
//     try {
//       const res = await fetch("/api/generate-diagram", {
//         method: "POST",
//         body: JSON.stringify({ prompt }),
//       });
//       const result = await res.json();
//       setData(result);
//     } catch (error) {
//       alert("Error");
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <div className="min-h-screen bg-[#0f172a] text-white p-6 flex flex-col items-center">
//       <h1 className="text-4xl font-bold mb-8">AI System Architect</h1>

//       <div className="w-full max-w-4xl bg-[#1e293b] p-6 rounded-2xl border border-slate-700">
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="e.g. Design a Netflix clone with CDN, Microservices, and Kafka."
//           className="w-full h-40 bg-[#0f172a] border border-slate-600 rounded-xl p-4 text-white resize-none"
//         />
//         <button
//           onClick={handleGenerate}
//           disabled={loading || !prompt}
//           className="w-full mt-4 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl disabled:opacity-50"
//         >
//           {loading ? "Generating..." : "Generate Architecture"}
//         </button>
//       </div>

//       <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
//         <div className="bg-[#1e293b] rounded-2xl border border-slate-700 p-4 min-h-[500px]">
//           <h2 className="text-xl font-bold mb-4 text-cyan-400">Architecture Diagram</h2>
//           <Mermaid chart={data.chart} />
//         </div>

//         <div className="bg-[#1e293b] rounded-2xl border border-slate-700 p-8 min-h-[500px]">
//           <h2 className="text-xl font-bold mb-4 text-purple-400">System Design Document</h2>
//           {data.explanation ? (
//             <div className="prose prose-invert text-slate-300 whitespace-pre-wrap leading-relaxed">
//               {data.explanation}
//             </div>
//           ) : (
//             <p className="text-slate-500 italic">
//               Generate a diagram to see the architectural decisions and trade-offs...
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }















"use client";
import { useState } from "react";
import DiagramSection from "@/components/DiagramSection";
import ChatPanel from "@/components/ChatPanel";
import ExplanationModal from "@/components/ExplanationModal";

export default function ArchitectureGenerator() {
  const [data, setData] = useState({ chart: "", explanation: "" });
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="h-screen w-full flex bg-[#0f172a] text-white overflow-hidden">
      <DiagramSection
        chart={data.chart}
        explanation={data.explanation}
        onShowModal={() => setShowModal(true)}
      />

      <ChatPanel onGenerated={setData} />

      {showModal && (
        <ExplanationModal
          explanation={data.explanation}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
