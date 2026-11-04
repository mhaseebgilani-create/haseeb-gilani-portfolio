import React from 'react';
import { ArrowUp, Mail, MapPin, FileText, Download, ChevronRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RealLinkedInIcon, RealCalendlyIcon } from './RealBrandIcons';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate?: (path: string) => void;
  onOpenCalendly?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenCalendly }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith('/#')) {
      if (window.location.pathname === '/') {
        e.preventDefault();
        const targetId = path.replace('/#', '');
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }

    if (onNavigate) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  const services = [
    { name: 'B2B Lead Generation', path: '/services/b2b-lead-generation' },
    { name: 'Business Development', path: '/services/business-development' },
    { name: 'LinkedIn Outreach Specialist', path: '/services/linkedin-outreach' },
    { name: 'Cold Email Marketing', path: '/services/cold-email-marketing' },
    { name: 'B2B Appointment Setting', path: '/services/appointment-setting' },
    { name: 'Shopify & E-Commerce Growth', path: '/services/ecommerce-growth' },
  ];

  const knowledgeLinks = [
    { name: 'B2B Prospecting Workflow Guide', path: '/insights/b2b-prospecting-workflow' },
    { name: 'Cold Email Deliverability Guide', path: '/insights/cold-email-deliverability' },
    { name: 'Outbound Sales FAQ Knowledge Base', path: '/faq' },
    { name: 'Verified Outreach Evidence', path: '/#evidence' },
    { name: '6-Stage Acquisition Funnel', path: '/#process' },
    { name: 'Career Timeline & Experience', path: '/#experience' },
  ];

  return (
    <footer className="relative bg-[#121416] border-t border-[#929DA7]/15 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#929DA7]/15">
          
          {/* Brand Info & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <BrandLogo size={36} />
              <span className="font-display font-extrabold text-lg tracking-tight text-[#F4F4F2]">
                HASEEB GILANI
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-[#929DA7] leading-relaxed max-w-sm">
              Business Development Manager, B2B Lead Generation Specialist, and Data Science Practitioner based in Lahore, Punjab, Pakistan.
            </p>

            <div className="text-xs font-mono text-[#929DA7] italic border-l-2 border-[#FF4B32] pl-3 py-1">
              "{PERSONAL_INFO.quote}"
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#929DA7]">
              <MapPin className="w-3.5 h-3.5 text-[#FF4B32]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
          </div>

          {/* Dedicated Services Landing Pages */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF4B32] font-bold">
              Specialized Services
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#929DA7]">
              {services.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    onClick={(e) => handleLinkClick(e, item.path)}
                    className="hover:text-[#F4F4F2] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-[#FF4B32]/70" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Guides & FAQs */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF4B32] font-bold">
              Insights &amp; FAQs
            </h4>
            <ul className="space-y-2 text-xs font-medium text-[#929DA7]">
              {knowledgeLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.path}
                    onClick={(e) => handleLinkClick(e, item.path)}
                    className="hover:text-[#F4F4F2] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-[#FF4B32]/70" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Actions & Credentials */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#FF4B32] font-bold">
              Connect Directly
            </h4>
            <p className="text-xs text-[#929DA7] leading-relaxed">
              Available for B2B client acquisition contracts, sales pipeline architecture, and executive outreach retainers.
            </p>

            <div className="flex flex-col gap-2.5">
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
                className="w-full py-2.5 px-4 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-md shadow-[#FF4B32]/25 cursor-pointer"
              >
                <RealCalendlyIcon className="w-4 h-4" />
                <span>Schedule a 30-Min Call</span>
              </a>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex-1 py-2 px-3 rounded-xl bg-[#1F2328] hover:bg-[#2A2E35] border border-[#929DA7]/20 text-[#929DA7] hover:text-[#F4F4F2] text-xs font-mono flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF4B32]" />
                  <span>Email Directly</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white transition-colors flex items-center justify-center"
                  aria-label="LinkedIn profile"
                >
                  <RealLinkedInIcon className="w-4 h-4" />
                </a>
              </div>

              {/* PDF Download */}
              <a
                href={PERSONAL_INFO.portfolioPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Haseeb_Gilani_Portfolio.pdf"
                className="w-full py-2 px-3 rounded-xl bg-[#252930] hover:bg-[#2F343E] border border-[#929DA7]/20 text-xs font-mono text-[#929DA7] hover:text-white flex items-center justify-center gap-2 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#FF4B32]" />
                <span>Download Portfolio PDF (19 Pages)</span>
                <Download className="w-3 h-3 text-[#929DA7]" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#929DA7]">
          <div>
            © {new Date().getFullYear()} Haseeb Gilani · The Islamia University of Bahawalpur (Data Science) · Lahore, Pakistan
          </div>
          <div className="flex items-center gap-6">
            <span>B2B Client Acquisition &amp; Pipeline Architecture</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#1F2328] hover:bg-[#2A2E35] text-[#929DA7] hover:text-[#FF4B32] transition-colors flex items-center gap-1 cursor-pointer font-mono text-[11px]"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
