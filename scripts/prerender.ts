import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEDICATED_SERVICES, INSIGHT_ARTICLES, FAQ_CATEGORIES } from '../src/data/seoContentData';
import { PERSONAL_INFO } from '../src/data/portfolioData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

if (!fs.existsSync(distDir)) {
  console.error('Error: dist directory does not exist. Run "vite build" first.');
  process.exit(1);
}

const baseHtmlPath = path.join(distDir, 'index.html');
const baseTemplate = fs.readFileSync(baseHtmlPath, 'utf-8');

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

interface RoutePrerenderConfig {
  routePath: string; // e.g. '/', '/services/b2b-lead-generation'
  title: string;
  description: string;
  keywords: string[];
  canonicalUrl: string;
  ogType: 'website' | 'article' | 'profile';
  ogImage: string;
  schemaJson: object;
  bodyHtml: string;
}

// Generate shared header for prerendered crawler HTML
function renderHeader(): string {
  return `
  <header style="padding: 20px 24px; border-bottom: 1px solid rgba(146,157,167,0.15); max-width: 1280px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
    <div>
      <a href="/" style="font-family: 'Outfit', sans-serif; font-size: 20px; font-weight: 800; color: #F4F4F2; text-decoration: none; letter-spacing: -0.5px;">
        <span style="color: #FF4B32;">HG</span> <span style="font-size: 15px; font-weight: 500; color: #929DA7; margin-left: 6px;">HASEEB GILANI</span>
      </a>
      <p style="font-size: 12px; color: #929DA7; margin: 2px 0 0 0;">Business Development &amp; B2B Lead Generation Specialist • Lahore, Pakistan</p>
    </div>
    <nav style="display: flex; flex-wrap: wrap; gap: 16px; font-size: 13px; font-weight: 600;">
      <a href="/" style="color: #F4F4F2; text-decoration: none;">Home</a>
      <a href="/services/b2b-lead-generation" style="color: #929DA7; text-decoration: none;">Lead Generation</a>
      <a href="/services/business-development" style="color: #929DA7; text-decoration: none;">Business Development</a>
      <a href="/services/linkedin-outreach" style="color: #929DA7; text-decoration: none;">LinkedIn Outreach</a>
      <a href="/services/cold-email-marketing" style="color: #929DA7; text-decoration: none;">Cold Email</a>
      <a href="/services/appointment-setting" style="color: #929DA7; text-decoration: none;">Appointment Setting</a>
      <a href="/services/ecommerce-growth" style="color: #929DA7; text-decoration: none;">Shopify &amp; E-commerce</a>
      <a href="/faq" style="color: #929DA7; text-decoration: none;">FAQ Hub</a>
      <a href="https://calendly.com/mhaseebgilani/30min" target="_blank" rel="noopener noreferrer" style="color: #FF4B32; text-decoration: none;">Book Discovery Call</a>
    </nav>
  </header>
  `;
}

