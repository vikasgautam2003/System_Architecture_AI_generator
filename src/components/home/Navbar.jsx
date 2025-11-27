"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

       
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-emerald-400 rounded-xl shadow-md flex justify-center items-center" />
            <div>
              <span className="font-semibold text-lg tracking-tight">BlueprintX</span>
              <div className="text-xs text-slate-400 -mt-1">System Architecture AI</div>
            </div>
          </div>

          

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link href={"/architect"} >
            <button className="px-4 py-2 rounded-full bg-slate-900 text-white text-sm shadow">
              Get started
            </button>

           </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-slate-700"
            >
              <svg width="24" height="24" fill="none">
                <path d="M4 7h16M4 12h16M4 17h16"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round" />
              </svg>
            </button>
          </div>

        </div>

        

      </nav>
    </header>
  );
}
