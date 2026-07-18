import Hero from './components/Hero';
import Highlights from './components/Highlights';
import TechStack from './components/TechStack';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-500 selection:text-white">
      {/* Structural layout wrapper */}
      <div className="divide-y divide-slate-100">
        <Hero />
        <TechStack/>
        <Highlights />
        
        {/* Simple Footer/Contact Section */}
        <section id="contact" className="py-16 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Let's Connect</h2>
          <p className="text-slate-600 mb-6">
            Looking for architectural design, PIM integrations, or data modeling consultation?
          </p>
          <div className="flex justify-center gap-6 text-sm font-medium">
            <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">Email</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
          </div>
        </section>
      </div>
    </main>
  );
}