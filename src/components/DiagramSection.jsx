import Mermaid from "@/components/Mermaid";

export default function DiagramSection({ chart, explanation, onShowModal }) {
  return (
    <div
      className="w-3/4 h-full p-6 relative border-r border-slate-800 overflow-auto"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
        backgroundSize: "30px 30px",
      }}
    >
      <h1 className="text-3xl font-bold mb-6">Architecture Diagram</h1>

      <div className="w-full min-h-[80%] flex justify-center p-4">
        <Mermaid key={chart} chart={chart} />
      </div>

      {explanation && (
        <button
          onClick={onShowModal}
          className="absolute bottom-6 left-6 bg-purple-600 hover:bg-purple-500 text-white px-5 py-2 rounded-xl shadow-lg transition"
        >
          View Explanation
        </button>
      )}
    </div>
  );
}
