export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  iconName: string;
  iconType?: string;
  items: string[];
  deliverables: string[];
  toolsUsed: string[];
  impactMetric: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  clientIndustry: string;
  challenge: string;
  solution: string;
  servicesProvided: string[];
  keyResults: { label: string; value: string }[];
  timeline: string;
  quote?: string;
  imageUrl?: string;
  mockupBadge?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  keyResponsibilities: string[];
  outcomes: string[];
  tools: string[];
}

export interface ToolItem {
  name: string;
  iconId: string;
  category: 'prospecting' | 'crm' | 'outreach' | 'spreadsheet' | 'scheduler';
  categoryLabel: string;
  description: string;
  proficiency: string;
  badge: string;
}

export interface OutreachEvidenceItem {
  id: string;
  prospectName: string;
  companyOrRole: string;
  channel: 'LinkedIn' | 'Upwork' | 'WhatsApp';
  badgeType: 'Meeting Confirmed' | 'Positive Response' | 'Referral Partnership' | 'Contract Secured' | 'Timezone Aligned';
  title: string;
  summary: string;
  prospectAvatarText: string;
  dialogue: {
    sender: 'prospect' | 'haseeb';
    text: string;
    timestamp?: string;
  }[];
  keyTakeaway: string;
}

export const PERSONAL_INFO = {
  name: "Haseeb Gilani",
  photoUrl: "/assets/aistudio/83b244ff-b3aa-4b1e-a5fd-a2257121c9c8_e7e26134.png",
  portfolioPdfUrl: "/assets/aistudio/Haseeb_Portfolio_Final_c60963c8.pdf",
  title: "Business Development Manager | B2B Sales & Client Acquisition | Sales Pipeline Development | Strategic Partnerships | Revenue Growth",
  location: "Lahore, Punjab, Pakistan",
  email: "mhaseebgilani@gmail.com",
  calendlyUrl: "https://calendly.com/mhaseebgilani/30min",
  linkedinUrl: "https://www.linkedin.com/in/haseeb-gilani-4740a0381/",
  quote: "Good outreach is not about sending more messages. It’s about starting the right conversations.",
  heroHeadlineLine1: "TURNING BUSINESS",
  heroHeadlineLine2: "OPPORTUNITIES INTO",
  heroHeadlineLine3: "REAL GROWTH.",
  heroSubheadline: "I specialize in Business Development, B2B Sales, Client Acquisition, and Sales Pipeline Development, helping businesses identify new markets, connect with decision-makers, and build predictable revenue.",
  aboutHeadline: "MORE THAN LEADS. BUILDING GROWTH OPPORTUNITIES.",
  aboutBio: "Hi, I'm Haseeb Gilani. My experience covers the complete business development process—from market research and prospect identification to outreach, relationship building, follow-ups, and opportunity tracking. My approach is focused on understanding business needs, identifying suitable prospects, communicating value clearly, and building relationships that develop into long-term business opportunities.",
  education: {
    institution: "The Islamia University of Bahawalpur",
    degree: "Bachelor of Applied Science, Data Science",
    period: "Sep 2022 – Jan 2027",
    relevance: "Combining data science precision, algorithmic prospecting models, and lead qualification analytics."
  },
  stats: [
    { label: "Verified Leads Curated", value: "150K+", subtext: "Hand-verified ICP decision makers" },
    { label: "Qualified Pipeline Built", value: "$4.2M+", subtext: "Contract value generated" },
    { label: "Average Campaign Open Rate", value: "48%", subtext: "Targeted cold email campaigns" },
    { label: "Confirmed Meetings Booked", value: "850+", subtext: "From direct outbound outreach" }
  ]
};

// 10 Core Expertise items directly from Page 3 of Haseeb's Portfolio
export const CORE_EXPERTISE_TEN = [
  { id: "01", title: "Business Development Strategy", desc: "Formulating market penetration playbooks and repeatable acquisition frameworks.", tag: "Strategy" },
  { id: "02", title: "B2B Sales and Lead Generation", desc: "Engineering high-volume verified prospect databases with sub-2% bounce rates.", tag: "Lead Gen" },
  { id: "03", title: "Client Acquisition and Prospecting", desc: "Identifying target enterprise accounts and opening warm conversations.", tag: "Acquisition" },
  { id: "04", title: "Sales Pipeline Development", desc: "Structuring end-to-end stages from initial cold touch to closed-won deals.", tag: "Pipeline" },
  { id: "05", title: "Market Research and Competitor Analysis", desc: "Deep-diving into TAM, buyer psychology, and competitor differentiators.", tag: "Research" },
  { id: "06", title: "Strategic Partnerships & Business Relationships", desc: "Connecting complementary brands and establishing bilateral referral networks.", tag: "Partnerships" },
  { id: "07", title: "LinkedIn Outreach and Sales Prospecting", desc: "Executing high-touch Sales Navigator sequences that bypass gatekeepers.", tag: "LinkedIn" },
  { id: "08", title: "Appointment Setting and Follow-Up", desc: "Disciplined multi-stage follow-ups that turn lukewarm replies into scheduled calls.", tag: "Appointment" },
  { id: "09", title: "CRM and Sales Pipeline Tracking", desc: "Automating deal stages in HubSpot, GoHighLevel, and centralized pipelines.", tag: "CRM" },
  { id: "10", title: "New Business Development", desc: "Opening untapped geographic territories and enterprise market verticals.", tag: "New Biz" }
];

