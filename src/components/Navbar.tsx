import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, ChevronDown, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
  onOpenCalendly?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPath = '/',
  onNavigate, 
  onOpenCalendly 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      if (currentPath === '/') {
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
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const serviceLinks = [
    { name: 'B2B Lead Generation', path: '/services/b2b-lead-generation', desc: 'Verified lists & data mining' },
    { name: 'Business Development', path: '/services/business-development', desc: 'Sales pipeline architecture' },
    { name: 'LinkedIn Outreach', path: '/services/linkedin-outreach', desc: '1-on-1 executive social selling' },
    { name: 'Cold Email Marketing', path: '/services/cold-email-marketing', desc: 'High inbox deliverability' },
    { name: 'B2B Appointment Setting', path: '/services/appointment-setting', desc: 'Confirmed discovery meetings' },
    { name: 'Shopify & E-Commerce', path: '/services/ecommerce-growth', desc: 'Store UX & wholesale pipelines' },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);

    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-3 bg-[#17191C]/95 backdrop-blur-xl border-b border-[#929DA7]/15 shadow-2xl shadow-black/40'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          
          {/* BRAND TITLE / LOGO */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '/')}
            className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-decoration-none cursor-pointer"
          >
            <BrandLogo size={36} />
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#F4F4F2] group-hover:text-white transition-colors">
              HASEEB GILANI
            </span>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wider text-[#929DA7]">
            <a
              href="/#home"
              onClick={(e) => handleNavClick(e, '/')}
              className={`relative py-1 transition-colors hover:text-[#F4F4F2] cursor-pointer ${
                currentPath === '/' && activeSection === 'home' ? 'text-[#FF4B32] font-bold' : ''
              }`}
            >
              HOME
            </a>

            <a
              href="/#about"
              onClick={(e) => handleNavClick(e, '/#about')}
              className="relative py-1 transition-colors hover:text-[#F4F4F2] cursor-pointer"
            >
              ABOUT
            </a>

            {/* SERVICES DROPDOWN */}
            <div 
              className="relative group py-1"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button
                onClick={(e) => handleNavClick(e, '/#expertise')}
                className={`flex items-center gap-1 transition-colors hover:text-[#F4F4F2] cursor-pointer ${
                  currentPath.startsWith('/services/') ? 'text-[#FF4B32] font-bold' : ''
                }`}
              >
                <span>SERVICES</span>
                <ChevronDown className="w-3 h-3 text-[#FF4B32]" />
              </button>

              {/* Mega Dropdown Menu */}
              {servicesDropdownOpen && (
                <div className="absolute top-full -left-12 w-80 p-3 rounded-2xl glass-panel-elevated border border-[#929DA7]/30 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="text-[10px] font-mono text-[#FF4B32] px-3 py-1 font-bold uppercase tracking-wider border-b border-[#929DA7]/15 mb-2">
                    Specialized Outbound Services
                  </div>
                  <div className="space-y-1">
                    {serviceLinks.map((s, idx) => (
                      <a
                        key={idx}
                        href={s.path}
                        onClick={(e) => handleNavClick(e, s.path)}
                        className="block px-3 py-2 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group/link"
                      >
                        <div className="text-xs font-bold text-[#F4F4F2] group-hover/link:text-[#FF4B32] transition-colors">
                          {s.name}
                        </div>
                        <div className="text-[10px] text-[#929DA7]">
                          {s.desc}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/#evidence"
              onClick={(e) => handleNavClick(e, '/#evidence')}
              className="relative py-1 transition-colors hover:text-[#F4F4F2] cursor-pointer text-[#FF4B32]"
            >
              EVIDENCE
            </a>

            <a
              href="/#experience"
              onClick={(e) => handleNavClick(e, '/#experience')}
              className="relative py-1 transition-colors hover:text-[#F4F4F2] cursor-pointer"
            >
              TIMELINE
            </a>

            <a
              href="/#portfolio"
              onClick={(e) => handleNavClick(e, '/#portfolio')}
              className="relative py-1 transition-colors hover:text-[#F4F4F2] cursor-pointer"
            >
              PORTFOLIO
            </a>

            {/* INSIGHTS LINK */}
            <a
              href="/insights/b2b-prospecting-workflow"
              onClick={(e) => handleNavClick(e, '/insights/b2b-prospecting-workflow')}
              className={`relative py-1 transition-colors hover:text-[#F4F4F2] cursor-pointer ${
                currentPath.startsWith('/insights/') ? 'text-[#FF4B32] font-bold' : ''
              }`}
            >
              INSIGHTS
            </a>

            {/* FAQ LINK */}
            <a
              href="/faq"
              onClick={(e) => handleNavClick(e, '/faq')}
              className={`relative py-1 transition-colors hover:text-[#F4F4F2] cursor-pointer ${
                currentPath === '/faq' ? 'text-[#FF4B32] font-bold' : ''
              }`}
            >
              FAQ
            </a>
          </nav>

          {/* PRIMARY ACTION CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCalendly}
              className="px-4 py-2 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-md shadow-[#FF4B32]/25 flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK A MEETING</span>
            </button>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#929DA7] hover:text-[#F4F4F2] hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* MOBILE ACCORDION MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-4 pb-6 mt-3 bg-[#17191C]/98 backdrop-blur-2xl border-b border-[#929DA7]/20 shadow-2xl animate-in slide-in-from-top-3 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-3">
            <a
              href="/#home"
              onClick={(e) => handleNavClick(e, '/')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-[#F4F4F2] hover:bg-white/5"
            >
              HOME
            </a>
            <a
              href="/#about"
              onClick={(e) => handleNavClick(e, '/#about')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-[#F4F4F2] hover:bg-white/5"
            >
              ABOUT
            </a>

            {/* Mobile Service Sub-links */}
            <div className="px-3 py-2 bg-[#1F2328]/60 rounded-xl space-y-2 border border-[#929DA7]/15">
              <div className="text-[10px] font-mono text-[#FF4B32] uppercase tracking-wider font-bold">
                DEDICATED SERVICES:
              </div>
              {serviceLinks.map((s, idx) => (
                <a
                  key={idx}
                  href={s.path}
                  onClick={(e) => handleNavClick(e, s.path)}
                  className="block text-xs text-[#929DA7] hover:text-[#F4F4F2] py-1"
                >
                  · {s.name}
                </a>
              ))}
            </div>

            <a
              href="/#evidence"
              onClick={(e) => handleNavClick(e, '/#evidence')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-[#FF4B32] hover:bg-white/5"
            >
              OUTREACH EVIDENCE
            </a>
            <a
              href="/#experience"
              onClick={(e) => handleNavClick(e, '/#experience')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-[#F4F4F2] hover:bg-white/5"
            >
              TIMELINE
            </a>
            <a
              href="/#portfolio"
              onClick={(e) => handleNavClick(e, '/#portfolio')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-[#F4F4F2] hover:bg-white/5"
            >
              PORTFOLIO
            </a>
            <a
              href="/insights/b2b-prospecting-workflow"
              onClick={(e) => handleNavClick(e, '/insights/b2b-prospecting-workflow')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-[#F4F4F2] hover:bg-white/5"
            >
              INSIGHT GUIDES
            </a>
            <a
              href="/faq"
              onClick={(e) => handleNavClick(e, '/faq')}
              className="px-3 py-2 rounded-xl text-sm font-semibold text-[#F4F4F2] hover:bg-white/5"
            >
              FAQ KNOWLEDGE BASE
            </a>

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenCalendly) onOpenCalendly();
                }}
                className="w-full py-3 rounded-xl bg-[#FF4B32] text-white text-xs font-bold tracking-wider uppercase text-center shadow-md shadow-[#FF4B32]/30 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK A MEETING</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
