"use client";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function DetailModal({ content, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex justify-center items-center p-6"
      style={{
        background: "rgba(0, 0, 0, 0.75)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div
        className="w-full max-w-3xl rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,255,180,0.15)]"
        style={{
          background: "linear-gradient(150deg, #071010 0%, #000000 100%)",
          border: "1px solid rgba(0,255,150,0.2)",
          boxShadow:
            "0 0 30px rgba(0,255,150,0.22), inset 0 0 25px rgba(0,255,150,0.06)",
        }}
      >
        <div
          className="flex justify-between items-center px-6 py-5 border-b border-green-500/20"
          style={{
            background: "rgba(0, 0, 0, 0.4)",
            backdropFilter: "blur(8px)",
          }}
        >
          <h2 className="text-2xl font-semibold text-green-300 tracking-wide">
            Detailed Explanation
          </h2>
          <button
            onClick={onClose}
            className="text-green-300 text-xl px-3 py-1 rounded-xl hover:bg-green-300/10 transition-all"
          >
            ✕
          </button>
        </div>

        <div className="p-7 max-h-[70vh] overflow-y-auto text-green-200 text-[16px] leading-relaxed tracking-wide space-y-6">
          <div className="max-w-none text-green-200">
            <ReactMarkdown
              remarkPlugins={[gfm]}
              components={{
                pre: ({ children, ...props }) => (
                  <pre
                    {...props}
                    className="bg-black/80 rounded-xl p-5 border border-green-400/20 overflow-auto shadow-[0_0_15px_rgba(0,255,150,0.1)]"
                  >
                    {children}
                  </pre>
                ),

                code: ({ inline, children, ...props }) =>
                  inline ? (
                    <code
                      {...props}
                      className="px-1.5 py-0.5 rounded bg-green-300/10 text-green-200 font-mono text-sm"
                    >
                      {children}
                    </code>
                  ) : (
                    <code
                      {...props}
                      className="block bg-black/70 rounded-lg p-3 text-green-200 font-mono text-[14px] shadow-inner"
                    >
                      {children}
                    </code>
                  ),

                h1: ({ children, ...props }) => (
                  <h1
                    {...props}
                    className="text-3xl font-bold text-green-100 mt-4 mb-2"
                  >
                    {children}
                  </h1>
                ),

                h2: ({ children, ...props }) => (
                  <h2
                    {...props}
                    className="text-2xl font-semibold text-green-200 mt-5 mb-2"
                  >
                    {children}
                  </h2>
                ),

                p: ({ children, ...props }) => (
                  <p {...props} className="text-green-200 leading-relaxed">
                    {children}
                  </p>
                ),

                ul: ({ children, ...props }) => (
                  <ul
                    {...props}
                    className="list-disc ml-6 space-y-2 text-green-200"
                  >
                    {children}
                  </ul>
                ),

                ol: ({ children, ...props }) => (
                  <ol
                    {...props}
                    className="list-decimal ml-6 space-y-2 text-green-200"
                  >
                    {children}
                  </ol>
                ),

                blockquote: ({ children, ...props }) => (
                  <blockquote
                    {...props}
                    className="border-l-4 border-green-400/30 pl-4 italic text-green-200"
                  >
                    {children}
                  </blockquote>
                ),

                a: ({ href, children, ...props }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    {...props}
                    className="text-green-300 underline hover:text-green-200 transition"
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
