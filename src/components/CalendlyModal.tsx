import React from 'react';
import { X, Calendar, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CalendlyModal: React.FC<CalendlyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#17191C]/90 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl h-[85vh] rounded-3xl glass-panel-elevated border border-[#929DA7]/30 shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#929DA7]/15 bg-[#1F2328]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FF4B32] flex items-center justify-center text-white">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold font-display text-[#F4F4F2]">
                Schedule 30-Min Growth Consultation
              </h3>
              <p className="text-[11px] text-[#929DA7]">
                Haseeb Gilani · Business Development Manager
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#2A2E35] text-xs font-mono text-[#F4F4F2] hover:text-[#FF4B32] transition-colors"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-[#929DA7] hover:text-[#F4F4F2] hover:bg-white/5 transition-colors"
              aria-label="Close scheduler"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Embedded Calendly Frame */}
        <div className="flex-1 w-full bg-[#17191C] relative">
          <iframe
            src={`${PERSONAL_INFO.calendlyUrl}?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=17191c&text_color=f4f4f2&primary_color=ff4b32`}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Haseeb Gilani Calendly Scheduler"
            className="w-full h-full"
          />
        </div>

      </div>
    </div>
  );
};
