'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Highlights from './components/Highlights';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'highlights' | 'resume' | 'contact'>('highlights');

  const experience = [
    {
      role: "Solutions Architect",
      duration: "Nov 2020 - Present",
      location: "Cebu, Central Visayas, Philippines",
      skills: ["Requirements Analysis", "Software Integration", "Solution Architecture", "PIM Management"],
      details: "Leading architecture design for enterprise-scale Product Information Management (PIM) platforms, streamlining multi-channel integrations and aligning complex data structures with business initiatives."
    },
    {
      role: "Software Engineer",
      type: "Full-time (3 yrs 3 mos)",
      location: "Cebu, Central Visayas, Philippines",
      roles: [
        {
          title: "Mid-level Software Engineer",
          duration: "Oct 2018 - Oct 2020 (2 yrs 1 mo)",
          skills: ["Solution Architecture", "Backend Logic"]
        },
        {
          title: "Junior Software Engineer",
          duration: "Aug 2017 - Oct 2018 (1 yr 3 mos)",
          location: "Philippines"
        }
      ]
    },
    {
      role: "Software Engineeer",
      type: "Full-time (2 yrs 3 mos)",
      location: "Cebu, Central Visayas, Philippines",
      roles: [
        {
          title: "Associate Technical Specialist I",
          duration: "Jul 2017 - Aug 2017 (2 mos)",
          location: "7th Floor, Pioneer House Cebu Cardinal Rosales Ave., Cebu City"
        },
        {
          title: "Technical Specialist",
          duration: "Jun 2015 - Jul 2017 (2 yrs 2 mos)"
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-[#fcfdf2] text-slate-800 font-sans antialiased relative overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* Intense background gradient color engines to give the glass properties maximum distortion data */}
      <div className="absolute top-[-5%] left-[-5%] w-[55vw] h-[55vw] bg-amber-200/60 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-orange-300/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[5%] w-[45vw] h-[45vw] bg-rose-200/50 rounded-full blur-[90px] pointer-events-none" />

      {/* High-Reflective Liquid Glass Floating Navigation */}
      <header className="sticky top-6 z-50 flex justify-center px-4">
        <nav className="flex items-center gap-1.5 bg-white/[0.12] backdrop-blur-2xl backdrop-saturate-[1.8] border border-white/60 p-1.5 rounded-full shadow-[0_20px_40px_rgba(15,23,42,0.06),inset_0_1px_2px_rgba(255,255,255,0.7),inset_0_-1px_1px_rgba(0,0,0,0.02)] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-transparent pointer-events-none" />
          
          <button
            onClick={() => setActiveTab('highlights')}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
              activeTab === 'highlights'
                ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-[0_4px_12px_rgba(15,23,42,0.15)] font-semibold scale-[1.01]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Highlights
          </button>
          <button
            onClick={() => setActiveTab('resume')}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
              activeTab === 'resume'
                ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-[0_4px_12px_rgba(15,23,42,0.15)] font-semibold scale-[1.01]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Resume
          </button>
          <button
            onClick={() => setActiveTab('contact')}
            className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
              activeTab === 'contact'
                ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-[0_4px_12px_rgba(15,23,42,0.15)] font-semibold scale-[1.01]'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Contact
          </button>
        </nav>
      </header>

      {/* Core Display Viewport Container */}
      <div className="max-w-4xl mx-auto px-4 pt-16 pb-16 relative z-10">
        {activeTab === 'highlights' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <Hero />
            <TechStack />
            <Highlights />
          </div>
        )}

        {activeTab === 'resume' && (
          <div className="animate-in fade-in duration-300 space-y-8 max-w-3xl mx-auto">
            {/* Callout Header Card */}
            <div className="py-10 px-8 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-[32px] shadow-[0_30px_60px_rgba(15,23,42,0.06),inset_0_1px_3px_rgba(255,255,255,0.8)] text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">Professional History</h2>
              <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm md:text-base leading-relaxed">
                Expertise mapping data lifecycles, optimizing enterprise architectural frameworks, and configuring robust product master systems.
              </p>
              <a 
                href="/files/resume.pdf" 
                download 
                className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-b from-amber-400 to-orange-500 text-white font-medium rounded-xl shadow-[0_6px_20px_rgba(245,158,11,0.2),inset_0_1px_0_rgba(255,255,255,0.3)] hover:from-amber-500 hover:to-orange-600 transition-all duration-200 text-sm"
              >
                Download Full PDF CV
              </a>
            </div>

            {/* Timeline Experience Track */}
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="p-6 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_2px_rgba(255,255,255,0.6)] relative overflow-hidden transition hover:scale-[1.005] duration-200">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                    <div>
                      {exp.role && <p className="text-md font-semibold text-orange-600 mt-0.5">{exp.role}</p>}
                    </div>
                    <div className="text-left md:text-right text-xs md:text-sm text-slate-500 font-medium">
                      <p className="text-slate-700 font-semibold">{exp.duration || exp.type}</p>
                      {exp.location && <p className="mt-0.5">{exp.location}</p>}
                    </div>
                  </div>

                  {exp.roles && (
                    <div className="mt-4 border-l-2 border-slate-200 pl-4 space-y-4 ml-1">
                      {exp.roles.map((role, rIdx) => (
                        <div key={rIdx} className="relative before:absolute before:w-2 before:h-2 before:bg-orange-500 before:rounded-full before:-left-[21px] before:top-[6px]">
                          <h4 className="font-bold text-slate-800 text-base">{role.title}</h4>
                          <p className="text-xs font-semibold text-slate-500">{role.duration}</p>
                          {role.location && <p className="text-xs text-slate-400 mt-0.5">{role.location}</p>}
                        </div>
                      ))}
                    </div>
                  )}

                  {exp.details && <p className="mt-3 text-sm text-slate-600 leading-relaxed">{exp.details}</p>}

                  {exp.skills && (
                    <div className="mt-4 flex flex-wrap gap-1.5 border-t border-slate-100 pt-3">
                      {exp.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="px-2.5 py-0.5 bg-white/60 border border-slate-200/80 text-slate-600 rounded-md text-xs font-medium shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="animate-in fade-in duration-300 py-16 px-8 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-[32px] shadow-[0_30px_60px_rgba(15,23,42,0.06),inset_0_1px_3px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.01)] text-center max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Let's Build Something Together</h2>
            <p className="text-slate-600 mb-10 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              Available for specialized architectural consulting, ecosystem data mapping design, and system modernization initiatives.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="mailto:your.email@example.com" 
                className="p-4 bg-white/40 backdrop-blur-md border border-white/80 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.02),inset_0_1px_0_rgba(255,255,255,0.5)] hover:border-orange-200 hover:bg-white transition text-slate-700 font-medium text-sm"
              >
                Email Me
              </a>
              <a 
                href="https://linkedin.com/in/yourprofile" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-4 bg-white/40 backdrop-blur-md border border-white/80 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.02),inset_0_1px_0_rgba(255,255,255,0.5)] hover:border-orange-200 hover:bg-white transition text-slate-700 font-medium text-sm"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}