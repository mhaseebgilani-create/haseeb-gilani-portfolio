import React, { useState } from 'react';
import { Target, Users, BarChart3, Compass, CheckCircle, ArrowRight, ShieldCheck, Mail, Linkedin, Sparkles, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO, CORE_EXPERTISE_TEN } from '../data/portfolioData';
import { RealLinkedInIcon, RealCalendlyIcon } from './RealBrandIcons';
import { BrandLogo } from './BrandLogo';

interface AboutSectionProps {
  onOpenCalendly?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenCalendly }) => {
  const [activeTab, setActiveTab] = useState<'methodology' | 'tenSkills' | 'credentials'>('methodology');

  const pillars = [
    {
      title: "Precision Prospect Research",
      desc: "Identifying exact ICP buyer personas and verified direct emails/dials, eliminating wasted outreach.",
      icon: Target
    },
    {
      title: "Multi-Touch Executive Outreach",
      desc: "Orchestrating high-touch LinkedIn and cold email cadences focused on starting the right conversations.",
      icon: Mail
    },
    {
      title: "Pipeline Architecture",
      desc: "Structuring frictionless handoffs from cold discovery to closed contracts and recurring partnerships.",
      icon: BarChart3
    },
    {
      title: "Data Science & Analytics",
      desc: "Leveraging algorithmic TAM models and data science methodologies from The Islamia University of Bahawalpur.",
      icon: Compass
    }
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#17191C] overflow-hidden">
      {/* Decorative hairline grid dividers */}
      <div className="absolute inset-0 industrial-grid opacity-50 pointer-events-none" />

      {/* Subtle Coral Ambient Light */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#FF4B32]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4B32] uppercase mb-3">
            <span>ABOUT HASEEB GILANI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2] leading-tight" style={{ textWrap: 'balance' }}>
            MORE THAN LEADS.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B32] to-[#F4F4F2]">
              BUILDING GROWTH OPPORTUNITIES.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#929DA7] leading-relaxed">
            I help businesses identify new markets, connect with decision-makers, and construct predictable sales pipelines through high-touch strategic outreach.
          </p>
        </div>

        {/* Editorial Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: Portrait & Verified Credentials Panel */}
          <div className="lg:col-span-5 space-y-6">
            {/* Portrait Frame with Brushed Steel Accent */}
            <div className="relative rounded-3xl p-2.5 bg-[#1F2328] border border-[#929DA7]/25 shadow-2xl overflow-hidden group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#17191C] relative">
                <picture>
                  <source srcSet={PERSONAL_INFO.photoUrl} type="image/webp" />
                  <source srcSet={PERSONAL_INFO.photoFallbackUrl} type="image/png" />
                  <img
                    src={PERSONAL_INFO.photoFallbackUrl}
                    alt="Haseeb Gilani (alternate spelling Haseeb Gillani) - Business Development & Client Acquisition Specialist based in Lahore, Pakistan"
                    width={500}
                    height={625}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                    referrerPolicy="no-referrer"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-[#17191C] via-[#17191C]/20 to-transparent pointer-events-none" />
              </div>
                
                {/* Embedded Badge with BrandLogo Emblem */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl glass-panel-elevated border border-[#929DA7]/20 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-[#F4F4F2] uppercase tracking-wider mb-0.5">
                      Haseeb Gilani
                    </div>
                    <div className="text-[11px] text-[#929DA7]">
                      Business Development Manager
                    </div>
                    <div className="mt-2 pt-2 border-t border-[#929DA7]/15 flex items-center gap-2 text-[10px] text-[#929DA7]">
                      <span>📍 Lahore, PK</span>
                      <span className="text-[#FF4B32] font-semibold">· B2B Sales Specialist</span>
                    </div>
                  </div>
                  <BrandLogo size={32} />
                </div>
              </div>

            {/* Quote Card (From Page 2 of Portfolio) */}
            <div className="p-6 rounded-2xl glass-panel-elevated border border-[#FF4B32]/35 space-y-2">
              <div className="text-xs font-mono text-[#FF4B32] uppercase tracking-widest">
                CORE PHILOSOPHY
              </div>
              <p className="text-sm font-bold font-display text-[#F4F4F2] italic leading-relaxed">
                "{PERSONAL_INFO.quote}"
              </p>
            </div>
          </div>

          {/* RIGHT: Detailed Narrative & 10 Core Expertises */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Interactive Tab Switcher */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#1F2328] border border-[#929DA7]/20 w-fit">
              <button
                onClick={() => setActiveTab('methodology')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                  activeTab === 'methodology'
                    ? 'bg-[#FF4B32] text-white shadow-md shadow-[#FF4B32]/30'
                    : 'text-[#929DA7] hover:text-[#F4F4F2]'
                }`}
              >
                Executive Bio
              </button>
              <button
                onClick={() => setActiveTab('tenSkills')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                  activeTab === 'tenSkills'
                    ? 'bg-[#FF4B32] text-white shadow-md shadow-[#FF4B32]/30'
                    : 'text-[#929DA7] hover:text-[#F4F4F2]'
                }`}
              >
                10 Core Expertises (Page 3)
              </button>
              <button
                onClick={() => setActiveTab('credentials')}
                className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                  activeTab === 'credentials'
                    ? 'bg-[#FF4B32] text-white shadow-md shadow-[#FF4B32]/30'
                    : 'text-[#929DA7] hover:text-[#F4F4F2]'
                }`}
              >
                Data Science Roots
              </button>
            </div>

            {/* TAB 1: EXECUTIVE BIO & 4 PILLARS */}
            {activeTab === 'methodology' && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="p-6 rounded-2xl glass-panel-elevated border border-[#929DA7]/20">
                  <h3 className="text-lg font-bold font-display text-[#F4F4F2] mb-3">
                    B2B Sales &amp; Client Acquisition Specialist
                  </h3>
                  <p className="text-sm text-[#929DA7] leading-relaxed mb-4">
                    {PERSONAL_INFO.aboutBio}
                  </p>
                  <p className="text-sm text-[#929DA7] leading-relaxed">
                    By combining granular ICP filters with tailored conversational copywriting, prospects feel understood rather than targeted by automated spam blasts.
                  </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pillars.map((pillar, idx) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl glass-panel border border-[#929DA7]/15 hover:border-[#FF4B32]/40 transition-all duration-200 group"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#2A2E35] border border-[#929DA7]/25 flex items-center justify-center text-[#FF4B32] mb-3 group-hover:scale-105 transition-transform">
                          <Icon className="w-5 h-5" />
                        </div>
                        <h4 className="text-sm font-bold font-display text-[#F4F4F2] mb-1 group-hover:text-[#FF4B32] transition-colors">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-[#929DA7] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* TAB 2: 10 CORE EXPERTISES DIRECTLY FROM PAGE 3 OF HASEEB'S PORTFOLIO */}
            {activeTab === 'tenSkills' && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="p-4 rounded-xl bg-[#1F2328] border border-[#929DA7]/15 text-xs text-[#929DA7]">
                  Verified core expertise areas documented in Haseeb Gilani's official portfolio:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[440px] overflow-y-auto pr-2">
                  {CORE_EXPERTISE_TEN.map((skill) => (
                    <div
                      key={skill.id}
                      className="p-4 rounded-xl glass-panel border border-[#929DA7]/15 hover:border-[#FF4B32]/40 transition-all"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-mono text-xs font-bold text-[#FF4B32]">
                          {skill.id}
                        </span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#252930] text-[#929DA7]">
                          {skill.tag}
                        </span>
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#F4F4F2] mb-1">
                        {skill.title}
                      </h4>
                      <p className="text-[11px] text-[#929DA7] leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: DATA SCIENCE ROOTS */}
            {activeTab === 'credentials' && (
              <div className="p-6 rounded-2xl glass-panel-elevated border border-[#929DA7]/20 space-y-4 animate-in fade-in duration-300">
                <h3 className="text-lg font-bold font-display text-[#F4F4F2]">
                  The Analytical Advantage: Data Science in Outbound
                </h3>
                <p className="text-sm text-[#929DA7] leading-relaxed">
                  Pursuing a <strong>Bachelor of Applied Science in Data Science</strong> at <strong>The Islamia University of Bahawalpur</strong> gives Haseeb a distinct edge in prospecting.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#1F2328] border border-[#929DA7]/15">
                    <div className="text-xs font-bold text-[#F4F4F2] mb-1">Algorithmic Prospect Data Scrubbing</div>
                    <p className="text-xs text-[#929DA7]">
                      Applying statistical data scrubbing to remove invalid domains, bounce triggers, and honeypots before executing cold campaigns.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#1F2328] border border-[#929DA7]/15">
                    <div className="text-xs font-bold text-[#F4F4F2] mb-1">TAM Cluster Mapping</div>
                    <p className="text-xs text-[#929DA7]">
                      Segmenting target markets by headcount growth velocity, funding rounds, and executive personnel shifts.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
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
                className="px-6 py-3 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#FF4B32]/25 flex items-center gap-2"
              >
                <RealCalendlyIcon className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </a>

              <a
                href={PERSONAL_INFO.portfolioPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Haseeb_Gilani_Portfolio.pdf"
                className="px-6 py-3 rounded-xl bg-[#1F2328] hover:bg-[#2A2E35] text-[#929DA7] hover:text-[#F4F4F2] text-xs font-mono font-bold tracking-wider uppercase border border-[#929DA7]/20 transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#FF4B32]" />
                <span>Download Portfolio PDF</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
