import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  Calendar, 
  ChevronRight, 
  ShieldCheck, 
  Layers, 
  HelpCircle, 
  TrendingUp, 
  ExternalLink,
  ChevronDown,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { ServicePageData } from '../data/seoContentData';
import { SEOHead } from '../components/SEOHead';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ServicePageProps {
  data: ServicePageData;
  onOpenCalendly: () => void;
  onNavigate: (path: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  data,
  onOpenCalendly,
  onNavigate
}) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Structured Data: Service + BreadcrumbList + FAQPage
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://haseeb-gilani-portfolio.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://haseeb-gilani-portfolio.vercel.app/#expertise"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": data.h1,
            "item": data.canonicalUrl
          }
        ]
      },
      {
        "@type": "Service",
        "name": data.h1,
        "serviceType": data.badge,
        "description": data.metaDescription,
        "url": data.canonicalUrl,
        "provider": {
          "@type": "Person",
          "name": "Haseeb Gilani",
          "alternateName": "Haseeb Gillani",
          "url": "https://haseeb-gilani-portfolio.vercel.app/",
          "jobTitle": "Business Development Manager & B2B Lead Generation Specialist",
          "image": "https://haseeb-gilani-portfolio.vercel.app/assets/images/haseeb-gilani-lead-generation-specialist.png",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lahore",
            "addressRegion": "Punjab",
            "addressCountry": "Pakistan"
          },
          "sameAs": [
            "https://www.linkedin.com/in/haseeb-gilani-4740a0381/",
            "https://www.instagram.com/haseebgilani09/",
            "https://www.facebook.com/haseeb.gilani.10",
            "https://calendly.com/mhaseebgilani/30min",
            "https://haseeb-gilani-portfolio.vercel.app/"
          ]
        },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "Pakistan" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": `${data.h1} Deliverables`,
          "itemListElement": data.deliverablesList.map((deliv, idx) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": deliv
            }
          }))
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": data.faqs.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
          }
        }))
      }
    ]
  };

  return (
    <div className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      <SEOHead
        title={data.metaTitle}
        description={data.metaDescription}
        canonicalUrl={data.canonicalUrl}
        keywords={data.keywords}
        ogType="website"
        schemaJson={serviceSchema}
      />

      {/* Industrial Grid Background */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      {/* Atmospheric Glow */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#FF4B32]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-[#929DA7]">
          <button 
            onClick={() => onNavigate('/')} 
            className="hover:text-[#F4F4F2] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#FF4B32]" />
          <button 
            onClick={() => onNavigate('/#expertise')} 
            className="hover:text-[#F4F4F2] transition-colors cursor-pointer"
          >
            Services
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#FF4B32]" />
          <span className="text-[#F4F4F2] font-semibold truncate max-w-[200px] sm:max-w-none">
            {data.badge}
          </span>
        </nav>

        {/* HERO SECTION */}
        <div className="mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F2328] border border-[#FF4B32]/35 text-xs font-mono tracking-wider text-[#FF4B32] mb-6 shadow-lg shadow-black/40">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B32] animate-ping" />
            <span className="uppercase font-bold">{data.badge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2] leading-tight mb-6" style={{ textWrap: 'balance' }}>
            {data.h1}
          </h1>

          <p className="text-base sm:text-lg text-[#929DA7] leading-relaxed max-w-3xl mb-8">
            {data.subheadline}
          </p>

          {/* Value highlight banner */}
          <div className="p-4 sm:p-5 rounded-2xl glass-panel-elevated border border-[#929DA7]/25 flex items-center gap-4 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#FF4B32]/15 border border-[#FF4B32]/40 flex items-center justify-center text-[#FF4B32] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <p className="text-xs sm:text-sm text-[#F4F4F2] font-medium leading-relaxed">
              {data.heroHighlight}
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenCalendly}
              className="px-6 py-3.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#FF4B32]/25 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Strategy Call</span>
            </button>
            <button
              onClick={() => {
                const contactEl = document.getElementById('contact');
                if (contactEl) {
                  contactEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                  onNavigate('/#contact');
                }
              }}
              className="px-6 py-3.5 rounded-xl bg-[#1F2328] hover:bg-[#2A2E35] border border-[#929DA7]/30 text-[#F4F4F2] text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Inquire via Email</span>
              <ArrowRight className="w-4 h-4 text-[#FF4B32]" />
            </button>
          </div>
        </div>

        {/* METRICS ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-16">
          {data.metricsAchieved.map((metric, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-[#929DA7]/20 flex flex-col justify-between">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-[#FF4B32] mb-1">
                  {metric.value}
                </div>
                <div className="text-xs font-mono font-bold text-[#F4F4F2] uppercase tracking-wider mb-2">
                  {metric.label}
                </div>
              </div>
              <p className="text-xs text-[#929DA7] leading-relaxed">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 2-COLUMN: TARGET AUDIENCE & CORE PROBLEMS SOLVED */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Target Audience */}
          <div className="p-7 sm:p-8 rounded-3xl glass-panel-elevated border border-[#929DA7]/25 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#FF4B32] uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Who This Service Is Engineered For</span>
            </div>
            <h3 className="text-xl font-bold font-display text-[#F4F4F2]">
              Ideal Client Profile
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#929DA7]">
              {data.targetAudience.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FF4B32] shrink-0 mt-0.5" />
                  <span className="text-[#F4F4F2]/90 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Problems Solved */}
          <div className="p-7 sm:p-8 rounded-3xl glass-panel-elevated border border-[#929DA7]/25 space-y-5">
            <div className="flex items-center gap-2 text-xs font-mono text-[#929DA7] uppercase tracking-wider">
              <Layers className="w-4 h-4 text-[#FF4B32]" />
              <span>Critical Bottlenecks Eliminated</span>
            </div>
            <h3 className="text-xl font-bold font-display text-[#F4F4F2]">
              Challenges We Solve
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#929DA7]">
              {data.coreProblemsSolved.map((prob, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF4B32] shrink-0 mt-1.5" />
                  <span className="text-[#F4F4F2]/90 leading-relaxed">{prob}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4-PHASE EXECUTION METHODOLOGY */}
        <div className="mb-16">
          <div className="text-xs font-mono text-[#FF4B32] uppercase tracking-widest mb-3">
            EXECUTION BLUEPRINT
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#F4F4F2] mb-8">
            How The Acquisition System Operates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.methodologySteps.map((step, sIdx) => (
              <div key={sIdx} className="p-6 rounded-2xl glass-panel border border-[#929DA7]/20 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-[#FF4B32] font-extrabold">STAGE {step.step}</span>
                    <span className="text-[#929DA7]">Systematic Protocol</span>
                  </div>
                  <h4 className="text-base font-bold text-[#F4F4F2] mb-2 font-display">
                    {step.title}
                  </h4>
                  <p className="text-xs text-[#929DA7] leading-relaxed mb-4">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#929DA7]/15 text-xs text-[#F4F4F2]/80">
                  <span className="text-[#FF4B32] font-mono text-[11px] block uppercase font-semibold">Key Deliverable:</span>
                  <span className="text-xs font-mono">{step.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DELIVERABLES & TOOLS STACK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Deliverables */}
          <div className="lg:col-span-8 p-7 rounded-3xl glass-panel-elevated border border-[#929DA7]/25">
            <h3 className="text-lg font-bold font-display text-[#F4F4F2] mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#FF4B32]" />
              <span>Full Scope of Deliverables Included</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {data.deliverablesList.map((deliv, dIdx) => (
                <div key={dIdx} className="p-3.5 rounded-xl bg-[#17191C]/80 border border-[#929DA7]/15 flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF4B32] mt-1.5 shrink-0" />
                  <span className="text-xs text-[#F4F4F2]/90 leading-relaxed">{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Used */}
          <div className="lg:col-span-4 p-7 rounded-3xl glass-panel-elevated border border-[#929DA7]/25 space-y-4">
            <h3 className="text-lg font-bold font-display text-[#F4F4F2]">
              Specialized Tool Stack
            </h3>
            <p className="text-xs text-[#929DA7] leading-relaxed">
              Industrial tools deployed to ensure zero-bounce data hygiene, multi-channel cadences, and CRM synchronization.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {data.toolsUsed.map((tool, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1.5 rounded-lg bg-[#1F2328] border border-[#929DA7]/30 text-xs font-mono text-[#F4F4F2]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="mb-16">
          <div className="text-xs font-mono text-[#FF4B32] uppercase tracking-widest mb-3 flex items-center gap-2">
            <HelpCircle className="w-4 h-4" />
            <span>CLARIFYING QUESTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-[#F4F4F2] mb-8">
            Frequently Asked Questions About {data.h1}
          </h2>

          <div className="space-y-4">
            {data.faqs.map((faq, fIdx) => {
              const isOpen = openFaqIndex === fIdx;
              return (
                <div
                  key={fIdx}
                  className="rounded-2xl glass-panel border border-[#929DA7]/20 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : fIdx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#F4F4F2] font-display">
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-[#FF4B32] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#929DA7] leading-relaxed border-t border-[#929DA7]/10 animate-in fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CONVERSION CTA BANNER */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#262A30] via-[#1A1D21] to-[#17191C] border border-[#FF4B32]/40 shadow-2xl relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF4B32]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl">
            <div className="text-xs font-mono text-[#FF4B32] uppercase tracking-widest mb-2">
              INITIATE YOUR OUTBOUND ENGINE
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#F4F4F2] mb-3">
              Ready to Accelerate Qualified Sales Pipeline?
            </h3>
            <p className="text-xs sm:text-sm text-[#929DA7] leading-relaxed mb-6">
              Connect directly with Haseeb Gilani in Lahore, Pakistan. Let's analyze your target market, calibrate your ICP, and launch a predictable client acquisition campaign.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenCalendly}
                className="px-6 py-3.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-[#FF4B32]/25 flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book 30-Min Discovery Call</span>
              </button>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#1F2328] hover:bg-[#2A2E35] border border-[#929DA7]/30 text-[#F4F4F2] text-xs font-bold tracking-wider uppercase transition-all flex items-center gap-2"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF4B32]" />
              </a>
            </div>
          </div>
        </div>

        {/* RELATED SERVICES INTERNAL LINKS */}
        <div className="pt-8 border-t border-[#929DA7]/20">
          <div className="text-xs font-mono text-[#929DA7] uppercase tracking-wider mb-4">
            Related Specialized Capabilities
          </div>
          <div className="flex flex-wrap gap-3">
            {data.relatedServices.map((rel, rIdx) => (
              <button
                key={rIdx}
                onClick={() => onNavigate(`/services/${rel.slug}`)}
                className="px-4 py-2 rounded-xl bg-[#1F2328] hover:bg-[#262A30] border border-[#929DA7]/20 hover:border-[#FF4B32]/40 text-xs font-mono text-[#F4F4F2] flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>{rel.title}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#FF4B32]" />
              </button>
            ))}
            <button
              onClick={() => onNavigate('/faq')}
              className="px-4 py-2 rounded-xl bg-[#1F2328] hover:bg-[#262A30] border border-[#929DA7]/20 hover:border-[#FF4B32]/40 text-xs font-mono text-[#FF4B32] flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span>Explore All FAQs</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