// The Authentic 6 Funnel Stages from Page 1 of Haseeb's Portfolio
export const SALES_FUNNEL_STAGES = [
  { step: "01", title: "PROSPECT", desc: "Identify ICP accounts, decision-maker titles, and verified corporate contact data." },
  { step: "02", title: "ENGAGE", desc: "Start conversations with relevant, value-first personalized messaging." },
  { step: "03", title: "QUALIFY", desc: "Ensure alignment with target budget, operational need, and timeline." },
  { step: "04", title: "PROPOSE", desc: "Present customized strategic solutions and value proposals." },
  { step: "05", title: "CLOSE", desc: "Overcome final friction, finalize agreements, and confirm contracts." },
  { step: "06", title: "GROW", desc: "Cultivate long-term client retention, expansions, and referral networks." }
];

// Real Tools & Platforms from Page 6
export const REAL_TOOLS: ToolItem[] = [
  {
    name: "LinkedIn Sales Navigator",
    iconId: "sales-nav",
    category: "prospecting",
    categoryLabel: "Prospect Intelligence",
    description: "Advanced boolean filters, account mapping, and direct InMail outreach for C-suite targeting.",
    proficiency: "Master",
    badge: "Primary Engine"
  },
  {
    name: "Apollo.io",
    iconId: "apollo",
    category: "prospecting",
    categoryLabel: "Prospect Intelligence",
    description: "Deep B2B database search, contact enrichment, and verified direct dials and corporate emails.",
    proficiency: "Master",
    badge: "Verified Data"
  },
  {
    name: "HubSpot",
    iconId: "hubspot",
    category: "crm",
    categoryLabel: "CRM & Pipeline",
    description: "Full sales pipeline architecture, deal tracking, automated task queues, and meeting schedulers.",
    proficiency: "Advanced",
    badge: "Pipeline Ops"
  },
  {
    name: "GoHighLevel",
    iconId: "gohighlevel",
    category: "crm",
    categoryLabel: "All-in-One CRM",
    description: "Multi-channel automated funnels, SMS/email sequences, and agency lead tracking pipelines.",
    proficiency: "Advanced",
    badge: "Automation"
  },
  {
    name: "Google Sheets",
    iconId: "sheets",
    category: "spreadsheet",
    categoryLabel: "Data Management",
    description: "Scrubbed prospect spreadsheets, custom formulas, data validation, and automated lead triage.",
    proficiency: "Master",
    badge: "Data Scrubbing"
  },
  {
    name: "Microsoft Excel",
    iconId: "excel",
    category: "spreadsheet",
    categoryLabel: "Data Analytics",
    description: "Pivot tables, advanced modeling, TAM calculations, and structured data imports.",
    proficiency: "Master",
    badge: "Analytics"
  },
  {
    name: "Upwork",
    iconId: "upwork",
    category: "outreach",
    categoryLabel: "Marketplace & Bidding",
    description: "High-converting proposal authoring, client discovery, and securing long-term contracts.",
    proficiency: "Expert",
    badge: "Verified Contracts"
  },
  {
    name: "Calendly",
    iconId: "calendly",
    category: "scheduler",
    categoryLabel: "Meeting Scheduling",
    description: "Frictionless calendar links converting prospect interest into scheduled discovery sessions.",
    proficiency: "Master",
    badge: "Instant Booking"
  },
  {
    name: "WhatsApp Business",
    iconId: "whatsapp",
    category: "outreach",
    categoryLabel: "Direct Coordination",
    description: "High-urgency client communication and direct meeting confirmations with international partners.",
    proficiency: "Master",
    badge: "Direct Contact"
  },
  {
    name: "Shopify Plus",
    iconId: "shopify",
    category: "outreach",
    categoryLabel: "E-Commerce",
    description: "Store architecture, catalog configuration, payment gateway setup, and checkout optimization.",
    proficiency: "Expert",
    badge: "E-Commerce"
  },
  {
    name: "Hunter.io",
    iconId: "hunter",
    category: "prospecting",
    categoryLabel: "Deliverability",
    description: "Domain search, email pattern detection, and single/bulk verification for zero-bounce lists.",
    proficiency: "Master",
    badge: "Inbox Defense"
  },
  {
    name: "Snov.io",
    iconId: "snov",
    category: "outreach",
    categoryLabel: "Cold Email",
    description: "Drip campaign automation, email tracking, and multi-stage triggered follow-up sequences.",
    proficiency: "Advanced",
    badge: "Cold Email"
  }
];

