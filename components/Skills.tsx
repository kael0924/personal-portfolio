import React from 'react';
import { APP_DATA } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const Skills: React.FC = () => {
  // Flatten skills for the marquee
  const allSkills = APP_DATA.skills.flatMap(s => s.skills);
  // Duplicate for infinite scroll effect
  const marqueeSkills = [...allSkills, ...allSkills, ...allSkills];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <FadeIn>
          <h2 className="text-sm font-mono text-zinc-500 tracking-widest uppercase mb-2">Technological Arsenal</h2>
          <h3 className="text-3xl font-bold text-white">Full-Stack & Automation</h3>
        </FadeIn>
      </div>

      <div className="relative w-full border-y border-zinc-900 bg-zinc-900/20 py-12 backdrop-blur-sm">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10" />

        {/* Row 1 - Left */}
        <div className="flex gap-8 mb-8 animate-marquee whitespace-nowrap">
          {marqueeSkills.map((skill, i) => (
            <div key={`r1-${i}`} className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 font-medium text-lg min-w-[150px] shadow-lg">
              {skill}
            </div>
          ))}
        </div>

        {/* Row 2 - Right (Reverse) */}
        <div className="flex gap-8 animate-marquee-reverse whitespace-nowrap">
           {marqueeSkills.map((skill, i) => (
            <div key={`r2-${i}`} className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-300 font-medium text-lg min-w-[150px] shadow-lg">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};