// Generate shared footer for prerendered crawler HTML
function renderFooter(): string {
  return `
  <footer style="margin-top: 60px; padding: 40px 24px; border-top: 1px solid rgba(146,157,167,0.15); background: #131417; font-size: 13px; color: #929DA7;">
    <div style="max-width: 1280px; margin: 0 auto; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 32px;">
      <div>
        <h4 style="color: #F4F4F2; font-size: 15px; margin: 0 0 12px 0; font-weight: 700;">Haseeb Gilani</h4>
        <p style="line-height: 1.6; margin: 0 0 12px 0;">B2B Lead Generation Specialist &amp; Business Development Manager based in Lahore, Pakistan. Helping global B2B firms generate qualified leads and fill sales pipelines.</p>
        <p style="margin: 0; color: #FF4B32;">Direct: <a href="mailto:mhaseebgilani@gmail.com" style="color: #FF4B32;">mhaseebgilani@gmail.com</a></p>
      </div>
      <div>
        <h4 style="color: #F4F4F2; font-size: 14px; margin: 0 0 12px 0; font-weight: 700;">Dedicated Services</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8;">
          <li><a href="/services/b2b-lead-generation" style="color: #929DA7; text-decoration: none;">B2B Lead Generation</a></li>
          <li><a href="/services/business-development" style="color: #929DA7; text-decoration: none;">Strategic Business Development</a></li>
          <li><a href="/services/linkedin-outreach" style="color: #929DA7; text-decoration: none;">LinkedIn Outreach &amp; Prospecting</a></li>
          <li><a href="/services/cold-email-marketing" style="color: #929DA7; text-decoration: none;">Cold Email Marketing</a></li>
          <li><a href="/services/appointment-setting" style="color: #929DA7; text-decoration: none;">B2B Appointment Setting</a></li>
          <li><a href="/services/ecommerce-growth" style="color: #929DA7; text-decoration: none;">Shopify &amp; E-commerce Operations</a></li>
        </ul>
      </div>
      <div>
        <h4 style="color: #F4F4F2; font-size: 14px; margin: 0 0 12px 0; font-weight: 700;">Knowledge &amp; Resources</h4>
        <ul style="list-style: none; padding: 0; margin: 0; line-height: 1.8;">
          <li><a href="/insights/b2b-prospecting-workflow" style="color: #929DA7; text-decoration: none;">B2B Prospecting Workflow Guide</a></li>
          <li><a href="/insights/cold-email-deliverability" style="color: #929DA7; text-decoration: none;">Cold Email Deliverability Guide</a></li>
          <li><a href="/faq" style="color: #929DA7; text-decoration: none;">Frequently Asked Questions</a></li>
          <li><a href="https://www.linkedin.com/in/haseeb-gilani-4740a0381/" target="_blank" rel="noopener noreferrer" style="color: #929DA7; text-decoration: none;">LinkedIn Profile</a></li>
          <li><a href="https://calendly.com/mhaseebgilani/30min" target="_blank" rel="noopener noreferrer" style="color: #929DA7; text-decoration: none;">Book a 30-Min Strategy Call</a></li>
        </ul>
      </div>
    </div>
    <div style="max-width: 1280px; margin: 32px auto 0 auto; padding-top: 20px; border-top: 1px solid rgba(146,157,167,0.1); display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; font-size: 12px;">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} Haseeb Gilani. All rights reserved. Lahore, Pakistan.</p>
      <p style="margin: 0;"><a href="https://haseeb-gilani-portfolio.vercel.app/sitemap.xml" style="color: #929DA7;">XML Sitemap</a> • <a href="https://haseeb-gilani-portfolio.vercel.app/robots.txt" style="color: #929DA7;">Robots.txt</a></p>
    </div>
  </footer>
  `;
}

// Build all 10 route configurations
const routesToPrerender: RoutePrerenderConfig[] = [];