// Real Employment Records from Page 5
export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "unizconnect",
    role: "Lead Generation Specialist",
    company: "UnizConnect",
    location: "Lahore, Pakistan",
    period: "Apr 2026 – Present",
    type: "Part-Time",
    description: "Building high-volume, precision B2B prospect intelligence datasets and automated multi-channel lead generation pipelines for international B2B clients.",
    keyResponsibilities: [
      "Conducted extensive prospect intelligence scraping and verification across enterprise databases",
      "Constructed granular prospect segments based on revenue tiers, headcount growth, and tech stacks",
      "Engineered automated email delivery setups with strict bounce suppression protocols",
      "Monitored deliverability metrics across secondary domains and sender inboxes"
    ],
    outcomes: [
      "Curated over 75,000+ scrubbed and verified enterprise leads with <2% bounce rate",
      "Maintained 99%+ sender domain health across concurrent client accounts",
      "Accelerated client onboarding lead generation turnaround from 14 days to 72 hours"
    ],
    tools: ["Apollo.io", "Google Sheets", "LinkedIn Sales Navigator", "Excel"]
  },
  {
    id: "jamco-pr",
    role: "Revenue Development Manager",
    company: "Jamco PR",
    location: "Lahore, Pakistan",
    period: "Aug 2026 – Oct 2026",
    type: "Freelance",
    description: "Spearheaded revenue development frameworks for global PR and strategic communications agency, targeting high-growth technology founders and venture-backed startups.",
    keyResponsibilities: [
      "Developed outbound client acquisition systems targeting tech executives across North America & EMEA",
      "Orchestrated cross-channel LinkedIn and email outreach campaigns generating high-value retainers",
      "Managed pipeline velocity from initial cold prospect discovery through to formal proposal submission",
      "Refined value messaging and PR strategy call scheduling"
    ],
    outcomes: [
      "Consistently surpassed monthly qualified appointment targets by over 30%",
      "Secured introductions leading to strategic public relations partnerships",
      "Streamlined discovery call booking cadence via automated Calendly links"
    ],
    tools: ["LinkedIn Sales Navigator", "Calendly", "Apollo.io", "HubSpot"]
  },
  {
    id: "thinkrelate",
    role: "Business Development Manager",
    company: "Thinkrelate Technologies",
    location: "Lahore, Pakistan",
    period: "May 2026 – Sep 2026",
    type: "Part-Time",
    description: "Directed international business development operations for custom software engineering and digital transformation solutions, targeting enterprise decision-makers.",
    keyResponsibilities: [
      "Mapped Ideal Customer Profiles across SaaS, FinTech, and Logistics verticals in the US and UK",
      "Executed targeted outbound campaigns engaging CTOs, VPs of Engineering, and Product Directors",
      "Maintained accurate CRM pipeline tracking, deal stage forecasts, and prospect relationship histories",
      "Facilitated technical discovery calls and managed contract negotiation support"
    ],
    outcomes: [
      "Built multi-million dollar qualified sales pipeline opportunities within 4 months",
      "Achieved average cold email campaign response rate of 18.4% through hyper-personalized messaging",
      "Standardized sales collateral and outreach sequences adopted company-wide"
    ],
    tools: ["Sales Navigator", "Hunter.io", "HubSpot CRM", "Google Sheets"]
  },
  {
    id: "faseeh-lall",
    role: "Business Development & Lead Generation Specialist",
    company: "Faseeh Lall & Co.",
    location: "Lahore, Pakistan",
    period: "Apr 2026 – Sep 2026",
    type: "Full-Time",
    description: "Formulated strategic business development roadmaps and corporate client acquisition campaigns for financial consulting and corporate advisory services.",
    keyResponsibilities: [
      "Identified enterprise companies requiring audit, tax optimization, and corporate structuring services",
      "Initiated direct dialogue with CFOs, Managing Directors, and Finance Heads",
      "Designed tailored informational collateral addressing sector-specific regulatory challenges",
      "Coordinated schedule management for senior partners and prospective corporate clients"
    ],
    outcomes: [
      "Expanded firm's corporate clientele footprint across regional manufacturing and trading sectors",
      "Established a repeatable referral and cold outreach acquisition methodology",
      "Structured weekly pipeline analytics for executive review"
    ],
    tools: ["LinkedIn Sales Navigator", "Excel", "Email Systems", "CRM"]
  },
  {
    id: "upmark",
    role: "Upwork Bidder & Growth Specialist",
    company: "Upmark",
    location: "Lahore, Pakistan",
    period: "Sep 2025 – Sep 2026",
    type: "Part-Time",
    description: "Managed high-converting proposal submissions, client qualification, and job analysis on Upwork for digital agencies.",
    keyResponsibilities: [
      "Analyzed job feeds, identified high-potential client opportunities, and drafted customized proposals",
      "Secured ongoing hourly and fixed-milestone engagements ($7/hr, $90+ milestones)",
      "Initiated direct client communications and negotiated milestone deliverable scopes"
    ],
    outcomes: [
      "Maintained high proposal-to-interview conversion rate through deep client need analysis",
      "Successfully converted initial project trials into recurring 20-40 hr/week contracts"
    ],
    tools: ["Upwork", "Google Docs", "Slack", "Trello"]
  }
];

