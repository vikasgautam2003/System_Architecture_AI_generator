"use client";

import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";

mermaid.initialize({
  startOnLoad: false,
  theme: "dark",
  securityLevel: "loose",
  fontFamily: "monospace",
});

function sanitizeMermaid(text) {
  return text
    .split("\n")
    .map((line) => {
      const trimmed = line.trim();

      if (/^(PS|Cl|Re|No|Un|Er|Di)\b/i.test(trimmed)) return "";

      return line.replace(/\s+[A-Za-z]{1,3}$/, "");
    })
    .join("\n")
    .trim();
}

export default function Mermaid({ chart }) {
  const ref = useRef(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (!chart || !ref.current) return;

    const clean = sanitizeMermaid(chart);

    async function render() {
      setStatus("loading");
      ref.current.innerHTML = "";

      try {
        mermaid.parse(clean);

        const result = await Promise.race([
          mermaid.render(`m-${Date.now()}`, clean),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Mermaid timeout")), 6000)
          ),
        ]);

        ref.current.innerHTML = result.svg;
        setStatus("done");
      } catch (err) {
        ref.current.innerHTML = `
          <div class="text-red-400 p-4 max-w-lg">
            <b>Diagram Error:</b><br>
            <pre class="mt-2 bg-black/40 p-3 rounded">${err.message}</pre>
          </div>
        `;
        setStatus("error");
      }
    }

    render();
  }, [chart]);

  return (
    <div
      ref={ref}
      className="min-h-[350px] w-full flex justify-center items-center overflow-auto transition-opacity duration-300"
    />
  );
}
