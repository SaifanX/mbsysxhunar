import React, { useState, useEffect } from 'react';
// Changed import from react-router-dom to react-router to fix missing export errors
import { Link, useLocation } from 'react-router';
import { NAV_LINKS } from '../constants';
import QuickActionHub from './QuickActionHub';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Toggle header state
      setIsScrolled(window.scrollY > 20);

      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled 
    ? 'top-4 inset-x-4 rounded-2xl bg-charcoal/85 backdrop-blur-md shadow-2xl py-3 px-6 md:px-10' 
    : 'top-0 inset-x-0 bg-transparent py-6 px-6 lg:px-20';

  const links = [{ name: 'Home', path: '/' }, ...NAV_LINKS];
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.016403055426!2d77.5685161750753!3d12.906666687402774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f17ca16937%3A0x1394a04740953861!2sMBSYS!5e0!3m2!1sen!2sin!4v1770295702156!5m2!1sen!2sin";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] bg-primary z-[70] transition-all duration-100 ease-out pointer-events-none"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <header className={`fixed z-50 transition-[top,left,right,padding,border-radius,background-color] duration-500 ease-[cubic-bezier(0.76,0,0.24,1)] ${headerClass}`}>
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <div className="relative w-[36px] h-[40px] border-[4px] border-primary flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
              <span className="text-white font-headline text-xl font-extrabold group-hover:rotate-180 transition-transform duration-500">H</span>
            </div>
            <div className="ml-4 flex flex-col justify-center">
              <h1 className="font-headline text-xl tracking-[0.05em] leading-none font-extrabold text-white uppercase group-hover:text-primary transition-colors">HUNAR</h1>
              <span className="text-[7px] font-bold tracking-[0.25em] text-primary uppercase mt-1">Interiors & Construction</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors relative group/link py-2 ${
                  location.pathname === link.path ? 'text-primary' : 'text-white/70 hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-out ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden lg:flex items-center justify-center px-6 h-10 border border-primary text-primary text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all duration-300">
              Request Quote
            </Link>
            <button 
              className="md:hidden text-white p-2 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-charcoal/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 p-10 md:hidden animate-in fade-in duration-300">
          <button className="absolute top-10 right-10 text-white hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`text-2xl font-headline font-bold uppercase tracking-widest transition-colors ${
                location.pathname === link.path ? 'text-primary' : 'text-white hover:text-primary'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact"
            className="mt-8 px-10 py-4 border border-primary text-primary text-[12px] font-bold tracking-[0.2em] uppercase hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Inquire Now
          </Link>
        </div>
      )}

      {/* Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Quick Action Hub */}
      <QuickActionHub />

      {/* Footer */}
      <footer className="bg-charcoal text-white pt-24 border-t border-white/5">
        {/* Footer Map Section */}
        <div className="w-full mb-20 px-6 lg:px-20">
          <div className="relative h-[400px] w-full group overflow-hidden border border-white/10 rounded-sm">
            <div className="absolute inset-0 bg-charcoal z-10 opacity-30 group-hover:opacity-0 transition-opacity duration-700 pointer-events-none"></div>
            <iframe 
              src={mapEmbedUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.1) brightness(0.8)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="group-hover:grayscale-0 transition-all duration-1000"
              title="HUNAR | MBSYS Studio Location"
            />
            <div className="absolute top-6 left-6 z-20 bg-charcoal/90 p-4 border-l-2 border-primary backdrop-blur-sm">
              <span className="text-primary text-[9px] font-bold uppercase tracking-[0.3em]">Our Headquarters</span>
              <h4 className="text-white text-xs font-bold uppercase tracking-widest mt-1">Visit the Studio</h4>
            </div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="md:col-span-1">
            <div className="flex items-center mb-8">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <span className="text-white font-headline font-bold">H</span>
              </div>
              <div className="ml-3 flex flex-col">
                <span className="text-sm font-black tracking-widest leading-none uppercase">HUNAR</span>
                <span className="text-[6px] uppercase tracking-[0.3em] font-medium opacity-60">Interiors & Construction</span>
              </div>
            </div>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              Powered by MBSYS, HUNAR delivers world-class architectural interiors through the synergy of vision and engineering.
            </p>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">Navigation</h5>
            <ul className="space-y-4 text-xs font-light text-white/60">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              {NAV_LINKS.map(link => (
                <li key={link.path}><Link to={link.path} className="hover:text-white transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">Services</h5>
            <ul className="space-y-4 text-xs font-light text-white/60">
              <li>Interior Architecture</li>
              <li>Civil Construction</li>
              <li>Project Consultancy</li>
              <li>Structural MEP</li>
            </ul>
          </div>
          <div>
            <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-8">Connect</h5>
            <div className="space-y-4 text-xs font-light text-white/60">
              <p>231, Zamann Manzil, 3rd Main Road,<br/>Ilyas Nagar, J.P. Nagar, Bengaluru,<br/>Karnataka 560111</p>
              <p>concierge@hunar.archi</p>
              <p>+91 98863 74122</p>
              <div className="flex gap-4 pt-4">
                <span className="material-symbols-outlined text-sm opacity-40 hover:opacity-100 cursor-pointer">public</span>
                <span className="material-symbols-outlined text-sm opacity-40 hover:opacity-100 cursor-pointer">mail</span>
                <span className="material-symbols-outlined text-sm opacity-40 hover:opacity-100 cursor-pointer">call</span>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[8px] uppercase tracking-[0.4em] text-white/30 text-center md:text-left">© 2024 HUNAR ARCHITECTURE & CONSTRUCTION. POWERED BY MBSYS.</p>
          <div className="flex gap-8">
            <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;