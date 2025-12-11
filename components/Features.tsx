import React from 'react';
import { Brain, Users, Briefcase, Lock, Network, Zap, Target, Search, Fingerprint } from 'lucide-react';
import { CONTENT } from '../constants';
import { SkillGraphViz } from './SkillGraphViz';

const features = [
  {
    icon: <Brain className="w-6 h-6 text-brand-glow" />,
    title: "AI-Generated Insights",
    desc: "From discussions, jobs, startup ideas & industry talk — AI generates summaries you can instantly apply."
  },
  {
    icon: <Network className="w-6 h-6 text-brand-accent" />,
    title: "Smart Connections",
    desc: "AI-matchmaking connects you with people who matter: Hiring managers, Founders, Investors."
  },
  {
    icon: <Briefcase className="w-6 h-6 text-green-400" />,
    title: "Industry-Verified Jobs",
    desc: "Companies & HR teams can share private job openings directly with verified talent."
  },
  {
    icon: <Lock className="w-6 h-6 text-rose-400" />,
    title: "Invite-Only Access",
    desc: "Every profile is reviewed manually + AI-verified for credibility. No bots."
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        
        {/* Why Join Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Why Join MissionGenAI?</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The first AI-Powered Knowledge Community. We don't just connect you; we engineer your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((f, i) => (
            <div key={i} className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-colors border border-white/5">
              <div className="mb-6 p-3 bg-white/5 rounded-lg inline-block">{f.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-white">{f.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* How AI Works - Two Column with Viz */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold mb-8">
              <span className="text-brand-glow">How AI Works</span> on MissionGenAI
            </h2>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <div className="mt-1"><Zap className="w-5 h-5 text-yellow-400" /></div>
                <div>
                  <h4 className="text-lg font-bold text-white">AI-Curated Feed</h4>
                  <p className="text-gray-400 text-sm">Your feed adapts to your profession, interests & industry instantly.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><Target className="w-5 h-5 text-brand-glow" /></div>
                <div>
                  <h4 className="text-lg font-bold text-white">AI-Powered Skill Graph</h4>
                  <p className="text-gray-400 text-sm">The platform maps your skills → shows next learning steps → recommends people & opportunities.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="mt-1"><Fingerprint className="w-5 h-5 text-brand-accent" /></div>
                <div>
                  <h4 className="text-lg font-bold text-white">AI-Verified Profiles</h4>
                  <p className="text-gray-400 text-sm">Authenticity ensured. No bots, no fake accounts. Trust is our currency.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="relative">
             {/* Decorative backing */}
             <div className="absolute inset-0 bg-brand-accent/20 blur-[80px] rounded-full"></div>
             
             {/* Card visualizing the graph */}
             <div className="glass-panel p-6 rounded-2xl border border-brand-glow/20 relative z-10">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                   <div className="text-sm font-semibold text-white">Your Professional DNA</div>
                   <div className="text-xs text-brand-glow px-2 py-1 bg-brand-glow/10 rounded">AI ANALYZED</div>
                </div>
                <SkillGraphViz />
                <div className="mt-6 flex gap-2">
                   <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-brand-accent to-brand-glow w-[75%]"></div>
                   </div>
                   <span className="text-xs text-gray-400">Match Strength</span>
                </div>
             </div>
          </div>
        </div>

        {/* Specialties Badges */}
        <div className="mt-32">
          <div className="flex flex-wrap justify-center gap-3">
            {CONTENT.specialties.map((spec, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-white/10 text-xs md:text-sm text-gray-400 hover:text-white hover:border-brand-glow/50 transition-all cursor-default">
                {spec}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