// 1. Home Page
routesToPrerender.push({
  routePath: '/',
  title: 'Haseeb Gilani | Business Development & B2B Lead Generation Specialist',
  description: "Official portfolio of Haseeb Gilani – Business Development Manager & B2B Lead Generation Specialist in Lahore, Pakistan. Specializing in LinkedIn outreach, cold email, and sales pipelines.",
  keywords: [
    'Haseeb Gilani',
    'Haseeb Gilani Lahore',
    'Haseeb Gilani Pakistan',
    'B2B Lead Generation Specialist',
    'Business Development Manager',
    'LinkedIn Outreach Specialist',
    'Cold Email Marketing',
    'Appointment Setting',
    'Sales Pipeline Development',
    'Shopify Specialist'
  ],
  canonicalUrl: 'https://haseeb-gilani-portfolio.vercel.app/',
  ogType: 'website',
  ogImage: 'https://haseeb-gilani-portfolio.vercel.app/assets/aistudio/83b244ff-b3aa-4b1e-a5fd-a2257121c9c8_e7e26134.png',
  schemaJson: {
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
  },
  bodyHtml: `
    ${renderHeader()}
    <main style="max-width: 1280px; margin: 0 auto; padding: 48px 24px;">
      <article>
        <section style="margin-bottom: 56px;">
          <span style="display: inline-block; padding: 6px 14px; background: rgba(255,75,50,0.1); border: 1px solid rgba(255,75,50,0.3); border-radius: 9999px; color: #FF4B32; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">
            Professional Personal Brand • Lahore, Pakistan
          </span>
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 44px; line-height: 1.15; font-weight: 800; color: #F4F4F2; margin: 0 0 16px 0;">
            Haseeb Gilani
          </h1>
          <h2 style="font-size: 22px; line-height: 1.4; color: #929DA7; font-weight: 500; margin: 0 0 24px 0;">
            Business Development Manager | B2B Lead Generation Specialist | Digital Growth &amp; E-commerce Specialist
          </h2>
          <p style="font-size: 17px; line-height: 1.7; color: #F4F4F2; max-width: 860px; margin: 0 0 24px 0;">
            I help businesses identify potential customers, generate qualified leads, build sales pipelines, and grow through strategic business development, outreach, and digital solutions.
          </p>
          <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 24px;">
            <a href="https://calendly.com/mhaseebgilani/30min" target="_blank" rel="noopener noreferrer" style="background: #FF4B32; color: #ffffff; padding: 14px 28px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 14px; letter-spacing: 0.5px;">
              SCHEDULE DISCOVERY CALL
            </a>
            <a href="mailto:mhaseebgilani@gmail.com" style="background: transparent; border: 1px solid rgba(146,157,167,0.3); color: #F4F4F2; padding: 14px 28px; border-radius: 8px; font-weight: 600; text-decoration: none; font-size: 14px;">
              mhaseebgilani@gmail.com
            </a>
          </div>
        </section>

        <section style="margin-bottom: 56px; padding: 32px; background: rgba(23,25,28,0.8); border: 1px solid rgba(146,157,167,0.2); border-radius: 12px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #F4F4F2; margin-top: 0; margin-bottom: 20px;">
            Core Capabilities &amp; Verified Expertise
          </h2>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
            <div style="padding: 16px; background: rgba(255,255,255,0.02); border-left: 3px solid #FF4B32; border-radius: 4px;">
              <h3 style="color: #F4F4F2; font-size: 16px; margin: 0 0 6px 0;"><a href="/services/b2b-lead-generation" style="color: #F4F4F2; text-decoration: none;">B2B Lead Generation</a></h3>
              <p style="color: #929DA7; font-size: 13px; margin: 0; line-height: 1.5;">Targeted ICP list building, decision-maker data extraction, and multi-step verification.</p>
            </div>
            <div style="padding: 16px; background: rgba(255,255,255,0.02); border-left: 3px solid #FF4B32; border-radius: 4px;">
              <h3 style="color: #F4F4F2; font-size: 16px; margin: 0 0 6px 0;"><a href="/services/business-development" style="color: #F4F4F2; text-decoration: none;">Strategic Business Development</a></h3>
              <p style="color: #929DA7; font-size: 13px; margin: 0; line-height: 1.5;">End-to-end sales pipeline development, market research, and client relationship expansion.</p>
            </div>
            <div style="padding: 16px; background: rgba(255,255,255,0.02); border-left: 3px solid #FF4B32; border-radius: 4px;">
              <h3 style="color: #F4F4F2; font-size: 16px; margin: 0 0 6px 0;"><a href="/services/linkedin-outreach" style="color: #F4F4F2; text-decoration: none;">LinkedIn Outreach &amp; Prospecting</a></h3>
              <p style="color: #929DA7; font-size: 13px; margin: 0; line-height: 1.5;">Sales Navigator targeting, executive connection strategy, and consultative messaging.</p>
            </div>
            <div style="padding: 16px; background: rgba(255,255,255,0.02); border-left: 3px solid #FF4B32; border-radius: 4px;">
              <h3 style="color: #F4F4F2; font-size: 16px; margin: 0 0 6px 0;"><a href="/services/cold-email-marketing" style="color: #F4F4F2; text-decoration: none;">Cold Email Marketing</a></h3>
              <p style="color: #929DA7; font-size: 13px; margin: 0; line-height: 1.5;">Domain warming, DNS authentication (SPF/DKIM/DMARC), and value-led copywriting.</p>
            </div>
            <div style="padding: 16px; background: rgba(255,255,255,0.02); border-left: 3px solid #FF4B32; border-radius: 4px;">
              <h3 style="color: #F4F4F2; font-size: 16px; margin: 0 0 6px 0;"><a href="/services/appointment-setting" style="color: #F4F4F2; text-decoration: none;">B2B Appointment Setting</a></h3>
              <p style="color: #929DA7; font-size: 13px; margin: 0; line-height: 1.5;">Qualifying prospects, handling objections, and booking sales meetings for leadership.</p>
            </div>
            <div style="padding: 16px; background: rgba(255,255,255,0.02); border-left: 3px solid #FF4B32; border-radius: 4px;">
              <h3 style="color: #F4F4F2; font-size: 16px; margin: 0 0 6px 0;"><a href="/services/ecommerce-growth" style="color: #F4F4F2; text-decoration: none;">Shopify &amp; E-commerce Operations</a></h3>
              <p style="color: #929DA7; font-size: 13px; margin: 0; line-height: 1.5;">Store management, catalog optimization, product hunting, and digital marketing execution.</p>
            </div>
          </div>
        </section>

        <section style="margin-bottom: 56px;">
          <h2 style="font-size: 26px; font-weight: 700; color: #F4F4F2; margin-bottom: 20px;">
            Professional Background &amp; Career History
          </h2>
          <p style="font-size: 15px; line-height: 1.7; color: #929DA7; margin-bottom: 20px;">
            Based in Lahore, Pakistan, Haseeb Gilani holds a BS in Data Science from The Islamia University of Bahawalpur and brings extensive business development, prospecting, and client acquisition experience across established technology and marketing firms:
          </p>
          <ul style="padding-left: 20px; line-height: 1.8; color: #F4F4F2; font-size: 14px;">
            <li><strong>UnizConnect</strong> (May 2024 – Present): Business Development Manager leading client acquisition and strategic growth.</li>
            <li><strong>Jamco PR</strong> (Feb 2024 – Apr 2024): Business Development Manager managing agency outbound initiatives.</li>
            <li><strong>Thinkrelate</strong> (Sep 2023 – Jan 2024): Business Development Manager driving outbound prospecting and client relationship development.</li>
            <li><strong>Faseeh Lall &amp; Co.</strong> (Jan 2023 – Aug 2023): Lead Generation Specialist executing high-accuracy data mining and list verification.</li>
            <li><strong>Upmark</strong> (Jan 2022 – Dec 2022): Lead Generation Specialist developing qualified B2B lead databases.</li>
          </ul>
        </section>

        <section style="margin-bottom: 56px; padding: 24px; background: rgba(255,75,50,0.04); border: 1px solid rgba(255,75,50,0.2); border-radius: 12px;">
          <h2 style="font-size: 22px; font-weight: 700; color: #F4F4F2; margin-top: 0; margin-bottom: 12px;">
            In-Depth B2B Knowledge &amp; Strategy Guides
          </h2>
          <p style="color: #929DA7; font-size: 14px; margin-bottom: 16px;">Explore tactical blueprints written by Haseeb Gilani to optimize your sales outreach and prospecting:</p>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <a href="/insights/b2b-prospecting-workflow" style="color: #FF4B32; text-decoration: none; font-size: 15px; font-weight: 600;">
              → The 4-Stage B2B Prospecting Workflow That Builds Resilient Pipelines
            </a>
            <a href="/insights/cold-email-deliverability" style="color: #FF4B32; text-decoration: none; font-size: 15px; font-weight: 600;">
              → Cold Email Deliverability Masterclass: Technical Infrastructure &amp; Copy Rules
            </a>
            <a href="/faq" style="color: #FF4B32; text-decoration: none; font-size: 15px; font-weight: 600;">
              → Comprehensive B2B Lead Generation &amp; Outreach FAQ Knowledge Hub
            </a>
          </div>
        </section>
      </article>
    </main>
    ${renderFooter()}
  `
});

