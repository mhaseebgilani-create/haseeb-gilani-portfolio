import React, { useState } from 'react';
import { CheckCircle2, GraduationCap, ArrowUpRight, Cpu } from 'lucide-react';
import { REAL_TOOLS, ToolItem, PERSONAL_INFO } from '../data/portfolioData';
import {
  RealSalesNavigatorIcon,
  RealApolloIcon,
  RealHubSpotIcon,
  RealGoHighLevelIcon,
  RealGoogleSheetsIcon,
  RealExcelIcon,
  RealUpworkIcon,
  RealCalendlyIcon,
  RealWhatsAppIcon,
  RealShopifyIcon,
  RealHunterIcon,
  RealSnovIcon
} from './RealBrandIcons';

export const ToolsSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Tools' },
    { id: 'prospecting', label: 'Prospect Intelligence' },
    { id: 'crm', label: 'CRM & Pipeline' },
    { id: 'spreadsheet', label: 'Data & Analytics' },
    { id: 'outreach', label: 'Outreach & Platforms' },
  ];

  const filteredTools = filter === 'all'
    ? REAL_TOOLS
    : REAL_TOOLS.filter((t) => t.category === filter);

  const renderRealIcon = (iconId: string) => {
    switch (iconId) {
      case 'sales-nav': return <RealSalesNavigatorIcon className="w-8 h-8" />;
      case 'apollo': return <RealApolloIcon className="w-8 h-8" />;
      case 'hubspot': return <RealHubSpotIcon className="w-8 h-8" />;
      case 'gohighlevel': return <RealGoHighLevelIcon className="w-8 h-8" />;
      case 'sheets': return <RealGoogleSheetsIcon className="w-8 h-8" />;
      case 'excel': return <RealExcelIcon className="w-8 h-8" />;
      case 'upwork': return <RealUpworkIcon className="w-8 h-8" />;
      case 'calendly': return <RealCalendlyIcon className="w-8 h-8" />;
      case 'whatsapp': return <RealWhatsAppIcon className="w-8 h-8" />;
      case 'shopify': return <RealShopifyIcon className="w-8 h-8" />;
      case 'hunter': return <RealHunterIcon className="w-8 h-8" />;
      case 'snov': return <RealSnovIcon className="w-8 h-8" />;
      default: return <Cpu className="w-8 h-8 text-[#FF4B32]" />;
    }
  };

  return (
    <section id="tools" className="relative py-24 lg:py-32 bg-[#17191C] overflow-hidden">
      {/* Industrial Grid */}
      <div className="absolute inset-0 industrial-grid opacity-35 pointer-events-none" />

      {/* Subtle Coral Ambient Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF4B32]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4B32] uppercase mb-3">
              <span>STACK &amp; INFRASTRUCTURE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2]" style={{ textWrap: 'balance' }}>
              TOOLS, PLATFORMS &amp; DATA SYSTEMS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#929DA7] leading-relaxed">
              Real verified platform icons and industrial-grade intelligence engines powering high-converting client acquisition.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#1F2328] border border-[#929DA7]/20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  filter === cat.id
                    ? 'bg-[#FF4B32] text-white shadow-md shadow-[#FF4B32]/25'
                    : 'text-[#929DA7] hover:text-[#F4F4F2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 12 REAL BRAND ICONS TILES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool: ToolItem, idx: number) => (
            <div
              key={idx}
              className="group p-6 rounded-3xl glass-panel border border-[#929DA7]/20 hover:border-[#FF4B32]/60 hover:shadow-2xl hover:shadow-[#FF4B32]/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Hover Line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF4B32]/0 group-hover:via-[#FF4B32] to-transparent transition-all duration-300" />

              <div>
                {/* Tile Top: REAL LOGO ICON & BADGE */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1F2328] border border-[#929DA7]/25 flex items-center justify-center p-2.5 shadow-lg group-hover:scale-105 group-hover:border-[#FF4B32]/40 transition-all">
                    {renderRealIcon(tool.iconId)}
                  </div>

                  <span className="px-2.5 py-1 rounded-lg bg-[#252930] border border-[#929DA7]/15 text-[10px] font-mono uppercase tracking-wider text-[#FF4B32]">
                    {tool.badge}
                  </span>
                </div>

                <div className="text-[11px] font-mono text-[#929DA7] uppercase tracking-wider mb-1">
                  {tool.categoryLabel}
                </div>
                <h3 className="text-lg font-bold font-display text-[#F4F4F2] group-hover:text-white transition-colors mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs text-[#929DA7] leading-relaxed mb-6">
                  {tool.description}
                </p>
              </div>

              {/* Tile Bottom */}
              <div className="pt-4 border-t border-[#929DA7]/15 flex items-center justify-between text-xs">
                <span className="text-[#929DA7] font-mono text-[11px]">Proficiency Level</span>
                <span className="font-mono font-bold text-[#F4F4F2] flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4B32]" />
                  <span>{tool.proficiency}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ACADEMIC CREDENTIALS CALLOUT (From Page 6 of Haseeb's Portfolio) */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl glass-panel-elevated border border-[#929DA7]/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1F2328] to-[#2A2E35] border border-[#929DA7]/30 flex items-center justify-center text-[#FF4B32] shadow-xl shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#FF4B32] uppercase tracking-wider">
                ACADEMIC QUALIFICATION &amp; DATA SCIENCE ROOTS
              </div>
              <h4 className="text-base sm:text-lg font-bold font-display text-[#F4F4F2]">
                {PERSONAL_INFO.education.institution}
              </h4>
              <p className="text-xs text-[#929DA7]">
                {PERSONAL_INFO.education.degree} · <span className="font-mono">{PERSONAL_INFO.education.period}</span>
              </p>
            </div>
          </div>

          <div className="text-xs font-mono text-[#929DA7] max-w-sm">
            {PERSONAL_INFO.education.relevance}
          </div>
        </div>

      </div>
    </section>
  );
};
