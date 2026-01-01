import React from 'react';
import { APP_DATA } from '../constants';
import { FadeIn } from './ui/FadeIn';

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <FadeIn>
            <h2 className="text-sm font-mono text-zinc-500 tracking-widest uppercase mb-2">Chronology</h2>
            <h3 className="text-3xl font-bold text-white">Experience Log</h3>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800 -translate-x-1/2 md:translate-x-0 hidden md:block" />
          
          <div className="space-y-12">
            {APP_DATA.experience.map((role, index) => (
              <div key={role.id} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-zinc-950 border-2 border-zinc-600 rounded-full -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 group-hover:border-white transition-colors hidden md:block" />

                {/* Content Box */}
                <div className="w-full md:w-1/2">
                   <FadeIn delay={index * 100} direction={index % 2 === 0 ? 'left' : 'right'}>
                    <div className={`relative p-6 bg-zinc-900/40 border border-zinc-800 hover:border-zinc-600 transition-colors duration-300 rounded-xl ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                      <div className="flex flex-col mb-4">
                        <span className="text-xs font-mono text-primary-400 mb-1">{role.period}</span>
                        <h3 className="text-xl font-bold text-white">{role.title}</h3>
                        <div className="text-zinc-400 text-sm font-medium">{role.company}</div>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {role.achievements.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm text-zinc-400 leading-relaxed">
                            <span className="text-zinc-600 mt-1.5">▪</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-zinc-800/50">
                        {role.techStack.map(tech => (
                          <span key={tech} className="text-[10px] font-mono text-zinc-500 bg-zinc-950 px-1.5 py-0.5 rounded border border-zinc-800">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                   </FadeIn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};