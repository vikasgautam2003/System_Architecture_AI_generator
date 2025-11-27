// "use client";

// import { useState } from "react";

// export default function ArchitectChat({ onGenerated }) {
//   const [messages, setMessages] = useState([]);
//   const [prompt, setPrompt] = useState("");
//   const [loading, setLoading] = useState(false);

//   async function sendMessage() {
//     if (!prompt.trim()) return;

//     const userMsg = { role: "user", content: prompt };
//     setMessages((m) => [...m, userMsg]);
//     setPrompt("");
//     setLoading(true);

//     const res = await fetch("/api/generate-diagram", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ prompt: userMsg.content }),
//     });

//     const data = await res.json();
//     onGenerated?.(data);

//     setMessages((m) => [
//       ...m,
//       {
//         role: "assistant",
//         content:
//           "Architecture updated. The diagram and explanation have been refreshed.",
//       },
//     ]);

//     setLoading(false);
//   }

//   return (
//     <>
//       <div
//         className="flex-1 overflow-y-auto px-6 py-6 space-y-5"
//         style={{
//           background:
//             "radial-gradient(circle at top, #0b1222 0%, #050914 100%)",
//         }}
//       >
//         {messages.map((m, i) => (
//           <div
//             key={i}
//             className={`px-5 py-4 rounded-2xl max-w-[78%] text-[15px] leading-relaxed tracking-wide ${
//               m.role === "user"
//                 ? "ml-auto bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_4px_20px_rgba(0,0,40,0.4)] rounded-br-2xl"
//                 : "bg-white/10 backdrop-blur-xl border border-white/15 text-slate-200 rounded-bl-2xl shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
//             }`}
//             style={{
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             {m.content}
//           </div>
//         ))}

//         {loading && (
//           <div
//             className="px-5 py-4 bg-white/10 text-slate-300 rounded-2xl max-w-[70%] border border-white/10 backdrop-blur-xl"
//             style={{
//               fontFamily: "Inter, sans-serif",
//             }}
//           >
//             Thinking…
//           </div>
//         )}
//       </div>

//       <div
//         className="p-5 border-t border-white/10 flex items-center gap-4"
//         style={{
//           background:
//             "linear-gradient(180deg, #0c152a 0%, #081021 100%)",
//         }}
//       >
//         <textarea
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           placeholder="Describe a system to generate its architecture…"
//           className="flex-1 bg-[#11192f] text-white p-4 rounded-2xl resize-none h-20 text-[15px] border border-white/10 shadow-inner focus:outline-none"
//           style={{
//             fontFamily: "Inter, sans-serif",
//           }}
//         />

//         <button
//           onClick={sendMessage}
//           disabled={loading || !prompt}
//           className="bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 px-6 py-4 rounded-2xl text-white text-lg font-semibold disabled:opacity-40 shadow-[0_4px_20px_rgba(0,60,255,0.4)]"
//         >
//           ➤
//         </button>
//       </div>
//     </>
//   );
// }






"use client";

export default function ArchitectChat({
  messages,
  prompt,
  setPrompt,
  loading,
  sendMessage,
}) {
  return (
    <>
      <div
        className="flex-1 overflow-y-auto px-6 py-6 space-y-5"
        style={{
          background: "radial-gradient(circle at top, #0b1222 0%, #050914 100%)",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`px-5 py-4 rounded-2xl max-w-[78%] text-[15px] leading-relaxed tracking-wide ${
              m.role === "user"
                ? "ml-auto bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_4px_20px_rgba(0,0,40,0.4)] rounded-br-2xl"
                : "bg-white/10 backdrop-blur-xl border border-white/15 text-slate-200 rounded-bl-2xl shadow-[0_4px_20px_rgba(255,255,255,0.05)]"
            }`}
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div className="px-5 py-4 bg-white/10 text-slate-300 rounded-2xl max-w-[70%] border border-white/10 backdrop-blur-xl">
            Thinking…
          </div>
        )}
      </div>

      <div
        className="p-5 border-t border-white/10 flex items-center gap-4"
        style={{
          background: "linear-gradient(180deg, #0c152a 0%, #081021 100%)",
        }}
      >
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe a system to generate its architecture…"
          className="flex-1 bg-[#11192f] text-white p-4 rounded-2xl resize-none h-20 text-[15px] border border-white/10 shadow-inner focus:outline-none"
        />

        <button
          disabled={!prompt.trim() || loading}
          onClick={sendMessage}
          className="bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-4 rounded-2xl text-white text-lg font-semibold disabled:opacity-30"
        >
          ➤
        </button>
      </div>
    </>
  );
}
