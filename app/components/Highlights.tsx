// components/Highlights.tsx
const projects = [
  {
    title: "Enterprise PIM Integration Framework",
    description: "Designed and implemented comprehensive inbound and outbound data integration pipelines, focusing on complex catalog data modeling and schema mapping.",
    impact: "Streamlined multi-channel product distribution by optimizing data philosophy alignment and validation logic during platform migrations.",
    tags: ["System Architecture","inriver PIM", "Akeneo PIM", "Data Modeling", "API Integration", ]
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
    <section className="py-16 max-w-4xl mx-auto px-4 border-t border-slate-100">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Career & Architecture Highlights</h2>
      <div className="space-y-12">
        {projects.map((p, idx) => (
          <div key={idx} className="group relative flex flex-col items-start">
            <h3 className="text-xl font-semibold text-slate-900 group-hover:text-blue-600 transition">
              {p.title}
            </h3>
            <p className="mt-2 text-slate-600 leading-relaxed">{p.description}</p>
            <div className="mt-3 bg-blue-50 border border-blue-100 p-3.5 rounded-md w-full">
              <span className="text-sm font-semibold text-blue-800 block mb-0.5">Key Impact:</span>
              <p className="text-sm text-blue-900">{p.impact}</p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((tag, tIdx) => (
                <span key={tIdx} className="px-2.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs font-medium">
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