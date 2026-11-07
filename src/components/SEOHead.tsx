import React, { useEffect } from 'react';

export interface SEOHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  keywords?: string[];
  ogType?: 'website' | 'profile' | 'article';
  ogImage?: string;
  schemaJson?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  canonicalUrl,
  keywords = [],
  ogType = 'website',
  ogImage = 'https://haseeb-gilani-portfolio.vercel.app/assets/images/haseeb-gilani-lead-generation-specialist.png',
  schemaJson,
}) => {
  const serializedKeywords = keywords.join(', ');
  const serializedSchema = schemaJson ? JSON.stringify(schemaJson) : '';

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrVal}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', contentVal);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', description);
    if (serializedKeywords.length > 0) {
      setMetaTag('name', 'keywords', serializedKeywords);
    }

    // 3. Canonical Link Tag
    let canonicalEl = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalEl) {
      canonicalEl = document.createElement('link');
      canonicalEl.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute('href', canonicalUrl);

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    setMetaTag('property', 'og:image:secure_url', ogImage);
    setMetaTag('property', 'og:image:type', 'image/png');
    setMetaTag('property', 'og:image:width', '1000');
    setMetaTag('property', 'og:image:height', '1000');
    setMetaTag('property', 'og:image:alt', `${title} - Haseeb Gilani (Haseeb Gillani)`);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);
    setMetaTag('name', 'twitter:image:alt', `${title} - Haseeb Gilani (Haseeb Gillani)`);

    // 6. Dynamic JSON-LD Structured Data
    const scriptId = 'dynamic-seo-schema';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (serializedSchema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = scriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = serializedSchema;
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, canonicalUrl, serializedKeywords, ogType, ogImage, serializedSchema]);

  return null;
};
