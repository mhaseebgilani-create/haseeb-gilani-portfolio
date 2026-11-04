import React, { useState } from 'react';
import { Search, Send, MessageCircle, BarChart2, Check, ArrowRight, TrendingUp, Layers, Target, ShieldCheck } from 'lucide-react';
import { PROCESS_STEPS, SALES_FUNNEL_STAGES } from '../data/portfolioData';

export const ProcessSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'funnel' | 'workflow'>('funnel');
  const [activeStep, setActiveStep] = useState<number>(0);

  const getWorkflowIcon = (index: number) => {
    switch (index) {
      case 0: return <Search className="w-5 h-5 text-[#FF4B32]" />;
      case 1: return <Target className="w-5 h-5 text-[#FF4B32]" />;
      case 2: return <Send className="w-5 h-5 text-[#FF4B32]" />;
      case 3: return <MessageCircle className="w-5 h-5 text-[#FF4B32]" />;
      default: return <Search className="w-5 h-5 text-[#FF4B32]" />;
    }
  };

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#17191C] overflow-hidden">
      {/* Industrial Grid */}
      <div className="absolute inset-0 industrial-grid opacity-40 pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF4B32]/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4B32] uppercase mb-3">
            <Layers className="w-4 h-4 text-[#FF4B32]" />
            <span>METHODICAL REVENUE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2]" style={{ textWrap: 'balance' }}>
            HOW I SUPPORT BUSINESS GROWTH
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#929DA7] leading-relaxed">
            "The goal isn’t random outreach. It’s a repeatable process that connects the right businesses with the right opportunities."
          </p>
        </div>

        {/* View Switcher: 6-Stage Pipeline Funnel vs. 4-Step Outreach Workflow */}
        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#1F2328] border border-[#929DA7]/25 shadow-xl">
            <button
              onClick={() => setActiveTab('funnel')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                activeTab === 'funnel'
                  ? 'bg-[#FF4B32] text-white shadow-lg shadow-[#FF4B32]/30'
                  : 'text-[#929DA7] hover:text-[#F4F4F2]'
              }`}
            >
              6-Stage Pipeline Funnel (Page 1)
            </button>
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all ${
                activeTab === 'workflow'
                  ? 'bg-[#FF4B32] text-white shadow-lg shadow-[#FF4B32]/30'
                  : 'text-[#929DA7] hover:text-[#F4F4F2]'
              }`}
            >
              4-Step Outreach Channels (Page 4)
            </button>
          </div>
        </div>

        {/* TAB 1: 6-STAGE SALES FUNNEL (FROM PAGE 1 OF HASEEB'S PORTFOLIO) */}
        {activeTab === 'funnel' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* The 6 Ascending Funnel Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {SALES_FUNNEL_STAGES.map((stage, idx) => (
                <div
                  key={stage.step}
                  className="group relative p-5 rounded-2xl glass-panel-elevated border border-[#929DA7]/20 hover:border-[#FF4B32]/60 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Step Top Glowing Indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-lg bg-[#252930] border border-[#929DA7]/20 text-xs font-mono font-extrabold text-[#FF4B32] flex items-center justify-center group-hover:bg-[#FF4B32] group-hover:text-white transition-colors">
                      {stage.step}
                    </span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#929DA7] group-hover:text-[#FF4B32] transition-colors" />
                  </div>

                  <div>
                    <h3 className="text-base font-extrabold font-display tracking-wider text-[#F4F4F2] uppercase mb-2 group-hover:text-[#FF4B32] transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#929DA7] leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  {/* Visual Step Level Bar */}
                  <div className="mt-4 pt-3 border-t border-[#929DA7]/15">
                    <div className="w-full bg-[#252930] h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-[#FF4B32] h-full rounded-full transition-all duration-500"
                        style={{ width: `${((idx + 1) / 6) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Ascending Pipeline Arrow & Summary Banner */}
            <div className="p-6 rounded-2xl glass-panel border border-[#929DA7]/20 flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF4B32]/20 border border-[#FF4B32] flex items-center justify-center text-[#FF4B32]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#F4F4F2]">
                    Continuous Revenue Growth Trajectory
                  </h4>
                  <p className="text-xs text-[#929DA7]">
                    From cold prospect identification through to proposal, closed agreement, and expansion.
                  </p>
                </div>
              </div>
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-mono font-bold uppercase tracking-wider transition-all flex items-center gap-1.5"
              >
                <span>Scale Your Pipeline</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {/* TAB 2: 4-STEP OUTREACH WORKFLOW (FROM PAGE 4 OF HASEEB'S PORTFOLIO) */}
        {activeTab === 'workflow' && (
          <div className="relative animate-in fade-in duration-300">
            {/* Glowing Connector Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#FF4B32]/40 to-transparent pointer-events-none" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <div
                    key={step.step}
                    onClick={() => setActiveStep(idx)}
                    className={`group relative p-6 rounded-3xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isActive
                        ? 'glass-panel-elevated border-2 border-[#FF4B32]/60 shadow-xl shadow-[#FF4B32]/10 -translate-y-2'
                        : 'glass-panel border border-[#929DA7]/20 hover:border-[#929DA7]/40 hover:-translate-y-1'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all ${
                          isActive
                            ? 'bg-[#FF4B32]/20 border-[#FF4B32] text-[#FF4B32] shadow-lg shadow-[#FF4B32]/25'
                            : 'bg-[#2A2E35] border-[#929DA7]/20 text-[#929DA7] group-hover:border-[#929DA7]/40'
                        }`}>
                          {getWorkflowIcon(idx)}
                        </div>
                        <span className={`font-mono text-sm font-extrabold ${isActive ? 'text-[#FF4B32]' : 'text-[#929DA7]'}`}>
                          {step.step}
                        </span>
                      </div>

                      <div className="text-xs font-mono uppercase tracking-wider text-[#929DA7] mb-1">
                        {step.subtitle}
                      </div>
                      <h3 className="text-xl font-bold font-display text-[#F4F4F2] mb-3 group-hover:text-white transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[#929DA7] leading-relaxed mb-6">
                        {step.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#929DA7]/15">
                      <div className="text-[11px] font-mono text-[#FF4B32] uppercase mb-2">
                        Deliverable Execution:
                      </div>
                      <ul className="space-y-1.5">
                        {step.details.slice(0, 3).map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-1.5 text-[11px] text-[#929DA7]">
                            <Check className="w-3 h-3 text-[#FF4B32] mt-0.5 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
