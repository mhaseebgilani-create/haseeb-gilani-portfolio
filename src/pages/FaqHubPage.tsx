import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Search, 
  ChevronDown, 
  ChevronRight, 
  Calendar, 
  Mail, 
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { FAQ_CATEGORIES, FaqCategory } from '../data/seoContentData';
import { SEOHead } from '../components/SEOHead';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FaqHubPageProps {
  onNavigate: (path: string) => void;
  onOpenCalendly: () => void;
}

export const FaqHubPage: React.FC<FaqHubPageProps> = ({
  onNavigate,
  onOpenCalendly
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'cat-0-item-0': true,
    'cat-1-item-0': true
  });

  const toggleItem = (id: string) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Flatten all items for FAQPage Schema
  const allFaqItems = useMemo(() => {
    const list: { question: string; answer: string }[] = [];
    FAQ_CATEGORIES.forEach(cat => {
      cat.items.forEach(it => {
        list.push({ question: it.question, answer: it.answer });
      });
    });
    return list;
  }, []);

  const faqSchema = {
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
            "name": "FAQ Knowledge Base",
            "item": "https://haseeb-gilani-portfolio.vercel.app/faq"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": allFaqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  // Filtered categories and questions based on search & tab
  const filteredCategories = useMemo(() => {
    return FAQ_CATEGORIES.map((cat, catIdx) => {
      if (selectedCategory !== 'all' && cat.categoryName !== selectedCategory) {
        return null;
      }

      const matchingItems = cat.items.filter(item => {
        if (!searchQuery) return true;
        const q = searchQuery.toLowerCase();
        return item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q);
      });

      if (matchingItems.length === 0) return null;

      return {
        ...cat,
        items: matchingItems,
        originalIndex: catIdx
      };
    }).filter(Boolean) as (FaqCategory & { originalIndex: number })[];
  }, [selectedCategory, searchQuery]);

  return (
    <div className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden">
      <SEOHead
        title="B2B Lead Generation & Outbound Sales FAQ | Haseeb Gilani"
        description="Explore comprehensive answers to questions about B2B lead generation, cold email deliverability, LinkedIn outreach, appointment setting, and working with Haseeb Gilani."
        canonicalUrl="https://haseeb-gilani-portfolio.vercel.app/faq"
        keywords={[
          "B2B Lead Generation FAQ",
          "Cold Email Deliverability FAQ",
          "LinkedIn Outreach Questions",
          "Appointment Setting FAQ",
          "Haseeb Gilani Contact",
          "Haseeb Gilani Lahore"
        ]}
        ogType="website"
        schemaJson={faqSchema}
      />

      {/* Industrial Grid */}
      <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />

      {/* Atmospheric Coral Glow */}
      <div className="absolute top-24 left-1/3 w-96 h-96 bg-[#FF4B32]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs font-mono text-[#929DA7]">
          <button 
            onClick={() => onNavigate('/')} 
            className="hover:text-[#F4F4F2] transition-colors cursor-pointer"
          >
            Home
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-[#FF4B32]" />
          <span className="text-[#F4F4F2] font-semibold">
            FAQ Knowledge Base
          </span>
        </nav>

        {/* HERO BANNER */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F2328] border border-[#FF4B32]/35 text-xs font-mono tracking-wider text-[#FF4B32] mb-6">
            <HelpCircle className="w-4 h-4" />
            <span className="uppercase font-bold">KNOWLEDGE BASE &amp; FAQ</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-[#F4F4F2] leading-tight mb-4">
            B2B Lead Generation &amp; Outbound Sales FAQ
          </h1>

          <p className="text-base sm:text-lg text-[#929DA7] leading-relaxed max-w-3xl mb-8">
            Clear, transparent answers on prospect research methodologies, technical cold email DNS protocols, LinkedIn outreach safety, and partnering with Haseeb Gilani in Lahore, Pakistan.
          </p>

          {/* Search Box */}
          <div className="relative max-w-xl">
            <Search className="w-4 h-4 text-[#929DA7] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by topic (e.g. bounce rate, DNS, LinkedIn, CRM, pricing)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#1F2328] border border-[#929DA7]/30 text-xs sm:text-sm text-[#F4F4F2] placeholder-[#929DA7]/60 focus:outline-none focus:border-[#FF4B32] transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
              selectedCategory === 'all'
                ? 'bg-[#FF4B32] text-white font-bold shadow-md shadow-[#FF4B32]/30'
                : 'bg-[#1F2328] text-[#929DA7] hover:text-[#F4F4F2] border border-[#929DA7]/20'
            }`}
          >
            All Questions ({allFaqItems.length})
          </button>
          {FAQ_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat.categoryName)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider uppercase transition-all cursor-pointer ${
                selectedCategory === cat.categoryName
                  ? 'bg-[#FF4B32] text-white font-bold shadow-md shadow-[#FF4B32]/30'
                  : 'bg-[#1F2328] text-[#929DA7] hover:text-[#F4F4F2] border border-[#929DA7]/20'
              }`}
            >
              {cat.categoryName.split(' ')[0]} ({cat.items.length})
            </button>
          ))}
        </div>

        {/* FAQ ACCORDION LIST */}
        <div className="space-y-10 mb-16">
          {filteredCategories.length === 0 ? (
            <div className="p-8 rounded-2xl glass-panel text-center text-[#929DA7] text-sm">
              No questions found matching "{searchQuery}". Try searching for terms like "email", "LinkedIn", "lead", or "deliverability".
            </div>
          ) : (
            filteredCategories.map((cat, cIdx) => (
              <div key={cIdx} className="space-y-4">
                <div className="border-b border-[#929DA7]/15 pb-2">
                  <h2 className="text-lg sm:text-xl font-bold font-display text-[#F4F4F2]">
                    {cat.categoryName}
                  </h2>
                  <p className="text-xs text-[#929DA7]">
                    {cat.categoryDesc}
                  </p>
                </div>

                <div className="space-y-3">
                  {cat.items.map((item, iIdx) => {
                    const itemId = `cat-${cat.originalIndex}-item-${iIdx}`;
                    const isOpen = !!openItems[itemId];

                    return (
                      <div
                        key={iIdx}
                        className="rounded-2xl glass-panel border border-[#929DA7]/20 overflow-hidden transition-colors"
                      >
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white/[0.02]"
                        >
                          <span className="text-sm sm:text-base font-bold text-[#F4F4F2] font-display">
                            {item.question}
                          </span>
                          <ChevronDown className={`w-4 h-4 text-[#FF4B32] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#929DA7] leading-relaxed border-t border-[#929DA7]/10 animate-in fade-in">
                            {item.answer}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* STILL HAVE QUESTIONS CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#262A30] to-[#17191C] border border-[#FF4B32]/35 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-lg">
            <div className="text-xs font-mono text-[#FF4B32] uppercase tracking-widest">
              DIRECT CONSULTATION
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-[#F4F4F2]">
              Have a Specific Outbound Question?
            </h3>
            <p className="text-xs sm:text-sm text-[#929DA7] leading-relaxed">
              Book a direct 30-minute discovery call to review your target market, ICP qualification criteria, and email deliverability health.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onOpenCalendly}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-[#FF4B32]/30 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Discovery Call</span>
            </button>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#1F2328] hover:bg-[#2A2E35] border border-[#929DA7]/30 text-[#F4F4F2] text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#FF4B32]" />
              <span>Email Haseeb</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
