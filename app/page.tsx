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
      type: "Full-time",
      duration: "Nov 2020 - Present",
      location: "Cebu, Philippines",
      skills: ["Distributed Systems Design", "Event-Driven Architecture", "Master Data Management", "API Design & Orchestration", "Cloud Architecture"],
      details: "Leading architecture design for enterprise-scale Product Information Management (PIM) platforms, streamlining multi-channel integrations and aligning complex data structures with business initiatives."
    },
    {
      role: "Full-Stack Engineer",
      type: "Part-time",
      duration: "Jan 2024 - Oct 2025",
      location: "Remote | Colorado, US",
      skills: ["PHP (Laravel)", "Node.js / React.js", "Software Integration", "API Design", "Cloud DevOps"],
      details: "Built scalable back‑office platforms with PHP (Laravel) and Node.js/React.js, improving efficiency and reducing process time by 25%. Collaborated across teams to deliver secure APIs and enforce best practices in testing and integration for long‑term reliability."
    },
    {
      role: "Software Engineer | PIM & Data Integration Specialist",
      type: "Full-time (3 yrs 3 mos)",
      location: "Cebu, Philippines",
      skills: ["C# / .NET", "RESTful APIs", "Software Integration", "Data Lifecycle Modeling", "EAI Frameworks"],
      details: "Developed backend integrations across PIM, CMS, and ERP systems with C# and REST APIs, streamlining data flow and boosting accuracy. Enhanced efficiency through scalable pipelines and Agile collaboration, accelerating delivery speed and quality."
    },
    {
      role: "Software Engineer",
      type: "Full-time (2 yrs 3 mos)",
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
      <main className="h-full bg-[#fcfdf2] text-slate-800 font-sans antialiased relative overflow-x-hidden overflow-y-visible selection:bg-orange-500 selection:text-white">
    {/* Intense background gradient color engines */}
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
          <div className="animate-in fade-in duration-300 space-y-8 max-w-4xl mx-auto">
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

            {/* Two-Column Work History and Personal Meta Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              
              {/* Left Column: Work Experience Timeline */}
              <div className="md:col-span-2 space-y-6">
                {experience.map((exp, idx) => (
                  <div key={idx} className="p-6 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_2px_rgba(255,255,255,0.6)] relative overflow-hidden transition hover:scale-[1.005] duration-200">
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        {exp.role && <p className="text-sm font-semibold text-orange-600 mt-0.5">{exp.role}</p>}
                      </div>
                      <div className="text-left sm:text-right text-xs text-slate-500 font-medium">
                        <p className="text-slate-700 font-semibold">{exp.duration || exp.type}</p>
                        {exp.location && <p className="mt-0.5">{exp.location}</p>}
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

              {/* Right Column: Personal Information & Expertise Natural Scrolling Side Pane */}
              <div className="space-y-6 md:sticky md:top-24">
                <div className="p-5 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-2xl shadow-[0_20px_40px_rgba(15,23,42,0.04),inset_0_1px_2px_rgba(255,255,255,0.6)] relative overflow-hidden flex flex-col gap-4">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                  
                  {/* Fluid Glass Headshot Frame with SVG fallback handler */}
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

                  {/* Panel Main Header */}
                  <div className="text-center">
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider border-b border-slate-200/60 pb-2">
                      Personal Profile
                    </h3>
                  </div>
                  
                  {/* Core Demographics Sub-list (Clean stacked display block) */}
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

                  {/* Core Expertise Block */}
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

                  {/* Education Sub-section */}
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

        {activeTab === 'contact' && (
          <div className="animate-in fade-in duration-300 py-16 px-8 bg-white/[0.12] backdrop-blur-3xl backdrop-saturate-[1.8] border border-white/60 rounded-[32px] shadow-[0_30px_60px_rgba(15,23,42,0.06),inset_0_1px_3px_rgba(255,255,255,0.8),inset_0_-2px_4px_rgba(0,0,0,0.01)] text-center max-w-2xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            
            <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-4">Let&apos;s Build Something Together</h2>
            <p className="text-slate-600 mb-10 max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              Available for specialized architectural consulting, ecosystem data mapping design, and system modernization initiatives.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="mailto:anthercam21@gmail.com" 
                className="p-4 bg-white/40 backdrop-blur-md border border-white/80 rounded-xl shadow-[0_4px_12px_rgba(15,23,42,0.02),inset_0_1px_0_rgba(255,255,255,0.5)] hover:border-orange-200 hover:bg-white transition text-slate-700 font-medium text-sm"
              >
                Email Me
              </a>
              <a 
                href="https://www.linkedin.com/in/antony-requintina/" 
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