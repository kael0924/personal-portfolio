import React, { useState, useEffect } from 'react';
import { APP_DATA } from '../constants';
import { FadeIn } from './ui/FadeIn';
import { Github, ArrowUpRight, Disc, Zap, Layers } from 'lucide-react';
import { ProjectCategory } from '../types';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'all'>('all');
  const [selectedId, setSelectedId] = useState<string>(APP_DATA.projects[0].id);

  const categories: { id: ProjectCategory | 'all'; label: string }[] = [
    { id: 'all', label: 'ALL_SYSTEMS' },
    { id: 'no-ai', label: 'MANUAL' },
    { id: 'ai-assisted', label: 'AI_AUGMENTED' },
    { id: 'n8n', label: 'WORKFLOWS' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? APP_DATA.projects 
    : APP_DATA.projects.filter(p => p.category === activeFilter);

  // Ensure selection remains valid when filtering
  useEffect(() => {
    if (filteredProjects.length > 0) {
      const currentExists = filteredProjects.find(p => p.id === selectedId);
      if (!currentExists) {
        setSelectedId(filteredProjects[0].id);
      }
    }
  }, [activeFilter, filteredProjects, selectedId]);

  const activeProject = filteredProjects.find(p => p.id === selectedId) || filteredProjects[0];

  return (
    <section id="projects" className="py-24 relative bg-zinc-950/40 backdrop-blur-sm border-t border-zinc-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-zinc-800 pb-8">
          <FadeIn>
             <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"/>
                <h2 className="text-xs font-mono text-zinc-400 tracking-widest uppercase">System Deployments</h2>
             </div>
             <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Operations</h3>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-300 border ${
                    activeFilter === cat.id
                      ? 'bg-zinc-100 text-zinc-950 border-zinc-100 font-bold'
                      : 'bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-white'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Desktop Dashboard View */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-start min-h-[500px]">
          
          {/* Project List (Sidebar) */}
          <div className="col-span-4 flex flex-col gap-2 sticky top-24">
            {filteredProjects.map((project) => (
              <button
                key={project.id}
                onClick={() => setSelectedId(project.id)}
                className={`group text-left p-4 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                  selectedId === project.id 
                    ? 'bg-zinc-900/80 border-zinc-700 shadow-lg' 
                    : 'bg-transparent border-transparent hover:bg-zinc-900/30 hover:border-zinc-800'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                   <span className={`text-[10px] font-mono uppercase tracking-wider border px-1.5 py-0.5 rounded ${selectedId === project.id ? 'text-primary-400 border-primary-900/30 bg-primary-900/10' : 'text-zinc-600 border-zinc-800'}`}>
                      {project.category}
                   </span>
                   {selectedId === project.id && <Disc className="w-4 h-4 text-emerald-500 animate-spin" />}
                </div>
                <h4 className={`text-base font-bold mb-1 transition-colors ${selectedId === project.id ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                  {project.title}
                </h4>
                
                {/* Active Indicator Line */}
                {selectedId === project.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                )}
              </button>
            ))}
          </div>

          {/* Project Detail (Main View) */}
          <div className="col-span-8">
             {activeProject && (
               <div key={activeProject.id} className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-500">
                  
                  {/* Image Section - Aspect Video for consistency */}
                  <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-800 group">
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent z-10" />
                    
                    <img 
                      src={activeProject.imageUrl} 
                      alt={activeProject.title} 
                      className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    <div className="absolute top-4 right-4 z-20">
                       <div className="flex gap-2">
                           {activeProject.links.github && (
                             <a 
                               href={activeProject.links.github} 
                               className="p-2 bg-zinc-950/50 backdrop-blur text-white hover:bg-white hover:text-black rounded-lg border border-white/10 transition-all"
                               aria-label="View Code"
                              >
                               <Github className="w-4 h-4" />
                             </a>
                           )}
                           {activeProject.links.demo && (
                             <a 
                               href={activeProject.links.demo} 
                               className="px-3 py-2 flex items-center gap-2 bg-white text-zinc-950 hover:bg-zinc-200 rounded-lg font-bold text-xs transition-all shadow-lg"
                             >
                               <span>Live Demo</span>
                               <ArrowUpRight className="w-3 h-3" />
                             </a>
                           )}
                        </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-8">
                     <div className="flex flex-col mb-6">
                        <div className="flex items-baseline gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white font-mono">{activeProject.title}</h3>
                          <span className="text-zinc-500 text-sm">{activeProject.role}</span>
                        </div>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">{activeProject.summary}</p>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-zinc-800/50">
                        {/* Tech Stack */}
                        <div>
                           <h4 className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mb-3">Technology Stack</h4>
                           <div className="flex flex-wrap gap-2">
                              {activeProject.techStack.map(tech => (
                                <span key={tech} className="px-2 py-1 bg-zinc-950 border border-zinc-800 text-zinc-300 text-[11px] font-mono rounded">
                                  {tech}
                                </span>
                              ))}
                           </div>
                        </div>

                        {/* Outcomes */}
                        <div>
                           <h4 className="text-[10px] font-mono text-emerald-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                             <Zap className="w-3 h-3" /> Efficiency Impact
                           </h4>
                           <p className="text-sm text-zinc-300 font-medium italic">
                             "{activeProject.outcomes}"
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
             )}
          </div>
        </div>

        {/* Mobile / Tablet View (Standard Compact Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:hidden gap-6">
           {filteredProjects.map((project, index) => (
             <FadeIn key={project.id} delay={index * 100}>
               <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-2xl overflow-hidden hover:border-zinc-600 transition-colors group flex flex-col h-full">
                 <div className="h-48 overflow-hidden relative border-b border-zinc-800">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    />
                    <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-black/60 backdrop-blur rounded text-[10px] font-mono text-white border border-white/10">
                      {project.category}
                    </div>
                 </div>
                 <div className="p-5 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-3">
                       <h3 className="text-lg font-bold text-white leading-tight">{project.title}</h3>
                       <div className="flex gap-2">
                          {project.links.demo && <a href={project.links.demo} className="text-zinc-400 hover:text-white"><ArrowUpRight className="w-4 h-4"/></a>}
                       </div>
                    </div>
                    
                    <p className="text-sm text-zinc-400 mb-4 line-clamp-3">{project.summary}</p>
                    
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.techStack.slice(0,3).map(tech => (
                          <span key={tech} className="text-[10px] font-mono text-zinc-500 border border-zinc-800 px-1.5 py-0.5 rounded bg-zinc-950">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-zinc-800 flex items-center gap-2">
                         <Zap className="w-3 h-3 text-emerald-500 shrink-0" />
                         <span className="text-xs text-zinc-300 font-medium line-clamp-1">
                           {project.outcomes}
                         </span>
                      </div>
                    </div>
                 </div>
               </div>
             </FadeIn>
           ))}
        </div>

      </div>
    </section>
  );
};