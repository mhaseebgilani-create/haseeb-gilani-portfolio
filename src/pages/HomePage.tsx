import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ExpertiseSection } from '../components/ExpertiseSection';
import { OutreachEvidenceSection } from '../components/OutreachEvidenceSection';
import { ProcessSection } from '../components/ProcessSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ToolsSection } from '../components/ToolsSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { ContactSection } from '../components/ContactSection';
import { SEOHead } from '../components/SEOHead';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HomePageProps {
  onOpenCalendly: () => void;
  onSelectService: (serviceName: string) => void;
  selectedService: string;
}

const HOME_PAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://haseeb-gilani-portfolio.vercel.app/#profilepage",
      "url": "https://haseeb-gilani-portfolio.vercel.app/",
      "name": "Haseeb Gilani | Business Development & B2B Lead Generation Specialist",
      "description": "Professional personal brand website of Haseeb Gilani, specializing in B2B lead generation, sales pipeline development, LinkedIn outreach, and digital growth in Lahore, Pakistan.",
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "@id": "https://haseeb-gilani-portfolio.vercel.app/#primaryimage",
        "url": "https://haseeb-gilani-portfolio.vercel.app/assets/images/haseeb-gilani-lead-generation-specialist.png",
        "contentUrl": "https://haseeb-gilani-portfolio.vercel.app/assets/images/haseeb-gilani-lead-generation-specialist.png",
        "caption": "Haseeb Gilani (Haseeb Gillani) - Business Development Manager & B2B Lead Generation Specialist in Lahore, Pakistan",
        "width": 1000,
        "height": 1000
      },
      "mainEntity": {
        "@id": "https://haseeb-gilani-portfolio.vercel.app/#person"
      }
    },
    {
      "@type": "Person",
      "@id": "https://haseeb-gilani-portfolio.vercel.app/#person",
      "name": "Haseeb Gilani",
      "alternateName": "Haseeb Gillani",
      "jobTitle": "Business Development Manager & B2B Lead Generation Specialist",
      "url": "https://haseeb-gilani-portfolio.vercel.app/",
      "image": {
        "@type": "ImageObject",
        "@id": "https://haseeb-gilani-portfolio.vercel.app/#primaryimage",
        "url": "https://haseeb-gilani-portfolio.vercel.app/assets/images/haseeb-gilani-lead-generation-specialist.png",
        "contentUrl": "https://haseeb-gilani-portfolio.vercel.app/assets/images/haseeb-gilani-lead-generation-specialist.png",
        "caption": "Haseeb Gilani (alternate spelling Haseeb Gillani) - Business Development Manager and B2B Lead Generation Specialist in Lahore, Pakistan",
        "width": 1000,
        "height": 1000
      },
      "email": "mhaseebgilani@gmail.com",
      "telephone": "+923000000000",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "Pakistan"
      },
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "The Islamia University of Bahawalpur"
      },
      "sameAs": [
        "https://www.linkedin.com/in/haseeb-gilani-4740a0381/",
        "https://www.instagram.com/haseebgilani09/",
        "https://www.facebook.com/haseeb.gilani.10",
        "https://calendly.com/mhaseebgilani/30min",
        "https://haseeb-gilani-portfolio.vercel.app/"
      ],
      "knowsAbout": [
        "B2B Lead Generation",
        "Business Development",
        "LinkedIn Outreach",
        "Cold Email Marketing",
        "Appointment Setting",
        "Sales Pipeline Development",
        "Prospect Research",
        "Data Science",
        "Shopify & E-commerce",
        "Apollo.io",
        "LinkedIn Sales Navigator",
        "HubSpot CRM"
      ],
      "description": "I help businesses identify potential customers, generate qualified leads, build sales pipelines, and grow through strategic business development, outreach, and digital solutions."
    }
  ]
};

const HOME_KEYWORDS = [
  "Haseeb",
  "Haseeb Gilani",
  "Haseeb Gillani",
  "Haseeb Gilani Lahore",
  "Haseeb Gillani Lahore",
  "Haseeb Gilani Pakistan",
  "Haseeb Gillani Pakistan",
  "Haseeb Business Development",
  "Haseeb Lead Generation",
  "Haseeb Gillani Lead Generation",
  "Haseeb LinkedIn",
  "Haseeb Portfolio",
  "Haseeb Gilani Contact",
  "Business Development Manager",
  "B2B Lead Generation Specialist"
];

export const HomePage: React.FC<HomePageProps> = ({
  onOpenCalendly,
  onSelectService,
  selectedService
}) => {
  const handleExploreWorld = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleConnect = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title="Haseeb Gilani | Business Development & B2B Lead Generation Specialist"
        description="Official portfolio of Haseeb Gilani – Business Development Manager & B2B Lead Generation Specialist in Lahore, Pakistan. Specializing in LinkedIn outreach, cold email, and sales pipelines."
        canonicalUrl="https://haseeb-gilani-portfolio.vercel.app/"
        keywords={HOME_KEYWORDS}
        ogType="profile"
        schemaJson={HOME_PAGE_SCHEMA}
      />

      {/* Main Sections */}
      <Hero
        onExploreWorld={handleExploreWorld}
        onConnect={handleConnect}
      />

      <AboutSection onOpenCalendly={onOpenCalendly} />

      <ExpertiseSection
        onSelectService={onSelectService}
        onOpenCalendly={onOpenCalendly}
      />

      <OutreachEvidenceSection />

      <ProcessSection />

      <ExperienceSection />

      <ToolsSection />

      <PortfolioSection />

      <ContactSection
        initialService={selectedService}
        onOpenCalendlyModal={onOpenCalendly}
      />
    </>
  );
};
