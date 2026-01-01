import React from 'react';
import { APP_DATA } from '../constants';
import { FadeIn } from './ui/FadeIn';
import { SpotlightCard } from './ui/SpotlightCard';
import { Cpu, Zap, Code, Database, Layers, Terminal } from 'lucide-react';

const icons = [Cpu, Zap, Code];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16">
          <FadeIn>
             <h2 className="text-sm font-mono text-zinc-500 tracking-widest uppercase mb-2">Operational Directive</h2>
             <h3 className="text-4xl font-bold text-white mb-6">About The Engineer</h3>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
          
          {/* Main Bio Card */}
          <div className="md:col-span-2 row-span-2">
            <SpotlightCard className="h-full">
              <div className="p-10 flex flex-col h-full justify-between relative z-10">
                <div>
                   <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-zinc-700 text-xs font-mono text-zinc-400">
                    <Terminal className="w-3 h-3" />
                    <span>/usr/bin/bio</span>
                  </div>
                  <p className="text-xl md:text-2xl font-light text-zinc-200 leading-relaxed mb-6">
                    {APP_DATA.profile.bio}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm font-mono text-zinc-500 pt-8 border-t border-zinc-800">
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    Status: Online
                  </span>
                  <span>•</span>
                  <span>Latency: 24ms</span>
                </div>
              </div>
              {/* Decorative Mesh */}
              <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-zinc-800/20 to-transparent pointer-events-none" />
            </SpotlightCard>
          </div>

          {/* Stat Card 1 */}
          <SpotlightCard>
            <div className="p-8 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-300 border border-zinc-700">
                <Database className="w-5 h-5" />
              </div>
              <div className="mt-8">
                <div className="text-4xl font-bold text-white mb-2">50k+</div>
                <div className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Docs / Month</div>
              </div>
            </div>
          </SpotlightCard>

          {/* Stat Card 2 */}
          <SpotlightCard>
            <div className="p-8 h-full flex flex-col justify-between">
              <div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-300 border border-zinc-700">
                 <Layers className="w-5 h-5" />
              </div>
              <div className="mt-8">
                <div className="text-4xl font-bold text-white mb-2">85%</div>
                <div className="text-sm text-zinc-500 font-mono uppercase tracking-wider">Auto Rate</div>
              </div>
            </div>
          </SpotlightCard>

          {/* Core Values */}
          {APP_DATA.profile.values.map((value, index) => {
             const Icon = icons[index % icons.length];
             return (
              <SpotlightCard key={index} className="md:col-span-1">
                <div className="p-8 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <Icon className="w-6 h-6 text-zinc-400" />
                    <span className="text-xs font-mono text-zinc-700">0{index + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-3">{value.title}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </SpotlightCard>
             )
          })}
        </div>
      </div>
    </section>
  );
};