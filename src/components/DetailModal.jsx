"use client";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

export default function DetailModal({ content, onClose }) {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50 p-6"
      style={{
        background: "rgba(0,0,0,0.65)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="max-w-3xl w-full rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #091617 0%, #020808 100%)",
          border: "1px solid rgba(0,255,150,0.15)",
          boxShadow: "0 0 40px rgba(0,255,180,0.25), inset 0 0 20px rgba(0,255,150,0.05)",
        }}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-green-500/20 bg-black/40 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-green-300 tracking-wide">
            Detailed Explanation
          </h2>
          <button
            onClick={onClose}
            className="text-green-300 text-xl px-3 py-1 rounded-lg hover:bg-green-300/10 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6 overflow-y-auto max-h-[70vh] text-green-200 text-[15px] leading-relaxed tracking-wide space-y-4">
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[gfm]}
              components={{
                pre: ({ node, children, ...props }) => (
                  <pre
                    {...props}
                    className="bg-black/80 rounded-md p-4 overflow-auto border border-green-500/10"
                  >
                    {children}
                  </pre>
                ),
                code: ({ node, inline, className, children, ...props }) => {
                  if (inline) {
                    return (
                      <code
                        {...props}
                        className="bg-black/70 px-1 py-0.5 rounded text-green-200 font-mono text-sm"
                      >
                        {children}
                      </code>
                    );
                  }
                  return (
                    <code
                      {...props}
                      className="block bg-black/80 rounded-md p-2 text-green-200 font-mono text-sm overflow-auto"
                    >
                      {children}
                    </code>
                  );
                },
                a: ({ href, children, ...props }) => (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-200 underline"
                    {...props}
                  >
                    {children}
                  </a>
                ),
                h1: ({ children, ...props }) => (
                  <h1 className="text-2xl font-semibold text-green-100" {...props}>
                    {children}
                  </h1>
                ),
                h2: ({ children, ...props }) => (
                  <h2 className="text-xl font-semibold text-green-100" {...props}>
                    {children}
                  </h2>
                ),
                p: ({ children, ...props }) => (
                  <p className="text-green-200 leading-relaxed" {...props}>
                    {children}
                  </p>
                ),
                ul: ({ children, ...props }) => (
                  <ul className="list-disc ml-6 space-y-2" {...props}>
                    {children}
                  </ul>
                ),
                ol: ({ children, ...props }) => (
                  <ol className="list-decimal ml-6 space-y-2" {...props}>
                    {children}
                  </ol>
                ),
                blockquote: ({ children, ...props }) => (
                  <blockquote className="border-l-2 border-green-400/20 pl-4 italic text-green-200" {...props}>
                    {children}
                  </blockquote>
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
