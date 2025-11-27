"use client";

export default function VideoModal({ open, onClose, instructions }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex justify-center items-center p-6"
      style={{
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(12px)",
      }}
    >
      <div
        className="w-[1200px] max-w-[95%] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,255,180,0.25)] relative animate-fadeIn"
        style={{
          background: "linear-gradient(145deg, #081018 0%, #05080e 100%)",
          border: "1px solid rgba(0,255,170,0.15)",
        }}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white tracking-wide">
            BlueprintX – Demo Walkthrough
          </h2>

          <button
            onClick={onClose}
            className="text-white text-xl px-3 py-1 rounded-lg hover:bg-white/10 transition"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6">
          <video
            src="/sys.mp4"
            controls
            className="w-full rounded-xl shadow-lg"
            style={{
              height: "600px",
              objectFit: "cover",
            }}
          />

          <div
            className="p-5 rounded-xl text-slate-200 text-[15px] leading-relaxed tracking-wide space-y-3"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 0 20px rgba(0,255,200,0.08)",
            }}
          >
            {instructions}
          </div>
        </div>
      </div>
    </div>
  );
}
