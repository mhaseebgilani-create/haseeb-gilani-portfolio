import React, { useEffect, useRef } from 'react';

/**
 * High-performance ambient coral light aura that smoothly tracks the desktop mouse.
 * Uses direct DOM transform updates via requestAnimationFrame / passive mousemove
 * with 0 React state updates and 0 component re-renders.
 */
export const AmbientMouseAura: React.FC = () => {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on pointer-capable desktop devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mouseX = -1000;
    let mouseY = -1000;
    let currentX = -1000;
    let currentY = -1000;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth lerp tracking (0.15 factor gives a luxurious, delayed floating aura effect)
    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      if (auraRef.current) {
        auraRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={auraRef}
      className="hidden md:block pointer-events-none fixed top-0 left-0 w-[500px] h-[500px] rounded-full blur-[130px] opacity-15 bg-[#FF4B32] z-30 will-change-transform"
      style={{
        transform: 'translate3d(-1000px, -1000px, 0)',
      }}
      aria-hidden="true"
    />
  );
};
