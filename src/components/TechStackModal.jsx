"use client";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function TechStackModal({ techStacks, onClose }) {
  if (!techStacks) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center p-6"
      style={{
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(10px)",
      }}
    >
      <div
        className="max-w-4xl w-full rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #0c1220 0%, #050811 100%)",
          border: "1px solid rgba(80,120,255,0.25)",
          boxShadow: "0 0 40px rgba(80,120,255,0.25), inset 0 0 20px rgba(255,255,255,0.05)",
        }}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10 bg-black/30">
          <h2 className="text-2xl font-semibold text-blue-300 tracking-wide">
            Technology Stack Overview
          </h2>

          <button
            onClick={onClose}
            className="text-blue-200 text-xl px-3 py-1 rounded-lg hover:bg-white/10 transition"
          >
            ✕
          </button>
        </div>

        <div
          className="p-6 overflow-y-auto"
          style={{ maxHeight: "75vh" }}
        >
          {Object.entries(techStacks).map(([category, data], idx) => (
            <div key={idx} className="mb-8">
              <h3 className="text-xl text-blue-200 font-semibold mb-3 capitalize">
                {category.replace(/_/g, " ")}
              </h3>

              <div className="space-y-2">
                <p className="text-blue-100 font-medium">Recommended:</p>
                <div className="flex flex-wrap gap-2">
                  {data.recommended.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-600/30 text-blue-200 border border-blue-500/40 rounded-lg text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <p className="text-blue-100 font-medium mt-3">Alternatives:</p>
                <div className="flex flex-wrap gap-2">
                  {data.alternatives.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-white/10 text-slate-200 border border-white/20 rounded-lg text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {data.reason && (
                <div className="mt-4 text-slate-300 text-sm">
                  <ReactMarkdown remarkPlugins={[gfm]}>
                    {data.reason}
                  </ReactMarkdown>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
