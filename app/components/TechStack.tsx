// components/TechStack.tsx
export default function TechStack() {
  return (
    <section className="py-16 max-w-4xl mx-auto px-4 border-t border-slate-200/60">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">
        Technical Arsenal
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* PIM Platforms Card */}
        <div className="group p-5 bg-white/40 backdrop-blur-md border border-white/80 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300 hover:border-slate-300 hover:bg-white/60 hover:scale-[1.01]">
          <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
            PIM Platforms
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Deep expertise in <strong className="text-orange-600 font-semibold">inriver</strong> and <strong className="text-orange-600 font-semibold">Akeneo</strong>. Specialized in data modeling, catalog structures, and platform migrations.
          </p>
        </div>

        {/* System Architecture Card */}
        <div className="group p-5 bg-white/40 backdrop-blur-md border border-white/80 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300 hover:border-slate-300 hover:bg-white/60 hover:scale-[1.01]">
          <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
            System Architecture
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Designing robust inbound/outbound integrations, event-driven architectures, and optimizing data pipelines.
          </p>
        </div>

        {/* Core Technologies Card */}
        <div className="group p-5 bg-white/40 backdrop-blur-md border border-white/80 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_0_rgba(255,255,255,0.6)] transition-all duration-300 hover:border-slate-300 hover:bg-white/60 hover:scale-[1.01]">
          <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-200">
            Core Technologies
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            C#, .NET, REST APIs, JSON validation, and complex data mapping philosophies.
          </p>
        </div>

      </div>
    </section>
  );
}