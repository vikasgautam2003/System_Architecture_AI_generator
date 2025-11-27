// "use client";

// import ReactMarkdown from "react-markdown";
// import gfm from "remark-gfm";

// export default function DetailModal({ content, onClose }) {
//   return (
//     <div
//       className="fixed inset-0 z-50 flex justify-center items-center p-6"
//       style={{
//         background: "rgba(0, 0, 0, 0.75)",
//         backdropFilter: "blur(14px)",
//       }}
//     >
//       <div
//         className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,180,0.15)]"
//         style={{
//           background: "linear-gradient(150deg, #071010 0%, #000000 100%)",
//           border: "1px solid rgba(0,255,150,0.2)",
//           boxShadow:
//             "0 0 30px rgba(0,255,150,0.22), inset 0 0 25px rgba(0,255,150,0.06)",
//         }}
//       >
//         <div
//           className="flex justify-between items-center px-6 py-5 border-b border-green-500/20"
//           style={{
//             background: "rgba(0, 0, 0, 0.4)",
//             backdropFilter: "blur(8px)",
//           }}
//         >
//           <h2 className="text-2xl font-semibold text-green-300 tracking-wide">
//             Detailed Explanation
//           </h2>
//           <button
//             onClick={onClose}
//             className="text-green-300 text-xl px-3 py-1 rounded-xl hover:bg-green-300/10 transition-all"
//           >
//             ✕
//           </button>
//         </div>

//         <div className="p-7 max-h-[70vh] overflow-y-auto text-green-200 text-[16px] leading-relaxed tracking-wide space-y-6">
//           <div className="max-w-none text-green-200">
//             <ReactMarkdown
//               remarkPlugins={[gfm]}
//               components={{
//                 pre: ({ children, ...props }) => (
//                   <pre
//                     {...props}
//                     className="bg-black/80 rounded-xl p-5 border border-green-400/20 overflow-auto shadow-[0_0_15px_rgba(0,255,150,0.1)]"
//                   >
//                     {children}
//                   </pre>
//                 ),

//                 code: ({ inline, children, ...props }) =>
//                   inline ? (
//                     <code
//                       {...props}
//                       className="px-1.5 py-0.5 rounded bg-green-300/10 text-green-200 font-mono text-sm"
//                     >
//                       {children}
//                     </code>
//                   ) : (
//                     <code
//                       {...props}
//                       className="block bg-black/70 rounded-lg p-3 text-green-200 font-mono text-[14px] shadow-inner"
//                     >
//                       {children}
//                     </code>
//                   ),

//                 h1: ({ children, ...props }) => (
//                   <h1
//                     {...props}
//                     className="text-3xl font-bold text-green-100 mt-4 mb-2"
//                   >
//                     {children}
//                   </h1>
//                 ),

//                 h2: ({ children, ...props }) => (
//                   <h2
//                     {...props}
//                     className="text-2xl font-semibold text-green-200 mt-5 mb-2"
//                   >
//                     {children}
//                   </h2>
//                 ),

//                 p: ({ children, ...props }) => (
//                   <p {...props} className="text-green-200 leading-relaxed">
//                     {children}
//                   </p>
//                 ),

//                 ul: ({ children, ...props }) => (
//                   <ul
//                     {...props}
//                     className="list-disc ml-6 space-y-2 text-green-200"
//                   >
//                     {children}
//                   </ul>
//                 ),

//                 ol: ({ children, ...props }) => (
//                   <ol
//                     {...props}
//                     className="list-decimal ml-6 space-y-2 text-green-200"
//                   >
//                     {children}
//                   </ol>
//                 ),

//                 blockquote: ({ children, ...props }) => (
//                   <blockquote
//                     {...props}
//                     className="border-l-4 border-green-400/30 pl-4 italic text-green-200"
//                   >
//                     {children}
//                   </blockquote>
//                 ),

//                 a: ({ href, children, ...props }) => (
//                   <a
//                     href={href}
//                     target="_blank"
//                     rel="noreferrer"
//                     {...props}
//                     className="text-green-300 underline hover:text-green-200 transition"
//                   >
//                     {children}
//                   </a>
//                 ),
//               }}
//             >
//               {content}
//             </ReactMarkdown>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





