import React, { useState } from 'react';
import { ArrowRight, MessageSquare, MapPin, CheckCircle2, TrendingUp, ShieldCheck, Terminal, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ThreeHeroScene } from './ThreeHeroScene';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onExploreWorld?: () => void;
  onConnect?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWorld, onConnect }) => {
  // 3D Mouse tilt on portrait card
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  const scrollToAbout = () => {
    if (onExploreWorld) {
      onExploreWorld();
    } else {
      const el = document.getElementById('about');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (onConnect) {
      onConnect();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex flex-col justify-between overflow-hidden industrial-grid">
      {/* Interactive 3D Canvas Background */}
      <ThreeHeroScene />

      {/* Subtle Ambient Coral Glow in background corners */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#FF4B32]/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-96 h-96 bg-[#FF4B32]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Cyber Grid Laser Lines */}
      <div className="laser-divider absolute top-24 left-0 right-0 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        {/* Split Grid: Left Copy & CTAs, Right Portrait Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: TYPOGRAPHY & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* High-Tech HUD Kicker Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#1F2328]/95 border border-[#929DA7]/30 text-xs font-mono tracking-wider text-[#929DA7] mb-6 backdrop-blur-md shadow-lg shadow-black/40">
              <BrandLogo size={18} />
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B32] animate-ping" />
              <span className="text-[#F4F4F2] font-semibold tracking-widest uppercase">HELLO, I'M HASEEB GILANI</span>
              <span className="text-[#FF4B32]">/</span>
              <span className="text-[#929DA7] font-mono text-[11px] hidden sm:inline">SYS_ACTIVE // 2026</span>
            </div>

            {/* Main Headline with Glowing Accents */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-[#F4F4F2] leading-[1.05] mb-6" style={{ textWrap: 'balance' }}>
              TURNING BUSINESS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4B32] via-[#FF6B50] to-[#F4F4F2] drop-shadow-[0_0_35px_rgba(255,75,50,0.35)]">
                OPPORTUNITIES
              </span><br />
              INTO REAL GROWTH.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#929DA7] font-normal leading-relaxed max-w-2xl mb-8">
              {PERSONAL_INFO.heroSubheadline}
            </p>

            {/* Professional Focus Tags - Clean Unboxed with Typographic Separator */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-medium text-[#929DA7] mb-9">
              <span className="text-[#F4F4F2] px-2 py-0.5 rounded bg-white/5 border border-white/5">B2B Lead Generation</span>
              <span className="text-[#FF4B32] font-bold">/</span>
              <span className="text-[#F4F4F2] px-2 py-0.5 rounded bg-white/5 border border-white/5">LinkedIn Outreach</span>
              <span className="text-[#FF4B32] font-bold">/</span>
              <span className="text-[#F4F4F2] px-2 py-0.5 rounded bg-white/5 border border-white/5">Cold Email Sequences</span>
              <span className="text-[#FF4B32] font-bold">/</span>
              <span className="text-[#F4F4F2] px-2 py-0.5 rounded bg-white/5 border border-white/5">Sales Pipelines</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary CTA */}
              <button
                onClick={scrollToAbout}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#FF4B32] hover:bg-[#e03a22] text-white font-bold text-xs tracking-widest uppercase transition-all duration-200 shadow-xl shadow-[#FF4B32]/35 flex items-center justify-center gap-3 group cursor-pointer hover:shadow-[0_0_25px_rgba(255,75,50,0.6)]"
              >
                <span>EXPLORE MY WORLD</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Secondary CTA */}
              <button
                onClick={scrollToContact}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-[#1F2328] hover:bg-[#2A2E35] text-[#F4F4F2] hover:text-white font-bold text-xs tracking-widest uppercase border border-[#929DA7]/25 hover:border-[#FF4B32]/50 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-black/40"
              >
                <MessageSquare className="w-4 h-4 text-[#FF4B32]" />
                <span>LET'S CONNECT</span>
              </button>
            </div>

            {/* Location & Status Marker with Coordinates */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-mono text-[#929DA7]">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF4B32]" />
                <span>Lahore, Pakistan</span>
              </div>
              <span>·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[#F4F4F2]">Open for Q1/Q2 Growth Projects</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <div className="text-[11px] text-[#929DA7]/70 hidden sm:inline">
                GEO // 31.5204° N, 74.3587° E
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CINEMATIC PORTRAIT FRAME WITH CYBER HUD SCANNER */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="relative w-full max-w-md cursor-pointer transition-transform duration-200 ease-out hud-corner"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
              }}
            >
              {/* Outer Metallic 3D Bevel Frame */}
              <div className="relative rounded-3xl p-3 bg-gradient-to-br from-[#2E333B] via-[#1A1D21] to-[#252930] border-2 border-[#929DA7]/30 shadow-2xl shadow-black/90">
                
                {/* Coral Orange Rim Lighting Effect */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-[#FF4B32]/40 via-transparent to-[#FF4B32]/30 opacity-80 blur-lg pointer-events-none" />

                {/* Inner Image Container */}
                <div className="relative rounded-2xl overflow-hidden bg-[#17191C] aspect-square group">
                  <picture>
                    <source srcSet={PERSONAL_INFO.photoUrl} type="image/webp" />
                    <source srcSet={PERSONAL_INFO.photoFallbackUrl} type="image/png" />
                    <img
                      src={PERSONAL_INFO.photoFallbackUrl}
                      alt="Haseeb Gilani (alternate spelling Haseeb Gillani) - Business Development Manager & B2B Lead Generation Specialist in Lahore, Pakistan"
                      width={600}
                      height={600}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                      referrerPolicy="no-referrer"
                    />
                  </picture>

                  {/* Cyber Laser Scanner Line sweeping continuously */}
                  <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-transparent via-[#FF4B32]/25 to-transparent animate-scanline pointer-events-none" />

                  {/* Gradient Scrim for subtle bottom atmospheric depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17191C]/95 via-[#17191C]/20 to-transparent pointer-events-none" />

                  {/* Top-Right HUD Badge: Lahore, Pakistan */}
                  <div className="absolute top-4 right-4 px-3 py-1.5 rounded-xl glass-panel-elevated border border-[#929DA7]/30 flex items-center gap-1.5 text-xs font-mono text-[#F4F4F2] shadow-xl backdrop-blur-md">
                    <MapPin className="w-3.5 h-3.5 text-[#FF4B32]" />
                    <span className="font-bold">Lahore, PK</span>
                  </div>

                  {/* Top-Left Telemetry Tag with Brand Logo Emblem */}
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded-xl bg-black/80 border border-[#929DA7]/30 text-[10px] font-mono text-[#F4F4F2] tracking-wider uppercase flex items-center gap-1.5 backdrop-blur-md shadow-lg">
                    <BrandLogo size={16} />
                    <span className="text-[#FF4B32] font-bold">VERIFIED</span>
                    <span className="text-[#929DA7] hidden sm:inline">IDENTITY</span>
                  </div>

                  {/* Bottom Overlay Info Banner */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel-elevated border border-[#929DA7]/25 flex items-center justify-between shadow-2xl">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#FF4B32] uppercase mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF4B32] animate-pulse" />
                        <span>EXECUTIVE IDENTITY</span>
                      </div>
                      <h4 className="text-sm font-extrabold font-display uppercase tracking-wider text-[#F4F4F2]">
                        Haseeb Gilani
                      </h4>
                      <p className="text-[11px] text-[#929DA7] font-medium">
                        B2B Growth &amp; Outreach Specialist
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-xl bg-[#FF4B32]/20 border border-[#FF4B32]/50 flex items-center justify-center text-[#FF4B32] shadow-md">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                  </div>

                </div>

                {/* Decorative corner bolts */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-[#929DA7]/70 shadow-inner" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-[#929DA7]/70 shadow-inner" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-[#929DA7]/70 shadow-inner" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-[#929DA7]/70 shadow-inner" />

              </div>

              {/* Floating Industrial Status Tag */}
              <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl glass-panel-elevated border border-[#FF4B32]/40 shadow-xl shadow-black/80">
                <ShieldCheck className="w-4 h-4 text-[#FF4B32]" />
                <span className="text-xs font-mono font-bold text-[#F4F4F2]">VERIFIED ICP DATA ENGINE</span>
              </div>

            </div>
          </div>

        </div>

        {/* FULL-WIDTH STATS STRIP WITH HUD STYLING */}
        <div className="mt-16 lg:mt-24 pt-8 border-t border-[#929DA7]/20 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div
                key={idx}
                className="relative p-5 rounded-2xl glass-panel border border-[#929DA7]/20 hover:border-[#FF4B32]/60 hover:shadow-xl hover:shadow-[#FF4B32]/10 transition-all duration-300 group overflow-hidden"
              >
                {/* Top Glowing Edge Bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF4B32]/0 group-hover:via-[#FF4B32] to-transparent transition-all duration-300" />
                
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display text-[#F4F4F2] tabular-nums tracking-tight mb-1 group-hover:text-[#FF4B32] transition-colors">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#F4F4F2] mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#929DA7] font-mono text-[11px]">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
