// import ReactMarkdown from "react-markdown";
// import gfm from "remark-gfm";

// export default function ExplanationModal({ explanation, onClose }) {
//   return (
//     <div
//       className="fixed inset-0 flex justify-center items-center z-50 p-6"
//       style={{
//         background: "rgba(0,0,0,0.65)",
//         backdropFilter: "blur(12px)",
//       }}
//     >
//       <div
//         className="max-w-3xl w-full rounded-2xl overflow-hidden"
//         style={{
//           background: "linear-gradient(145deg, #0e1525 0%, #0a0f1c 100%)",
//           border: "1px solid rgba(255,255,255,0.08)",
//           boxShadow: "0 0 40px rgba(0, 80, 255, 0.2), inset 0 0 20px rgba(255,255,255,0.03)",
//         }}
//       >
//         <div
//           className="flex justify-between items-center px-6 py-5 border-b border-white/10"
//           style={{
//             background: "rgba(14,21,37,0.65)",
//             backdropFilter: "blur(6px)",
//           }}
//         >
//           <h2 className="text-2xl font-semibold text-[#dce3ff] tracking-wide">
//             System Design Document
//           </h2>

//           <button
//             onClick={onClose}
//             className="text-[#e6edff] text-xl px-3 py-1 rounded-lg hover:bg-white/10 transition"
//           >
//             ✕
//           </button>
//         </div>

//         <div
//           className="p-6 overflow-y-auto"
//           style={{
//             maxHeight: "70vh",
//             color: "#e4e9ff",
//             fontSize: "15px",
//             lineHeight: "1.7",
//           }}
//         >
//           <div
//             className="markdown-body"
//             style={{
//               scrollbarWidth: "thin",
//               scrollbarColor: "#233b6d #0e1525",
//             }}
//           >
//             <ReactMarkdown remarkPlugins={[gfm]}>
//               {explanation}
//             </ReactMarkdown>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function ExplanationModal({ explanation, onClose }) {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 p-8"
      style={{
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div
        className="max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(160deg, #0d1424 0%, #0b1120 100%)",
          border: "1px solid rgba(255,255,255,0.10)",
          boxShadow:
            "0 0 60px rgba(0, 120, 255, 0.15), inset 0 0 20px rgba(255,255,255,0.03)",
        }}
      >
        <div
          className="flex justify-between items-center px-8 py-6 border-b"
          style={{
            borderColor: "rgba(255,255,255,0.08)",
            background: "rgba(18,26,44,0.55)",
            backdropFilter: "blur(8px)",
          }}
        >
          <h2 className="text-3xl font-semibold text-[#e7edff] tracking-wide">
            System Design Document
          </h2>

          <button
            onClick={onClose}
            className="text-[#f2f4ff] text-2xl px-3 py-1 rounded-lg hover:bg-white/10 transition"
          >
            ✕
          </button>
        </div>

        <div
          className="px-8 py-6 overflow-y-auto"
          style={{
            maxHeight: "72vh",
            color: "#dbe3ff",
            fontSize: "16px",
            lineHeight: "1.85",
            letterSpacing: "0.25px",
          }}
        >
          <div
            className="prose prose-invert"
            style={{
              color: "#e2e8ff",
              scrollbarWidth: "thin",
              scrollbarColor: "#304a80 #0b1120",
            }}
          >
            <ReactMarkdown
              remarkPlugins={[gfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-[#7aa2ff] mt-10 mb-4 tracking-wide">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-semibold text-[#89b4ff] mt-8 mb-3 tracking-wide">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-[#a7c4ff] mt-6 mb-2 tracking-wide">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-[15.5px] mb-4 text-[#dce4ff] leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-6 space-y-2 text-[#dbe3ff]">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="text-[15px]">{children}</li>
                ),
                strong: ({ children }) => (
                  <strong className="text-white">{children}</strong>
                ),
                code: ({ children }) => (
                  <code className="bg-[#111b33] px-2 py-1 rounded text-[#9ecbff] text-sm">
                    {children}
                  </code>
                ),
                pre: ({ children }) => (
                  <pre className="bg-[#0b1329] p-4 rounded-xl mb-4 overflow-auto text-[#9ecbff] shadow-inner shadow-black/40">
                    {children}
                  </pre>
                ),
                a: ({ children, href }) => (
                  <a
                    href={href}
                    className="text-[#6aa8ff] hover:text-[#94c5ff] underline"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {explanation}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