"use client";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function DetailModal({ content, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center p-8"
      style={{
        background: "rgba(0, 0, 0, 0.78)",
        backdropFilter: "blur(18px)",
      }}
    >
      <div
        className="w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl"
        style={{
          background: "linear-gradient(160deg, #031312 0%, #000000 70%)",
          border: "1px solid rgba(0,255,160,0.35)",
          boxShadow:
            "0 0 60px rgba(0,255,150,0.22), inset 0 0 35px rgba(0,255,140,0.10)",
        }}
      >
        {/* HEADER */}
        <div
          className="flex justify-between items-center px-8 py-6 border-b border-green-500/20"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 100%)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h2 className="text-3xl font-bold text-green-300 tracking-wide drop-shadow-[0_0_12px_rgba(0,255,150,0.35)]">
            Full Technical Breakdown
          </h2>
          <button
            onClick={onClose}
            className="text-green-300 text-2xl px-4 py-1 rounded-xl hover:bg-green-300/15 transition-all"
          >
            ✕
          </button>
        </div>

        {/* CONTENT SCROLL AREA */}
        <div className="px-9 py-8 max-h-[75vh] overflow-y-auto text-green-200 text-[17px] leading-[1.75] tracking-wide space-y-7">
          <div className="max-w-none text-green-200">

            <ReactMarkdown
              remarkPlugins={[gfm]}
              components={{
                h1: ({ children, ...props }) => (
                  <h1
                    {...props}
                    className="text-4xl font-extrabold text-green-100 mt-7 mb-4 tracking-wide drop-shadow-[0_0_14px_rgba(0,255,160,0.25)]"
                  >
                    {children}
                  </h1>
                ),

                h2: ({ children, ...props }) => (
                  <h2
                    {...props}
                    className="text-3xl font-bold text-green-200 mt-8 mb-3 tracking-wide"
                  >
                    {children}
                  </h2>
                ),

                h3: ({ children, ...props }) => (
                  <h3
                    {...props}
                    className="text-2xl font-semibold text-green-300 mt-6 mb-3"
                  >
                    {children}
                  </h3>
                ),

                p: ({ children, ...props }) => (
                  <p
                    {...props}
                    className="text-green-200 leading-[1.8] tracking-wide mb-4"
                  >
                    {children}
                  </p>
                ),

                ul: ({ children, ...props }) => (
                  <ul
                    {...props}
                    className="list-disc ml-8 space-y-2 text-green-200"
                  >
                    {children}
                  </ul>
                ),

                ol: ({ children, ...props }) => (
                  <ol
                    {...props}
                    className="list-decimal ml-8 space-y-2 text-green-200"
                  >
                    {children}
                  </ol>
                ),

                blockquote: ({ children, ...props }) => (
                  <blockquote
                    {...props}
                    className="border-l-4 border-green-400/40 pl-5 italic text-green-200 bg-green-300/5 py-3 rounded-lg"
                  >
                    {children}
                  </blockquote>
                ),

                pre: ({ children, ...props }) => (
                  <pre
                    {...props}
                    className="bg-black/85 rounded-2xl p-6 border border-green-400/20 overflow-auto shadow-[0_0_25px_rgba(0,255,160,0.15)] my-4"
                  >
                    {children}
                  </pre>
                ),

                code: ({ inline, children, ...props }) =>
                  inline ? (
                    <code
                      {...props}
                      className="px-2 py-0.5 rounded bg-green-300/15 text-green-200 font-mono text-[15px]"
                    >
                      {children}
                    </code>
                  ) : (
                    <code
                      {...props}
                      className="block bg-black/70 rounded-xl p-4 text-green-200 font-mono text-[15px] shadow-inner my-2"
                    >
                      {children}
                    </code>
                  ),

                a: ({ href, children, ...props }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    {...props}
                    className="text-green-300 underline hover:text-green-100 transition-all"
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {content}
            </ReactMarkdown>

          </div>
        </div>
      </div>
    </div>
  );
}
