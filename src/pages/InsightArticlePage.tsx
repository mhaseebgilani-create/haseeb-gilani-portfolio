import React from 'react';
import { 
  Calendar, 
  Clock, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Share2, 
  MapPin,
  ArrowUpRight
} from 'lucide-react';
import { InsightArticleData, INSIGHT_ARTICLES } from '../data/seoContentData';
import { SEOHead } from '../components/SEOHead';
import { PERSONAL_INFO } from '../data/portfolioData';
import { BrandLogo } from '../components/BrandLogo';

interface InsightArticlePageProps {
  data: InsightArticleData;
  onNavigate: (path: string) => void;
  onOpenCalendly: () => void;
}

export const InsightArticlePage: React.FC<InsightArticlePageProps> = ({
  data,
  onNavigate,
  onOpenCalendly
}) => {
  // Article + BreadcrumbList Schema
  const articleSchema = {
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
            "name": "Insights & Guides",
            "item": "https://haseeb-gilani-portfolio.vercel.app/insights/b2b-prospecting-workflow"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": data.title,
            "item": data.canonicalUrl
          }
        ]
      },
      {
        "@type": "Article",
        "headline": data.title,
        "description": data.metaDescription,
        "url": data.canonicalUrl,
        "datePublished": "2026-11-01T08:00:00+05:00",
        "dateModified": "2026-11-04T12:00:00+05:00",
        "author": {
          "@type": "Person",
          "name": "Haseeb Gilani",
          "url": "https://haseeb-gilani-portfolio.vercel.app/",
          "jobTitle": "Business Development Manager & B2B Lead Generation Specialist",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lahore",
            "addressCountry": "Pakistan"
          },
          "sameAs": [
            "https://www.linkedin.com/in/haseeb-gilani-4740a0381/"
          ]
        },
        "publisher": {
          "@type": "Person",
          "name": "Haseeb Gilani"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": data.canonicalUrl
        }
      }
    ]
  };

  const otherGuide = INSIGHT_ARTICLES.find(a => a.slug !== data.slug);

  return (
    <div className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      <SEOHead
        title={data.metaTitle}
        description={data.metaDescription}
        canonicalUrl={data.canonicalUrl}
        keywords={data.keywords}
        ogType="article"
        schemaJson={articleSchema}
      />

      {/* Industrial Grid */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      {/* Subtle Glow */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-[#FF4B32]/8 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
            onClick={() => onNavigate('/')} 
            className="hover:text-[#F4F4F2] transition-colors cursor-pointer"
          >
            Insights
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#FF4B32]" />
          <span className="text-[#F4F4F2] font-semibold truncate max-w-[200px] sm:max-w-none">
            {data.category}
          </span>
        </nav>

        {/* ARTICLE HEADER */}
        <div className="mb-12 pb-10 border-b border-[#929DA7]/20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F2328] border border-[#FF4B32]/35 text-xs font-mono tracking-wider text-[#FF4B32] mb-6">
            <span className="uppercase font-bold">{data.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2] leading-tight mb-6">
            {data.title}
          </h1>

          <p className="text-base sm:text-lg text-[#929DA7] leading-relaxed mb-8">
            {data.subtitle}
          </p>

          {/* Metadata Row & Author Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl glass-panel-elevated border border-[#929DA7]/20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-[#FF4B32]/50 shrink-0">
                <img
                  src={PERSONAL_INFO.photoUrl}
                  alt="Haseeb Gilani"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="text-xs font-bold text-[#F4F4F2] font-display">
                  Haseeb Gilani
                </div>
                <div className="text-[11px] text-[#929DA7] flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-[#FF4B32]" />
                  <span>Lahore, Pakistan · B2B Lead Gen Specialist</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-[#929DA7]">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF4B32]" />
                <span>{data.publishDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#FF4B32]" />
                <span>{data.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* KEY STRATEGIC TAKEAWAYS BOX */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl glass-panel-elevated border border-[#FF4B32]/40 shadow-xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF4B32] uppercase tracking-wider font-bold">
            <Sparkles className="w-4 h-4" />
            <span>EXECUTIVE SUMMARY &amp; KEY TAKEAWAYS</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            {data.keyTakeaways.map((takeaway, tIdx) => (
              <div key={tIdx} className="flex items-start gap-2.5 text-xs text-[#F4F4F2]/90 leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-[#FF4B32] shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN BODY SECTIONS */}
        <div className="space-y-10 mb-16">
          {data.sections.map((section, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold font-display text-[#F4F4F2] tracking-tight">
                {section.heading}
              </h2>
              <p className="text-sm sm:text-base text-[#929DA7] leading-relaxed">
                {section.content}
              </p>
              {section.subpoints && (
                <ul className="space-y-2.5 pl-4 sm:pl-6 border-l-2 border-[#FF4B32]/40 text-xs sm:text-sm text-[#F4F4F2]/90 mt-4">
                  {section.subpoints.map((sp, sIdx) => (
                    <li key={sIdx} className="leading-relaxed">
                      {sp}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* AUTHOR BIO CARD */}
        <div className="p-8 rounded-3xl glass-panel-elevated border border-[#929DA7]/25 mb-16 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-xs font-mono text-[#FF4B32] uppercase tracking-widest">
              ABOUT THE AUTHOR
            </div>
            <BrandLogo size={24} />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <div className="w-16 h-16 rounded-2xl overflow-hidden border border-[#929DA7]/30 shrink-0">
              <img
                src={PERSONAL_INFO.photoUrl}
                alt="Haseeb Gilani"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="space-y-1.5 flex-1">
              <h4 className="text-base font-bold font-display text-[#F4F4F2]">
                Haseeb Gilani
              </h4>
              <p className="text-xs text-[#929DA7] leading-relaxed">
                Business Development Manager and B2B Lead Generation Specialist in Lahore, Pakistan. Combining data science foundations with Apollo.io and LinkedIn Sales Navigator to build predictable sales pipelines for high-growth businesses.
              </p>
              <div className="flex items-center gap-3 pt-1 text-xs">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF4B32] font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <span className="text-[#929DA7]">·</span>
                <button
                  onClick={onOpenCalendly}
                  className="text-[#F4F4F2] font-semibold hover:text-[#FF4B32] transition-colors cursor-pointer"
                >
                  Book 30-Min Call
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* NEXT GUIDE & SERVICE PROMOTION */}
        <div className="pt-8 border-t border-[#929DA7]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          {otherGuide && (
            <div className="w-full sm:w-1/2">
              <span className="text-xs font-mono text-[#929DA7] uppercase block mb-1">
                Read Next Guide:
              </span>
              <button
                onClick={() => onNavigate(otherGuide.url)}
                className="text-left font-bold text-sm text-[#F4F4F2] hover:text-[#FF4B32] transition-colors line-clamp-2 cursor-pointer flex items-center gap-2"
              >
                <span>{otherGuide.title}</span>
                <ChevronRight className="w-4 h-4 text-[#FF4B32] shrink-0" />
              </button>
            </div>
          )}

          <div className="w-full sm:w-auto flex items-center gap-3">
            <button
              onClick={() => onNavigate('/services/b2b-lead-generation')}
              className="px-5 py-2.5 rounded-xl bg-[#1F2328] hover:bg-[#2A2E35] border border-[#929DA7]/20 text-xs font-mono text-[#F4F4F2] transition-colors cursor-pointer"
            >
              Explore Lead Gen Service
            </button>
            <button
              onClick={() => onNavigate('/faq')}
              className="px-5 py-2.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-mono font-bold transition-colors cursor-pointer"
            >
              All FAQs
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
