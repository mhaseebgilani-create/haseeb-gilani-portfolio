import React, { useState } from 'react';
import { ArrowUpRight, TrendingUp, Layers, CheckCircle2, X, Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { CASE_STUDIES, CaseStudyItem } from '../data/portfolioData';

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalCase, setActiveModalCase] = useState<CaseStudyItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'b2b-lead-gen', label: 'B2B Lead Gen' },
    { id: 'linkedin-outreach', label: 'LinkedIn Outreach' },
    { id: 'cold-email', label: 'Cold Email' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'digital-growth', label: 'Digital Growth' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="relative py-24 lg:py-32 bg-[#17191C] overflow-hidden">
      {/* Industrial Grid */}
      <div className="absolute inset-0 industrial-grid opacity-35 pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF4B32]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4B32] uppercase mb-3">
              <span>PROVEN EXECUTION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2]" style={{ textWrap: 'balance' }}>
              PORTFOLIO &amp; CASE STUDIES
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#929DA7] leading-relaxed">
              Real outbound acquisition systems, deliverability architectures, and revenue-focused pipeline execution delivered for growth-stage businesses.
            </p>
          </div>

          {/* Interactive Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#1F2328] border border-[#929DA7]/20">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF4B32] text-white shadow-md shadow-[#FF4B32]/25'
                    : 'text-[#929DA7] hover:text-[#F4F4F2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* PROJECT GALLERY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project: CaseStudyItem) => (
            <div
              key={project.id}
              onClick={() => setActiveModalCase(project)}
              className="group rounded-3xl glass-panel border border-[#929DA7]/20 hover:border-[#FF4B32]/50 hover:shadow-2xl hover:shadow-[#FF4B32]/10 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
            >
              {/* Card Graphic / Visual Header Preview */}
              <div className="relative overflow-hidden bg-[#1E2227] border-b border-[#929DA7]/15">
                {/* Visual Imagery Preview */}
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={project.imageUrl || "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80"}
                    alt={`${project.title} - ${project.clientIndustry} Case Study by Haseeb Gilani`}
                    width={900}
                    height={450}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    loading="lazy"
                    decoding="async"
                  />
                  {/* Dark Charcoal gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17191C] via-[#17191C]/75 to-[#17191C]/35" />
                  
                  {/* Cyber Grid scanline */}
                  <div className="absolute inset-0 bg-[radial-gradient(#FF4B32_1px,transparent_1px)] [background-size:12px_12px] opacity-15 pointer-events-none" />

                  {/* Top Overlay Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between text-xs font-mono">
                    <span className="px-2 py-0.5 rounded-md bg-black/80 border border-[#FF4B32]/40 text-[#FF4B32] font-semibold text-[10px] tracking-wider uppercase backdrop-blur-xs shadow">
                      {project.mockupBadge || project.categoryLabel}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-black/60 text-[#929DA7] text-[10px] backdrop-blur-xs border border-white/10">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Bottom Title inside Image overlay */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="text-[10px] font-mono text-[#929DA7] uppercase mb-0.5">
                      {project.clientIndustry}
                    </div>
                    <h3 className="text-base font-bold font-display text-[#F4F4F2] group-hover:text-white line-clamp-1 transition-colors drop-shadow-md">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Key Metrics Banner Inside Card */}
                <div className="p-4 grid grid-cols-2 gap-2 bg-[#1A1D21]/90 border-t border-[#929DA7]/15">
                  {project.keyResults.slice(0, 2).map((res, rIdx) => (
                    <div key={rIdx} className="p-2 rounded-xl bg-[#17191C] border border-[#929DA7]/15">
                      <div className="text-sm font-extrabold font-display text-[#FF4B32] tabular-nums">
                        {res.value}
                      </div>
                      <div className="text-[10px] text-[#929DA7] truncate">
                        {res.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Body & Services */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <p className="text-xs text-[#929DA7] line-clamp-3 leading-relaxed mb-4">
                    {project.challenge}
                  </p>

                  <div className="space-y-1.5 mb-6">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#929DA7]">
                      Services Provided:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.servicesProvided.slice(0, 3).map((serv, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-0.5 rounded-md bg-[#252930] text-[10px] text-[#F4F4F2] font-mono"
                        >
                          {serv}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#929DA7]/15 flex items-center justify-between text-xs font-bold text-[#FF4B32]">
                  <span>Explore Full Case Study</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* FULL CASE STUDY MODAL */}
      {activeModalCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#17191C]/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl rounded-3xl glass-panel-elevated border border-[#929DA7]/30 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            {/* Modal Image Hero Banner */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden border-b border-[#929DA7]/20">
              <img
                src={activeModalCase.imageUrl || "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"}
                alt={`${activeModalCase.title} - Full B2B Lead Generation Case Study by Haseeb Gilani (Haseeb Gillani)`}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17191C] via-[#17191C]/60 to-transparent" />
              
              {/* Telemetry Badge */}
              <div className="absolute top-5 left-6 px-3 py-1 rounded-lg bg-black/80 border border-[#FF4B32]/40 text-[#FF4B32] font-mono text-xs uppercase tracking-wider backdrop-blur-md">
                {activeModalCase.mockupBadge || activeModalCase.categoryLabel}
              </div>

              {/* Close Button */}
              <button
                onClick={() => setActiveModalCase(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-black/60 border border-white/15 text-[#929DA7] hover:text-[#F4F4F2] transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#FF4B32] uppercase mb-1">
                  <span>{activeModalCase.categoryLabel}</span>
                  <span className="text-[#929DA7]">·</span>
                  <span className="text-[#929DA7]">{activeModalCase.timeline}</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-extrabold font-display text-[#F4F4F2]">
                  {activeModalCase.title}
                </h2>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs text-[#929DA7] mb-6">
                Client Vertical: <span className="text-[#F4F4F2] font-semibold">{activeModalCase.clientIndustry}</span>
              </p>
            </div>

            {/* Quantifiable Results Banner */}
            <div className="mb-8 p-5 rounded-2xl bg-[#1F2328] border border-[#FF4B32]/30">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF4B32] mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>Verified Impact &amp; Results</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeModalCase.keyResults.map((result, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#17191C] border border-[#929DA7]/15">
                    <div className="text-xl sm:text-2xl font-extrabold font-display text-[#FF4B32] tabular-nums">
                      {result.value}
                    </div>
                    <div className="text-xs text-[#929DA7] mt-1">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge & Solution Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-5 rounded-2xl bg-[#17191C]/80 border border-[#929DA7]/15">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#929DA7] mb-2">
                  The Core Bottleneck
                </h4>
                <p className="text-xs sm:text-sm text-[#F4F4F2]/90 leading-relaxed">
                  {activeModalCase.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#17191C]/80 border border-[#929DA7]/15">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#FF4B32] mb-2">
                  Outbound Architecture Implemented
                </h4>
                <p className="text-xs sm:text-sm text-[#F4F4F2]/90 leading-relaxed">
                  {activeModalCase.solution}
                </p>
              </div>
            </div>

            {/* Deliverables Executed */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#F4F4F2] mb-3 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#FF4B32]" />
                <span>Scope &amp; Services Delivered</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalCase.servicesProvided.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-[#1F2328] border border-[#929DA7]/15 text-xs text-[#F4F4F2]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4B32] shrink-0" />
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial / Feedback */}
            {activeModalCase.quote && (
              <div className="p-5 rounded-2xl bg-[#2A2E35]/40 border-l-2 border-[#FF4B32] mb-8">
                <p className="text-xs sm:text-sm italic text-[#F4F4F2]/90 leading-relaxed">
                  "{activeModalCase.quote}"
                </p>
              </div>
            )}

            {/* Action Bar */}
            <div className="pt-4 border-t border-[#929DA7]/20 flex items-center justify-between">
              <span className="text-xs text-[#929DA7]">Want similar acquisition systems?</span>
              <a
                href="#contact"
                onClick={() => setActiveModalCase(null)}
                className="px-6 py-2.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-[#FF4B32]/30 flex items-center gap-2"
              >
                <span>Discuss Your Project</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