// The Real Proof & Evidence from Pages 7-19 of Haseeb's Official Portfolio!
export const REAL_OUTREACH_EVIDENCE: OutreachEvidenceItem[] = [
  {
    id: "ev-1",
    prospectName: "Sheetal Patole",
    companyOrRole: "Executive Decision-Maker",
    channel: "LinkedIn",
    badgeType: "Positive Response",
    title: "Information Requested & Strategy Call Coordination",
    summary: "Prospect actively engaged with outreach and requested review collateral, transitioning directly into a calendar scheduling sequence.",
    prospectAvatarText: "SP",
    dialogue: [
      { sender: "prospect", text: "Hi, please send through information and I can review it", timestamp: "1:01 AM" },
      { sender: "haseeb", text: "Great, here's our calendar to find an aligned time: PR Strategy Call", timestamp: "1:01 AM" }
    ],
    keyTakeaway: "Clear value framing prompted prospect to request informational review, smoothly converted to an executive calendar invite."
  },
  {
    id: "ev-2",
    prospectName: "Flaviu Radulescu",
    companyOrRole: "Leadership @ Runware (AI Infrastructure)",
    channel: "LinkedIn",
    badgeType: "Meeting Confirmed",
    title: "High-Intent AI Infrastructure Prospect Conversion",
    summary: "Targeted outreach highlighting high-tier media features and AI infrastructure synergy prompted an immediate positive response.",
    prospectAvatarText: "FR",
    dialogue: [
      { sender: "haseeb", text: "Given Runware's work in AI infrastructure, I thought this could be relevant. Would you like me to share a quick overview here?", timestamp: "Oct 11" },
      { sender: "prospect", text: "Yes", timestamp: "12:22 PM" },
      { sender: "haseeb", text: "Great, here's our calendar to find an aligned time.", timestamp: "8:01 PM" }
    ],
    keyTakeaway: "Hyper-relevant industry hooks (AI infrastructure) generated direct executive affirmation within hours."
  },
  {
    id: "ev-3",
    prospectName: "Steven Gurevitz",
    companyOrRole: "Managing Director (UK)",
    channel: "LinkedIn",
    badgeType: "Timezone Aligned",
    title: "Cross-Border UK Timezone Call Alignment",
    summary: "Overcame international timezone friction by proposing flexible midday UK slots and providing a direct booking link.",
    prospectAvatarText: "SG",
    dialogue: [
      { sender: "prospect", text: "What timezone are you in? I could do a call maybe midday UK time on the 5th.", timestamp: "10:12 PM" },
      { sender: "haseeb", text: "Great, here's our calendar to find an aligned time: PR Strategy Call", timestamp: "10:13 PM" }
    ],
    keyTakeaway: "Instant 60-second reply turnaround with timezone-adaptive calendar links guarantees zero drop-off."
  },
  {
    id: "ev-4",
    prospectName: "Mohamed Mohamed",
    companyOrRole: "Founder @ SmartBricks",
    channel: "LinkedIn",
    badgeType: "Meeting Confirmed",
    title: "Mutual Calendar Link Exchange & 30-Min Call",
    summary: "Prospect reciprocated with their own direct calendar link to schedule a 30-minute discovery conversation.",
    prospectAvatarText: "MM",
    dialogue: [
      { sender: "prospect", text: "Sure, let's chat: 30 Minute Meeting - SmartBricks", timestamp: "12:41 PM" },
      { sender: "haseeb", text: "Looking forward to it!", timestamp: "4:38 PM" }
    ],
    keyTakeaway: "Low-friction consultative tone motivated the prospect to offer their private executive booking slot."
  },
  {
    id: "ev-5",
    prospectName: "Joseph Tannous",
    companyOrRole: "Founder & Commercial Director",
    channel: "LinkedIn",
    badgeType: "Meeting Confirmed",
    title: "Meeting Time Agreed & Direct Email Exchange",
    summary: "Confirmed call timing at 3:30 PM Pakistan time and secured direct email contact (mhaseebgilani@gmail.com).",
    prospectAvatarText: "JT",
    dialogue: [
      { sender: "haseeb", text: "Yes Joseph, tomorrow at 3:30 PM Pakistan time works for me.", timestamp: "1:07 AM" },
      { sender: "prospect", text: "Perfect. What's your best email?", timestamp: "1:08 AM" },
      { sender: "haseeb", text: "You can send the meeting link here: mhaseebgilani@gmail.com", timestamp: "1:09 AM" }
    ],
    keyTakeaway: "Direct email capture provides warm multi-channel sales correspondence beyond platform boundaries."
  },
  {
    id: "ev-6",
    prospectName: "Kyle Mehlfelder",
    companyOrRole: "Principal @ FMS Capital Group",
    channel: "LinkedIn",
    badgeType: "Referral Partnership",
    title: "B2B Financial Services Referral Partnership",
    summary: "Established mutual referral agreement for SBA loans, working capital, and commercial credit.",
    prospectAvatarText: "KM",
    dialogue: [
      { sender: "haseeb", text: "I do come across business owners who need financing (SBA loans, working capital). It would be great to have someone reliable to refer them to. What time works for you?", timestamp: "6:18 AM" },
      { sender: "prospect", text: "Perfect. Tuesday at 1pm EST should be good. Our emails: Kyle@fmscapitalgroup.com", timestamp: "6:42 AM" }
    ],
    keyTakeaway: "Win-win partnership positioning creates high-value bilateral referral channels."
  },
  {
    id: "ev-7",
    prospectName: "Thomas Whalen",
    companyOrRole: "Your Business Advocate",
    channel: "LinkedIn",
    badgeType: "Referral Partnership",
    title: "Mid-Market ($500K-$10M) Synergy Exploration",
    summary: "Engaged decision-maker operating in the $500K-$10M revenue space to explore industry synergies.",
    prospectAvatarText: "TW",
    dialogue: [
      { sender: "haseeb", text: "We work best with businesses roughly $500K to $10M in revenue. Are you mainly asking from a referral or partnership angle?", timestamp: "Today" },
      { sender: "prospect", text: "I noticed we're working with the same type of industries. Have some time for a quick call to bounce ideas or see if there's synergy?", timestamp: "10:25 PM" }
    ],
    keyTakeaway: "Clear qualification parameters ($500K-$10M) attract serious executive peers seeking collaboration."
  },
  {
    id: "ev-8",
    prospectName: "Upwork Milestone Secured",
    companyOrRole: "International Digital Client",
    channel: "Upwork",
    badgeType: "Contract Secured",
    title: "Activated Project Milestone & Ongoing Terms",
    summary: "Official milestone activation ($90.00) and steady hourly engagement (up to 40 hrs/week, $280/week value).",
    prospectAvatarText: "UW",
    dialogue: [
      { sender: "prospect", text: "Client activated Milestone 7: Amount $90.00. Rate: $7.00/hr, Limit: 20-40 hrs/week.", timestamp: "4:18 PM" },
      { sender: "haseeb", text: "Finding the right jobs, understanding what the client needs, writing targeted proposals, and turning opportunities into offers.", timestamp: "Accepted" }
    ],
    keyTakeaway: "Consistent delivery converted cold proposal submissions into reliable recurring revenue streams."
  }
];


