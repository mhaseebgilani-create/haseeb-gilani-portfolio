import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 38,
  showText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Futuristic Geometric Interlocking H-G Monogram Emblem */}
      <div
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
        style={{ width: size, height: size }}
      >
        {/* Ambient Coral Glow on Hover */}
        <div className="absolute -inset-1 rounded-xl bg-[#FF4B32]/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Industrial Hexagonal Shield with Chamfered Edges */}
          <polygon
            points="50,4 90,26 90,74 50,96 10,74 10,26"
            fill="url(#logoChassisGrad)"
            stroke="url(#logoBorderGrad)"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Inner Accent Grid Lines */}
          <polygon
            points="50,12 82,30 82,70 50,88 18,70 18,30"
            stroke="#929DA7"
            strokeWidth="0.75"
            strokeOpacity="0.25"
            strokeDasharray="4 2"
            fill="none"
          />

          {/* Interlocking Monogram: 'H' & 'G' Fusion */}
          {/* Left Pillar of 'H' */}
          <rect x="28" y="28" width="8" height="44" rx="2" fill="url(#metalSilverGrad)" />

          {/* Right Pillar of 'H' which curves into 'G' */}
          <path
            d="M64 28V46H72V28H64Z"
            fill="url(#metalSilverGrad)"
          />

          {/* Central Connecting Bar (The Coral Power Conduit) */}
          <path
            d="M28 46H66"
            stroke="#FF4B32"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Outer 'G' Arch and Inward Spur */}
          <path
            d="M68 46C68 40 62 34 52 34C40 34 35 44 35 52C35 60 40 68 52 68C62 68 68 62 68 56H52V50H74V60C72 67 63 74 50 74C34 74 27 63 27 50C27 37 36 26 52 26C64 26 73 34 74 44"
            stroke="url(#coralPowerGrad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Precision Crosshair Laser Center Dot */}
          <circle cx="50" cy="50" r="3" fill="#FF4B32" className="animate-pulse" />

          {/* Corner Tech Ticks */}
          <circle cx="50" cy="18" r="1.5" fill="#929DA7" />
          <circle cx="50" cy="82" r="1.5" fill="#929DA7" />
          <circle cx="23" cy="50" r="1.5" fill="#929DA7" />
          <circle cx="77" cy="50" r="1.5" fill="#929DA7" />

          {/* Gradients */}
          <defs>
            <linearGradient id="logoChassisGrad" x1="10" y1="4" x2="90" y2="96" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2A2E35" />
              <stop offset="0.5" stopColor="#17191C" />
              <stop offset="1" stopColor="#1E2227" />
            </linearGradient>

            <linearGradient id="logoBorderGrad" x1="10" y1="4" x2="90" y2="96" gradientUnits="userSpaceOnUse">
              <stop stopColor="#929DA7" stopOpacity="0.6" />
              <stop offset="0.5" stopColor="#FF4B32" stopOpacity="0.8" />
              <stop offset="1" stopColor="#929DA7" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="metalSilverGrad" x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#F4F4F2" />
              <stop offset="0.7" stopColor="#929DA7" />
              <stop offset="1" stopColor="#5A646E" />
            </linearGradient>

            <linearGradient id="coralPowerGrad" x1="27" y1="26" x2="74" y2="74" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FF4B32" />
              <stop offset="0.6" stopColor="#FF7A59" />
              <stop offset="1" stopColor="#FF4B32" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Optional Brand Wordmark */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[#F4F4F2] group-hover:text-white transition-colors leading-none">
            HASEEB GILANI
          </span>
          <span className="text-[10px] font-mono tracking-widest text-[#929DA7] uppercase mt-1">
            B2B Growth Architect
          </span>
        </div>
      )}
    </div>
  );
};
