import React, { useState, useEffect } from 'react';
import { Button } from './ui/Button';
import { FadeIn } from './ui/FadeIn';
import { Mail, Github, Linkedin, Twitter, ArrowUp, Copy, Check } from 'lucide-react';
import { APP_DATA } from '../constants';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [time, setTime] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        timeZoneName: 'short'
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message transmitted. I will respond shortly.");
    setFormData({ name: '', email: '', message: '' });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("kimmendoza0131@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-32 pb-12 bg-zinc-950/40 backdrop-blur-sm border-t border-zinc-800/50 overflow-hidden">
      {/* Decorative large text background */}
      <div className="absolute top-20 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
        <div className="text-[20vw] font-bold leading-none text-white whitespace-nowrap animate-marquee">
          INITIATE CONTACT INITIATE CONTACT
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left Column: Call to Action */}
          <div className="flex flex-col justify-between">
            <FadeIn>
              <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tighter mb-8 leading-[0.9]">
                Let's Build <br/>
                <span className="text-zinc-600">The Future.</span>
              </h2>
              <p className="text-xl text-zinc-400 max-w-md mb-12">
                Have a complex automation challenge or a full-stack idea? 
                I turn "impossible" into "deployed".
              </p>
              
              <div className="flex items-center gap-4 mb-8 lg:mb-0">
                <button 
                  onClick={copyEmail}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all"
                >
                  <Mail className="w-5 h-5" />
                  <span className="font-mono">kimmendoza0131@gmail.com</span>
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 opacity-50 group-hover:opacity-100" />}
                </button>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: The Terminal Form */}
          <FadeIn delay={200}>
            <div className="bg-zinc-900/30 backdrop-blur-md p-1 rounded-2xl border border-zinc-800/50">
              <div className="bg-zinc-950/80 rounded-xl p-8 border border-zinc-800/50">
                <div className="flex items-center gap-2 mb-6 border-b border-zinc-900 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                  <span className="ml-auto text-xs font-mono text-zinc-600">contact.sh</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all font-mono text-sm"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all font-mono text-sm"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Input message stream..."
                      required
                      className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 text-white placeholder-zinc-600 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/50 transition-all font-mono text-sm resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <Button type="submit" fullWidth className="group">
                    <span className="font-mono">EXECUTE_SEND()</span>
                  </Button>
                </form>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-zinc-500">
             <span className="font-mono">{APP_DATA.profile.name} &copy; {new Date().getFullYear()}</span>
             <span className="hidden md:inline w-1 h-1 bg-zinc-800 rounded-full" />
             <span className="font-mono flex items-center gap-2">
               <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
               Local Time: {time}
             </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors transform hover:-translate-y-1"><Github className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors transform hover:-translate-y-1"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors transform hover:-translate-y-1"><Twitter className="w-5 h-5" /></a>
            
            <button 
              onClick={scrollToTop}
              className="ml-6 p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-600 transition-all group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};