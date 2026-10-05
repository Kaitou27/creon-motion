'use client';

import React from 'react';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => (
  <section 
    id="home" 
    className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#001A1F] text-white pt-24 pb-12 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 font-montserrat"
    style={{ fontFamily: 'var(--font-montserrat)' }}
  >
    {/* Subtle Background Elements */}
    <div className="absolute inset-0 pointer-events-none opacity-20">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00E0FF] rounded-full blur-[128px]"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      
      {/* Left Column: Text Content */}
      <div className="w-full lg:w-[45%] flex flex-col items-start" data-aos="fade-up" data-aos-duration="800">
        <span className="text-[#00E0FF] font-bold tracking-widest text-xs uppercase mb-4">
          Video Editing & Motion Design
        </span>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-black text-white leading-[1.1] tracking-tight mb-6">
          Great videos without managing every edit.
        </h1>
        
        <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
          Creon Motion handles the editing, visual storytelling, motion design, and final polish for YouTube creators and teams that publish consistently.
        </p>
        
        <p className="text-gray-300 text-base sm:text-lg mb-10 leading-relaxed">
          You bring the footage, script, or idea. We handle the creative decisions needed to turn it into a finished video.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a 
            href="/work"
            className="w-full sm:w-auto bg-white text-[#001A1F] hover:bg-gray-100 font-bold px-8 py-4 rounded-lg flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            See Our Work
            <ChevronRight className="ml-2 w-5 h-5" />
          </a>
          
          <a 
            href="/quote"
            className="w-full sm:w-auto bg-transparent border border-white/30 text-white hover:bg-white/5 font-bold px-8 py-4 rounded-lg flex items-center justify-center transition-all duration-300"
          >
            Start a Project
          </a>
        </div>
      </div>

      {/* Right Column: Video */}
      <div className="w-full lg:w-[55%] relative mt-12 lg:mt-0" style={{ perspective: '2000px' }} data-aos="fade-left" data-aos-duration="1200" data-aos-delay="200">
        
        {/* Glow behind device */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#00E0FF]/20 rounded-full blur-[100px] pointer-events-none"></div>

        {/* 3D Device Frame (Tablet style) */}
        <div 
          className="relative w-full mx-auto max-w-[700px] aspect-[4/3] sm:aspect-[16/11] rounded-[24px] sm:rounded-[32px] bg-[#1a1a1a] p-3 sm:p-4 shadow-[20px_20px_60px_rgba(0,0,0,0.8),-5px_-5px_20px_rgba(255,255,255,0.02)] border-[3px] border-[#222] group transition-all duration-700 ease-out hover:rotate-0 hover:scale-105"
          style={{ 
            transform: "rotateY(-18deg) rotateX(8deg) rotateZ(-2deg) scale(0.95)",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Edge/Bezel Depth */}
          <div className="absolute inset-0 rounded-[21px] sm:rounded-[29px] border border-black z-20 pointer-events-none shadow-[inset_0_0_15px_rgba(0,0,0,0.8)]"></div>
          
          {/* Webcam */}
          <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#050505] shadow-[inset_0_1px_2px_rgba(0,0,0,1)] z-30 flex items-center justify-center">
            <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-blue-900/30"></div>
          </div>

          {/* Screen */}
          <div className="relative w-full h-full rounded-[14px] sm:rounded-[20px] overflow-hidden bg-black border border-white/5">
            
            {/* Screen Glare reflection */}
            <div className="absolute top-0 right-0 w-full h-[150%] bg-gradient-to-bl from-white/10 via-transparent to-transparent -translate-y-1/4 translate-x-1/4 rotate-12 z-10 pointer-events-none mix-blend-screen opacity-70"></div>
            
            <div className="absolute inset-0 bg-[#00E0FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 pointer-events-none mix-blend-overlay"></div>
            
            <video
              className="w-full h-full object-cover"
              src="/videos/herobg.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            />
          </div>
        </div>
      </div>
      
    </div>
  </section>
);

export default HeroSection;
