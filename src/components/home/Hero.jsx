// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">

//         {/* Left Content */}
//         <div className="lg:col-span-7">
//           <p className="text-sm text-slate-500">Industry leaders choose us</p>

//           <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 mt-3 leading-tight">
//             Build with{" "}
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-emerald-400">
//               BlueprintX
//             </span>
//           </h1>

//           <p className="mt-6 text-lg text-slate-600 max-w-xl">
//             An AI system architect that turns ideas into production-ready
//             blueprints, diagrams, tech stacks, and scaling strategies.
//           </p>

//           <div className="mt-8 flex gap-4">
//             <Link href={"/architect"} >
//             <button className="px-6 py-3 bg-slate-900 text-white rounded-lg font-semibold shadow">
//               Start designing
//             </button>
//             </Link>
            
//           </div>
//         </div>

//         {/* Right: Preview Box */}
//         <div className="lg:col-span-5">
//           <div className="rounded-2xl shadow-2xl bg-[#0b1222] border border-slate-700 p-6">
//             <div className="text-white text-sm mb-4">Diagram Preview</div>

//             <div className="rounded-xl bg-black/40 p-4 h-64 overflow-auto">
//               <pre className="text-xs text-slate-200 font-mono">
// {`graph LR
// User((User)) --> LB[LoadBalancer]
// LB --> APIGateway[API_Gateway]
// APIGateway --> ContentService[Content_Service]
// ContentService --> VideoStore[(Video_Storage)]
// `}
//               </pre>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }







import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-28 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-sky-400/20 rounded-full blur-[120px]" />
      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-emerald-400/20 rounded-full blur-[130px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center relative z-[2]">
        <div className="lg:col-span-7">
          <p className="text-sm text-slate-500 tracking-wide">trusted by modern engineering teams</p>

          <h1 className="text-6xl font-extrabold tracking-tight text-slate-900 mt-4 leading-tight">
            The Future of{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-blue-500 to-emerald-400 drop-shadow-[0_0_20px_rgba(0,200,255,0.3)]">
              System Architecture
            </span>
            .
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            BlueprintX turns ideas into production-ready architectures: diagrams, scaling strategies, tech stacks, and optimizations—generated with AI precision.
          </p>

          <div className="mt-10 flex gap-5">
            <Link href="/architect">
              <button className="px-7 py-3.5 bg-slate-900 text-white rounded-xl font-semibold shadow-lg shadow-slate-900/30 hover:shadow-sky-500/30 hover:bg-slate-800 transition-all active:scale-95">
                Launch BlueprintX →
              </button>
            </Link>

            <button className="px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 transition-all backdrop-blur">
              Watch Demo
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative rounded-2xl border border-slate-800 bg-[#070b18] shadow-2xl p-6 backdrop-blur-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="text-slate-200 text-sm mb-3 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              AI-Generated Diagram Preview
            </div>

            <div className="rounded-xl bg-black/40 p-5 h-64 overflow-auto border border-slate-700 relative">
              <pre className="text-xs text-slate-300 font-mono leading-relaxed whitespace-pre-wrap animate-fadeInSlow">
{`graph LR
User((User)) --> LB[LoadBalancer]
LB --> APIGateway[API_Gateway]
APIGateway --> ContentService[Content_Service]
ContentService --> VideoStore[(Video_Storage)]
`}
              </pre>

              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-scan" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
