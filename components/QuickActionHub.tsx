
import React, { useState } from 'react';
// Changed import from react-router-dom to react-router to fix missing export errors
import { Link } from 'react-router';

const QuickActionHub: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    {
      icon: 'call',
      label: 'Direct Line',
      href: 'tel:+919886374122',
      desc: '+91 98863 74122',
      type: 'external'
    },
    {
      icon: 'chat',
      label: 'WhatsApp',
      href: 'https://wa.me/919886374122?text=I%20am%20interested%20in%20Hunar%20Interior%20Services.',
      desc: 'Instant Chat',
      type: 'external'
    },
    {
      icon: 'near_me',
      label: 'Studio',
      href: 'https://www.google.com/maps/dir/?api=1&destination=MBSYS+JP+Nagar+Bengaluru',
      desc: 'Navigate HQ',
      type: 'external'
    },
    {
      icon: 'description',
      label: 'Inquire',
      href: '/contact',
      desc: 'Get a Quote',
      type: 'internal'
    }
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 group">
      {/* Action Menu */}
      <div className={`flex flex-col gap-4 transition-all duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] origin-bottom ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-50 opacity-0 translate-y-20 pointer-events-none'
      }`}>
        {actions.map((action, idx) => (
          <div key={idx} className="flex items-center gap-4 group/item">
            <div className="bg-white/90 backdrop-blur-md px-4 py-2 border border-charcoal/5 shadow-xl transition-all duration-300 group-hover/item:border-primary">
              <p className="text-[9px] font-headline font-extrabold uppercase tracking-[0.2em] text-charcoal leading-none mb-1">{action.label}</p>
              <p className="text-[8px] text-charcoal/40 font-medium uppercase tracking-widest">{action.desc}</p>
            </div>
            
            {action.type === 'external' ? (
              <a
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
              >
                <span className="material-symbols-outlined text-2xl">{action.icon}</span>
              </a>
            ) : (
              <Link
                to={action.href}
                onClick={() => setIsOpen(false)}
                className="w-14 h-14 bg-primary text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20"
              >
                <span className="material-symbols-outlined text-2xl">{action.icon}</span>
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-16 h-16 flex items-center justify-center transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:shadow-primary/20 ${
          isOpen ? 'bg-white text-charcoal rotate-[135deg]' : 'bg-charcoal text-white rotate-0'
        } border-2 border-primary/20 hover:border-primary`}
      >
        <div className="relative w-8 h-8 flex items-center justify-center">
            {/* Custom icon toggle animation */}
            <span className={`material-symbols-outlined text-3xl absolute transition-all duration-500 ${isOpen ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}`}>add</span>
            <span className={`material-symbols-outlined text-3xl absolute transition-all duration-500 ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>close</span>
        </div>

        {/* Sonar Pulse */}
        {!isOpen && (
          <div className="absolute inset-0 bg-primary/30 animate-[ping_3s_infinite] pointer-events-none"></div>
        )}
      </button>

      {/* Backdrop for click-away when open */}
      {isOpen && (
        <div 
            className="fixed inset-0 z-[-1] bg-charcoal/20 backdrop-blur-[2px]" 
            onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default QuickActionHub;
