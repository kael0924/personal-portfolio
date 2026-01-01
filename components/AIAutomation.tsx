import React from 'react';
import { APP_DATA } from '../constants';
import { FadeIn } from './ui/FadeIn';
import { Workflow, Server, BrainCircuit, Database, ArrowRight } from 'lucide-react';
import { CaseStudyStep } from '../types';

const icons = {
  workflow: Workflow,
  server: Server,
  ai: BrainCircuit,
  database: Database
};

export const AIAutomation: React.FC = () => {
  return (
    <section id="ai-automation" className="py-24 bg-zinc-950/40 backdrop-blur-sm text-white overflow-hidden relative">
      {/* Abstract Background - kept subtle */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[128px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[128px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">AI Automation & Agents</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              Going beyond simple scripts. I architect intelligent agents using n8n and LLMs to autonomously handle complex business logic.
            </p>
          </FadeIn>
        </div>

        {/* Workflow Visualization */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-0 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-zinc-800 -z-10 transform -translate-y-1/2"></div>

            {APP_DATA.aiCaseStudy.map((step, index) => {
              const Icon = icons[step.iconName as keyof typeof icons];
              return (
                <FadeIn key={index} delay={index * 200} className="relative">
                  <div className="flex flex-col items-center text-center p-4">
                    <div className="w-20 h-20 bg-zinc-900/80 backdrop-blur border border-zinc-700 rounded-2xl flex items-center justify-center mb-6 shadow-xl relative group hover:border-primary-500 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-primary-400 group-hover:text-primary-300 transition-colors" />
                      {/* Connector Arrow for Mobile */}
                      {index < APP_DATA.aiCaseStudy.length - 1 && (
                        <div className="md:hidden absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-zinc-600">
                          <ArrowRight className="h-5 w-5 rotate-90" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};