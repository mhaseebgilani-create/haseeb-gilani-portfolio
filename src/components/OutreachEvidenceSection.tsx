import React, { useState } from 'react';
import { CheckCircle2, FileText, Download, ExternalLink, ArrowRight, MessageSquare, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { REAL_OUTREACH_EVIDENCE, OutreachEvidenceItem, PERSONAL_INFO } from '../data/portfolioData';
import { RealLinkedInIcon, RealUpworkIcon, RealWhatsAppIcon, RealCalendlyIcon } from './RealBrandIcons';

export const OutreachEvidenceSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'LinkedIn' | 'Upwork' | 'Partnerships'>('all');
  const [selectedRecord, setSelectedRecord] = useState<OutreachEvidenceItem | null>(null);

  const filteredEvidence = REAL_OUTREACH_EVIDENCE.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'LinkedIn') return item.channel === 'LinkedIn';
    if (activeFilter === 'Upwork') return item.channel === 'Upwork';
    if (activeFilter === 'Partnerships') return item.badgeType === 'Referral Partnership';
    return true;
  });

  return (
    <section id="evidence" className="relative py-24 lg:py-32 bg-[#17191C] overflow-hidden border-t border-[#929DA7]/15">
      {/* Industrial Grid */}
      <div className="absolute inset-0 industrial-grid-dense opacity-30 pointer-events-none" />

      {/* Ambient Coral Glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#FF4B32]/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4B32] uppercase mb-3">
              <ShieldCheck className="w-4 h-4 text-[#FF4B32]" />
              <span>AUTHENTIC PORTFOLIO EVIDENCE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2]" style={{ textWrap: 'balance' }}>
              CLIENT ACQUISITION &amp; OUTREACH EVIDENCE
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#929DA7] leading-relaxed">
              Unfiltered conversation records, confirmed discovery calls, and client milestone activations directly from Haseeb Gilani's verified executive outreach campaigns.
            </p>
          </div>

          {/* Download Official Portfolio PDF Button */}
          <div className="shrink-0">
            <a
              href={PERSONAL_INFO.portfolioPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Haseeb_Gilani_Portfolio.pdf"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-[#1F2328] hover:bg-[#2A2E35] border border-[#FF4B32]/40 hover:border-[#FF4B32] text-xs font-mono uppercase font-bold text-[#F4F4F2] transition-all shadow-lg shadow-black/50 group"
            >
              <FileText className="w-4 h-4 text-[#FF4B32]" />
              <span>Download Official Portfolio PDF</span>
              <Download className="w-3.5 h-3.5 text-[#929DA7] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl bg-[#1F2328] border border-[#929DA7]/20 w-fit">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
              activeFilter === 'all'
                ? 'bg-[#FF4B32] text-white shadow-md shadow-[#FF4B32]/30'
                : 'text-[#929DA7] hover:text-[#F4F4F2]'
            }`}
          >
            All Evidence ({REAL_OUTREACH_EVIDENCE.length})
          </button>

          <button
            onClick={() => setActiveFilter('LinkedIn')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
              activeFilter === 'LinkedIn'
                ? 'bg-[#0A66C2] text-white shadow-md shadow-[#0A66C2]/30'
                : 'text-[#929DA7] hover:text-[#F4F4F2]'
            }`}
          >
            <RealLinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn Bookings</span>
          </button>

          <button
            onClick={() => setActiveFilter('Upwork')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
              activeFilter === 'Upwork'
                ? 'bg-[#14A800] text-white shadow-md shadow-[#14A800]/30'
                : 'text-[#929DA7] hover:text-[#F4F4F2]'
            }`}
          >
            <RealUpworkIcon className="w-3.5 h-3.5" />
            <span>Upwork Milestones</span>
          </button>

          <button
            onClick={() => setActiveFilter('Partnerships')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
              activeFilter === 'Partnerships'
                ? 'bg-[#FF4B32] text-white shadow-md shadow-[#FF4B32]/30'
                : 'text-[#929DA7] hover:text-[#F4F4F2]'
            }`}
          >
            Referral Partnerships
          </button>
        </div>

        {/* EVIDENCE CARDS MASONRY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvidence.map((record) => (
            <div
              key={record.id}
              className="group rounded-3xl glass-panel-elevated border border-[#929DA7]/20 hover:border-[#FF4B32]/50 hover:shadow-2xl hover:shadow-[#FF4B32]/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Card Header with Channel & Status Badge */}
              <div className="p-5 border-b border-[#929DA7]/15 bg-[#1F2328]/80 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center">
                    {record.channel === 'LinkedIn' && <RealLinkedInIcon className="w-4 h-4" />}
                    {record.channel === 'Upwork' && <RealUpworkIcon className="w-4 h-4" />}
                    {record.channel === 'WhatsApp' && <RealWhatsAppIcon className="w-4 h-4" />}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#F4F4F2] leading-tight">
                      {record.prospectName}
                    </h4>
                    <p className="text-[10px] text-[#929DA7] truncate max-w-[160px]">
                      {record.companyOrRole}
                    </p>
                  </div>
                </div>

                <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                  record.badgeType === 'Meeting Confirmed'
                    ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-400'
                    : record.badgeType === 'Contract Secured'
                    ? 'bg-blue-500/15 border border-blue-500/30 text-blue-400'
                    : 'bg-[#FF4B32]/15 border border-[#FF4B32]/30 text-[#FF4B32]'
                }`}>
                  {record.badgeType}
                </span>
              </div>

              {/* Chat Simulation Container */}
              <div className="p-5 space-y-3 bg-[#15171A]/70 flex-1 flex flex-col justify-center">
                <div className="text-xs font-bold font-display text-[#F4F4F2] mb-1">
                  {record.title}
                </div>
                
                {/* Dialogue Bubbles */}
                <div className="space-y-2">
                  {record.dialogue.map((msg, mIdx) => (
                    <div
                      key={mIdx}
                      className={`flex flex-col ${msg.sender === 'haseeb' ? 'items-end' : 'items-start'}`}
                    >
                      <div className="flex items-center gap-1.5 mb-1 text-[9px] font-mono text-[#929DA7]/70">
                        <span>{msg.sender === 'haseeb' ? 'Haseeb Gilani' : record.prospectName}</span>
                        {msg.timestamp && <span>· {msg.timestamp}</span>}
                      </div>

                      <div
                        className={`p-3 rounded-2xl text-xs max-w-[90%] leading-relaxed ${
                          msg.sender === 'haseeb'
                            ? 'bg-[#FF4B32]/15 border border-[#FF4B32]/35 text-[#F4F4F2] rounded-tr-none'
                            : 'bg-[#2A2E35] border border-[#929DA7]/20 text-[#F4F4F2] rounded-tl-none'
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategic Takeaway Footer */}
              <div className="p-4 border-t border-[#929DA7]/15 bg-[#1A1D21]/90">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF4B32] mb-1">
                  Verified Strategy:
                </div>
                <p className="text-xs text-[#929DA7] leading-relaxed">
                  {record.keyTakeaway}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Quote Callout Banner (From Page 2 of Haseeb's Portfolio) */}
        <div className="mt-16 p-8 rounded-3xl glass-panel-elevated border-2 border-[#FF4B32]/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4B32]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-3xl font-serif text-[#FF4B32] leading-none select-none">“</span>
              <p className="text-lg sm:text-xl md:text-2xl font-bold font-display text-[#F4F4F2] leading-relaxed italic mb-2">
                Good outreach is not about sending more messages. It’s about starting the right conversations.
              </p>
              <div className="text-xs font-mono text-[#929DA7] tracking-wider uppercase">
                — Haseeb Gilani · Business Development Manager
              </div>
            </div>

            <div className="shrink-0">
              <a
                href={PERSONAL_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-xl shadow-[#FF4B32]/30 flex items-center gap-2"
              >
                <RealCalendlyIcon className="w-4 h-4" />
                <span>Start a Conversation</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
