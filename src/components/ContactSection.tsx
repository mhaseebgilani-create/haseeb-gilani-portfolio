import React, { useState } from 'react';
import { Mail, MapPin, Send, Check, Copy, ArrowUpRight, MessageSquare, Clock, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RealLinkedInIcon, RealCalendlyIcon, RealWhatsAppIcon } from './RealBrandIcons';

interface ContactSectionProps {
  initialService?: string;
  onOpenCalendlyModal?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '', onOpenCalendlyModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: initialService || 'B2B Lead Generation',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission handling
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#17191C] overflow-hidden">
      {/* Industrial Grid */}
      <div className="absolute inset-0 industrial-grid-dense opacity-40 pointer-events-none" />

      {/* Coral Ambient Light */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#FF4B32]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[#FF4B32] uppercase mb-3">
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2]" style={{ textWrap: 'balance' }}>
            HAVE A GROWTH OPPORTUNITY?<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B32] to-[#F4F4F2]">
              LET'S TALK.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-[#929DA7] leading-relaxed">
            Whether you need a dedicated outbound pipeline, verified enterprise ICP data, or strategic guidance to accelerate B2B client acquisition, let's connect.
          </p>
        </div>

        {/* Contact Layout: Left Booking & Details / Right Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* LEFT: CALENDLY BOOKING & DIRECT INFO */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Calendly Booking Feature Card */}
            <div className="p-7 rounded-3xl glass-panel-elevated border-2 border-[#FF4B32]/50 shadow-2xl relative overflow-hidden group">
              <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#FF4B32]/15 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#006BFF] flex items-center justify-center text-white shadow-lg shadow-[#006BFF]/30">
                  <RealCalendlyIcon className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#1F2328] border border-[#929DA7]/20 text-[10px] font-mono uppercase tracking-wider text-[#FF4B32]">
                  Instant Confirmation
                </span>
              </div>

              <h3 className="text-xl font-bold font-display text-[#F4F4F2] mb-2">
                Book a 30-Minute Growth Call
              </h3>
              <p className="text-xs sm:text-sm text-[#929DA7] leading-relaxed mb-6">
                Pick a direct time on my calendar to audit your current lead generation bottlenecks and discover immediate opportunities for outreach optimization.
              </p>

              <div className="space-y-2.5 mb-7 text-xs text-[#929DA7]">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF4B32]" />
                  <span>30-minute structured discovery call</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF4B32]" />
                  <span>Immediate TAM &amp; ICP review</span>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  if (onOpenCalendlyModal) {
                    e.preventDefault();
                    onOpenCalendlyModal();
                  }
                }}
                className="w-full py-3.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#FF4B32]/30 flex items-center justify-center gap-2 text-center group cursor-pointer"
              >
                <span>BOOK A MEETING</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Direct Contact Credentials Panel */}
            <div className="p-6 rounded-3xl glass-panel border border-[#929DA7]/20 space-y-4">
              
              {/* Email Address with Copy Functionality */}
              <div className="p-3.5 rounded-2xl bg-[#1F2328] border border-[#929DA7]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#2A2E35] flex items-center justify-center text-[#FF4B32]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#929DA7] uppercase">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#F4F4F2] hover:text-[#FF4B32] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#2A2E35] hover:bg-[#343942] text-[#929DA7] hover:text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-2xl bg-[#1F2328] border border-[#929DA7]/15 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#2A2E35] flex items-center justify-center text-[#FF4B32]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-[#929DA7] uppercase">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-[#F4F4F2]">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Official LinkedIn Profile */}
              <div className="p-3.5 rounded-2xl bg-[#1F2328] border border-[#929DA7]/15 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#1F2328] border border-[#0A66C2]/40 flex items-center justify-center text-[#0A66C2]">
                    <RealLinkedInIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#929DA7] uppercase">Official LinkedIn</div>
                    <div className="text-xs sm:text-sm font-semibold text-[#F4F4F2]">
                      Haseeb Gilani
                    </div>
                  </div>
                </div>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[#0A66C2] hover:bg-[#084e96] text-xs font-mono text-white transition-colors flex items-center gap-1 shadow-md shadow-[#0A66C2]/20"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Download Official Portfolio PDF Button */}
              <div className="pt-2">
                <a
                  href={PERSONAL_INFO.portfolioPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Haseeb_Gilani_Portfolio.pdf"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#252930] hover:bg-[#2F343E] border border-[#929DA7]/25 text-[#F4F4F2] hover:text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <FileText className="w-4 h-4 text-[#FF4B32]" />
                  <span>Download Complete Portfolio PDF</span>
                  <Download className="w-3.5 h-3.5 text-[#929DA7]" />
                </a>
              </div>

            </div>

          </div>

          {/* RIGHT: PROFESSIONAL CONTACT FORM */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-10 rounded-3xl glass-panel-elevated border border-[#929DA7]/25 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F4F4F2] mb-1">
                  Send a Direct Inquiry
                </h3>
                <p className="text-xs text-[#929DA7]">
                  Receive a detailed feasibility response within 24 business hours.
                </p>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-6 rounded-2xl bg-[#1F2328] border border-[#FF4B32]/40 text-center animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-[#FF4B32]/20 border border-[#FF4B32] mx-auto mb-4 flex items-center justify-center text-[#FF4B32]">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-[#F4F4F2] mb-2">
                    Message Received
                  </h4>
                  <p className="text-xs sm:text-sm text-[#929DA7] max-w-md mx-auto mb-6">
                    Thank you, {formData.name || 'there'}. Haseeb will review your company details and follow up directly via email at {formData.email || 'your inbox'}.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        service: 'B2B Lead Generation',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#2A2E35] hover:bg-[#343942] text-xs font-mono uppercase text-[#F4F4F2] transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#929DA7] mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Henderson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#17191C]/90 border border-[#929DA7]/25 focus:border-[#FF4B32] focus:outline-none text-xs sm:text-sm text-[#F4F4F2] placeholder-[#929DA7]/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#929DA7] mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#17191C]/90 border border-[#929DA7]/25 focus:border-[#FF4B32] focus:outline-none text-xs sm:text-sm text-[#F4F4F2] placeholder-[#929DA7]/40 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Company & Primary Service Area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-[#929DA7] mb-1.5">
                        Company Name / URL
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Acme Tech (acme.com)"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#17191C]/90 border border-[#929DA7]/25 focus:border-[#FF4B32] focus:outline-none text-xs sm:text-sm text-[#F4F4F2] placeholder-[#929DA7]/40 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-[#929DA7] mb-1.5">
                        Growth Area Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#17191C]/90 border border-[#929DA7]/25 focus:border-[#FF4B32] focus:outline-none text-xs sm:text-sm text-[#F4F4F2] transition-colors"
                      >
                        <option value="B2B Lead Generation">B2B Lead Generation</option>
                        <option value="LinkedIn Outreach">LinkedIn Outreach</option>
                        <option value="Cold Email Marketing">Cold Email Marketing</option>
                        <option value="Business Development">Business Development</option>
                        <option value="Shopify & E-Commerce">Shopify &amp; E-Commerce</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                      </select>
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-[#929DA7] mb-1.5">
                      Target Audience / Current Bottlenecks
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share a brief overview of your product/service, target geography, and target decision-makers..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#17191C]/90 border border-[#929DA7]/25 focus:border-[#FF4B32] focus:outline-none text-xs sm:text-sm text-[#F4F4F2] placeholder-[#929DA7]/40 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] disabled:opacity-50 text-white text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 shadow-xl shadow-[#FF4B32]/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Dispatching Message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH INQUIRY</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-[#929DA7]/60 pt-2">
                    Direct executive communication. Your business details are held strictly confidential.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
