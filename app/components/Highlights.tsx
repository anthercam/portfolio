'use client';
import dynamic from 'next/dynamic';

const Mermaid = dynamic(() => import('./Mermaid'), { ssr: false });

// Using 8-digit hex codes (#RRGGBBAA) to safely pass alpha opacity without commas
const pimFlowDiagram = `graph TD
  ERP[ERP System / Master Data] -->|Delta Payload| Inbound[Inbound Validation API]
  Inbound -->|Schema Match| PIM[PIM Core Model: Akeneo/inriver]
  PIM -->|Completeness Evaluated| Listeners{Completeness Listeners}
  Listeners -->|Valid Data| Channel[Outbound Channels: Shopify/Marketplaces]
  Listeners -->|Missing Attributes| ErrorLog[Error Logs & Notifications]

  %% Clean hex-alpha formatting to satisfy the Mermaid string parser
  style ERP fill:#ffffff4d,stroke:#ffffffcc,stroke-width:1.5px,color:#334155
  style Inbound fill:#ffffff4d,stroke:#ffffffcc,stroke-width:1.5px,color:#334155
  style PIM fill:#fbbf240f,stroke:#f59e0b80,stroke-width:2px,color:#7c2d12,font-weight:bold
  style Listeners fill:#f973160d,stroke:#f9731680,stroke-width:2px,color:#7c2d12,font-weight:bold
  style Channel fill:#ffffff4d,stroke:#ffffffcc,stroke-width:1.5px,color:#334155
  style ErrorLog fill:#ffffff4d,stroke:#ffffffcc,stroke-width:1.5px,color:#334155
  
  linkStyle default stroke:#f59e0b59,stroke-width:1.5px,color:#475569`;

const projects = [
  {
    title: "Enterprise PIM Integration Framework",
    description: "Designed and implemented comprehensive inbound and outbound data integration pipelines, focusing on complex catalog data modeling and schema mapping.",
    impact: "Streamlined multi-channel product distribution by optimizing data philosophy alignment and validation logic during platform migrations.",
    tags: ["System Architecture", "inriver PIM", "Akeneo PIM", "Data Modeling", "API Integration"]
  },
  {
    title: "High-Performance Event Listener Optimization",
    description: "Architected advanced gate-keeping and filtering logic for system CompletenessListeners to eliminate redundant calculations during bulk catalog updates.",
    impact: "Drastically reduced CPU utilization and database contention, stabilizing event-driven message feeds under peak loads.",
    tags: ["Event-Driven Architecture", "Performance Tuning", "Backend Logic", "inriver"]
  }
];

export default function Highlights() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4 border-t border-slate-200/60">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">
        Career & Architecture Highlights
      </h2>
      <div className="space-y-12">
        {projects.map((p, idx) => (
          <div key={idx} className="group relative flex flex-col items-start p-6 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_2px_rgba(255,255,255,0.6)] transition-all duration-300 hover:border-slate-300 hover:bg-white/60 hover:scale-[1.01]">
            
            <h3 className="text-xl font-semibold text-slate-900 group-hover:text-orange-600 transition-colors duration-200">
              {p.title}
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed text-sm md:text-base">{p.description}</p>
            
            <div className="mt-4 bg-amber-50/40 border border-orange-100 p-4 rounded-xl w-full shadow-[inset_0_1px_2px_rgba(0,0,0,0.01)]">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600 block mb-1">Key Impact:</span>
              <p className="text-sm text-slate-700 leading-relaxed">{p.impact}</p>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2.5 py-0.5 bg-white border border-slate-200 text-slate-600 rounded-md text-xs font-medium shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Data Flow Pipelines</h3>
        <p className="text-sm text-slate-500 mb-6">
          Visual orchestration topology highlighting operational validation layers and boundary gate logic:
        </p>
        
        <div className="p-6 bg-white/[0.08] backdrop-blur-xl border border-white/40 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.02)] relative overflow-hidden group">
          <style jsx global>{`
            .mermaid svg .node rect, 
            .mermaid svg .node polygon,
            .mermaid svg .node circle,
            .mermaid svg .node path {
              filter: drop-shadow(0 4px 6px rgba(15, 23, 42, 0.03)) 
                      drop-shadow(0 1px 2px rgba(15, 23, 42, 0.02));
              transition: all 0.3s ease;
            }
            .mermaid svg .node:hover rect,
            .mermaid svg .node:hover polygon {
              fill: rgba(255, 255, 255, 0.6) !important;
              stroke: rgba(245, 158, 11, 0.8) !important;
            }
          `}</style>
          <Mermaid chart={pimFlowDiagram} />
        </div>
      </div>
    </section>
  );
}