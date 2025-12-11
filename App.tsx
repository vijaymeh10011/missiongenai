import React, { useRef } from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { WaitlistForm } from './components/WaitlistForm';
import { Footer } from './components/Footer';
import { CONTENT, TARGET_AUDIENCE } from './constants';
import { Users, Building2, GraduationCap, Rocket } from 'lucide-react';

const App: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const getIconForType = (type: string) => {
    switch (type) {
      case 'Student': return <GraduationCap className="w-6 h-6 mb-4 text-brand-glow" />;
      case 'Professional': return <Users className="w-6 h-6 mb-4 text-brand-accent" />;
      case 'Company': return <Building2 className="w-6 h-6 mb-4 text-green-400" />;
      case 'Founder': return <Rocket className="w-6 h-6 mb-4 text-rose-400" />;
      default: return <Users className="w-6 h-6" />;
    }
  };

  return (
    <main className="bg-brand-dark min-h-screen text-slate-200 overflow-x-hidden selection:bg-brand-accent selection:text-white">
      
      {/* Navbar Overlay */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-display font-bold tracking-tighter text-white">
            MISSION<span className="text-brand-glow">GENAI</span>
          </div>
          <button 
            onClick={scrollToForm}
            className="px-4 py-2 bg-white/5 hover:bg-white/10 text-sm font-medium rounded-full border border-white/10 transition-colors"
          >
            Get Early Access
          </button>
        </div>
      </nav>

      <Hero onCtaClick={scrollToForm} />

      {/* About Summary */}
      <section className="py-20 border-b border-white/5">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">{CONTENT.about.headline}</h2>
          <p className="text-gray-400 leading-relaxed text-lg">{CONTENT.about.description}</p>
        </div>
      </section>

      <Features />

      {/* Target Audience / "Who Is This For" */}
      <section className="py-24 bg-gradient-to-b from-brand-dark to-black">
        <div className="container mx-auto px-6">
           <h2 className="text-3xl font-display font-bold text-center mb-16">Who Is This For?</h2>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {TARGET_AUDIENCE.map((audience, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-xl border-t border-t-white/10 hover:-translate-y-2 transition-transform duration-300">
                  {getIconForType(audience.type)}
                  <h3 className="text-lg font-bold text-white mb-2">{audience.type}</h3>
                  <p className="text-sm text-gray-500">{audience.description}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-24 relative" ref={formRef}>
        <div className="absolute inset-0 bg-brand-accent/5 pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <WaitlistForm />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
