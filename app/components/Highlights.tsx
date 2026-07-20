'use client';

import { useState } from 'react';

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'architecture' | 'engineering';
  tags: string[];
  description: string;
  keyOutcomes: string[];
  imagePlaceholderText: string;
  imageUrl?: string;
}

export default function Highlights() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'engineering'>('architecture');

  const highlightsData: ShowcaseItem[] = [
    // Architecture Showcase Items
    {
      id: 'arch-1',
      title: 'Enterprise PIM-Centric System Landscape',
      subtitle: 'Multi-Channel Master Data Ecosystem',
      category: 'architecture',
      tags: ['inriver PIM', 'Azure Service Bus', 'REST APIs', 'ERP/E-Com'],
      description: 'Designed an event-driven master data topology bridging PIM, ERP, and multi-channel e-commerce platforms. Established asynchronous delta-sync channels to keep million-SKU catalogs updated across regions without hitting rate limits.',
      keyOutcomes: [
        'Reduced master data latency across global channels from hours to minutes.',
        'Implemented strict schema validation layers before publishing downstream.'
      ],
      imagePlaceholderText: 'System Landscape Topology Diagram'
    },
    {
      id: 'arch-2',
      title: 'Decoupled Integration & Middleware Strategy',
      subtitle: 'Asynchronous Ingestion & Routing Engine',
      category: 'architecture',
      tags: ['Microservices', 'Event-Driven', 'Azure Functions', 'API Gateway'],
      description: 'Architected middleware listening layers for real-time asset ingestion and attribute transformation. Used pub/sub queuing patterns to handle high-volume spikes during bulk product releases.',
      keyOutcomes: [
        'Prevented system downtime during high-traffic catalog updates.',
        'Decoupled core PIM logic from volatile third-party vendor APIs.'
      ],
      imagePlaceholderText: 'Event-Driven Integration Architecture Diagram'
    },

    // Engineering Showcase Items
    {
      id: 'eng-1',
      title: 'Dynamic Catalog Builder',
      subtitle: 'Custom UI & Automated Layout Tool',
      category: 'engineering',
      tags: ['React.js', 'TypeScript', 'Node.js', 'Custom APIs'],
      description: 'Engineered a visual Catalog Builder allowing product managers to dynamically construct, preview, and export customized product datasheets and catalogs sourced directly from PIM data.',
      keyOutcomes: [
        'Automated manual document creation, saving hours of designer effort.',
        'Provides real-time visual previews with live attribute mapping.'
      ],
      imagePlaceholderText: 'Catalog Builder UI Preview & Page Layouts'
    },
    {
      id: 'eng-2',
      title: 'NOBB Connector & Integration Plugin',
      subtitle: 'Building Industry Master Data Integration',
      category: 'engineering',
      tags: ['C# / .NET', 'RESTful Integration', 'PIM Extension', 'Data Validation'],
      description: 'Built a specialized integration connector syncing product master data directly with NOBB (Norwegian Building Center database). Solved complex attribute mappings, automated status checking, and fallback mechanisms.',
      keyOutcomes: [
        'Streamlined compliance sync for Scandinavian market distribution.',
        'Built automated error handling and logging pipelines for sync failures.'
      ],
      imagePlaceholderText: 'NOBB Connector Data Flow & Mapping Logic'
    }
  ];

  const filteredItems = highlightsData.filter(item => item.category === activeTab);

  return (
    <section className="space-y-6">
      {/* Pillar Toggle Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900">Featured Technical Work</h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
            Architectural landscapes and hands-on software implementations.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex p-1 bg-slate-200/50 backdrop-blur-md rounded-xl border border-white/60 self-start sm:self-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
              activeTab === 'architecture'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Solutions Architecture
          </button>
          <button
            onClick={() => setActiveTab('engineering')}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
              activeTab === 'engineering'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Software Engineering
          </button>
        </div>
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_2px_rgba(255,255,255,0.6)] relative overflow-hidden flex flex-col justify-between group hover:border-orange-200/80 transition-all duration-300"
          >
            <div className="space-y-4">
              {/* Visual Preview Box (Replace imagePlaceholderText with <img> once screenshots are ready) */}
              <div className="w-full h-44 rounded-xl bg-slate-900/5 border border-slate-200/60 flex items-center justify-center p-4 text-center relative overflow-hidden group-hover:bg-slate-900/10 transition duration-300">
                {item.imageUrl ? (
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Visual Asset</span>
                    <p className="text-xs text-slate-600 font-medium px-4">{item.imagePlaceholderText}</p>
                  </div>
                )}
              </div>

              {/* Title & Subtitle */}
              <div>
                <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block">
                  {item.subtitle}
                </span>
                <h3 className="text-lg font-bold text-slate-900 leading-snug mt-0.5">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-600 leading-relaxed">
                {item.description}
              </p>

              {/* Key Outcomes */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Key Impact & Design Goals</span>
                <ul className="space-y-1">
                  {item.keyOutcomes.map((outcome, oIdx) => (
                    <li key={oIdx} className="text-xs text-slate-700 flex items-start gap-1.5">
                      <span className="text-orange-500 font-bold">•</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Tags */}
            <div className="mt-5 flex flex-wrap gap-1.5 border-t border-slate-200/60 pt-3">
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2.5 py-0.5 bg-white/70 border border-slate-200/80 text-slate-700 rounded-md text-[11px] font-medium shadow-[0_1px_2px_rgba(0,0,0,0.01)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}