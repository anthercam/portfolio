'use client';

import { useEffect, useRef, useState, useId } from 'react';
import mermaid from 'mermaid';

export default function Mermaid({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [svgHtml, setSvgHtml] = useState<string>('');
  const uniqueId = useId().replace(/:/g, ''); // Generate a safe, clean DOM ID string

  useEffect(() => {
    setIsMounted(true);
    mermaid.initialize({ 
      startOnLoad: false, 
      theme: 'neutral',
      securityLevel: 'loose' 
    });
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const renderDiagram = async () => {
      try {
        // Explicitly trim whitespace to preserve the graph structural boundaries
        const cleanedChart = chart.trim(); 
        const { svg } = await mermaid.render(`mermaid-${uniqueId}`, cleanedChart);
        setSvgHtml(svg);
      } catch (error) {
        console.error('Mermaid parsing failed:', error);
      }
    };

    renderDiagram();
  }, [chart, isMounted, uniqueId]);

  if (!isMounted) {
    return <div className="animate-pulse bg-slate-100 h-48 w-full rounded-xl" />;
  }

  return (
    <div 
      className="my-6 flex justify-center p-6 bg-slate-50 border border-slate-100 rounded-xl overflow-x-auto w-full"
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: svgHtml || '<span className="text-slate-400 text-xs">Parsing topology architecture...</span>' }}
    />
  );
}