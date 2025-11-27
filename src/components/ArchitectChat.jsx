



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
      {/* CHAT MESSAGES */}
      <div
        className="flex-1 overflow-y-auto px-6 py-6 space-y-5"
        style={{
          background:
            "radial-gradient(circle at 30% 0%, #0b1222 0%, #050914 70%, #03060f 100%)",
        }}
      >
        {messages.map((m, i) => (
          <div
            key={i}
            className={`px-5 py-4 max-w-[78%] rounded-2xl text-[15px] leading-relaxed tracking-wide transition-all duration-200
              ${
                m.role === "user"
                  ? "ml-auto bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_8px_30px_rgba(0,60,255,0.45)] rounded-br-2xl"
                  : "bg-white/10 backdrop-blur-xl border border-white/15 text-slate-200 rounded-bl-2xl shadow-[0_4px_30px_rgba(255,255,255,0.08)]"
              }
            `}
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            {m.content}
          </div>
        ))}

        {loading && (
          <div
            className="px-5 py-4 bg-white/10 text-slate-300 rounded-2xl max-w-[70%] border border-white/10 backdrop-blur-xl shadow-[0_4px_20px_rgba(255,255,255,0.05)] animate-pulse"
            style={{
              fontFamily: "Inter, sans-serif",
            }}
          >
            Thinking…
          </div>
        )}
      </div>

      {/* INPUT BAR */}
      <div
        className="p-5 border-t border-white/10 flex items-center gap-4"
        style={{
          background:
            "linear-gradient(180deg, rgba(12,21,42,0.92) 0%, rgba(8,16,33,0.92) 100%)",
          backdropFilter: "blur(8px)",
        }}
      >
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe a system to generate its architecture…"
          className="
            flex-1 bg-[#0e1a33] text-white p-4 rounded-2xl resize-none h-20
            text-[15px] border border-white/10 shadow-inner
            placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40
          "
          style={{
            fontFamily: "Inter, sans-serif",
          }}
        />

        <button
          disabled={!prompt.trim() || loading}
          onClick={sendMessage}
          className="
            bg-gradient-to-br from-blue-600 to-blue-500 px-6 py-4 rounded-2xl
            text-white text-lg font-semibold
            disabled:opacity-30 transition-all duration-200
            hover:shadow-[0_0_25px_rgba(0,120,255,0.5)]
          "
        >
          ➤
        </button>
      </div>
    </>
  );
}