// 2. Six Dedicated Service Pages
DEDICATED_SERVICES.forEach(service => {
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
            "name": service.h1,
            "item": service.canonicalUrl
          }
        ]
      },
      {
        "@type": "Service",
        "name": service.h1,
        "serviceType": service.badge,
        "description": service.metaDescription,
        "url": service.canonicalUrl,
        "provider": {
          "@type": "Person",
          "name": "Haseeb Gilani",
          "url": "https://haseeb-gilani-portfolio.vercel.app/",
          "jobTitle": "Business Development Manager & B2B Lead Generation Specialist",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Lahore",
            "addressRegion": "Punjab",
            "addressCountry": "Pakistan"
          },
          "sameAs": [
            "https://www.linkedin.com/in/haseeb-gilani-4740a0381/",
            "https://calendly.com/mhaseebgilani/30min"
          ]
        },
        "areaServed": [
          { "@type": "Country", "name": "United States" },
          { "@type": "Country", "name": "United Kingdom" },
          { "@type": "Country", "name": "Canada" },
          { "@type": "Country", "name": "Australia" },
          { "@type": "Country", "name": "Pakistan" }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": service.faqs.map(faq => ({
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

  const stepsHtml = service.methodologySteps.map(step => `
    <div style="padding: 20px; background: rgba(255,255,255,0.02); border: 1px solid rgba(146,157,167,0.15); border-radius: 8px; margin-bottom: 16px;">
      <span style="font-size: 12px; font-weight: 700; color: #FF4B32; text-transform: uppercase;">Step ${escapeHtml(step.step)}</span>
      <h3 style="color: #F4F4F2; font-size: 18px; margin: 6px 0 8px 0;">${escapeHtml(step.title)}</h3>
      <p style="color: #929DA7; font-size: 14px; line-height: 1.6; margin: 0 0 10px 0;">${escapeHtml(step.desc)}</p>
      <div style="font-size: 13px; color: #F4F4F2;"><strong>Core Deliverable:</strong> ${escapeHtml(step.deliverable)}</div>
    </div>
  `).join('');

  const deliverablesHtml = service.deliverablesList.map(del => `
    <li style="margin-bottom: 8px; color: #F4F4F2; font-size: 14px;">${escapeHtml(del)}</li>
  `).join('');

  const faqsHtml = service.faqs.map(faq => `
    <details style="background: rgba(23,25,28,0.6); border: 1px solid rgba(146,157,167,0.2); border-radius: 8px; padding: 16px; margin-bottom: 12px;">
      <summary style="cursor: pointer; font-weight: 600; color: #F4F4F2; font-size: 15px;">${escapeHtml(faq.question)}</summary>
      <p style="color: #929DA7; font-size: 14px; line-height: 1.6; margin-top: 10px; margin-bottom: 0;">${escapeHtml(faq.answer)}</p>
    </details>
  `).join('');

  const relatedHtml = service.relatedServices.map(rel => `
    <a href="/services/${escapeHtml(rel.slug)}" style="color: #FF4B32; text-decoration: none; font-size: 14px; font-weight: 600;">→ ${escapeHtml(rel.title)}</a>
  `).join(' &bull; ');

  routesToPrerender.push({
    routePath: service.url,
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    canonicalUrl: service.canonicalUrl,
    ogType: 'website',
    ogImage: 'https://haseeb-gilani-portfolio.vercel.app/assets/aistudio/83b244ff-b3aa-4b1e-a5fd-a2257121c9c8_e7e26134.png',
    schemaJson: serviceSchema,
    bodyHtml: `
      ${renderHeader()}
      <main style="max-width: 1280px; margin: 0 auto; padding: 48px 24px;">
        <nav aria-label="Breadcrumb" style="font-size: 13px; color: #929DA7; margin-bottom: 24px;">
          <a href="/" style="color: #929DA7; text-decoration: none;">Home</a> &gt; 
          <a href="/#expertise" style="color: #929DA7; text-decoration: none;">Services</a> &gt; 
          <span style="color: #FF4B32;">${escapeHtml(service.h1)}</span>
        </nav>

        <article>
          <header style="margin-bottom: 48px;">
            <span style="display: inline-block; padding: 6px 14px; background: rgba(255,75,50,0.1); border: 1px solid rgba(255,75,50,0.3); border-radius: 9999px; color: #FF4B32; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">
              ${escapeHtml(service.badge)} • Service Guide
            </span>
            <h1 style="font-family: 'Outfit', sans-serif; font-size: 40px; line-height: 1.2; font-weight: 800; color: #F4F4F2; margin: 0 0 16px 0;">
              ${escapeHtml(service.h1)}
            </h1>
            <p style="font-size: 18px; line-height: 1.6; color: #929DA7; max-width: 860px; margin: 0 0 24px 0;">
              ${escapeHtml(service.subheadline)}
            </p>
            <div style="padding: 16px; background: rgba(255,75,50,0.06); border-left: 4px solid #FF4B32; border-radius: 4px; color: #F4F4F2; font-size: 15px; margin-bottom: 24px;">
              <strong>Strategic Focus:</strong> ${escapeHtml(service.heroHighlight)}
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 16px;">
              <a href="https://calendly.com/mhaseebgilani/30min" target="_blank" rel="noopener noreferrer" style="background: #FF4B32; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 14px;">
                BOOK SERVICE CONSULTATION
              </a>
              <a href="/#contact" style="background: transparent; border: 1px solid rgba(146,157,167,0.3); color: #F4F4F2; padding: 12px 24px; border-radius: 8px; font-weight: 600; text-decoration: none; font-size: 14px;">
                Send Direct Inquiry
              </a>
            </div>
          </header>

          <section style="margin-bottom: 48px;">
            <h2 style="font-size: 24px; font-weight: 700; color: #F4F4F2; margin-bottom: 16px;">Methodology &amp; Execution Framework</h2>
            ${stepsHtml}
          </section>

          <section style="margin-bottom: 48px; background: rgba(23,25,28,0.8); border: 1px solid rgba(146,157,167,0.2); border-radius: 12px; padding: 28px;">
            <h2 style="font-size: 22px; font-weight: 700; color: #F4F4F2; margin-top: 0; margin-bottom: 16px;">Verified Deliverables</h2>
            <ul style="padding-left: 20px; line-height: 1.8;">
              ${deliverablesHtml}
            </ul>
          </section>

          <section style="margin-bottom: 48px;">
            <h2 style="font-size: 24px; font-weight: 700; color: #F4F4F2; margin-bottom: 20px;">Frequently Asked Questions</h2>
            ${faqsHtml}
          </section>

          <section style="padding: 24px; border-top: 1px solid rgba(146,157,167,0.2);">
            <h3 style="font-size: 16px; font-weight: 600; color: #929DA7; margin-bottom: 12px;">Related Capabilities:</h3>
            <p style="margin: 0;">${relatedHtml}</p>
          </section>
        </article>
      </main>
      ${renderFooter()}
    `
  });
});

