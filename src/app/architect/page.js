

"use client";

import { useState } from "react";
import DiagramSection from "@/components/DiagramSection";
import ChatPanel from "@/components/ChatPanel";
import ExplanationModal from "@/components/ExplanationModal";
import TechStackModal from "@/components/TechStackModal";


export default function Architect() {
  const [data, setData] = useState({
    chart: "",
    explanation: "",
    techStacks: null
  });

  const [showExplanation, setShowExplanation] = useState(false);
  const [showTechStack, setShowTechStack] = useState(false);

  return (
    <div className="h-screen w-full flex bg-[#0f172a] text-white overflow-hidden">
      
      <DiagramSection
        chart={data.chart}
        explanation={data.explanation}
        techStacks={data.techStacks}
        onShowModal={() => setShowExplanation(true)}
        onShowTechStacks={() => setShowTechStack(true)}
      />

      <ChatPanel onGenerated={setData} />

      {showExplanation && (
        <ExplanationModal
          explanation={data.explanation}
          onClose={() => setShowExplanation(false)}
        />
      )}

      {showTechStack && (
        <TechStackModal
          techStacks={data.techStacks}
          onClose={() => setShowTechStack(false)}
        />
      )}
    </div>
  );
}
