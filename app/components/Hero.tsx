// components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-4 relative">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
        Antony Camacho Requintina
      </h1>
      <p className="text-xl font-medium bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mt-2">
        Solution Architect | Software Engineer | PIM & Data Integration Specialist
      </p>
      <p className="text-slate-600 mt-4 max-w-2xl text-lg leading-relaxed">
        I design and scale data models, enterprise Product Information Management (PIM) systems, 
        and high-performance integration pipelines that bridge complex backend logic with business realities.
      </p>
      {/* <div className="mt-8 flex gap-4">
        <a 
          href="#contact" 
          className="px-5 py-2.5 bg-gradient-to-b from-amber-400 to-orange-500 text-white font-medium rounded-xl shadow-[0_10px_20px_rgba(245,158,11,0.25),inset_0_1px_0_rgba(255,255,255,0.3)] hover:from-amber-500 hover:to-orange-600 transition scale-100 hover:scale-[1.02] active:scale-[0.98] duration-200"
        >
          Get in Touch
        </a>
        <a 
          href="/files/resume.pdf" 
          download 
          className="px-5 py-2.5 bg-white/50 backdrop-blur-md border border-white/80 text-slate-700 font-medium rounded-xl shadow-[0_10px_20px_rgba(15,23,42,0.03),inset_0_1px_0_rgba(255,255,255,0.6)] hover:bg-white/80 hover:border-slate-300 transition scale-100 hover:scale-[1.02] active:scale-[0.98] duration-200"
        >
          Download CV
        </a>
      </div> */}
    </section>
  );
}