import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AiVoiceAssistant } from './components/AiVoiceAssistant';
import { CalendlyModal } from './components/CalendlyModal';
import { FuturisticCursor } from './components/FuturisticCursor';

import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { InsightArticlePage } from './pages/InsightArticlePage';
import { FaqHubPage } from './pages/FaqHubPage';

import { DEDICATED_SERVICES, INSIGHT_ARTICLES } from './data/seoContentData';

import { AmbientMouseAura } from './components/AmbientMouseAura';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      return p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
    }
    return '/';
  });

  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [selectedServiceForInquiry, setSelectedServiceForInquiry] = useState<string>('');

  // Listen for browser forward/back buttons
  useEffect(() => {
    const handlePopState = () => {
      const p = window.location.pathname;
      const cleanPath = p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
      setCurrentPath(cleanPath);
      if (window.location.hash) {
        const id = window.location.hash.slice(1);
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Seamless client router navigation handler
  const navigateTo = (targetPath: string) => {
    let cleanPath = targetPath;
    let targetHash = '';

    if (targetPath.includes('#')) {
      const parts = targetPath.split('#');
      cleanPath = parts[0] || '/';
      targetHash = parts[1];
    }

    if (cleanPath.length > 1 && cleanPath.endsWith('/')) {
      cleanPath = cleanPath.slice(0, -1);
    }

    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', targetPath);
      setCurrentPath(cleanPath || '/');

      if (targetHash) {
        setTimeout(() => {
          const el = document.getElementById(targetHash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedServiceForInquiry(serviceName);
    navigateTo('/#contact');
  };

  // Route matching
  let renderedPage = (
    <HomePage
      onOpenCalendly={() => setIsCalendlyOpen(true)}
      onSelectService={handleSelectService}
      selectedService={selectedServiceForInquiry}
    />
  );

  if (currentPath === '/faq') {
    renderedPage = (
      <FaqHubPage
        onNavigate={navigateTo}
        onOpenCalendly={() => setIsCalendlyOpen(true)}
      />
    );
  } else if (currentPath.startsWith('/services/')) {
    const slug = currentPath.replace('/services/', '');
    const serviceData = DEDICATED_SERVICES.find(s => s.slug === slug || s.url === currentPath);
    if (serviceData) {
      renderedPage = (
        <ServicePage
          data={serviceData}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
          onNavigate={navigateTo}
        />
      );
    }
  } else if (currentPath.startsWith('/insights/')) {
    const slug = currentPath.replace('/insights/', '');
    const articleData = INSIGHT_ARTICLES.find(a => a.slug === slug || a.url === currentPath);
    if (articleData) {
      renderedPage = (
        <InsightArticlePage
          data={articleData}
          onNavigate={navigateTo}
          onOpenCalendly={() => setIsCalendlyOpen(true)}
        />
      );
    }
  }

  return (
    <div className="relative min-h-screen bg-[#17191C] text-[#F4F4F2] selection:bg-[#FF4B32] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* Zero-Latency Hardware-Speed Futuristic Cyber Pointer */}
      <FuturisticCursor />

      {/* Subtle Desktop Mouse Follow Light Aura (Zero React Re-renders) */}
      <AmbientMouseAura />

      {/* Primary Top Bar Navigation */}
      <Navbar 
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenCalendly={() => setIsCalendlyOpen(true)} 
      />

      {/* Main Routed Page Content */}
      <main id="main-content">
        {renderedPage}
      </main>

      {/* Comprehensive Footer with SEO Internal Linking */}
      <Footer 
        onNavigate={navigateTo}
        onOpenCalendly={() => setIsCalendlyOpen(true)} 
      />

      {/* Speaking AI Voice Assistant (Bottom-Left Holographic Dock) */}
      <AiVoiceAssistant 
        onExploreWorld={() => navigateTo('/#about')} 
      />

      {/* Interactive Calendly Discovery Call Modal */}
      <CalendlyModal
        isOpen={isCalendlyOpen}
        onClose={() => setIsCalendlyOpen(false)}
      />

    </div>
  );
}