// 3. Two In-depth Insight Articles
INSIGHT_ARTICLES.forEach(article => {
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
            "name": article.title,
            "item": article.canonicalUrl
          }
        ]
      },
      {
        "@type": "Article",
        "headline": article.title,
        "description": article.metaDescription,
        "url": article.canonicalUrl,
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
          "name": "Haseeb Gilani",
          "url": "https://haseeb-gilani-portfolio.vercel.app/"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": article.canonicalUrl
        }
      }
    ]
  };

  const sectionsHtml = article.sections.map(sec => `
    <section style="margin-bottom: 36px;">
      <h2 style="font-size: 24px; font-weight: 700; color: #F4F4F2; margin-bottom: 14px;">${escapeHtml(sec.heading)}</h2>
      <p style="font-size: 16px; line-height: 1.7; color: #929DA7; margin-bottom: 14px;">${escapeHtml(sec.content)}</p>
      ${sec.subpoints && sec.subpoints.length > 0 ? `
        <ul style="padding-left: 20px; line-height: 1.8; color: #F4F4F2; font-size: 14px;">
          ${sec.subpoints.map(sp => `<li>${escapeHtml(sp)}</li>`).join('')}
        </ul>
      ` : ''}
    </section>
  `).join('');

  const takeawaysHtml = article.keyTakeaways.map(tk => `
    <li style="margin-bottom: 8px; color: #F4F4F2; font-size: 14px;">${escapeHtml(tk)}</li>
  `).join('');

  routesToPrerender.push({
    routePath: article.url,
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    canonicalUrl: article.canonicalUrl,
    ogType: 'article',
    ogImage: 'https://haseeb-gilani-portfolio.vercel.app/assets/aistudio/83b244ff-b3aa-4b1e-a5fd-a2257121c9c8_e7e26134.png',
    schemaJson: articleSchema,
    bodyHtml: `
      ${renderHeader()}
      <main style="max-width: 960px; margin: 0 auto; padding: 48px 24px;">
        <nav aria-label="Breadcrumb" style="font-size: 13px; color: #929DA7; margin-bottom: 24px;">
          <a href="/" style="color: #929DA7; text-decoration: none;">Home</a> &gt; 
          <a href="/insights/b2b-prospecting-workflow" style="color: #929DA7; text-decoration: none;">Insights</a> &gt; 
          <span style="color: #FF4B32;">${escapeHtml(article.title)}</span>
        </nav>

        <article>
          <header style="margin-bottom: 40px;">
            <div style="font-size: 12px; color: #FF4B32; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px;">
              ${escapeHtml(article.category)} &bull; ${escapeHtml(article.readTime)} &bull; Published by Haseeb Gilani
            </div>
            <h1 style="font-family: 'Outfit', sans-serif; font-size: 38px; line-height: 1.25; font-weight: 800; color: #F4F4F2; margin: 0 0 16px 0;">
              ${escapeHtml(article.title)}
            </h1>
            <p style="font-size: 18px; line-height: 1.6; color: #929DA7; margin: 0 0 24px 0;">
              ${escapeHtml(article.subtitle)}
            </p>
          </header>

          <aside style="padding: 24px; background: rgba(255,75,50,0.05); border: 1px solid rgba(255,75,50,0.2); border-radius: 8px; margin-bottom: 40px;">
            <h3 style="color: #FF4B32; font-size: 16px; margin: 0 0 12px 0; font-weight: 700;">Executive Key Takeaways</h3>
            <ul style="padding-left: 20px; line-height: 1.7; margin: 0;">
              ${takeawaysHtml}
            </ul>
          </aside>

          <div class="article-body">
            ${sectionsHtml}
          </div>

          <section style="margin-top: 48px; padding: 32px; background: #131417; border: 1px solid rgba(146,157,167,0.2); border-radius: 12px; text-align: center;">
            <h3 style="font-size: 20px; font-weight: 700; color: #F4F4F2; margin-top: 0; margin-bottom: 12px;">Need Custom Pipeline Architecture for Your Business?</h3>
            <p style="color: #929DA7; font-size: 14px; max-width: 600px; margin: 0 auto 20px auto;">Consult directly with Haseeb Gilani to design and deploy high-conversion B2B outreach infrastructure.</p>
            <a href="https://calendly.com/mhaseebgilani/30min" target="_blank" rel="noopener noreferrer" style="background: #FF4B32; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 14px; display: inline-block;">
              SCHEDULE 30-MIN CONSULTATION
            </a>
          </section>
        </article>
      </main>
      ${renderFooter()}
    `
  });
});

