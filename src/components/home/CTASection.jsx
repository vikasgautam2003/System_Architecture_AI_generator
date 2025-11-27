import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="absolute -top-32 right-10 w-[420px] h-[420px] bg-sky-400/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-emerald-400/20 blur-[140px] rounded-full" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl shadow-xl p-12 flex flex-col md:flex-row items-center justify-between gap-10">

          <div className="max-w-lg">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900">
              Architect your systems at the speed of thought.
            </h3>
            <p className="mt-3 text-slate-600 text-lg">
              BlueprintX creates production-ready diagrams, explanations, and tech stacks —
              instantly.
            </p>
          </div>

          <div className="flex gap-4">
            <Link href="/architect">
              <button className="px-7 py-3.5 bg-slate-900 text-white rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                Start for free
              </button>
            </Link>

            <Link href="#features">
              <button className="px-7 py-3.5 border border-slate-300 rounded-full font-semibold text-slate-700 hover:border-slate-400 hover:-translate-y-0.5 transition-all">
                See features
              </button>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
