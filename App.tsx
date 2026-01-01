import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { AIAutomation } from './components/AIAutomation';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Background } from './components/ui/Background';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] relative overflow-x-hidden selection:bg-white/10 selection:text-white">
      {/* Animated Neural Background */}
      <Background />

      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Timeline />
          <Projects />
          <AIAutomation />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;