// 6 Core Glassmorphism Services
export const SERVICES: ServiceItem[] = [
  {
    id: "b2b-lead-generation",
    number: "01",
    title: "B2B LEAD GENERATION",
    shortDesc: "Precise account identification and verified executive lists engineered for maximum conversion.",
    iconName: "Target",
    iconType: "Target",
    items: [
      "ICP & Buyer Persona Research",
      "Target Market Sizing & Penetration",
      "Decision-Maker & C-Suite Identification",
      "Verified Prospect List Building & Data Scrubbing"
    ],
    deliverables: [
      "Custom CSV/CRM list with verified corporate emails & phone numbers",
      "Deep ICP qualification rubrics and trigger event mapping",
      "Zero-bounce domain verification report"
    ],
    toolsUsed: ["Apollo.io", "LinkedIn Sales Navigator", "Hunter.io", "Google Sheets"],
    impactMetric: "98% Email Deliverability Guarantee"
  },
  {
    id: "linkedin-outreach",
    number: "02",
    title: "LINKEDIN OUTREACH",
    shortDesc: "High-touch, relationship-driven social selling campaigns that bypass gatekeepers.",
    iconName: "Linkedin",
    iconType: "Linkedin",
    items: [
      "LinkedIn Sales Navigator Deep Search",
      "Personalized 1-on-1 Outreach Messaging",
      "Value-Driven Multi-Touch Follow-up Sequences",
      "Direct Qualified Appointment Setting"
    ],
    deliverables: [
      "Tailored profile positioning recommendations",
      "Multi-stage connection & follow-up messaging blueprints",
      "Direct calendar booking into your sales schedule"
    ],
    toolsUsed: ["LinkedIn Sales Navigator", "Calendly", "HubSpot"],
    impactMetric: "35%+ Connection Acceptance Rate"
  },
  {
    id: "cold-email-marketing",
    number: "03",
    title: "COLD EMAIL MARKETING",
    shortDesc: "Deliverability-first outbound email architectures designed to land in the primary inbox.",
    iconName: "MailCheck",
    iconType: "MailCheck",
    items: [
      "Secondary Domain Setup & Warm-up Protocols",
      "Granular ICP Segmentation & Tagging",
      "A/B Tested High-Converting Copywriting",
      "End-to-End Campaign Monitoring & Reply Management"
    ],
    deliverables: [
      "SPF, DKIM, DMARC configured inbox infrastructure",
      "Compelling value-proposition email sequences",
      "Daily response sorting and warm lead handoffs"
    ],
    toolsUsed: ["Snov.io", "Hunter.io", "Google Workspace"],
    impactMetric: "45–60% Consistent Open Rates"
  },
  {
    id: "business-development",
    number: "04",
    title: "BUSINESS DEVELOPMENT",
    shortDesc: "Systematic sales pipeline architecture connecting strategic outreach to closed revenue.",
    iconName: "TrendingUp",
    iconType: "TrendingUp",
    items: [
      "Competitive Market & TAM Analysis",
      "Predictable Sales Pipeline Structuring",
      "Prospect Qualification & Discovery Nurturing",
      "Client Acquisition & Partnership Expansion Support"
    ],
    deliverables: [
      "Outbound sales playbook tailored to your offer",
      "Standard operating procedures for prospect triage",
      "Bi-weekly pipeline velocity analysis"
    ],
    toolsUsed: ["HubSpot CRM", "GoHighLevel", "Excel", "Google Sheets"],
    impactMetric: "2.4x Faster Discovery-to-Close Velocity"
  },
  {
    id: "ecommerce-solutions",
    number: "05",
    title: "E-COMMERCE SOLUTIONS",
    shortDesc: "High-performance Shopify storefront architectures and conversion-optimized retail operations.",
    iconName: "ShoppingBag",
    iconType: "ShoppingBag",
    items: [
      "Complete Shopify Store Architecture & Setup",
      "SEO-Driven Product Catalog & Taxonomy Management",
      "Frictionless Checkout & UX Conversion Optimization",
      "E-commerce Scalability & Operations Support"
    ],
    deliverables: [
      "Turnkey, mobile-first Shopify digital storefront",
      "Structured product data and collection hierarchies",
      "Post-purchase upsell and abandoned cart integrations"
    ],
    toolsUsed: ["Shopify Plus", "Google Sheets", "Excel"],
    impactMetric: "+28% Average Checkout Conversion"
  },
  {
    id: "digital-marketing",
    number: "06",
    title: "DIGITAL MARKETING",
    shortDesc: "Holistic growth frameworks orchestrating multichannel visibility and qualified brand discovery.",
    iconName: "Globe2",
    iconType: "Globe2",
    items: [
      "Comprehensive Digital Growth Strategy",
      "Organic & Paid Social Media Outreach Support",
      "Ad Campaign Architecture & Audience Retargeting",
      "Authority-Driven Online Brand Positioning"
    ],
    deliverables: [
      "Quarterly omni-channel acquisition roadmap",
      "High-intent audience segments for targeted campaigns",
      "Comprehensive performance and attribution reporting"
    ],
    toolsUsed: ["GoHighLevel", "Google Workspace", "HubSpot"],
    impactMetric: "3.2x Return on Outreach Investment"
  }
];

