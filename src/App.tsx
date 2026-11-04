import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { OutreachEvidenceSection } from './components/OutreachEvidenceSection';
import { ProcessSection } from './components/ProcessSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ToolsSection } from './components/ToolsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AiVoiceAssistant } from './components/AiVoiceAssistant';
import { CalendlyModal } from './components/CalendlyModal';
import { FuturisticCursor } from './components/FuturisticCursor';

export default function App() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');
  
  // Mouse position for subtle industrial lighting aura
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreWorld = () => {
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnect = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#17191C] text-[#F4F4F2] selection:bg-[#FF4B32] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Futuristic Custom Mouse Pointer Reticle */}
      <FuturisticCursor />

      {/* Subtle Desktop Mouse Follow Light Aura */}
      <div
        className="hidden md:block pointer-events-none fixed w-[500px] h-[500px] rounded-full blur-[130px] opacity-15 bg-[#FF4B32] z-30 transition-transform duration-75 ease-out"
        style={{
          transform: `translate(${mousePos.x - 250}px, ${mousePos.y - 250}px)`,
        }}
        aria-hidden="true"
      />

      {/* Top Bar Navigation */}
      <Navbar onOpenCalendly={() => setIsCalendlyOpen(true)} />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreWorld={handleExploreWorld}
          onConnect={handleConnect}
        />

        {/* About Section */}
        <AboutSection onOpenCalendly={() => setIsCalendlyOpen(true)} />

        {/* Specialized Capabilities / Expertise */}
        <ExpertiseSection
          onSelectService={handleSelectService}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />

        {/* Authentic Outreach Evidence & Client Acquisition Chats */}
        <OutreachEvidenceSection />

        {/* 4-Step Personal Brand Process Pipeline & 6-Stage Sales Funnel */}
        <ProcessSection />

        {/* Professional Experience Interactive Timeline */}
        <ExperienceSection />

        {/* Tools & Technology Ecosystem with Real Brand SVGs */}
        <ToolsSection />

        {/* Case Studies & Portfolio */}
        <PortfolioSection />

        {/* Contact & Meeting Booking */}
        <ContactSection
          initialService={selectedServiceForInquiry}
          onOpenCalendlyModal={() => setIsCalendlyOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer onOpenCalendly={() => setIsCalendlyOpen(true)} />

      {/* Interactive AI Voice Welcome Assistant (Bottom Left with Speaking Avatar) */}
      <AiVoiceAssistant onExploreWorld={handleExploreWorld} />

      {/* Calendly Interactive Booking Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />

    </div>
  );
}
