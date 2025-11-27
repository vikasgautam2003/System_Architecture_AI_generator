







// "use client";

// import { useState } from "react";
// import DetailModal from "./DetailModal";

// export default function TechChat({
//   messages,
//   prompt,
//   setPrompt,
//   loading,
//   sendMessage,
// }) {
//   const [open, setOpen] = useState(null);

//   return (
//     <>
//       <div
//         className="flex-1 overflow-y-auto px-5 py-5 space-y-4"
//         style={{
//           background:
//             "radial-gradient(circle at top, #000000 0%, #020b0a 40%, #000 100%)",
//         }}
//       >
//         {messages.map((m, i) => (
//           <div key={i} className="space-y-1">
//             <div
//               className={`px-4 py-3 rounded-xl max-w-[85%] text-sm font-mono tracking-wide ${
//                 m.role === "user"
//                   ? "ml-auto bg-[#00ff9d] text-black rounded-br-none shadow-[0_0_20px_rgba(0,255,180,0.35)]"
//                   : "bg-black border border-green-500/40 text-green-300 rounded-bl-none shadow-[0_0_15px_rgba(0,255,180,0.15)]"
//               }`}
//             >
//               {m.content}
//             </div>

//             {m.role === "assistant" && (
//               <button
//                 onClick={() => setOpen(m.content)}
//                 className="text-green-300 text-xs underline ml-2"
//               >
//                 View in Detail
//               </button>
//             )}
//           </div>
//         ))}

//         {loading && (
//           <div className="px-4 py-3 bg-black border border-green-300/30 text-green-300 font-mono rounded-xl max-w-[70%] shadow-[0_0_20px_rgba(0,255,180,0.2)]">
//             processing...
//           </div>
//         )}
//       </div>

//       <div className="p-4 bg-black border-t border-green-500/20 flex items-center gap-3">
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Ask about Kafka, Redis, load balancers..."
//           className="flex-1 bg-black text-green-300 p-4 rounded-xl resize-none h-20 text-sm border border-green-500/30 font-mono shadow-inner"
//         />

//         <button
//           disabled={!prompt.trim() || loading}
//           onClick={sendMessage}
//           className="bg-[#00ff9d] hover:bg-[#00e88f] px-5 py-4 rounded-xl text-black font-semibold disabled:opacity-40 text-lg"
//         >
//           ➤
//         </button>
//       </div>

//       {open && <DetailModal content={open} onClose={() => setOpen(null)} />}
//     </>
//   );
// }




"use client";

import { useState } from "react";
import DetailModal from "./DetailModal";

export default function TechChat({
  messages,
  prompt,
  setPrompt,
  loading,
  sendMessage,
}) {
  const [open, setOpen] = useState(null);

  return (
    <>
      <div
        className="flex-1 overflow-y-auto px-6 py-6 space-y-5"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, #000000 0%, #020a08 45%, #000000 100%)",
        }}
      >
        {messages.map((m, i) => (
          <div key={i} className="space-y-1">
            <div
              className={`px-5 py-4 rounded-2xl max-w-[85%] text-[14px] font-mono tracking-wide transition-all duration-200
                ${
                  m.role === "user"
                    ? "ml-auto bg-[#00ff9d] text-black rounded-br-2xl shadow-[0_8px_25px_rgba(0,255,180,0.45)]"
                    : "bg-[#020b07] border border-green-500/40 text-green-300 rounded-bl-2xl shadow-[0_6px_30px_rgba(0,255,180,0.20)]"
                }
              `}
            >
              {m.content}
            </div>

            {m.role === "assistant" && (
              <button
                onClick={() => setOpen(m.content)}
                className="text-green-300 text-xs underline ml-3 hover:text-green-100 transition"
              >
                View in Detail
              </button>
            )}
          </div>
        ))}

        {loading && (
          <div className="px-5 py-4 bg-black border border-green-300/40 text-green-300 font-mono rounded-2xl max-w-[70%] shadow-[0_0_25px_rgba(0,255,180,0.2)] animate-pulse">
            processing...
          </div>
        )}
      </div>

      <div
        className="p-5 flex items-center gap-4 border-t border-green-500/20"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,10,5,0.95) 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask about Kafka, Redis, CDNs, sharding, Docker..."
          className="flex-1 bg-[#020c07] text-green-300 p-4 rounded-2xl resize-none h-20 text-[14px] border border-green-500/30 font-mono shadow-inner placeholder:text-green-400/40 focus:outline-none focus:ring-2 focus:ring-green-500/40"
        />

        <button
          disabled={!prompt.trim() || loading}
          onClick={sendMessage}
          className="bg-[#00ff9d] hover:bg-[#00e88f] px-6 py-4 rounded-2xl text-black text-lg font-semibold disabled:opacity-40 transition-all duration-200 hover:shadow-[0_0_25px_rgba(0,255,180,0.5)]"
        >
          ➤
        </button>
      </div>

      {open && <DetailModal content={open} onClose={() => setOpen(null)} />}
    </>
  );
}
