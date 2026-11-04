import React, { useState } from 'react';
import { Target, Linkedin, MailCheck, TrendingUp, ShoppingBag, Globe2, ArrowRight, CheckCircle2, X, Wrench, Sparkles, Layers } from 'lucide-react';
import { SERVICES, ServiceItem, PERSONAL_INFO } from '../data/portfolioData';

interface ExpertiseSectionProps {
  onSelectService?: (serviceName: string) => void;
  onOpenCalendly?: () => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onSelectService, onOpenCalendly }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-6 h-6 text-[#FF4B32]" />;
      case 'Linkedin': return <Linkedin className="w-6 h-6 text-[#FF4B32]" />;
      case 'MailCheck': return <MailCheck className="w-6 h-6 text-[#FF4B32]" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-[#FF4B32]" />;
      case 'ShoppingBag': return <ShoppingBag className="w-6 h-6 text-[#FF4B32]" />;
      case 'Globe2': return <Globe2 className="w-6 h-6 text-[#FF4B32]" />;
      default: return <Sparkles className="w-6 h-6 text-[#FF4B32]" />;
    }
  };

  const handleCardClick = (service: ServiceItem) => {
    setSelectedService(service);
  };

  return (
    <section id="expertise" className="relative py-24 lg:py-32 bg-[#17191C] overflow-hidden">
      {/* Industrial grid backdrop */}
      <div className="absolute inset-0 industrial-grid-dense opacity-40 pointer-events-none" />

      {/* Ambient glow */}
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#FF4B32]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4B32] uppercase mb-3">
              <span>SPECIALIZED CAPABILITIES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2]" style={{ textWrap: 'balance' }}>
              ENGINEERED FOR B2B CLIENT ACQUISITION.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#929DA7] leading-relaxed">
              Six core disciplines crafted to identify high-value prospects, penetrate target accounts, and establish predictable sales pipelines.
            </p>
          </div>
          <div className="text-xs font-mono text-[#929DA7] self-start md:self-end">
            CLICK CARD TO VIEW DELIVERABLES &amp; TOOLS
          </div>
        </div>

        {/* 6 PREMIUM INTERACTIVE GLASSMORPHISM CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service)}
              className="group relative p-7 sm:p-8 rounded-3xl glass-panel border border-[#929DA7]/20 hover:border-[#FF4B32]/60 hover:shadow-2xl hover:shadow-[#FF4B32]/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Top ambient orange reflection bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FF4B32]/0 group-hover:via-[#FF4B32] to-transparent transition-all duration-500" />

              <div>
                {/* Header: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest text-[#929DA7] group-hover:text-[#FF4B32] transition-colors">
                    CARD {service.number}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2A2E35] to-[#1C1F24] border border-[#929DA7]/25 flex items-center justify-center shadow-lg group-hover:border-[#FF4B32]/50 group-hover:scale-105 transition-all">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold font-display tracking-tight text-[#F4F4F2] group-hover:text-white mb-3 transition-colors">
                  {service.title}
                </h3>

                {/* Short description */}
                <p className="text-xs sm:text-sm text-[#929DA7] leading-relaxed mb-6">
                  {service.shortDesc}
                </p>

                {/* Feature checklist */}
                <ul className="space-y-2.5 mb-8">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#F4F4F2]/90">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF4B32] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-4 border-t border-[#929DA7]/15 flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#929DA7] group-hover:text-[#F4F4F2] transition-colors">
                  {service.impactMetric}
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-[#FF4B32] group-hover:translate-x-1 transition-transform">
                  <span>Explore Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* SERVICE DETAILS MODAL / DRAWER */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17191C]/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl p-6 sm:p-8 rounded-3xl glass-panel-elevated border border-[#929DA7]/30 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-[#929DA7] hover:text-[#F4F4F2] hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2A2E35] border border-[#929DA7]/30 flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono text-[#FF4B32] tracking-wider uppercase">
                  SERVICE SCOPE {selectedService.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold font-display text-[#F4F4F2]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#929DA7] leading-relaxed mb-6">
              {selectedService.shortDesc}
            </p>

            {/* Core Capabilities */}
            <div className="mb-6 p-4 rounded-2xl bg-[#1F2328] border border-[#929DA7]/15">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF4B32] mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>Core Capabilities &amp; Tactics</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedService.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#F4F4F2]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4B32] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F4F2] mb-3">
                Key Client Deliverables
              </h4>
              <div className="space-y-2">
                {selectedService.deliverables.map((deliv, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#17191C]/70 border border-[#929DA7]/15 text-xs text-[#929DA7] leading-relaxed">
                    • {deliv}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools Utilized */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F4F2] mb-2 flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-[#FF4B32]" />
                <span>Primary Tool Ecosystem</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#2A2E35] border border-[#929DA7]/20 text-xs text-[#F4F4F2] font-mono"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact metric & CTAs */}
            <div className="pt-4 border-t border-[#929DA7]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#929DA7]">
                Benchmark Metric: <strong className="text-[#FF4B32]">{selectedService.impactMetric}</strong>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={() => {
                    const name = selectedService.title;
                    setSelectedService(null);
                    if (onSelectService) {
                      onSelectService(name);
                    } else {
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-[#FF4B32]/30 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire for this Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
