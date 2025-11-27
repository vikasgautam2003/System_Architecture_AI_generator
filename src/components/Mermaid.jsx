// "use client";

// import React, { useEffect, useRef, useState } from "react";
// import mermaid from "mermaid";

// mermaid.initialize({
//   startOnLoad: false,
//   theme: "dark",
//   securityLevel: "loose",
//   fontFamily: "monospace",
// });

// function sanitizeChart(raw) {
//   if (!raw) return "";

//   return raw
//     .replace(/\r/g, "")               
//     .split("\n")
//     .map(line => line.trimEnd())
//     .filter(line => line.trim() !== "")
//     .filter(line => !/^[0-9]+\./.test(line))          // remove "1. something"
//     .filter(line => !/^[0-9]+$/.test(line))           // remove lines containing: "1"
//     .filter(line => !/^[-]+$/.test(line))             // remove ASCII separators -----
//     .filter(line => !/-->$/.test(line))               // remove dangling arrows
//     .join("\n");
// }

// export default function Mermaid({ chart }) {
//   const containerRef = useRef(null);
//   const [isRendered, setIsRendered] = useState(false);

//   useEffect(() => {
//     if (!chart || !containerRef.current) return;

//     const cleanChart = sanitizeChart(chart);

//     async function renderChart() {
//       try {
//         containerRef.current.innerHTML = "";
//         const id = `m-${Math.random().toString(36).slice(2)}`;

//         const { svg } = await mermaid.render(id, cleanChart);

//         containerRef.current.innerHTML = svg;
//         setIsRendered(true);
//       } catch (err) {
//         console.error("Mermaid Render Error:", err);
//         containerRef.current.innerHTML = `
//           <div class='text-red-400 p-4 font-mono'>
//             Diagram Error<br/>
//             Could not render Mermaid chart.<br/><br/>
//             <span class='text-red-300 text-sm'>Check syntax or try again.</span>
//           </div>`;
//       }
//     }

//     renderChart();
//   }, [chart]);

//   return (
//     <div
//       ref={containerRef}
//       className={`mermaid-container flex justify-center items-center min-h-[300px] w-full overflow-x-auto transition-opacity duration-500 ${
//         isRendered ? "opacity-100" : "opacity-0"
//       }`}
//     ></div>
//   );
// }



"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  flowchart: { htmlLabels: false },
});

export default function Mermaid({ chart }) {
  const ref = useRef(null);
  const [isRendered, setIsRendered] = useState(false);

  // -------------------------
  // LIGHT DIAGRAM CLEANER (SAFE)
  // -------------------------
  function cleanDiagram(diagram) {
    return diagram
      .replace(/\r/g, "")
      .replace(/(\w+)\s+\[/g, (m) => m.replace(/\s+/g, "")) // Fix node IDs with spaces
      .replace(/\(([^)]+)\)/g, (m, inner) => "(" + inner.replace(/[^\w\s.-]/g, "") + ")"); // remove invalid chars inside ()
  }

  async function renderDiagram(diagram) {
    ref.current.innerHTML = "";
    const id = "m-" + Math.random().toString(36).slice(2);
    const { svg } = await mermaid.render(id, diagram);
    ref.current.innerHTML = svg;
    setIsRendered(true);
  }

  useEffect(() => {
    if (!chart || !ref.current) return;

    const raw = chart.trim();
    const cleaned = cleanDiagram(raw);

    async function tryRender() {
      try {
        mermaid.parse(raw);
        await renderDiagram(raw);
        return;
      } catch (err1) {}

      try {
        mermaid.parse(cleaned);
        await renderDiagram(cleaned);
        return;
      } catch (err2) {}

      ref.current.innerHTML = `
        <div class="text-red-400 bg-red-900/30 p-4 rounded-lg border border-red-700/40">
          Mermaid could not render this diagram.
        </div>
      `;
    }

    tryRender();
  }, [chart]);

  return (
    <div
      ref={ref}
      className={`min-h-[300px] w-full overflow-x-auto transition-opacity duration-500 ${
        isRendered ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}
