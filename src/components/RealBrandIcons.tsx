import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const RealLinkedInIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" fill="#0A66C2" />
  </svg>
);

export const RealSalesNavigatorIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="24" height="24" rx="5" fill="#004182" />
    <path d="M12 4L4 8l8 4 8-4-8-4z" fill="#FF4B32" />
    <path d="M4 12l8 4 8-4" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M4 16l8 4 8-4" stroke="#929DA7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

export const RealApolloIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="24" height="24" rx="5" fill="#1C1F26" />
    {/* Apollo Rocket / Chevron icon in official yellow */}
    <path
      d="M12 4L5 18h3.5l1.8-4.2h3.4l1.8 4.2H19L12 4zm-.1 7.2l1.1-2.6 1.1 2.6h-2.2z"
      fill="#F6BE22"
    />
    <circle cx="12" cy="7.5" r="1.2" fill="#FF4B32" />
  </svg>
);

export const RealHubSpotIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* HubSpot official sprocket shape */}
    <path
      d="M18.8 8.2V5.5c.8-.4 1.4-1.2 1.4-2.2 0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5c0 1 .6 1.8 1.4 2.2v2.7c-.8.3-1.5.8-2.1 1.4L8.7 6.4c.1-.3.2-.6.2-.9 0-1.7-1.3-3-3-3s-3 1.3-3 3 1.3 3 3 3c.6 0 1.2-.2 1.7-.5l5.8 3.2c-.3.7-.5 1.5-.5 2.3 0 .8.2 1.6.5 2.3l-5.8 3.2c-.5-.3-1.1-.5-1.7-.5-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3c0-.3-.1-.6-.2-.9l5.8-3.2c.6.6 1.3 1.1 2.1 1.4v2.7c-.8.4-1.4 1.2-1.4 2.2 0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5c0-1-.6-1.8-1.4-2.2v-2.7c1.8-.7 3.2-2.5 3.2-4.6s-1.4-3.9-3.2-4.6zm-1.1-5.9c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1zm-11.8 4c-.8 0-1.5-.7-1.5-1.5S5.1 3.3 6 3.3s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm0 14.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm11.8 4c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm0-9.5c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
      fill="#FF7A59"
    />
  </svg>
);

export const RealGoHighLevelIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="24" height="24" rx="5" fill="#182333" />
    {/* GoHighLevel rocket bars in blue/cyan */}
    <path d="M5 16l4-4 3 3 7-7" stroke="#00C48C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M14 8h5v5" stroke="#00C48C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <path d="M7 19h10" stroke="#0080FF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const RealGoogleSheetsIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    {/* Google Sheets green doc with grid */}
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" fill="#0F9D58" />
    <path d="M14 2v6h6" fill="#87CEAC" />
    <path d="M7 13h10v6H7v-6zm0 2h10M12 13v6" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

export const RealExcelIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect x="2" y="3" width="20" height="18" rx="2" fill="#107C41" />
    <path d="M7 7l4 5-4 5h2.5l2.5-3.5 2.5 3.5H17l-4-5 4-5h-2.5L12 10.5 9.5 7H7z" fill="#FFFFFF" />
  </svg>
);

export const RealUpworkIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path
      d="M18.56 3.5a3.44 3.44 0 0 0-2.48 1.05 4.54 4.54 0 0 0-1.4 2.87 14.8 14.8 0 0 0-3.32-.42 5.15 5.15 0 0 0-5.15 5.15c0 1.25.43 2.4 1.16 3.32l-2.6 6.03h2.7l1.7-4.04a5.1 5.1 0 0 0 2.19.49c2.84 0 5.15-2.3 5.15-5.15 0-.58-.1-1.14-.29-1.66a9.5 9.5 0 0 1 1.77-.38c.19 1.44.75 3.5 2.57 3.5 1.7 0 2.8-1.28 2.8-3.37 0-2.4-1.63-3.89-4.8-3.89zm0 5.07c-1.04 0-1.44-1.12-1.58-2.07.4-.1.84-.15 1.3-.15 1.5 0 2.27.64 2.27 1.83 0 .97-.56 1.4-1.3 1.4zM11.36 15.6a2.65 2.65 0 0 1-2.65-2.65 2.65 2.65 0 0 1 2.65-2.65c.67 0 1.3.25 1.78.67-.32 1.48-.95 3.03-1.78 4.63z"
      fill="#14A800"
    />
  </svg>
);

export const RealCalendlyIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="24" height="24" rx="6" fill="#006BFF" />
    <path
      d="M17 12a5 5 0 1 1-5-5 1 1 0 0 1 0 2 3 3 0 1 0 3 3 1 1 0 0 1 2 0z"
      fill="#FFFFFF"
    />
    <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
  </svg>
);

export const RealWhatsAppIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path
      d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.09-.39-.12-.56.12-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.45 1.03 2.61.12.17 1.77 2.7 4.28 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z"
      fill="#25D366"
    />
  </svg>
);

export const RealHunterIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="24" height="24" rx="5" fill="#FF6B00" />
    {/* Hunter.io radar radar wave */}
    <circle cx="12" cy="12" r="7" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.4" />
    <circle cx="12" cy="12" r="4" stroke="#FFFFFF" strokeWidth="1.5" fill="none" opacity="0.8" />
    <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />
    <path d="M12 5v3M12 16v3M5 12h3M16 12h3" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const RealSnovIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <rect width="24" height="24" rx="5" fill="#4B77BE" />
    <path d="M7 17l5-10 5 10H7z" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinejoin="round" />
    <circle cx="12" cy="14" r="1.5" fill="#FFFFFF" />
  </svg>
);

export const RealShopifyIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    style={size ? { width: size, height: size } : undefined}
  >
    <path
      d="M19.7 7.3c-.04-.26-.26-.45-.52-.45h-2.92c-.08-.85-.35-2.02-.99-2.9-.84-1.15-2.06-1.78-3.44-1.78-.17 0-.34.01-.52.04-1.07.16-2.02.8-2.61 1.75-.8 1.28-.96 2.87-.96 3.19l-3.38.99c-.3.09-.5.36-.49.68l1.45 12.22c.04.3.29.53.6.53h12.56c.3 0 .56-.22.6-.52l1.64-13.75zm-6.73-3.69c.85 0 1.63.4 2.2 1.15.42.55.67 1.35.77 2.09l-4.75 1.38c.08-.88.42-2.34 1.78-4.62zm-2.43 4.88l3.44-1c.08.35.13.71.16 1.07l-3.6 1.05v-1.12zm1.61 8.8c-1.39 0-2.31-1.03-2.31-2.56 0-1.78 1.22-3.1 3.01-3.63l.79-.23v.97l-.68.2c-1.27.38-2.02 1.24-2.02 2.37 0 .93.55 1.54 1.44 1.54.5 0 .96-.2 1.26-.53v1.35c-.41.34-.94.52-1.49.52z"
      fill="#95BF47"
    />
  </svg>
);
