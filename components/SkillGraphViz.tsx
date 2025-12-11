import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: 'Leadership', A: 120, fullMark: 150 },
  { subject: 'AI Ethics', A: 98, fullMark: 150 },
  { subject: 'Innovation', A: 86, fullMark: 150 },
  { subject: 'Strategy', A: 99, fullMark: 150 },
  { subject: 'Tech', A: 85, fullMark: 150 },
  { subject: 'Network', A: 65, fullMark: 150 },
];

export const SkillGraphViz: React.FC = () => {
  return (
    <div className="h-64 w-full relative">
      <div className="absolute top-0 left-0 text-xs font-mono text-brand-glow">LIVE TRAJECTORY</div>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid stroke="#334155" />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
          <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
          <Radar
            name="Skill Profile"
            dataKey="A"
            stroke="#22d3ee"
            strokeWidth={2}
            fill="#7c3aed"
            fillOpacity={0.3}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
