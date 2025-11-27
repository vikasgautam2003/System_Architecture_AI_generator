// "use client";

// import { useState } from "react";
// import ReactMarkdown from "react-markdown";
// import gfm from "remark-gfm";
// import DetailModal from "./DetailModal";

// export default function TechChat() {
//   const [messages, setMessages] = useState([]);
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [modalContent, setModalContent] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   async function sendTech() {
//     if (!prompt.trim()) return;

//     const userMsg = { role: "user", content: prompt };
//     setMessages((m) => [...m, userMsg]);
//     setPrompt("");
//     setLoading(true);

//     const res = await fetch("/api/chat-groq", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ messages: [...messages, userMsg] }),
//     });

//     const data = await res.json();

//     const assistantMsg = {
//       role: "assistant",
//       content: data.answer ?? "No response.",
//     };

//     setMessages((m) => [...m, assistantMsg]);
//     setLoading(false);
//   }

//   return (
//     <>
//       <div
//         className="flex-1 overflow-y-auto px-6 py-6 space-y-6"
//         style={{
//           background:
//             "radial-gradient(circle at top, #000 0%, #03110f 40%, #000 100%)",
//         }}
//       >
//         {messages.map((m, i) => (
//           <div key={i} className="space-y-2">
//             <div
//               className={`px-5 py-4 rounded-2xl max-w-[78%] text-[15px] leading-relaxed tracking-wide ${
//                 m.role === "user"
//                   ? "ml-auto bg-[#00ff9d] text-black rounded-br-2xl shadow-[0_0_20px_rgba(0,255,180,0.35)]"
//                   : "bg-[#0a1311] text-green-300 border border-green-600/30 rounded-bl-2xl shadow-[0_0_20px_rgba(0,255,180,0.1)]"
//               }`}
//               style={{
//                 fontFamily:
//                   m.role === "assistant" ? "Inter, sans-serif" : "monospace",
//               }}
//             >
//               {m.role === "assistant" ? (
//                 <ReactMarkdown remarkPlugins={[gfm]}>
//                   {m.content}
//                 </ReactMarkdown>
//               ) : (
//                 m.content
//               )}
//             </div>

//             {m.role === "assistant" && (
//               <button
//                 onClick={() => {
//                   setModalContent(m.content);
//                   setShowModal(true);
//                 }}
//                 className="ml-2 text-xs text-green-300 underline underline-offset-4 hover:text-green-200"
//               >
//                 View in detail →
//               </button>
//             )}
//           </div>
//         ))}

//         {loading && (
//           <div className="px-5 py-4 rounded-2xl max-w-[70%] bg-[#0a1311] text-green-300 border border-green-600/30 shadow-[0_0_20px_rgba(0,255,180,0.2)] font-mono">
//             typing…
//           </div>
//         )}
//       </div>

//       <div className="p-5 bg-black border-t border-green-600/20 flex items-center gap-4">
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Ask a tech question…"
//           className="flex-1 bg-black text-green-300 p-4 rounded-2xl resize-none h-20 text-[15px] border border-green-500/30 font-mono shadow-inner"
//         />

//         <button
//           onClick={sendTech}
//           disabled={loading || !prompt.trim()}
//           className="bg-[#00ff9d] hover:bg-[#00e88c] px-6 py-4 rounded-2xl text-black text-lg font-semibold disabled:opacity-40 shadow-[0_0_20px_rgba(0,255,180,0.4)]"
//         >
//           ➤
//         </button>
//       </div>

//       {showModal && (
//         <DetailModal content={modalContent} onClose={() => setShowModal(false)} />
//       )}
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
        className="flex-1 overflow-y-auto px-5 py-5 space-y-4"
        style={{
          background:
            "radial-gradient(circle at top, #000000 0%, #020b0a 40%, #000 100%)",
        }}
      >
        {messages.map((m, i) => (
          <div key={i} className="space-y-1">
            <div
              className={`px-4 py-3 rounded-xl max-w-[85%] text-sm font-mono tracking-wide ${
                m.role === "user"
                  ? "ml-auto bg-[#00ff9d] text-black rounded-br-none shadow-[0_0_20px_rgba(0,255,180,0.35)]"
                  : "bg-black border border-green-500/40 text-green-300 rounded-bl-none shadow-[0_0_15px_rgba(0,255,180,0.15)]"
              }`}
            >
              {m.content}
            </div>

            {m.role === "assistant" && (
              <button
                onClick={() => setOpen(m.content)}
                className="text-green-300 text-xs underline ml-2"
              >
                View in Detail
              </button>
            )}
          </div>
        ))}

        {loading && (
          <div className="px-4 py-3 bg-black border border-green-300/30 text-green-300 font-mono rounded-xl max-w-[70%] shadow-[0_0_20px_rgba(0,255,180,0.2)]">
            processing...
          </div>
        )}
      </div>

      <div className="p-4 bg-black border-t border-green-500/20 flex items-center gap-3">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask about Kafka, Redis, load balancers..."
          className="flex-1 bg-black text-green-300 p-4 rounded-xl resize-none h-20 text-sm border border-green-500/30 font-mono shadow-inner"
        />

        <button
          disabled={!prompt.trim() || loading}
          onClick={sendMessage}
          className="bg-[#00ff9d] hover:bg-[#00e88f] px-5 py-4 rounded-xl text-black font-semibold disabled:opacity-40 text-lg"
        >
          ➤
        </button>
      </div>

      {open && <DetailModal content={open} onClose={() => setOpen(null)} />}
    </>
  );
}
