import React from 'react';
import { ArrowRight, ShieldCheck, Lock } from 'lucide-react';
import { CONTENT } from '../constants';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-glow/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-brand-glow/30 text-brand-glow text-xs font-semibold tracking-wider mb-8 animate-float">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-glow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-glow"></span>
          </span>
          ACCEPTING EARLY ACCESS
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
          <span className="bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Where Future Innovators
          </span>
          <br />
          <span className="bg-gradient-to-r from-brand-accent to-brand-glow bg-clip-text text-transparent text-glow">
            Connect Before the World Does.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {CONTENT.hero.subheadline}
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={onCtaClick}
            className="group relative px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-brand-glow transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]"
          >
            {CONTENT.hero.ctaPrimary}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button className="px-8 py-4 glass-panel rounded-full text-white font-semibold hover:bg-white/10 transition-colors border border-white/20">
            {CONTENT.hero.ctaSecondary}
          </button>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-gray-500">
          {CONTENT.hero.badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              {index === 2 ? <ShieldCheck className="w-4 h-4 text-brand-glow" /> : <Lock className="w-4 h-4 text-brand-accent" />}
              {badge}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
