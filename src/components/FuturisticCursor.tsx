import React, { useEffect, useRef, useState } from 'react';

export const FuturisticCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [cursorStyle, setCursorStyle] = useState<'stealth' | 'reticle'>('stealth');

  useEffect(() => {
    // Disable on touch screens (phones / tablets)
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch && window.innerWidth < 1024) {
      setIsTouchDevice(true);
      return;
    }

    document.body.classList.add('custom-cursor-active');

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isClicking = false;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // 1. Direct hardware-speed transform update (0ms latency, ZERO React state re-renders)
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        cursorRef.current.style.opacity = '1';
      }

      // Check if hovering interactive element
      const target = e.target as HTMLElement | null;
      const interactive = !!target?.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, .glass-panel, .group'
      );

      if (interactive !== isHovering) {
        isHovering = interactive;
        if (cursorRef.current) {
          cursorRef.current.setAttribute('data-hover', isHovering ? 'true' : 'false');
        }
        if (ringRef.current) {
          ringRef.current.setAttribute('data-hover', isHovering ? 'true' : 'false');
        }
      }
    };

    const handleMouseDown = () => {
      isClicking = true;
      if (cursorRef.current) cursorRef.current.setAttribute('data-click', 'true');
      if (ringRef.current) ringRef.current.setAttribute('data-click', 'true');
    };

    const handleMouseUp = () => {
      isClicking = false;
      if (cursorRef.current) cursorRef.current.removeAttribute('data-click');
      if (ringRef.current) ringRef.current.removeAttribute('data-click');
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mousedown', handleMouseDown, { passive: true });
    window.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    // 2. High-speed smooth lerp loop for the cyber trailing halo (0.45 factor = snappy & fluid)
    const render = () => {
      const dx = mouseX - ringX;
      const dy = mouseY - ringY;
      ringX += dx * 0.45;
      ringY += dy * 0.45;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      
      {/* 1. TRAILING CYBER HALO / LOCK-ON BRACKETS (Smooth lerp follow) */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform opacity-0 transition-opacity duration-150"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      >
        {/* The Halo Container centered at click point */}
        <div
          className="relative -top-3.5 -left-3.5 w-7 h-7 flex items-center justify-center transition-all duration-150 ease-out 
          [[data-hover=true]_&]:w-9 [[data-hover=true]_&]:h-9 [[data-hover=true]_&]:-top-4.5 [[data-hover=true]_&]:-left-4.5
          [[data-click=true]_&]:scale-75"
        >
          {/* Subtle Outer Glowing Ring */}
          <div
            className="absolute inset-0 rounded-full border border-[#929DA7]/30 transition-all duration-150
            [[data-hover=true]_&]:border-[#FF4B32] [[data-hover=true]_&]:bg-[#FF4B32]/10 [[data-hover=true]_&]:shadow-[0_0_15px_rgba(255,75,50,0.5)]"
          />

          {/* 4 Corner Targeting Crosshair Ticks on Hover */}
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#FF4B32] opacity-0 [[data-hover=true]_&]:opacity-100 transition-opacity duration-150" />
          <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1 bg-[#FF4B32] opacity-0 [[data-hover=true]_&]:opacity-100 transition-opacity duration-150" />
          <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-1 h-0.5 bg-[#FF4B32] opacity-0 [[data-hover=true]_&]:opacity-100 transition-opacity duration-150" />
          <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-0.5 bg-[#FF4B32] opacity-0 [[data-hover=true]_&]:opacity-100 transition-opacity duration-150" />

          {/* Quick Click Shockwave Effect */}
          <div className="absolute inset-0 rounded-full border border-[#FF4B32] opacity-0 [[data-click=true]_&]:animate-ping" />
        </div>
      </div>

      {/* 2. PRIMARY INSTANTANEOUS CYBER ARROW DART (0ms Hardware Latency) */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none will-change-transform opacity-0 transition-opacity duration-150"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      >
        <div
          className="relative transition-transform duration-100 ease-out origin-top-left
          [[data-hover=true]_&]:scale-110 [[data-click=true]_&]:scale-90"
        >
          {/* Futuristic Cyber Stealth Dart SVG */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            <defs>
              <linearGradient id="stealthBody" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF4B32" stopOpacity="0.95" />
                <stop offset="0.35" stopColor="#2A2E35" />
                <stop offset="1" stopColor="#17191C" />
              </linearGradient>

              <linearGradient id="stealthEdge" x1="0" y1="0" x2="22" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FFFFFF" />
                <stop offset="0.4" stopColor="#FF4B32" />
                <stop offset="1" stopColor="#929DA7" />
              </linearGradient>

              <filter id="laserGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Aerodynamic Stealth Arrow Fuselage */}
            <path
              d="M1 1L8 23L12 14L21 10L1 1Z"
              fill="url(#stealthBody)"
              stroke="url(#stealthEdge)"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />

            {/* Central Energy Inset Spine */}
            <path
              d="M5 6L9 15L11 11L15 9L5 6Z"
              fill="#FF4B32"
              fillOpacity="0.75"
            />

            {/* High-Precision Laser Apex Bead at Exact Mouse Coordinate (1, 1) */}
            <circle
              cx="1.5"
              cy="1.5"
              r="1.6"
              fill="#FFFFFF"
              filter="url(#laserGlow)"
            />
            <circle
              cx="1.5"
              cy="1.5"
              r="3.2"
              stroke="#FF4B32"
              strokeWidth="0.75"
              opacity="0.8"
            />
          </svg>
        </div>
      </div>

    </div>
  );
};
