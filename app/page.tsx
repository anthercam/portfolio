'use client';

import { useState } from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Highlights from './components/Highlights';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'highlights' | 'resume'>('highlights');

  const experience = [
    {
      company: "Avensia Philippines Inc.",
      role: "Solutions Architect",
      type: "Full-time",
      duration: "Nov 2020 - Present",
      location: "Cebu, Philippines",
      skills: ["Distributed Systems Design", "Event-Driven Architecture", "Master Data Management", "API Design & Orchestration", "Cloud Architecture"],
      details: "Leading architecture design for enterprise-scale Product Information Management (PIM) platforms, streamlining multi-channel integrations and aligning complex data structures with business initiatives."
    },
    {
      company: "Oppy",
      role: "Full-Stack Engineer (Contract)",
      type: "Part-time",
      duration: "Jan 2024 - Oct 2025",
      location: "Remote | Colorado, US",
      skills: ["PHP (Laravel)", "Node.js / React.js", "Software Integration", "API Design", "Cloud DevOps"],
      details: "Built scalable back‑office platforms with PHP (Laravel) and Node.js/React.js, improving efficiency and reducing process time by 25%. Collaborated across teams to deliver secure APIs and enforce best practices in testing and integration for long‑term reliability."
    },
    {
      company: "Inspire Team Philippines",
      role: "Software Engineer | PIM Integration Specialist",
      type: "Full-time",
      duration: "Aug 2017 - Nov 2020",
      location: "Cebu, Philippines",
      skills: ["C# / .NET", "RESTful APIs", "Software Integration", "Data Lifecycle Modeling", "EAI Frameworks"],
      details: "Developed backend integrations across PIM, CMS, and ERP systems with C# and REST APIs, streamlining data flow and boosting accuracy. Enhanced efficiency through scalable pipelines and Agile collaboration, accelerating delivery speed and quality."
    },
    {
      company: "Alliance Software Inc.",
      role: "Software Engineer",
      type: "Full-time",
      duration: "Jun 2015 - Aug 2017",
      location: "Cebu, Philippines",
      skills: ["ASP.NET / Angular", "Software Architecture", "Relational Databases", "Design Patterns", "Performance Tuning"],
      details: "Built high‑availability enterprise applications with ASP.NET and Angular, improving backend performance and reliability. Maintained mission‑critical workflows and optimized APIs with Lotus Notes and .NET, boosting efficiency and supporting seamless business operations."
    }
  ];

  const personalInfo = {
    name: "Antony Camacho Requintina",
    title: "Solution Architect",
    location: "Cebu City, Philippines",
    mobile: "+63 926 039 2214",
    languages: ["English", "Filipino"],
    education: {
      degree: "BS Information Technology",
      honor: "Cum Laude",
      institution: "University of Cebu - Banilad",
      year: "2015"
    },
    coreExpertise: [
      { category: "Backend Development", details: ".NET (C#), ASP.NET, Web APIs, PHP (Laravel), Microservices, RESTful Services" },
      { category: "Frontend Development", details: "React.js, TypeScript, HTML, CSS, with Node.js for server-side integration" },
      { category: "Cloud & DevOps", details: "Azure (App Services, Functions, Storage, CI/CD), AWS, Docker" },
      { category: "Architecture & Design", details: "Distributed Systems, Software Architecture, Design Patterns" },
      { category: "Quality & Testing", details: "Unit Testing, Integration Testing" },
      { category: "Performance & Security", details: "Application Optimization, Secure API Design, Monitoring & Logging" },
      { category: "Collaboration", details: "Client Communication, Agile/Scrum, Cross-functional teamwork, Technical Leadership" }
    ]
  };

  return (
    <main className="min-h-screen w-full bg-[#fcfdf2] text-slate-800 font-sans antialiased relative selection:bg-orange-500 selection:text-white flex flex-col justify-between">
      {/* Ambient fixed background gradient glow elements */}
      <div className="fixed top-[-5%] left-[-5%] w-[55vw] h-[55vw] bg-amber-200/60 rounded-full blur-[100px] pointer-events-none animate-pulse duration-[8s]" />
      <div className="fixed top-[20%] right-[-10%] w-[60vw] h-[60vw] bg-orange-300/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-5%] left-[5%] w-[45vw] h-[45vw] bg-rose-200/50 rounded-full blur-[90px] pointer-events-none" />

      <div>
        {/* Streamlined Floating Navigation Bar */}
        <header className="sticky top-6 z-50 flex justify-center px-4 pointer-events-none">
          <nav className="pointer-events-auto flex items-center gap-1.5 bg-white/20 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/60 p-1.5 rounded-full shadow-[0_20px_40px_rgba(15,23,42,0.08),inset_0_1px_2px_rgba(255,255,255,0.8)] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 via-transparent to-transparent pointer-events-none" />
            
            <button
              onClick={() => setActiveTab('highlights')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
                activeTab === 'highlights'
                  ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-[0_4px_12px_rgba(15,23,42,0.2)] font-semibold scale-[1.01]'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Highlights
            </button>
            <button
              onClick={() => setActiveTab('resume')}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 relative ${
                activeTab === 'resume'
                  ? 'bg-gradient-to-b from-slate-800 to-slate-900 text-white shadow-[0_4px_12px_rgba(15,23,42,0.2)] font-semibold scale-[1.01]'
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              Resume
            </button>
          </nav>
        </header>

        {/* Main Display Container */}
        <div className="max-w-5xl mx-auto px-6 pt-8 pb-12 relative z-10 w-full">
          {activeTab === 'highlights' && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <Hero onNavigateToResume={() => setActiveTab('resume')} />
              <TechStack />
              <Highlights />
            </div>
          )}

          {activeTab === 'resume' && (
            <div className="animate-in fade-in duration-300 space-y-8 max-full mx-auto w-full">
              {/* Header Card */}
              <div className="py-6 px-8 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-[32px] shadow-[0_30px_60px_rgba(15,23,42,0.06),inset_0_1px_3px_rgba(255,255,255,0.8)] text-center relative overflow-hidden">
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

              {/* Layout Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                
                {/* Experience Timeline */}
                <div className="md:col-span-2 space-y-6 order-1 md:order-2">
                  {experience.map((exp, idx) => (
                    <div key={idx} className="p-6 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_2px_rgba(255,255,255,0.6)] relative overflow-hidden transition hover:scale-[1.005] duration-200">
                      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                        <div>
                          {exp.company && <h3 className="text-lg font-bold text-slate-900 leading-snug">{exp.company}</h3>}
                          {exp.role && <p className="text-sm font-semibold text-orange-600 mt-0.5">{exp.role}</p>}
                        </div>
                        <div className="text-left sm:text-right text-xs text-slate-500 font-medium">
                          <p className="text-slate-700 font-semibold">{exp.duration}</p>
                          <div className="flex sm:justify-end items-center gap-1.5 mt-0.5">
                            {exp.type && <span className="text-slate-400 font-normal">{exp.type}</span>}
                            {exp.type && exp.location && <span className="text-slate-300">•</span>}
                            {exp.location && <span>{exp.location}</span>}
                          </div>
                        </div>
                      </div>

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

                {/* Sidebar Pane */}
                <div className="space-y-6 md:sticky md:top-24 order-2 md:order-1">
                  <div className="p-5 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_2px_rgba(255,255,255,0.6)] relative overflow-hidden flex flex-col gap-4">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    
                    {/* Headshot */}
                    <div className="flex justify-center pt-2">
                      <div className="w-24 h-24 rounded-full border-2 border-white/80 shadow-[0_10px_25px_rgba(15,23,42,0.05)] overflow-hidden bg-slate-200/50 flex items-center justify-center relative group">
                        <img 
                          src="/images/profile-headshot.jpg" 
                          alt={personalInfo.name} 
                          className="w-full h-full object-cover grayscale-[15%] contrast-[1.02] transition duration-300"
                          onError={(e) => {
                            const target = e.currentTarget;
                            target.style.display = 'none';
                            const parent = target.parentElement;
                            if (parent) {
                              const fallback = parent.querySelector('.avatar-fallback');
                              if (fallback) fallback.classList.remove('hidden');
                            }
                          }}
                        />
                        <div className="avatar-fallback hidden w-full h-full bg-gradient-to-tr from-orange-100/60 to-amber-50/60 flex items-center justify-center">
                          <svg className="w-10 h-10 text-slate-400/80" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12c0 2.518.956 4.813 2.522 6.551a.75.75 0 011.071-.05 7.458 7.458 0 0110.743 0 .75.75 0 011.099.096zM11 8.5a2.5 2.5 0 115 0 2.5 2.5 0 01-5 0zm1.25 5.495a6.002 6.002 0 00-4.474 2.398 7.996 7.996 0 008.948 0 6.002 6.002 0 00-4.474-2.398z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200/60 pb-2">
                        Personal Profile
                      </h3>
                    </div>
                    
                    {/* Demographics */}
                    <div className="flex flex-col gap-y-3.5 text-xs border-b border-slate-200/60 pb-4">
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Full Name</span>
                        <p className="text-slate-800 font-semibold text-sm leading-tight">{personalInfo.name}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Location</span>
                        <p className="text-slate-800 font-semibold text-sm leading-tight">{personalInfo.location}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Contact</span>
                        <p className="text-slate-800 font-semibold text-sm leading-tight">{personalInfo.mobile}</p>
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Languages</span>
                        <p className="text-slate-800 font-semibold text-sm leading-tight">{personalInfo.languages.join(', ')}</p>
                      </div>
                    </div>

                    {/* Core Expertise */}
                    <div className="border-b border-slate-200/60 pb-4">
                      <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-3">
                        Core Expertise
                      </h4>
                      <div className="space-y-3">
                        {personalInfo.coreExpertise.map((exp, fIdx) => (
                          <div key={fIdx} className="text-xs leading-normal">
                            <span className="font-bold text-slate-800 block mb-0.5">{exp.category}</span>
                            <span className="text-slate-600 block pl-2 border-l border-slate-200">{exp.details}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Education */}
                    <div>
                      <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-widest mb-2.5">
                        Education
                      </h4>
                      <div className="text-xs space-y-0.5 leading-tight">
                        <p className="font-bold text-slate-800 text-sm">{personalInfo.education.degree}</p>
                        <p className="text-orange-600 font-bold">{personalInfo.education.honor}</p>
                        <p className="text-slate-500 font-medium">{personalInfo.education.institution}</p>
                        <p className="text-slate-400 font-semibold pt-0.5">{personalInfo.education.year}</p>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      </div>

      {/* Global Bottom Contact Footer */}
      <footer className="max-w-5xl mx-auto px-6 pb-16 relative z-10 w-full">
        <div className="py-10 px-8 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-[28px] shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_2px_rgba(255,255,255,0.8)] text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
          
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 mb-2">Let&apos;s Build Something Together</h3>
          <p className="text-slate-600 mb-6 max-w-lg mx-auto text-xs sm:text-sm leading-relaxed">
            Available for specialized architectural consulting, ecosystem data mapping design, and system modernization initiatives.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-md mx-auto">
            <a 
              href="mailto:anthercam21@gmail.com" 
              className="px-5 py-2.5 bg-gradient-to-b from-amber-400 to-orange-500 text-white font-semibold rounded-xl text-xs shadow-md hover:from-amber-500 hover:to-orange-600 transition"
            >
              Email Me Directly
            </a>
            <a 
              href="https://www.linkedin.com/in/antony-requintina/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-5 py-2.5 bg-white/60 backdrop-blur-md border border-white/80 text-slate-700 font-semibold rounded-xl text-xs shadow-sm hover:bg-white hover:border-orange-200 transition"
            >
              LinkedIn Profile ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}