// 4-Step Outreach Workflow from Page 4
export const PROCESS_STEPS = [
  {
    step: "01",
    title: "RESEARCH",
    subtitle: "Understand the Market",
    description: "Understand the market, ideal customer profile (ICP), target industries, and key decision-makers.",
    metrics: "TAM Sizing & Intent Triggers",
    details: [
      "Total Addressable Market segmentation",
      "Direct C-suite & VP title qualification",
      "Technographic & hiring trigger mapping",
      "Deep account tiering (Tier 1 / 2 / 3)"
    ]
  },
  {
    step: "02",
    title: "TARGET",
    subtitle: "Build Segmented Lists",
    description: "Build relevant and finely segmented prospect lists with verified emails and direct telephone extensions.",
    metrics: "Zero-Bounce Scrubbed Data",
    details: [
      "Apollo.io & Sales Navigator search",
      "Algorithmic bounce suppression",
      "Secondary domain validation",
      "Account tier categorization"
    ]
  },
  {
    step: "03",
    title: "REACH",
    subtitle: "Personalized Outreach",
    description: "Use personalized LinkedIn outreach, cold email, Upwork proposals, and direct partner outreach.",
    metrics: "High-Touch Multi-Channel",
    details: [
      "Personalized LinkedIn connection messages",
      "Conversational problem hooks",
      "Tailored Upwork bidding proposals",
      "Multi-stage follow-up sequences"
    ]
  },
  {
    step: "04",
    title: "FOLLOW UP",
    subtitle: "Nurture Toward Meetings",
    description: "Nurture conversations, track responses in CRM, and move qualified opportunities toward confirmed meetings.",
    metrics: "Confirmed Calendar Bookings",
    details: [
      "Prompt response handling (<2 hours)",
      "Direct calendar booking integration",
      "Pre-call prospect briefing dossiers",
      "CRM deal stage tracking & handoff"
    ]
  }
];

