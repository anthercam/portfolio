// components/Hero.tsx
'use client';

interface HeroProps {
  onNavigateToResume?: () => void;
}

export default function Hero({ onNavigateToResume }: HeroProps) {
  return (
    <div className="w-full text-center space-y-4 pt-4 pb-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
        Antony Camacho Requintina
      </h1>
      <p className="text-base sm:text-lg font-semibold text-orange-600">
        Solution Architect | Software Engineer | PIM Specialist
      </p>
      
      {/* Short Bio Subtitle */}
      <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
        Specializing in enterprise PIM ecosystems, event-driven integrations, and high-throughput data lifecycles across inriver & Akeneo.
      </p>

      {/* Hero Action Buttons */}
      <div className="flex items-center justify-center gap-3 pt-2">
        <button
          onClick={onNavigateToResume}
          className="px-5 py-2.5 bg-gradient-to-b from-amber-400 to-orange-500 text-white font-semibold rounded-xl text-xs shadow-[0_4px_14px_rgba(245,158,11,0.25)] hover:from-amber-500 hover:to-orange-600 transition duration-200"
        >
          View Experience & CV
        </button>
        <a 
          href="https://www.linkedin.com/in/antony-requintina/" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-white/60 backdrop-blur-md border border-white/80 text-slate-700 font-semibold rounded-xl text-xs shadow-sm hover:bg-white hover:border-orange-200 transition duration-200"
        >
          LinkedIn Profile ↗
        </a>
      </div>
    </div>
  );
}