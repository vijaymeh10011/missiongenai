import React, { useState } from 'react';
import { Loader2, CheckCircle, Sparkles } from 'lucide-react';
import { generatePersonalizedInvite } from '../services/geminiService';
import { WaitlistFormData } from '../types';

export const WaitlistForm: React.FC = () => {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: '',
    linkedin: '',
    profession: '',
    reason: '',
  });
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'success'>('idle');
  const [aiFeedback, setAiFeedback] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('analyzing');

    // Simulate analysis time + actual API call
    const feedback = await generatePersonalizedInvite(formData.profession, formData.reason);
    
    // Artificial delay for UX "processing" feel if API is too fast
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setAiFeedback(feedback);
    setStatus('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (status === 'success') {
    return (
      <div className="max-w-xl mx-auto p-8 glass-panel rounded-2xl text-center border-t-4 border-t-brand-glow animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <h3 className="text-3xl font-display font-bold mb-4">Spot Secured</h3>
        <p className="text-gray-300 mb-6">You have been added to the priority queue. Early invites will be rolled out in batches.</p>
        
        {aiFeedback && (
          <div className="bg-brand-accent/10 border border-brand-accent/30 p-6 rounded-xl text-left">
            <div className="flex items-center gap-2 mb-2 text-brand-glow font-semibold text-sm tracking-wider">
              <Sparkles className="w-4 h-4" />
              AI PROFILE TRAJECTORY
            </div>
            <p className="text-white italic leading-relaxed">"{aiFeedback}"</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div id="waitlist-form" className="max-w-2xl mx-auto glass-panel p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-display font-bold mb-2">Secure Your Spot</h2>
        <p className="text-gray-400">Limited early access. Membership approvals start soon.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-glow transition-colors"
              placeholder="Elon Musk"
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-glow transition-colors"
              placeholder="elon@future.com"
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">LinkedIn URL <span className="text-xs text-gray-600">(Required for verification)</span></label>
          <input
            type="url"
            name="linkedin"
            required
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-glow transition-colors"
            placeholder="linkedin.com/in/username"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Current Role / Profession</label>
          <input
            type="text"
            name="profession"
            required
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-glow transition-colors"
            placeholder="e.g. Senior Product Designer, AI Researcher"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Why do you want to join?</label>
          <textarea
            name="reason"
            required
            rows={3}
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-glow transition-colors"
            placeholder="I want to connect with mentors in Generative AI..."
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">Invite Code (Optional)</label>
          <input
            type="text"
            name="inviteCode"
            className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-glow transition-colors tracking-widest"
            placeholder="FUTURE-2025"
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={status === 'analyzing'}
          className="w-full py-4 bg-gradient-to-r from-brand-accent to-brand-glow text-white font-bold rounded-xl shadow-lg hover:shadow-brand-glow/50 transition-all duration-300 flex items-center justify-center gap-2"
        >
          {status === 'analyzing' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              AI Verifying Profile...
            </>
          ) : (
            'Join the Waitlist'
          )}
        </button>
      </form>
    </div>
  );
};
