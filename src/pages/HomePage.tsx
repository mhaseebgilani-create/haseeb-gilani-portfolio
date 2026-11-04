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

  const homeSchema = {
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
          "url": "https://haseeb-gilani-portfolio.vercel.app/assets/aistudio/83b244ff-b3aa-4b1e-a5fd-a2257121c9c8_e7e26134.png"
        },
        "mainEntity": {
          "@id": "https://haseeb-gilani-portfolio.vercel.app/#person"
        }
      },
      {
        "@type": "Person",
        "@id": "https://haseeb-gilani-portfolio.vercel.app/#person",
        "name": "Haseeb Gilani",
        "jobTitle": "Business Development Manager & B2B Lead Generation Specialist",
        "url": "https://haseeb-gilani-portfolio.vercel.app/",
        "image": "https://haseeb-gilani-portfolio.vercel.app/assets/aistudio/83b244ff-b3aa-4b1e-a5fd-a2257121c9c8_e7e26134.png",
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

  return (
    <>
      <SEOHead
        title="Haseeb Gilani | Business Development & B2B Lead Generation Specialist"
        description="Official portfolio of Haseeb Gilani – Business Development Manager & B2B Lead Generation Specialist in Lahore, Pakistan. Specializing in LinkedIn outreach, cold email, and sales pipelines."
        canonicalUrl="https://haseeb-gilani-portfolio.vercel.app/"
        keywords={[
          "Haseeb",
          "Haseeb Gilani",
          "Haseeb Gilani Lahore",
          "Haseeb Gilani Pakistan",
          "Haseeb Business Development",
          "Haseeb Lead Generation",
          "Haseeb LinkedIn",
          "Haseeb Portfolio",
          "Haseeb Gilani Contact",
          "Business Development Manager",
          "B2B Lead Generation Specialist",
          "LinkedIn Outreach Specialist",
          "Cold Email Marketing"
        ]}
        ogType="profile"
        schemaJson={homeSchema}
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
