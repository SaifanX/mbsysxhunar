import React from 'react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-charcoal/95 backdrop-blur-md" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-7xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[95vh] animate-in slide-in-from-bottom-8 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[110] w-12 h-12 bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="w-full md:w-3/5 relative h-[400px] md:h-auto overflow-hidden bg-charcoal group">
          <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-90 animate-in fade-in duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent pointer-events-none"></div>
        </div>

        <div className="w-full md:w-2/5 p-8 md:p-14 flex flex-col overflow-y-auto bg-white border-l border-charcoal/5">
          <div className="mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] text-primary uppercase mb-4 block">
              {project.category}
            </span>
            <h2 className="text-3xl lg:text-4xl font-headline font-extrabold text-charcoal uppercase leading-none mb-4">
              {project.title}
            </h2>
            <div className="flex items-center gap-2 text-charcoal/40 mb-8">
              <span className="material-symbols-outlined text-sm">location_on</span>
              <span className="text-xs uppercase tracking-widest font-medium">{project.location}</span>
            </div>
          </div>

          <div className="space-y-10 text-charcoal/70 leading-relaxed font-light mb-12">
            <section>
              <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] mb-3 border-b border-charcoal/5 pb-2">Overview</h4>
              <p className="text-sm">{project.description}</p>
            </section>

            <section>
              <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] mb-3 border-b border-charcoal/5 pb-2">MBSYS Integration</h4>
              <p className="text-sm">
                Utilizing advanced BIM modeling, our team ensured that {project.title} met the most rigorous engineering standards. Our coordination process focuses on structural integrity and MEP synchronization that define the core of our architectural work.
              </p>
            </section>

            <section>
              <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] mb-3 border-b border-charcoal/5 pb-2">Finishes</h4>
              <div className="flex flex-wrap gap-2 mt-4">
                {['Titanium Mesh', 'Charcoal Basalt', 'Raw Oak Plywood', 'Structural Steel', 'Dimmable Cove Lighting'].map((mat) => (
                  <span key={mat} className="text-[8px] uppercase tracking-wider bg-charcoal/5 px-2.5 py-1 font-semibold">{mat}</span>
                ))}
              </div>
            </section>
          </div>

          <div className="pt-8 border-t border-charcoal/5 mt-auto">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-primary flex items-center justify-center">
                  <span className="text-primary font-bold text-[10px]">M</span>
                </div>
                <div>
                  <span className="block text-[7px] font-bold uppercase tracking-[0.2em] text-charcoal/40 leading-tight">Project Powered by</span>
                  <span className="block text-[9px] font-bold uppercase tracking-[0.1em] text-charcoal">MBSYS Engineering</span>
                </div>
              </div>
              <button className="bg-charcoal text-white px-5 py-3 text-[8px] font-bold uppercase tracking-widest hover:bg-primary transition-all">
                Request Full Case
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;