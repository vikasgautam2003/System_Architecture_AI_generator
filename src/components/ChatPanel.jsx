// "use client";

// export default function ChatPanel({
//   prompt,
//   setPrompt,
//   loading,
//   handleGenerate,
//   messages = [],
// }) {
//   return (
//     <div
//       className="w-1/4 h-full flex flex-col border-l border-slate-800"
//       style={{
//         background: "radial-gradient(circle at top, #0e1b3e 0%, #050914 70%)",
//       }}
//     >
//       <div className="p-5 bg-[#0c1224]/80 backdrop-blur-md border-b border-white/10">
//         <h2 className="text-xl font-semibold text-white tracking-wide">
//           AI Architect
//         </h2>
//       </div>

//       <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
//         {messages.map((m, i) => (
//           <div
//             key={i}
//             className={`px-4 py-3 rounded-2xl max-w-[75%] text-[15px] tracking-wide ${
//               m.role === "user"
//                 ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white ml-auto rounded-br-sm shadow-lg shadow-blue-900/30"
//                 : "bg-[#10172e] text-[#dce3ff] rounded-bl-sm border border-white/5 shadow-md shadow-black/40"
//             }`}
//           >
//             {m.content}
//           </div>
//         ))}
//       </div>

//       <div className="p-5 bg-[#0c1224]/80 backdrop-blur-lg border-t border-white/10 flex items-center gap-3">
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Type a message..."
//           className="flex-1 bg-[#0f1a33] text-[#e6edff] p-4 rounded-2xl resize-none h-20 text-sm tracking-wide border border-white/10 outline-none focus:border-blue-500 transition"
//         />

//         <button
//           onClick={handleGenerate}
//           disabled={loading || !prompt}
//           className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-5 py-4 rounded-2xl text-white font-semibold disabled:opacity-50 shadow-lg shadow-blue-900/40"
//         >
//           {loading ? "..." : "➤"}
//         </button>
//       </div>
//     </div>
//   );
// }














"use client";

import { useState } from "react";
import ArchitectChat from "./ArchitectChat";
import TechChat from "./TechChat";

export default function ChatPanel({ onGenerated }) {
  const [active, setActive] = useState("architect");

  return (
    <div className="w-1/4 h-full flex flex-col border-l border-slate-800 bg-[#0c1317]">
      <div
  className="
    p-4 flex items-center justify-between
    backdrop-blur-xl
    border-b border-white/10
    bg-[rgba(15,20,33,0.6)]
    shadow-[0_8px_20px_rgba(0,0,0,0.4)]
  "
>
  <h2
    className="
      text-lg font-semibold tracking-wide
      bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent
    "
  >
    {active === "architect" ? "AI Architect" : "Tech Helper"}
  </h2>

  <div
    className="
      flex items-center rounded-2xl overflow-hidden
      border border-white/20
      bg-[rgba(20,28,46,0.6)] backdrop-blur-lg
      shadow-inner
    "
  >
    <button
      onClick={() => setActive("architect")}
      className={`
        px-4 py-1.5 text-sm font-medium transition-all
        ${
          active === "architect"
            ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-[0_0_12px_rgba(0,120,255,0.6)]"
            : "text-gray-300 hover:text-white"
        }
      `}
    >
      Architect
    </button>

    <button
      onClick={() => setActive("tech")}
      className={`
        px-4 py-1.5 text-sm font-medium transition-all
        ${
          active === "tech"
            ? "bg-gradient-to-r from-green-600 to-green-500 text-black shadow-[0_0_12px_rgba(0,255,120,0.4)]"
            : "text-gray-300 hover:text-white"
        }
      `}
    >
      Tech
    </button>
  </div>
</div>


      {active === "architect" ? (
        <ArchitectChat onGenerated={onGenerated} />
      ) : (
        <TechChat />
      )}
    </div>
  );
}
