export default function Features() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="absolute -top-24 right-0 w-[520px] h-[520px] bg-sky-300/20 blur-[140px] rounded-full" />
      <div className="absolute top-32 left-0 w-[440px] h-[440px] bg-emerald-300/20 blur-[160px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-[2]">
        <h2 className="text-center text-4xl font-extrabold text-slate-900 tracking-tight">
          Designed for System Architects
        </h2>
        <p className="text-center text-slate-600 mt-4 text-lg">
          BlueprintX gives you everything you need to plan real architectures with clarity.
        </p>

        <div className="mt-16 grid md:grid-cols-3 gap-10">

          <FeatureCard
            icon="🧠"
            title="AI Architecture Generator"
            desc="Turn any idea into a production-ready system diagram. Every diagram is fully validated using strict Mermaid rules to prevent render failures."
          />

          <FeatureCard
            icon="📊"
            title="Auto Diagram Repair"
            desc="BlueprintX cleans and corrects invalid Mermaid syntax, malformed nodes, unbalanced labels, and unsafe patterns before rendering."
          />

          <FeatureCard
            icon="🎓"
            title="Tech Mentor Mode"
            desc="Ask any system design question and get teacher-level explanations, structured reasoning, ASCII diagrams, and conceptual breakdowns."
          />

          <FeatureCard
            icon="🧩"
            title="Tech Stack Generator"
            desc="Automatically generate categorized frontend, backend, database, queue, caching, DevOps, and AI stack options with recommended alternatives."
          />

          <FeatureCard
            icon="🔍"
            title="Detailed Explanation View"
            desc="Every generated architecture includes a rich, markdown-rendered explanation modal with clean formatting and structured sections."
          />

          <FeatureCard
            icon="💬"
            title="Dual Chat Modes"
            desc="Work with Architect Chat for system generation or switch to Tech Chat for concept explanations, debugging, and learning."
          />

          <FeatureCard
            icon="🛠️"
            title="Mermaid-Core Renderer"
            desc="All diagrams are rendered with the latest Mermaid engine, styled for readability, with graceful failures and helpful error messaging."
          />

          <FeatureCard
            icon="🗂️"
            title="Blueprint Viewer"
            desc="View architecture, explanation, and tech stack side-by-side with smooth modals and a clean layout optimized for design clarity."
          />

          <FeatureCard
            icon="⚙️"
            title="Strict Safety Grammar"
            desc="Your system prompt enforces a custom grammar ensuring every diagram is safe, minimal, valid, and guaranteed to render."
          />

        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <div className="group p-7 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-sky-400/40">
      <div className="text-4xl mb-4 opacity-80 group-hover:opacity-100 transition">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-slate-900 group-hover:text-sky-600 transition-all">
        {title}
      </h3>

      <p className="mt-3 text-slate-600 text-[15px] leading-relaxed">
        {desc}
      </p>

      <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all">
        <div className="h-[2px] w-14 bg-gradient-to-r from-sky-500 to-emerald-400 rounded-full" />
      </div>
    </div>
  );
}