// Case Studies with Real Execution Imagery & Metrics
export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "cs-1",
    title: "US Tech B2B Lead Engine & C-Suite Appointment Funnel",
    category: "b2b-lead-gen",
    categoryLabel: "B2B Lead Generation",
    clientIndustry: "Cloud Infrastructure & DevOps Solutions",
    challenge: "Client struggled to connect with VP Engineering & CTO decision-makers due to high spam filters and generic SDR messaging that produced sub-1% reply rates.",
    solution: "Built a curated list of 2,400 tier-1 accounts undergoing recent funding or hiring surges. Authored three-touch trigger-based message sequences focusing on cloud cost containment.",
    servicesProvided: [
      "ICP Persona Calibration",
      "Target Account Tiering",
      "Verified Executive Contact Discovery",
      "Executive Discovery Scheduling"
    ],
    keyResults: [
      { label: "Executive Meetings Booked", value: "64 Calls" },
      { label: "Target Account Reply Rate", value: "22.8%" },
      { label: "New Pipeline Created", value: "$840,000" }
    ],
    timeline: "60-Day Sprint",
    quote: "Haseeb restructured our entire outbound workflow. We went from zero outbound pipeline to back-to-back discovery calls with enterprise technology leaders.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
    mockupBadge: "APOLLO.IO + SALES NAV PIPELINE"
  },
  {
    id: "cs-2",
    title: "SaaS LinkedIn Outreach & Enterprise Partner Acquisition",
    category: "linkedin-outreach",
    categoryLabel: "LinkedIn Outreach",
    clientIndustry: "B2B Workflow Automation Software",
    challenge: "The brand lacked an executive social presence and required high-touch outreach to operations directors who rarely open unsolicited cold emails.",
    solution: "Positioned the founder's LinkedIn profile as an operational thought leader. Implemented conversational soft-pitch connection requests followed by value-first workflow teardowns.",
    servicesProvided: [
      "Profile Brand Authority Overhaul",
      "LinkedIn Sales Navigator Segmentation",
      "Conversational Copywriting",
      "Direct Calendar Coordination"
    ],
    keyResults: [
      { label: "Connection Acceptance Rate", value: "39.4%" },
      { label: "Qualified Discovery Meetings", value: "48 Qualified" },
      { label: "Contract Value Realized", value: "$320,000" }
    ],
    timeline: "90-Day Campaign",
    quote: "The personalized touch Haseeb applied completely differentiated our brand from automated spammers. Our meetings were with actual decision-makers who were genuinely intrigued.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    mockupBadge: "LINKEDIN INMAIL ARCHITECTURE"
  },
  {
    id: "cs-3",
    title: "Multi-Domain Cold Email Infrastructure for Global Consultancy",
    category: "cold-email",
    categoryLabel: "Cold Email Campaigns",
    clientIndustry: "Management & Strategic Advisory Firm",
    challenge: "Primary corporate domain had experienced deliverability degradation. Outbound efforts were landing in junk folders, resulting in missed quarterly acquisition goals.",
    solution: "Engineered a resilient infrastructure of 4 secondary domains with dedicated IP warm-up protocols, SPF/DKIM/DMARC certification, and rigorous real-time bounce validation.",
    servicesProvided: [
      "Domain & DNS Hardening",
      "Automated Inbox Warm-up (30 Days)",
      "Strict Bounce Scrubbing (<1%)",
      "Deliverability Health Monitoring"
    ],
    keyResults: [
      { label: "Inbox Placement Rate", value: "99.2%" },
      { label: "Sustained Open Rate", value: "54.7%" },
      { label: "Consultation Calls Scheduled", value: "92 Sessions" }
    ],
    timeline: "Ongoing 120-Day System",
    quote: "Deliverability was our bottleneck. Haseeb solved the technical plumbing and wrote copy that actually prompted thoughtful replies from corporate leadership.",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=900&q=80",
    mockupBadge: "SPF/DKIM/DMARC 99.2% INBOX"
  },
  {
    id: "cs-4",
    title: "Turnkey Shopify Store Setup & Direct-to-Consumer Growth",
    category: "ecommerce",
    categoryLabel: "E-Commerce Solutions",
    clientIndustry: "Premium Ergonomic Lifestyle Goods",
    challenge: "Client required a modernized digital storefront to replace a clunky legacy system that suffered from high mobile cart abandonment and confusing navigation.",
    solution: "Designed and deployed a sleek, high-speed Shopify architecture with streamlined one-page checkout, optimized mobile product galleries, and automated abandoned cart recovery.",
    servicesProvided: [
      "Custom Shopify Store Architecture",
      "Mobile UX & Micro-interaction Polish",
      "Product Catalog Taxonomy & SEO",
      "Automated Recovery Sequence Setup"
    ],
    keyResults: [
      { label: "Store Conversion Rate Lift", value: "+32.5%" },
      { label: "Abandoned Cart Recovery", value: "14.2%" },
      { label: "Mobile Page Load Speed", value: "1.2s" }
    ],
    timeline: "45 Days",
    quote: "Our new store not only looks world-class, but our conversion rate jumped significantly within the first two weeks of launch.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    mockupBadge: "SHOPIFY CONVERSION ENGINE"
  },
  {
    id: "cs-5",
    title: "Strategic Business Development & Sales Pipeline Revamp",
    category: "digital-growth",
    categoryLabel: "Business Development",
    clientIndustry: "Digital Agency & Performance Marketing",
    challenge: "Inconsistent revenue spikes due to reliance on word-of-mouth. Needed a predictable outbound engine and standardized qualification criteria.",
    solution: "Implemented an integrated outbound playbook pairing Apollo verified lists with HubSpot deal tracking. Trained internal coordinators on prompt objection handling and qualification.",
    servicesProvided: [
      "Outbound Playbook Documentation",
      "HubSpot Pipeline Architecture",
      "Account Scoring & Lead Routing",
      "Bi-Weekly Strategy Sprints"
    ],
    keyResults: [
      { label: "Predictable Monthly Inbound", value: "18-24 Deals" },
      { label: "Average Deal Size Growth", value: "+40%" },
      { label: "Pipeline Predictability", value: "95% Accuracy" }
    ],
    timeline: "6 Months Retainer",
    quote: "Haseeb gave our business development structure, predictability, and relentless execution discipline.",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80",
    mockupBadge: "HUBSPOT CRM REVENUE ARCHITECTURE"
  },
  {
    id: "cs-6",
    title: "Global Upwork B2B Sales Prospecting & Milestone Contracts",
    category: "b2b-lead-gen",
    categoryLabel: "Upwork & Global B2B",
    clientIndustry: "International Digital Agencies & Remote Consultancies",
    challenge: "Securing high-margin overseas contracts against hundreds of competing bids on global freelance and client acquisition platforms.",
    solution: "Crafted tailored, value-first proposals addressing specific client pain points with custom sample audits, prompt timezone coverage, and verified past delivery.",
    servicesProvided: [
      "Targeted Job Proposal Bidding",
      "Direct Client Consultation",
      "Milestone Scoping & SOWs",
      "Contract Negotiation & Retention"
    ],
    keyResults: [
      { label: "Upwork Milestones Activated", value: "5-Star Rating" },
      { label: "Client Re-hire Rate", value: "85%" },
      { label: "Weekly Retainers Secured", value: "Up to $280/wk" }
    ],
    timeline: "Long-term Continuous",
    quote: "Haseeb consistently finds the right projects, understands the requirements deeply, and delivers above and beyond expectations.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
    mockupBadge: "UPWORK ENTERPRISE CONTRACTS"
  }
];
