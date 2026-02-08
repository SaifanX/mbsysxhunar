
import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
// Changed import from react-router-dom to react-router to fix missing export errors
import { Link } from 'react-router';
import Counter from '../components/Counter';

const TESTIMONIALS = [
  {
    quote: "The attention to structural detail was unlike anything we've seen. HUNAR didn't just design a home; they engineered a masterpiece that feels alive.",
    author: "Rajiv Malhotra",
    role: "CEO, TechStream",
    location: "Bangalore"
  },
  {
    quote: "Living in a space designed by HUNAR feels like living inside a piece of art. The lighting, the materials, the flow—absolute perfection.",
    author: "Sarah Jenkins",
    role: "Art Collector",
    location: "London"
  },
  {
    quote: "MBSYS engineering brought our ambitious vision to life where others said it was impossible. True partners in innovation and luxury.",
    author: "Ahmad Al-Fayed",
    role: "Real Estate Developer",
    location: "Dubai"
  }
];

const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-6 lg:px-20 py-20 overflow-hidden bg-charcoal">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="grid-line absolute inset-0"></div>
          <img 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000" 
            alt="Hero BG" 
            className="w-full h-full object-cover grayscale blur-[2px]"
          />
        </div>
        
        <div className="max-w-[1440px] w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="inline-flex items-center gap-3 text-primary animate-in fade-in slide-in-from-left-8 duration-700">
              <span className="h-px w-12 bg-primary"></span>
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Est. 2008</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight text-white uppercase animate-in fade-in slide-in-from-left-12 duration-1000">
              CRAFTING <br/> EXCELLENCE <br/>
              <span className="text-primary italic">IN STRUCTURE</span>
            </h1>
            <p className="max-w-xl text-lg text-white/70 font-light leading-relaxed animate-in fade-in slide-in-from-left-16 duration-1000 delay-200">
              Premium architectural design and turnkey construction services. Powered by MBSYS engineering to ensure precision, innovation, and timeless luxury.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 animate-in fade-in slide-in-from-left-20 duration-1000 delay-300">
              <Link to="/projects" className="bg-primary text-white px-10 py-5 text-[12px] font-bold tracking-[0.2em] uppercase hover:brightness-110 transition-all text-center">
                Explore Projects
              </Link>
              <Link to="/contact" className="border border-white/20 text-white px-10 py-5 text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-charcoal transition-all text-center">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative hidden lg:block animate-in fade-in slide-in-from-right-12 duration-1000">
            <div className="aspect-[4/5] w-full relative">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 border border-white/10" 
                alt="Architecture" 
              />
              <div className="absolute -top-4 -right-4 w-32 h-32 border-t border-r border-primary opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b border-l border-primary opacity-50"></div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-6 lg:left-20 flex items-center gap-4 animate-bounce">
          <div className="h-10 w-px bg-primary"></div>
          <span className="text-white/40 text-[10px] uppercase tracking-widest">Scroll to discover</span>
        </div>
      </section>

      {/* Powered By Section */}
      <section className="w-full bg-charcoal py-10 border-y border-white/10">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-[11px] font-bold tracking-[0.4em] uppercase text-white/40">Collaborative Excellence</span>
            <span className="h-px w-8 bg-primary"></span>
          </div>
          <p className="text-[12px] font-bold tracking-[0.2em] uppercase text-white">
            PROJECTS STRATEGICALLY <span className="text-primary">POWERED BY MBSYS</span>
          </p>
          <div className="flex items-center gap-8 opacity-40">
            <span className="font-headline text-lg font-bold">MBSYS ENGINEERING</span>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-charcoal/10">
          <div className="p-10 flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Decades of Mastery</span>
            <Counter target={15} suffix="+" />
            <p className="text-sm uppercase tracking-widest font-medium opacity-60">Years of Experience</p>
          </div>
          <div className="p-10 flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Scale & Impact</span>
            <Counter target={2} suffix="M+" />
            <p className="text-sm uppercase tracking-widest font-medium opacity-60">Sq. Ft. Delivered</p>
          </div>
          <div className="p-10 flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary">Global Standards</span>
            <Counter target={150} suffix="+" />
            <p className="text-sm uppercase tracking-widest font-medium opacity-60">Premium Projects</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-charcoal text-white py-32 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary mb-12 block text-center md:text-left">Client Narratives</span>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 relative min-h-[300px] flex items-center">
              {TESTIMONIALS.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-1000 absolute inset-0 flex flex-col justify-center ${
                    index === activeTestimonial ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <span className="font-headline text-6xl text-primary opacity-20 mb-4">"</span>
                  <p className="font-headline text-3xl md:text-5xl font-light leading-tight mb-8 uppercase">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="h-px w-12 bg-primary"></div>
                     <div>
                       <p className="text-xs font-bold uppercase tracking-[0.2em]">{testimonial.author}</p>
                       <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{testimonial.role}, {testimonial.location}</p>
                     </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="flex flex-col gap-4">
                {TESTIMONIALS.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-12 h-1 transition-all duration-500 ${
                      index === activeTestimonial ? 'bg-primary w-24' : 'bg-white/10 hover:bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-charcoal/10 pb-10">
            <div className="max-w-xl">
              <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-primary mb-4 block">Curated Works</span>
              <h2 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight uppercase">Featured Portfolio</h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 group text-[11px] font-bold tracking-[0.2em] uppercase">
              View All Projects 
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_right_alt</span>
            </Link>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="group relative overflow-hidden aspect-[3/4] bg-charcoal">
                <img 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                  src={project.image} 
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase mb-2">{project.category}</span>
                  <h4 className="text-white font-headline text-2xl uppercase font-bold">{project.title}</h4>
                  <p className="text-white/50 text-xs mt-2 uppercase tracking-widest">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="w-full bg-charcoal text-white py-32 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 flex flex-col gap-6">
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary">Methodology</span>
              <h2 className="font-headline text-4xl font-extrabold uppercase leading-tight">Blueprint to <br/> Reality</h2>
              <p className="text-white/60 font-light leading-relaxed">
                Our rigid, systematic approach ensures that every conceptual line becomes a structural truth. We bridge the gap between visionary design and engineering precision.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { icon: 'edit_note', title: 'Architectural Design', desc: 'From initial sketches to detailed 3D modeling, we create spaces that define contemporary living.' },
                { icon: 'foundation', title: 'Turnkey Construction', desc: 'Complete project management from excavation to finishing, ensuring absolute quality control.' },
                { icon: 'chair', title: 'Interior Architecture', desc: 'Meticulously crafted interiors that complement the building\'s structural soul.' },
                { icon: 'engineering', title: 'Project Consultancy', desc: 'Strategic planning and technical oversight for high-stake infrastructure ventures.' }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-4 border-l border-white/10 pl-8">
                  <span className="material-symbols-outlined text-primary text-4xl">{item.icon}</span>
                  <h4 className="font-headline text-xl font-bold uppercase">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
