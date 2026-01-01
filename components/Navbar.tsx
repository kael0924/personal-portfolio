import React, { useState, useEffect } from 'react';
import { APP_DATA } from '../constants';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = APP_DATA.navigation.map(nav => nav.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 200;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Main Navbar Pill */}
      <div className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-none'}`}>
        <nav className="pointer-events-auto flex items-center gap-1 bg-zinc-900/80 backdrop-blur-xl border border-white/10 px-3 py-2 rounded-full shadow-2xl shadow-black/50 ring-1 ring-white/5 transition-all duration-300 hover:scale-[1.02] hover:bg-zinc-900/90">
          
          {/* Brand Name (Desktop) */}
          <div className="hidden md:flex items-center gap-2 pl-3 pr-4 border-r border-white/10 mr-1">
             <div className="w-2 h-2 bg-primary-500 rounded-full" />
             <span className="font-bold text-white tracking-tight text-sm">{APP_DATA.profile.name}</span>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="md:hidden px-3 py-2 text-zinc-400 hover:text-white transition-colors flex items-center gap-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu className="w-5 h-5" />
            <span className="font-bold text-white text-sm">{APP_DATA.profile.name}</span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {APP_DATA.navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'text-zinc-950 bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]' 
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
          
          <div className="w-px h-6 bg-zinc-800 mx-2 hidden md:block" />
          
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="hidden md:block px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-full hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/20"
          >
            Hire Me
          </button>
        </nav>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-zinc-950/95 backdrop-blur-3xl transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full p-8">
           {/* Mobile Header */}
           <div className="flex justify-between items-center mb-12">
              <div className="text-xl font-bold text-white tracking-tighter">
                {APP_DATA.profile.name}
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-3 rounded-full bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-600 transition-colors"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
           </div>

           {/* Mobile Links */}
           <div className="flex flex-col flex-1 justify-center gap-6">
             {APP_DATA.navigation.map((item, index) => (
                <a 
                   key={item.label}
                   href={item.href}
                   onClick={(e) => handleNavClick(e, item.href)}
                   className="text-4xl font-bold text-zinc-500 hover:text-white hover:pl-4 transition-all duration-300 flex items-center gap-4 group"
                   style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <span className="text-sm font-mono text-zinc-800 group-hover:text-primary-500 transition-colors">0{index + 1}</span>
                  {item.label}
                </a>
              ))}
           </div>

           {/* Mobile Footer Action */}
           <div className="mt-auto pt-8 border-t border-zinc-900">
              <p className="text-zinc-500 text-sm font-mono mb-4">READY TO DEPLOY?</p>
              <button 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }} 
                className="w-full py-4 text-lg font-bold bg-primary-600 text-white rounded-xl hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/20"
              >
                Initiate Contact
              </button>
           </div>
        </div>
      </div>
    </>
  );
};