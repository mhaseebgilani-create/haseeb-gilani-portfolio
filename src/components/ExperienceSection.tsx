import React, { useState } from 'react';
import { Briefcase, Building2, MapPin, CheckCircle, ChevronDown, ChevronUp, DollarSign, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { EXPERIENCES, ExperienceItem } from '../data/portfolioData';
import { RealLinkedInIcon, RealUpworkIcon } from './RealBrandIcons';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(EXPERIENCES[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="relative py-24 lg:py-32 bg-[#17191C] overflow-hidden">
      {/* Industrial Grid */}
      <div className="absolute inset-0 industrial-grid-dense opacity-30 pointer-events-none" />

      {/* Ambient background light */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#FF4B32]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4B32] uppercase mb-3">
            <Briefcase className="w-4 h-4 text-[#FF4B32]" />
            <span>SELECTED EXPERIENCE &amp; RESULTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2]" style={{ textWrap: 'balance' }}>
            CAREER TRACK RECORD
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#929DA7] leading-relaxed">
            Proven roles in B2B lead generation, client acquisition, and sales pipeline management across international agencies and consulting firms.
          </p>
        </div>

        {/* 2-Column Split: Left Experience Timeline / Right Upwork & LinkedIn Strategy Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT: Interactive Vertical Timeline (7 cols) */}
          <div className="lg:col-span-7 relative pl-6 sm:pl-8 border-l-2 border-[#929DA7]/20 space-y-6">
            {EXPERIENCES.map((exp: ExperienceItem) => {
              const isExpanded = expandedId === exp.id;
              return (
                <div key={exp.id} className="relative group">
                  
                  {/* Timeline Hub / Node */}
                  <div className={`absolute -left-[31px] sm:-left-[39px] top-6 w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isExpanded
                      ? 'bg-[#FF4B32] border-[#FF4B32] shadow-lg shadow-[#FF4B32]/40 scale-125'
                      : 'bg-[#17191C] border-[#929DA7]/40 group-hover:border-[#FF4B32]'
                  }`}>
                    <div className={`w-1.5 h-1.5 rounded-full ${isExpanded ? 'bg-white' : 'bg-[#929DA7]'}`} />
                  </div>

                  {/* Timeline Card */}
                  <div
                    className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 ${
                      isExpanded
                        ? 'glass-panel-elevated border-2 border-[#FF4B32]/40 shadow-2xl shadow-black/60'
                        : 'glass-panel border border-[#929DA7]/20 hover:border-[#929DA7]/40'
                    }`}
                  >
                    {/* Card Header */}
                    <div
                      onClick={() => toggleExpand(exp.id)}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer"
                    >
                      <div>
                        <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-[#FF4B32] uppercase mb-1">
                          <Building2 className="w-3.5 h-3.5" />
                          <span className="font-bold tracking-wider">{exp.company}</span>
                          <span className="text-[#929DA7]/50">·</span>
                          <span className="text-[#929DA7]">{exp.period}</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-bold font-display text-[#F4F4F2] group-hover:text-white transition-colors">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-[#2A2E35] border border-[#929DA7]/20 text-[10px] font-mono text-[#F4F4F2]">
                          {exp.type}
                        </span>
                        <button
                          className="p-1 rounded-lg bg-[#1F2328] border border-[#929DA7]/20 text-[#929DA7] group-hover:text-[#F4F4F2] transition-colors"
                          aria-label={isExpanded ? 'Collapse' : 'Expand'}
                        >
                          {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="mt-3 text-xs sm:text-sm text-[#929DA7] leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Expandable Details */}
                    {isExpanded && (
                      <div className="mt-5 pt-5 border-t border-[#929DA7]/15 space-y-4 animate-in fade-in duration-200">
                        {/* Scope */}
                        <div>
                          <div className="text-[11px] font-mono uppercase tracking-wider text-[#FF4B32] mb-2">
                            Key Execution:
                          </div>
                          <ul className="space-y-1.5">
                            {exp.keyResponsibilities.map((resp, rIdx) => (
                              <li key={rIdx} className="flex items-start gap-2 text-xs text-[#F4F4F2]/90 leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B32] mt-1.5 shrink-0" />
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Outcomes */}
                        <div className="p-3.5 rounded-xl bg-[#1F2328]/80 border border-[#929DA7]/15">
                          <div className="text-[10px] font-mono uppercase tracking-wider text-[#F4F4F2] mb-1.5 flex items-center gap-1">
                            <CheckCircle className="w-3.5 h-3.5 text-[#FF4B32]" />
                            <span>Measurable Impact</span>
                          </div>
                          <ul className="space-y-1">
                            {exp.outcomes.map((out, oIdx) => (
                              <li key={oIdx} className="text-xs text-[#929DA7]">
                                • {out}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Selected Results Highlights (From Page 5 of Haseeb's Portfolio) (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. UPWORK OPPORTUNITY SECURED (Page 5) */}
            <div className="p-6 rounded-3xl glass-panel-elevated border-2 border-[#14A800]/40 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#14A800]/20 border border-[#14A800]/40 flex items-center justify-center">
                    <RealUpworkIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#14A800]">
                      CONTRACT SECURED
                    </span>
                    <h4 className="text-base font-bold font-display text-[#F4F4F2]">
                      Upwork Opportunity Secured
                    </h4>
                  </div>
                </div>
              </div>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 rounded-xl bg-[#1F2328] border border-white/5">
                  <div className="text-xl font-extrabold font-display text-[#14A800]">$7/hour</div>
                  <div className="text-[10px] text-[#929DA7] font-mono">Hourly Engagement</div>
                </div>
                <div className="p-3 rounded-xl bg-[#1F2328] border border-white/5">
                  <div className="text-xl font-extrabold font-display text-[#F4F4F2]">Up to 40 hrs</div>
                  <div className="text-[10px] text-[#929DA7] font-mono">Weekly Volume</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#17191C]/80 border border-white/5 mb-4">
                <div className="text-xs font-mono text-[#FF4B32] mb-0.5">Potential Value:</div>
                <div className="text-sm font-bold text-[#F4F4F2]">Up to $280/week recurring</div>
              </div>

              <p className="text-xs text-[#929DA7] leading-relaxed italic">
                "Finding the right jobs, understanding what the client needs, writing targeted proposals, starting meaningful conversations, and turning opportunities into offers."
              </p>
            </div>

            {/* 2. FROM LINKEDIN OUTREACH TO A CONFIRMED MEETING (Page 5) */}
            <div className="p-6 rounded-3xl glass-panel-elevated border border-[#0A66C2]/40 shadow-2xl">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#0A66C2]/20 border border-[#0A66C2]/40 flex items-center justify-center">
                  <RealLinkedInIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#0A66C2]">
                    5-STAGE CONVERSION
                  </span>
                  <h4 className="text-base font-bold font-display text-[#F4F4F2]">
                    Outreach to Confirmed Meeting
                  </h4>
                </div>
              </div>

              <ol className="space-y-2.5">
                {[
                  "Target the right prospects",
                  "Start with a relevant conversation",
                  "Build genuine rapport",
                  "Follow up professionally",
                  "Move interested prospects toward a meeting"
                ].map((step, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 p-2.5 rounded-xl bg-[#1F2328] border border-[#929DA7]/15 text-xs text-[#F4F4F2]">
                    <span className="w-6 h-6 rounded-lg bg-[#2A2E35] border border-[#929DA7]/30 text-[11px] font-mono font-bold text-[#FF4B32] flex items-center justify-center shrink-0">
                      {sIdx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
