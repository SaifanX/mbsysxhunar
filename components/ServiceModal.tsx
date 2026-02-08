import React from 'react';
import { Service } from '../types';
import { Link } from 'react-router';

interface ServiceModalProps {
  service: Service | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  // Personalized high-end concierge message
  const whatsappMessage = `Hello HUNAR Team, I am interested in your ${service.title} services. I would like to discuss a potential project and understand your process for ${service.title.toLowerCase()} specifically. Looking forward to hearing from you.`;
  const whatsappUrl = `https://wa.me/919886374122?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Create a URL-safe version of the service title for the contact form pre-selection
  const contactLink = `/contact?service=${encodeURIComponent(service.title)}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
      <div 
        className="absolute inset-0 bg-charcoal/95 backdrop-blur-md" 
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl bg-white overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] animate-in slide-in-from-bottom-8 duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-12 h-12 bg-charcoal text-white flex items-center justify-center hover:bg-primary transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        <div className="w-full md:w-2/5 relative h-48 md:h-auto overflow-hidden bg-charcoal">
          <img 
            src={service.image} 
            alt={service.title} 
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <span className="text-[180px] font-black text-white/5 select-none">{service.index}</span>
          </div>
        </div>

        <div className="w-full md:w-3/5 p-8 md:p-16 flex flex-col overflow-y-auto bg-white">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-primary">{service.icon}</span>
                <span className="text-[10px] font-bold tracking-[0.4em] text-primary uppercase">Expertise {service.index}</span>
            </div>
            <h2 className="text-4xl font-headline font-extrabold text-charcoal uppercase leading-none mb-6">
              {service.title}
            </h2>
            <p className="text-lg text-charcoal/60 font-light leading-relaxed">
              {service.description}
            </p>
          </div>

          <div className="space-y-12 text-charcoal/70 leading-relaxed font-light">
            <section>
              <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] mb-4 border-b border-charcoal/5 pb-2">Our Strategic Approach</h4>
              <p className="text-sm">
                Execution of "{service.title}" at HUNAR is governed by the MBSYS quality framework. We integrate aesthetic ambition with technical viability through advanced simulations, rigorous material selection, and site-specific architectural coordination.
              </p>
            </section>

            <section>
              <h4 className="text-[10px] font-bold text-charcoal uppercase tracking-[0.2em] mb-4 border-b border-charcoal/5 pb-2">Key Deliverables</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[11px] uppercase tracking-widest font-medium">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Technical Precision</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Curated Materiality</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Engineering Integration</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-primary"></span> Quality Assurance</li>
              </ul>
            </section>
          </div>

          <div className="mt-16 pt-8 border-t border-charcoal/5 flex flex-col sm:flex-row gap-4">
            <Link 
              to={contactLink} 
              onClick={onClose}
              className="flex-1 bg-charcoal text-white py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-primary transition-all text-center"
            >
              Fill Inquiry Form
            </Link>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 border border-charcoal text-charcoal py-5 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-charcoal hover:text-white transition-all text-center flex items-center justify-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">chat</span>
              WhatsApp Inquiry
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;