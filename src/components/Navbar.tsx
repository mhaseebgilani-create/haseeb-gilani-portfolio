import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenCalendly?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCalendly }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'expertise', 'evidence', 'process', 'experience', 'tools', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#home', id: 'home' },
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'EXPERTISE', href: '#expertise', id: 'expertise' },
    { name: 'EVIDENCE', href: '#evidence', id: 'evidence' },
    { name: 'EXPERIENCE', href: '#experience', id: 'experience' },
    { name: 'PORTFOLIO', href: '#portfolio', id: 'portfolio' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#17191C]/90 backdrop-blur-xl border-b border-[#929DA7]/15 shadow-2xl shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* ZONE 1: BRAND TITLE (Brand Logo & Wordmark) */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-decoration-none"
          >
            <BrandLogo size={36} />
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#F4F4F2] group-hover:text-white transition-colors">
              HASEEB GILANI
            </span>
          </a>

          {/* ZONE 2: 4-5 NAV LINKS (Clean single-line typography) */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider text-[#929DA7]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-200 hover:text-[#F4F4F2] ${
                    isActive ? 'text-[#FF4B32] font-bold' : ''
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FF4B32] rounded-full animate-in fade-in" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ZONE 3: 1 PRIMARY ACTION (Book a meeting) */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (onOpenCalendly) {
                  e.preventDefault();
                  onOpenCalendly();
                }
              }}
              className="px-4 py-2 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#FF4B32]/25 flex items-center gap-2 whitespace-nowrap shrink-0 group cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK A MEETING</span>
              <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#929DA7] hover:text-[#F4F4F2] hover:bg-white/5 border border-[#929DA7]/20 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel-elevated border-b border-[#929DA7]/20 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-semibold tracking-wider py-2 transition-colors ${
                  activeSection === link.id ? 'text-[#FF4B32]' : 'text-[#929DA7] hover:text-[#F4F4F2]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-[#929DA7]/15">
            <a
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-bold tracking-wider uppercase transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-[#FF4B32]/30"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK A MEETING</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
