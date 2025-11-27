export default function LogosStrip() {
  const brands = [
    "Sentinel.ai",
    "FormForge.ai",
    "BackNest.ai",
    "Hostel Committee Site",
    "Draftify.ai",
    "Minerva.ai",
    "CogniCare.ai",
    "OnePng.ai",
    "Syntaxly.ai",
    "Query.ai",
    "NeuraPost.ai",
    "VidQuery.ai",
  ];


  const loopBrands = [...brands, ...brands];

  return (
    <div className="py-12 overflow-hidden bg-white">
      <div className="relative w-full overflow-hidden">
        <div className="scroll-container flex items-center gap-16 whitespace-nowrap opacity-70">
          {loopBrands.map((brand, idx) => (
            <span
              key={idx}
              className="text-slate-500 text-lg font-medium tracking-wide hover:text-slate-700 transition"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