// 4. FAQ Hub Page
const allFaqQuestionsAnswers: { question: string; answer: string }[] = [];
FAQ_CATEGORIES.forEach(cat => {
  cat.items.forEach(it => {
    allFaqQuestionsAnswers.push({ question: it.question, answer: it.answer });
  });
});

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
          "name": "FAQ Hub",
          "item": "https://haseeb-gilani-portfolio.vercel.app/faq"
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://haseeb-gilani-portfolio.vercel.app/faq#faqpage",
      "url": "https://haseeb-gilani-portfolio.vercel.app/faq",
      "name": "B2B Lead Generation & Outreach FAQ | Haseeb Gilani",
      "description": "Comprehensive answers to frequently asked questions about B2B lead generation, LinkedIn outreach, cold email deliverability, and appointment setting.",
      "mainEntity": allFaqQuestionsAnswers.map(item => ({
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

const faqCategoriesHtml = FAQ_CATEGORIES.map(cat => `
  <section style="margin-bottom: 40px;">
    <h2 style="font-size: 22px; font-weight: 700; color: #F4F4F2; margin-bottom: 6px;">${escapeHtml(cat.categoryName)}</h2>
    <p style="color: #929DA7; font-size: 14px; margin-bottom: 16px;">${escapeHtml(cat.categoryDesc)}</p>
    <div>
      ${cat.items.map(it => `
        <details style="background: rgba(23,25,28,0.7); border: 1px solid rgba(146,157,167,0.2); border-radius: 8px; padding: 16px; margin-bottom: 12px;">
          <summary style="cursor: pointer; font-weight: 600; color: #F4F4F2; font-size: 15px;">${escapeHtml(it.question)}</summary>
          <p style="color: #929DA7; font-size: 14px; line-height: 1.6; margin-top: 10px; margin-bottom: 0;">${escapeHtml(it.answer)}</p>
        </details>
      `).join('')}
    </div>
  </section>
`).join('');

routesToPrerender.push({
  routePath: '/faq',
  title: 'B2B Lead Generation & Outreach FAQ | Haseeb Gilani Knowledge Hub',
  description: 'Frequently asked questions regarding B2B lead generation, Apollo prospecting, LinkedIn outreach, cold email deliverability, and appointment setting with Haseeb Gilani.',
  keywords: [
    'Haseeb Gilani FAQ',
    'B2B Lead Generation Questions',
    'LinkedIn Outreach FAQ',
    'Cold Email Deliverability Questions',
    'Appointment Setting FAQ',
    'Lahore Pakistan Lead Generation'
  ],
  canonicalUrl: 'https://haseeb-gilani-portfolio.vercel.app/faq',
  ogType: 'website',
  ogImage: 'https://haseeb-gilani-portfolio.vercel.app/assets/aistudio/83b244ff-b3aa-4b1e-a5fd-a2257121c9c8_e7e26134.png',
  schemaJson: faqSchema,
  bodyHtml: `
    ${renderHeader()}
    <main style="max-width: 1080px; margin: 0 auto; padding: 48px 24px;">
      <nav aria-label="Breadcrumb" style="font-size: 13px; color: #929DA7; margin-bottom: 24px;">
        <a href="/" style="color: #929DA7; text-decoration: none;">Home</a> &gt; 
        <span style="color: #FF4B32;">FAQ Hub</span>
      </nav>

      <article>
        <header style="margin-bottom: 40px;">
          <span style="display: inline-block; padding: 6px 14px; background: rgba(255,75,50,0.1); border: 1px solid rgba(255,75,50,0.3); border-radius: 9999px; color: #FF4B32; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 16px;">
            Knowledge Hub • 16 Core Inquiries
          </span>
          <h1 style="font-family: 'Outfit', sans-serif; font-size: 40px; line-height: 1.2; font-weight: 800; color: #F4F4F2; margin: 0 0 16px 0;">
            Frequently Asked Questions &amp; Outreach Intelligence
          </h1>
          <p style="font-size: 17px; line-height: 1.6; color: #929DA7; max-width: 800px; margin: 0 0 24px 0;">
            Transparent insights into B2B lead generation methodologies, technical domain deliverability, LinkedIn connection practices, and appointment setting frameworks.
          </p>
        </header>

        ${faqCategoriesHtml}

        <section style="margin-top: 48px; padding: 32px; background: #131417; border: 1px solid rgba(146,157,167,0.2); border-radius: 12px; text-align: center;">
          <h3 style="font-size: 20px; font-weight: 700; color: #F4F4F2; margin-top: 0; margin-bottom: 12px;">Have a Question Not Listed Here?</h3>
          <p style="color: #929DA7; font-size: 14px; max-width: 600px; margin: 0 auto 20px auto;">Reach out directly to discuss your specific target market, industry verticals, and pipeline objectives.</p>
          <a href="https://calendly.com/mhaseebgilani/30min" target="_blank" rel="noopener noreferrer" style="background: #FF4B32; color: #ffffff; padding: 12px 24px; border-radius: 8px; font-weight: 700; text-decoration: none; font-size: 14px; display: inline-block;">
            SCHEDULE DIRECT DISCUSSION
          </a>
        </section>
      </article>
    </main>
    ${renderFooter()}
  `
});

// Render each route into static HTML
console.log(`Prerendering ${routesToPrerender.length} canonical routes...`);

for (const config of routesToPrerender) {
  let html = baseTemplate;

  // 1. Title replacement
  html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(config.title)}</title>`);

  // 2. Meta description
  html = html.replace(
    /<meta name="description" content=".*?" \/>/i,
    `<meta name="description" content="${escapeHtml(config.description)}" />`
  );

  // 3. Meta keywords
  if (config.keywords.length > 0) {
    const kwTag = `<meta name="keywords" content="${escapeHtml(config.keywords.join(', '))}" />`;
    if (html.includes('<meta name="keywords"')) {
      html = html.replace(/<meta name="keywords" content=".*?" \/>/i, kwTag);
    } else {
      html = html.replace('</head>', `  ${kwTag}\n  </head>`);
    }
  }

  // 4. Canonical link
  const canTag = `<link rel="canonical" href="${escapeHtml(config.canonicalUrl)}" />`;
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical" href=".*?" \/>/i, canTag);
  } else {
    html = html.replace('</head>', `  ${canTag}\n  </head>`);
  }

  // 5. OpenGraph Tags
  html = html.replace(/<meta property="og:title" content=".*?" \/>/i, `<meta property="og:title" content="${escapeHtml(config.title)}" />`);
  html = html.replace(/<meta property="og:description" content=".*?" \/>/i, `<meta property="og:description" content="${escapeHtml(config.description)}" />`);
  html = html.replace(/<meta property="og:type" content=".*?" \/>/i, `<meta property="og:type" content="${escapeHtml(config.ogType)}" />`);
  html = html.replace(/<meta property="og:image" content=".*?" \/>/i, `<meta property="og:image" content="${escapeHtml(config.ogImage)}" />`);
  
  // Ensure og:url is present
  if (!html.includes('property="og:url"')) {
    html = html.replace('</head>', `  <meta property="og:url" content="${escapeHtml(config.canonicalUrl)}" />\n  </head>`);
  } else {
    html = html.replace(/<meta property="og:url" content=".*?" \/>/i, `<meta property="og:url" content="${escapeHtml(config.canonicalUrl)}" />`);
  }

  // 6. Twitter Tags
  html = html.replace(/<meta name="twitter:title" content=".*?" \/>/i, `<meta name="twitter:title" content="${escapeHtml(config.title)}" />`);
  html = html.replace(/<meta name="twitter:description" content=".*?" \/>/i, `<meta name="twitter:description" content="${escapeHtml(config.description)}" />`);
  html = html.replace(/<meta name="twitter:image" content=".*?" \/>/i, `<meta name="twitter:image" content="${escapeHtml(config.ogImage)}" />`);

  // 7. Inject JSON-LD
  const jsonLdTag = `<script type="application/ld+json">\n${JSON.stringify(config.schemaJson, null, 2)}\n</script>`;
  // Replace existing schema or inject before </head>
  const jsonLdRegex = new RegExp('<script type="application/ld\\+json">[\\s\\S]*?<\\/script>', 'i');
  if (jsonLdRegex.test(html)) {
    html = html.replace(jsonLdRegex, () => jsonLdTag);
  } else {
    html = html.replace('</head>', () => `  ${jsonLdTag}\n  </head>`);
  }

  // 8. Inject crawler-readable semantic HTML inside <div id="root">
  html = html.replace(
    '<div id="root"></div>',
    () => `<div id="root">${config.bodyHtml}</div>`
  );

  // 9. Write to target destination
  let targetFile: string;
  if (config.routePath === '/' || config.routePath === '') {
    targetFile = path.join(distDir, 'index.html');
  } else {
    const cleanSubPath = config.routePath.startsWith('/') ? config.routePath.slice(1) : config.routePath;
    const targetFolder = path.join(distDir, cleanSubPath);
    if (!fs.existsSync(targetFolder)) {
      fs.mkdirSync(targetFolder, { recursive: true });
    }
    targetFile = path.join(targetFolder, 'index.html');
  }

  fs.writeFileSync(targetFile, html, 'utf-8');
  console.log(`✓ Prerendered ${config.routePath} -> ${path.relative(distDir, targetFile)}`);
}

console.log('Successfully completed static prerendering for all 10 sitemap URLs!');
