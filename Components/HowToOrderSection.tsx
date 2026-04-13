'use client';

import React, { useState, useEffect } from 'react';

const HowToOrderSection = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="bg-[#001A1F] min-h-screen relative overflow-hidden flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'var(--font-montserrat)' }}>
      
      {/* ─── PREMIUM BACKGROUND ELEMENTS ───────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Glow Orbs */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00E0FF]/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#00B8CC]/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E0FF]/5 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Dot Grid Layer */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #00E0FF 1.5px, transparent 0)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {isMounted && [...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#00E0FF] rounded-full blur-[1px] animate-pulse opacity-40"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${3 + i}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center">
        
        {/* ─── SECTION HEADER ─────────────────────────────────────────── */}
        <div className="text-center mb-16 space-y-6" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full backdrop-blur-md">
            <div className="w-2.5 h-2.5 bg-[#00E0FF] rounded-full animate-pulse shadow-[0_0_10px_#00E0FF]" />
            <span className="text-[#00E0FF] text-sm font-black tracking-widest uppercase">Video Introduction</span>
          </div>
          
          <h2 className="text-5xl sm:text-7xl font-black text-white uppercase tracking-tighter">
            How We <span className="text-[#00E0FF]">Work</span>
          </h2>
        </div>

        {/* ─── VIDEO EMBED CONTAINER ──────────────────────────────────── */}
        <div 
          className="w-full max-w-[1600px] aspect-video relative group"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {/* Decorative Frame Accents */}
          <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#00E0FF]/50 rounded-tl-xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#00E0FF]/50 rounded-br-xl pointer-events-none group-hover:scale-110 transition-transform duration-500" />
          
          {/* Main Video Wrapper */}
          <div className="w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-black/40 backdrop-blur-sm relative z-0">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/PPUvhTXJO1A?rel=0&modestbranding=1&vq=hd1080"
              title="Creon Motion Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* Container Glow Layer */}
          <div className="absolute inset-0 rounded-3xl -z-10 bg-gradient-to-br from-[#00E0FF]/10 via-transparent to-[#00B8CC]/10 blur-2xl group-hover:opacity-100 opacity-50 transition-opacity duration-700" />
        </div>

        {/* ─── BOTTOM DECORATION ──────────────────────────────────────── */}
        <div className="mt-16 flex flex-col items-center gap-6 opacity-60">
          <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent" />
          <p className="text-gray-400 text-sm font-medium tracking-wide uppercase">Scroll to explore our work</p>
        </div>

      </div>

      {/* Styled JSX for custom animations if needed (though mostly using Tailwind) */}
      <style jsx>{`
        section {
          scroll-margin-top: 80px;
        }
      `}</style>
    </section>
  );
};

export default HowToOrderSection;
