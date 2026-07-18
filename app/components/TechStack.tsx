export default function TechStack() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4 border-t border-slate-100">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">Technical Arsenal</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        <div className="p-5 bg-slate-50 border border-slate-100 rounded-lg">
          <h3 className="font-semibold text-slate-900 mb-2">PIM Platforms</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Deep expertise in <strong>inriver</strong> and <strong>Akeneo</strong>. Specialized in data modeling, catalog structures, and platform migrations.
          </p>
        </div>

        <div className="p-5 bg-slate-50 border border-slate-100 rounded-lg">
          <h3 className="font-semibold text-slate-900 mb-2">System Architecture</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Designing robust inbound/outbound integrations, event-driven architectures, and optimizing data pipelines.
          </p>
        </div>

        <div className="p-5 bg-slate-50 border border-slate-100 rounded-lg">
          <h3 className="font-semibold text-slate-900 mb-2">Core Technologies</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            C#, .NET, REST APIs, JSON validation, and complex data mapping philosophies.
          </p>
        </div>

      </div>
    </section>
  );
}