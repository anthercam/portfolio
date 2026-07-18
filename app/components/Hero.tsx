// components/Hero.tsx
export default function Hero() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-4">
      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
        Antony Camacho Requintina
      </h1>
      <p className="text-xl font-medium text-blue-600 mt-2">
        Solution Architect | Software Engineer | PIM & Data Integration Specialist
      </p>
      <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl text-lg leading-relaxed">
        I design and scale data models, enterprise Product Information Management (PIM) systems, 
        and high-performance integration pipelines that bridge complex backend logic with business realities.
      </p>
      <div className="mt-8 flex gap-4">
        <a href="#contact" className="px-5 py-2.5 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition">
          Get in Touch
        </a>
        <a href="/files/resume.pdf" download className="px-5 py-2.5 border border-slate-300 font-medium rounded-lg hover:bg-slate-50 transition">
          Download CV
        </a>
      </div>
    </section>
  );
}