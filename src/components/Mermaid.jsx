"use client"
import React, { useEffect, useRef, useState } from "react"
import mermaid from "mermaid"


mermaid.initialize({
    startOnLoad: false,
    theme: "dark",
    securityLevel: "loose",
    fontFamily: "monospace",
})



export default function Mermaid({ chart }) {
    const containerRef = useRef(null);
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        if(chart && containerRef.current) {
            const renderChart = async () => {
                 try{
                    containerRef.current.innerHTML = "";
                    const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`

                    const { svg } = await mermaid.render(id, chart);

                    if(containerRef.current) {
                        containerRef.current.innerHTML = svg;
                        setIsRendered(true);
                    }

                 } catch (error) {
                    console.error("Mermaid Render Error:", error);
                 }
            };
            renderChart();
        }
    }, [chart])

    return(
        <div 
        ref={containerRef}
        className={`mermaid-container flex justify-center items-center min-h-[300px] w-full overflow-x-auto transition-opacity duration-500 ${isRendered ? 'opacity-100' : 'opacity-0'}`}
        ></div>
    );
}