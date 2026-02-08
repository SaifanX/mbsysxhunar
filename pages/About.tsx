
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Identity Section */}
      <section className="relative min-h-[70vh] flex items-center bg-charcoal text-white overflow-hidden pt-24">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal to-transparent z-10"></div>
          <img 
            alt="About Hero" 
            className="w-full h-full object-cover grayscale brightness-50" 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          />
        </div>
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 md:px-12 w-full">
          <div className="max-w-4xl border-l border-primary/50 pl-8 md:pl-16">
            <span className="text-primary text-xs uppercase tracking-[0.4em] font-bold mb-6 block">Our Identity</span>
            <h1 className="text-5xl md:text-8xl font-light leading-[1.1] mb-8 uppercase">
              The Synthesis of <br/>
              <span className="font-bold text-primary italic">Form & Infrastructure.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-xl font-light leading-relaxed">
              HUNAR represents the pinnacle of architectural interiors, fueled by a strategic partnership with MBSYS to deliver technical excellence and structural integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-8">Engineering Integration</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-charcoal leading-tight mb-10 font-headline uppercase">
                Design Mastery <br/> Meets Engineering.
              </h3>
              <div className="space-y-8 text-charcoal/70 leading-relaxed font-light">
                <p>
                  At its core, HUNAR is the creative soul of our operation. Our engineering is powered by MBSYS, providing the necessary backbone—a robust technical infrastructure that ensures every avant-garde design is backed by world-class precision.
                </p>
                <p>
                  This synergy allows us to push the boundaries of what's possible in luxury interiors, bridging the gap between artistic vision and technical feasibility.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[4/5] bg-charcoal overflow-hidden group relative">
                  <img 
                    alt="Creative Studio" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
                </div>
                <div className="p-6 border border-charcoal/5 bg-bg-light">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-3">01. Creative Studio</h4>
                  <p className="text-[10px] text-charcoal/60 leading-relaxed uppercase tracking-widest">Spatial honesty, material curation, and bespoke detailing.</p>
                </div>
              </div>
              <div className="space-y-4 mt-12">
                <div className="aspect-[4/5] bg-charcoal overflow-hidden group relative">
                  <img 
                    alt="Technical" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                    src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800"
                  />
                  <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
                </div>
                <div className="p-6 border border-charcoal/5 bg-bg-light">
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-3">02. Tech Infrastructure</h4>
                  <p className="text-[10px] text-charcoal/60 leading-relaxed uppercase tracking-widest">Powered by MBSYS utilizing BIM and precision engineering.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-charcoal text-white overflow-hidden relative border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="material-symbols-outlined text-primary text-6xl mb-8 opacity-50">format_quote</span>
          <blockquote className="text-2xl md:text-5xl font-light leading-tight mb-12 font-headline uppercase italic">
            "Architecture is where the poetry of space meets the <span className="text-primary font-medium">discipline of physics</span>. Our partnership with MBSYS ensures neither is sacrificed."
          </blockquote>
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-px bg-primary"></div>
            <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-white/60">Ar. Samir Al-Hunar — Design Director</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
