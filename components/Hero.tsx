import React from 'react';
import { ArrowRight, ChevronDown, Terminal } from 'lucide-react';
import { APP_DATA } from '../constants';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary-500/20 blur-[120px] rounded-full opacity-20 pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-start max-w-4xl">
          
          <FadeIn delay={0}>
             <div className="flex items-center gap-3 mb-8">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800/80 text-zinc-400 text-xs font-mono backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  OPEN_TO_WORK
                </div>
                <div className="text-primary-400 text-xs font-mono flex items-center gap-2">
                  <Terminal className="w-3 h-3" />
                  <span>Hello_World();</span>
                </div>
             </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6 leading-[0.9]">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-500">{APP_DATA.profile.name}</span>.
            </h1>
            <h2 className="text-2xl md:text-4xl font-light text-zinc-500 mb-8 tracking-tight">
              {APP_DATA.profile.title}
            </h2>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-xl text-zinc-400 mb-10 leading-relaxed max-w-2xl">
              {APP_DATA.profile.tagline}
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-zinc-100 text-zinc-950 font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative flex items-center gap-2">
                  View Projects <ArrowRight className="w-4 h-4" />
                </span>
              </button>
              
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-transparent border border-zinc-800 text-zinc-300 font-medium rounded-full hover:bg-zinc-900 transition-all hover:text-white"
              >
                Explore Profile
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-zinc-600">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
};