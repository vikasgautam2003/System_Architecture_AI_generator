




// "use client";

// import { useState, useRef } from "react";
// import domtoimage from "dom-to-image";
// import Mermaid from "@/components/Mermaid";

// export default function DiagramSection({
//   chart,
//   explanation,
//   techStacks,
//   onShowModal,
//   onShowTechStacks,
// }) {
//   const [fullscreen, setFullscreen] = useState(false);
//   const diagramRef = useRef(null);

//   async function downloadPNG() {
//     if (!diagramRef.current) return;
//     const dataUrl = await domtoimage.toPng(diagramRef.current, {
//       quality: 1,
//       bgcolor: "#0b0f1a",
//     });

//     const a = document.createElement("a");
//     a.href = dataUrl;
//     a.download = "blueprintx-diagram.png";
//     a.click();
//   }

//   return (
//     <>
//       <div
//         className={`relative ${
//           fullscreen ? "fixed inset-0 z-50 w-full h-full p-10" : "w-3/4 h-full"
//         } overflow-auto p-8 border-r border-white/10`}
//         style={{
//           background:
//             "radial-gradient(circle at center, rgba(40,60,100,0.18), rgba(10,15,30,0.95))",
//         }}
//       >
//         <div
//           ref={diagramRef}
//           className="w-full h-full flex justify-center items-center rounded-3xl p-6 backdrop-blur-xl"
//           style={{
//             background:
//               "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
//             border: "1px solid rgba(255,255,255,0.05)",
//             boxShadow: "inset 0 0 40px rgba(0,0,0,0.3)",
//           }}
//         >
//           <Mermaid chart={chart} />
//         </div>

//         <div
//           className={`${
//             fullscreen ? "absolute bottom-10 left-10" : "absolute bottom-8 left-8"
//           } flex gap-4`}
//         >
//           {explanation && (
//             <button
//               onClick={onShowModal}
//               className="
//               px-6 py-3 rounded-2xl text-white font-medium
//               bg-gradient-to-br from-purple-600 to-indigo-500
//               hover:from-purple-500 hover:to-indigo-400
//               shadow-[0_0_25px_rgba(140,70,255,0.4)]
//               transition-all duration-200
//             "
//             >
//               View Explanation
//             </button>
//           )}

//           {techStacks && (
//             <button
//               onClick={onShowTechStacks}
//               className="
//               px-6 py-3 rounded-2xl text-white font-medium 
//               bg-gradient-to-br from-blue-600 to-cyan-500
//               hover:from-blue-500 hover:to-cyan-400
//               shadow-[0_0_25px_rgba(0,180,255,0.4)]
//               transition-all duration-200
//             "
//             >
//               View Tech Stack
//             </button>
//           )}

//           <button
//             onClick={() => setFullscreen(!fullscreen)}
//             className="
//             px-6 py-3 rounded-2xl text-white font-medium 
//             bg-gradient-to-br from-gray-700 to-gray-600
//             hover:from-gray-600 hover:to-gray-500
//             shadow-[0_0_25px_rgba(255,255,255,0.15)]
//             transition-all duration-200
//           "
//           >
//             {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
//           </button>

//           <button
//             onClick={downloadPNG}
//             className="
//             px-6 py-3 rounded-2xl text-white font-medium 
//             bg-gradient-to-br from-green-600 to-emerald-500
//             hover:from-green-500 hover:to-emerald-400
//             shadow-[0_0_25px_rgba(0,255,150,0.4)]
//             transition-all duration-200
//           "
//           >
//             Download PNG
//           </button>
//         </div>
//       </div>
//     </>
//   );
// }




"use client";

import { useState, useRef } from "react";
import domtoimage from "dom-to-image";
import Mermaid from "@/components/Mermaid";

export default function DiagramSection({
  chart,
  explanation,
  techStacks,
  onShowModal,
  onShowTechStacks,
}) {
  const [fullscreen, setFullscreen] = useState(false);
  const diagramRef = useRef(null);

  async function downloadPNG() {
    if (!diagramRef.current) return;
    const dataUrl = await domtoimage.toPng(diagramRef.current, {
      quality: 1,
      bgcolor: "#0b0f1a",
    });
    const a = document.createElement("a");
    a.href = dataUrl;
    a.download = "blueprintx-diagram.png";
    a.click();
  }

  return (
    <>
      <div
        className="w-3/4 h-full relative overflow-auto p-8 border-r border-white/10"
        style={{
          background:
            "radial-gradient(circle at center, rgba(40,60,100,0.18), rgba(10,15,30,0.95))",
        }}
      >
        <div
          ref={diagramRef}
          className={`rounded-3xl p-6 backdrop-blur-xl w-full min-h-[80%] flex justify-center items-center ${
            fullscreen
              ? "fixed inset-0 z-50 w-full h-full p-12 bg-[#0a0f1d]/95 border-none rounded-none shadow-2xl"
              : ""
          }`}
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
            border: fullscreen
              ? "none"
              : "1px solid rgba(255,255,255,0.05)",
            boxShadow: fullscreen
              ? "0 0 45px rgba(0,0,0,0.6)"
              : "inset 0 0 40px rgba(0,0,0,0.3)",
          }}
        >
          <Mermaid chart={chart} />
        </div>

        <div
          className={`flex gap-4 ${
            fullscreen
              ? "fixed bottom-10 left-10 z-[60]"
              : "absolute bottom-8 left-8"
          }`}
        >
          {explanation && (
            <button
              onClick={onShowModal}
              className="
                px-6 py-3 rounded-2xl text-white font-medium
                bg-gradient-to-br from-purple-600 to-indigo-500
                hover:from-purple-500 hover:to-indigo-400
                shadow-[0_0_25px_rgba(140,70,255,0.4)]
                transition-all duration-200
              "
            >
              View Explanation
            </button>
          )}

          {techStacks && (
            <button
              onClick={onShowTechStacks}
              className="
                px-6 py-3 rounded-2xl text-white font-medium
                bg-gradient-to-br from-blue-600 to-cyan-500
                hover:from-blue-500 hover:to-cyan-400
                shadow-[0_0_25px_rgba(0,180,255,0.4)]
                transition-all duration-200
              "
            >
              View Tech Stack
            </button>
          )}

          <button
            onClick={() => setFullscreen(!fullscreen)}
            className="
              px-6 py-3 rounded-2xl text-white font-medium 
              bg-gradient-to-br from-gray-700 to-gray-600
              hover:from-gray-600 hover:to-gray-500
              shadow-[0_0_25px_rgba(255,255,255,0.15)]
              transition-all duration-200
            "
          >
            {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
          </button>

          <button
            onClick={downloadPNG}
            className="
              px-6 py-3 rounded-2xl text-white font-medium 
              bg-gradient-to-br from-green-600 to-emerald-500
              hover:from-green-500 hover:to-emerald-400
              shadow-[0_0_25px_rgba(0,255,150,0.4)]
              transition-all duration-200
            "
          >
            Download PNG
          </button>
        </div>
      </div>
    </>
  );
}
