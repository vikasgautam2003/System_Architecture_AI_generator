"use client";

import React, { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  fontFamily: "monospace",
});

export default function Mermaid({ chart }) {
  const containerRef = useRef(null);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (!chart || !containerRef.current) return;

    const cleanChart = chart.trim().replace(/\r/g, "");

    async function renderChart() {
      try {
        containerRef.current.innerHTML = "";

        const id = `m-${Math.random().toString(36).slice(2)}`;
        const { svg } = await mermaid.render(id, cleanChart);

        containerRef.current.innerHTML = svg;
        setIsRendered(true);
      } catch (err) {
        console.error("Mermaid Render Error:", err);

        containerRef.current.innerHTML =
          `<div class='text-red-400 p-4'>Invalid Mermaid Diagram</div>`;
      }
    }

    renderChart();
  }, [chart]);

  return (
    <div
      ref={containerRef}
      className={`mermaid-container flex justify-center items-center min-h-[300px] w-full overflow-x-auto transition-opacity duration-500 ${
        isRendered ? "opacity-100" : "opacity-0"
      }`}
    ></div>
  );
}
