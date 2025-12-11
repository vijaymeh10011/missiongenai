import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-display font-bold text-white mb-4">MissionGenAI</h3>
        <p className="text-gray-500 mb-8 text-sm">Building the world's smartest professional community.</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 text-xs text-gray-600 mb-8">
            <span>✔ Backed by Global AI Trends</span>
            <span>✔ Inspired by Industry Leaders</span>
            <span>✔ Built for Next-Gen Professionals</span>
        </div>
        
        <div className="text-xs text-gray-700">
          &copy; {new Date().getFullYear()} MissionGenAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
