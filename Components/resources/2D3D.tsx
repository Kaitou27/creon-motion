'use client';

import React, { useState } from 'react';


const TwoDThreeD = () => {
  const [activeTab, setActiveTab] = useState<'shorts' | 'motion' | 'creator'>('shorts');
  

  
  const shortsVideos = [
    'https://www.youtube.com/watch?v=1Z_p9aTT7G4',
    'https://www.youtube.com/shorts/BloW3pYdJUo',
    'https://www.youtube.com/shorts/PRHpXkGfj18'
  ];

  const motionVideos = [
    'https://www.youtube.com/shorts/4OxKDnC29go',
    'https://www.youtube.com/shorts/f-Lmp2y_Gn4',
    'https://www.youtube.com/shorts/SWyn1EblWso'
  ];
  const creatorVideos = [
    'https://www.youtube.com/shorts/tyvNRGxh-3U',
    'https://www.youtube.com/shorts/ISmRXzft9FY',
    'https://www.youtube.com/shorts/PvT2S2YceDA',
    'https://www.youtube.com/shorts/h9J1LME-U1M'
  ];
  const adsVideos: string[] = [];

  const portraitContainerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '300px',
    aspectRatio: '9 / 16',
    background: '#000',
    borderRadius: '16px',
    boxShadow: '0 4px 24px rgba(0,0,0,0.10)'
  };

  const portraitVideoStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '16px'
  };

  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getEmbedUrl = (url: string) => {
    const id = getYouTubeId(url);
    return id ? `https://www.youtube.com/embed/${id}?rel=0` : url;
  };

  return (
    <>

      <section className="w-full h-screen bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] relative overflow-hidden flex items-center" data-aos="fade-up" data-aos-duration="900" style={{ fontFamily: 'var(--font-montserrat)' }}>
          {/* Header Area Subtle Designs */}
          <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
            {/* Top Edge Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-60"></div>
            
            {/* Top Left Corner Design */}
            <div className="absolute top-4 left-4 w-12 h-12 border border-[#00E0FF] rotate-45 animate-spin opacity-40" style={{animationDuration: '20s'}}></div>
            <div className="absolute top-8 left-8 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-50"></div>
            
            {/* Top Right Corner Design */}
            <div className="absolute top-6 right-6 w-16 h-16 border border-[#00B8CC] rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-12 right-12 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-60"></div>
            
            {/* Top Center Subtle Elements */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-20 border border-[#00E0FF] rounded-full animate-spin opacity-30" style={{animationDuration: '25s'}}></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#00E0FF] rounded-full animate-pulse opacity-40"></div>
            
            {/* Top Floating Elements */}
            <div className="absolute top-16 left-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-50"></div>
            <div className="absolute top-20 right-1/4 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-50" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-24 left-1/3 w-4 h-4 bg-[#00E0FF] rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-28 right-1/3 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
            
            {/* Top Animated Lines */}
            <div className="absolute top-8 left-16 w-0.5 h-8 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-50"></div>
            <div className="absolute top-12 right-16 w-0.5 h-8 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse opacity-50" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-16 left-24 w-0.5 h-6 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-50" style={{animationDelay: '0.6s'}}></div>
            <div className="absolute top-20 right-24 w-0.5 h-6 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse opacity-50" style={{animationDelay: '0.9s'}}></div>
          </div>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#00E0FF] rounded-full blur-2xl animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#00E0FF] rounded-full blur-xl animate-pulse opacity-45" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#00B8CC] rounded-full blur-lg animate-pulse opacity-55" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-[#0099B3] rounded-full blur-xl animate-pulse opacity-50" style={{animationDelay: '0.8s'}}></div>
          </div>
          
          {/* Enhanced Geometric Patterns */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#00E0FF] rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#00B8CC] rotate-12 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-[#00E0FF] rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-1/3 left-10 w-12 h-12 border-2 border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration: '18s'}}></div>
          </div>
          
          {/* Particle Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-90"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#00B8CC] rounded-full animate-ping opacity-90" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-90" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#00B8CC] rounded-full animate-ping opacity-90" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-90" style={{animationDelay: '0.8s'}}></div>
          </div>
          
          {/* Enhanced Grid Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1.5px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          {/* Secondary Dot Pattern */}
          <div className="absolute inset-0 opacity-15">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          {/* Tertiary Dot Pattern */}
          <div className="absolute inset-0 opacity-12">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #0099B3 0.8px, transparent 0)`,
              backgroundSize: '80px 80px'
            }}></div>
          </div>
          
          {/* Animated Lines */}
          <div className="absolute top-10 left-32 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-20 right-40 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 right-20 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '3s'}}></div>
          
          {/* Additional Prominent Design Elements */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-[#00E0FF] rounded-full animate-spin opacity-60" style={{animationDuration: '30s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-[#00B8CC] rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#00E0FF] rounded-full animate-pulse opacity-80"></div>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-[#00B8CC] rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}}></div>
          
          {/* Header Content Area Designs */}
          <div className="absolute top-32 left-8 w-16 h-16 border border-[#00E0FF] rotate-12 animate-spin opacity-50" style={{animationDuration: '22s'}}></div>
          <div className="absolute top-36 right-8 w-12 h-12 bg-[#00B8CC] rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-40 left-1/4 w-10 h-10 border border-[#00E0FF] rotate-45 animate-spin opacity-55" style={{animationDuration: '18s'}}></div>
          <div className="absolute top-44 right-1/4 w-8 h-8 bg-[#00E0FF] rounded-full animate-pulse opacity-65"></div>
          
          {/* Header Diagonal Lines */}
          <div className="absolute top-28 left-16 w-0.5 h-12 bg-gradient-to-br from-[#00E0FF] to-transparent animate-pulse opacity-60" style={{transform: 'rotate(15deg)'}}></div>
          <div className="absolute top-32 right-16 w-0.5 h-12 bg-gradient-to-bl from-[#00B8CC] to-transparent animate-pulse opacity-60" style={{transform: 'rotate(-15deg)', animationDelay: '0.5s'}}></div>
          <div className="absolute top-36 left-24 w-0.5 h-10 bg-gradient-to-br from-[#00E0FF] to-transparent animate-pulse opacity-60" style={{transform: 'rotate(25deg)', animationDelay: '1s'}}></div>
          <div className="absolute top-40 right-24 w-0.5 h-10 bg-gradient-to-bl from-[#00B8CC] to-transparent animate-pulse opacity-60" style={{transform: 'rotate(-25deg)', animationDelay: '1.5s'}}></div>
          
          {/* Enhanced Floating Elements */}
          <div className="absolute top-10 left-20 animate-bounce opacity-80" style={{animationDelay: '0s', animationDuration: '3s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute top-32 right-32 animate-bounce opacity-80" style={{animationDelay: '1s', animationDuration: '4s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute bottom-32 left-1/4 animate-bounce opacity-80" style={{animationDelay: '2s', animationDuration: '3.5s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute top-1/2 right-10 animate-bounce opacity-80" style={{animationDelay: '3s', animationDuration: '5s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute bottom-20 right-1/3 animate-bounce opacity-80" style={{animationDelay: '4s', animationDuration: '4.5s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute top-1/4 left-1/3 animate-bounce opacity-80" style={{animationDelay: '5s', animationDuration: '3s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute bottom-1/4 right-1/4 animate-bounce opacity-80" style={{animationDelay: '6s', animationDuration: '4s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute top-3/4 left-1/2 animate-bounce opacity-80" style={{animationDelay: '7s', animationDuration: '3.5s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          
          {/* Larger floating elements */}
          <div className="absolute top-1/3 right-1/4 animate-bounce opacity-80" style={{animationDelay: '2s', animationDuration: '6s'}}>
            <div className="w-6 h-6 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/2 animate-bounce opacity-80" style={{animationDelay: '4s', animationDuration: '5s'}}>
            <div className="w-6 h-6 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          
          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 items-center justify-items-center gap-12 relative z-10">
            {/* Centered: Heading + Copy (match Faceless style, no pill) */}
            <div className="w-full md:pr-0 lg:pr-0 text-center">
              {/* title */}
              <div className="pt-6 px-4">
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
                  <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Short-Form</span>
                  <span className="block bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#0099B3] bg-clip-text text-transparent">Video</span>
                </h1>
                {/* animated underline glow */}
                <div className="mt-3 flex justify-center">
                  <div className="relative h-1 w-40 sm:w-56 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-80" />
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-40" />
                  </div>
                </div>
                <p className="mt-5 mx-auto max-w-[780px] text-xl sm:text-2xl text-gray-200/90">
                  Find the editing style that matches your brand — whether you're aiming to educate, sell, or entertain.
                </p>
                {/* soft halo behind heading */}
                <div className="pointer-events-none relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-80 sm:w-96 h-24 rounded-full blur-3xl bg-[#00E0FF]/15" />
                </div>
              </div>

              {/* stats grid */}
              <div className="mt-8 px-4">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-7 max-w-5xl mx-auto">
                  <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5 text-center">
                    <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent" />
                    <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 inline-block w-1.5 h-1.5 rounded-full bg-[#00E0FF]/80" />
                    <div className="text-4xl sm:text-5xl font-black text-white">2000+</div>
                    <div className="mt-1 text-xs sm:text-sm tracking-wide uppercase text-gray-300">Videos Brought to Life</div>
                  </div>
                  <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5 text-center">
                    <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent" />
                    <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 inline-block w-1.5 h-1.5 rounded-full bg-[#00E0FF]/80" />
                    <div className="text-4xl sm:text-5xl font-black text-white">100+</div>
                    <div className="mt-1 text-xs sm:text-sm tracking-wide uppercase text-gray-300">Clients We have Worked With</div>
                  </div>
                  <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5 text-center">
                    <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent" />
                    <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 inline-block w-1.5 h-1.5 rounded-full bg-[#00E0FF]/80" />
                    <div className="text-4xl sm:text-5xl font-black text-white">20+</div>
                    <div className="mt-1 text-xs sm:text-sm tracking-wide uppercase text-gray-300">Countries Served</div>
                  </div>
                  <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5 text-center">
                    <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent" />
                    <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 inline-block w-1.5 h-1.5 rounded-full bg-[#00E0FF]/80" />
                    <div className="text-4xl sm:text-5xl font-black text-white">98%</div>
                    <div className="mt-1 text-xs sm:text-sm tracking-wide uppercase text-gray-300">Client Satisfaction</div>
                  </div>
                </div>
                {/* faint divider */}
                <div className="mt-8 flex justify-center">
                  <div className="h-px w-64 sm:w-80 bg-gradient-to-r from-transparent via-[#00E0FF]/40 to-transparent" />
                </div>
              </div>
            </div>
            
            {/* Right column removed to center content */}
          </div>
          

        </section>
      
      {/* Examples Section */}
      <section className="bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
        {/* Background Design Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-20"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-20" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#00B8CC] rounded-full blur-2xl animate-pulse opacity-15" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Enhanced Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1.5px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Secondary Dot Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* Tertiary Dot Pattern */}
        <div className="absolute inset-0 opacity-12">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0099B3 0.8px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        {/* Enhanced Geometric Patterns */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#00E0FF] rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#00B8CC] rotate-12 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-[#00E0FF] rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-1/3 left-10 w-12 h-12 border-2 border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration: '18s'}}></div>
        </div>
        
        {/* Animated Lines */}
        <div className="absolute top-10 left-32 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-20 right-40 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-20 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-10 right-20 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '3s'}}></div>
        
        {/* Additional Prominent Design Elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-[#00E0FF] rounded-full animate-spin opacity-60" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-[#00B8CC] rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#00E0FF] rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-[#00B8CC] rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}}></div>
        
        {/* Enhanced Floating Elements */}
        <div className="absolute top-10 left-20 animate-bounce opacity-80" style={{animationDelay: '0s', animationDuration: '3s'}}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute top-32 right-32 animate-bounce opacity-80" style={{animationDelay: '1s', animationDuration: '4s'}}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-bounce opacity-80" style={{animationDelay: '2s', animationDuration: '3.5s'}}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute top-1/2 right-10 animate-bounce opacity-80" style={{animationDelay: '3s', animationDuration: '5s'}}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute bottom-20 right-1/3 animate-bounce opacity-80" style={{animationDelay: '4s', animationDuration: '4.5s'}}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute top-1/4 left-1/3 animate-bounce opacity-80" style={{animationDelay: '5s', animationDuration: '3s'}}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-bounce opacity-80" style={{animationDelay: '6s', animationDuration: '4s'}}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute top-3/4 left-1/2 animate-bounce opacity-80" style={{animationDelay: '7s', animationDuration: '3.5s'}}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        
        {/* Larger floating elements */}
        <div className="absolute top-1/3 right-1/4 animate-bounce opacity-80" style={{animationDelay: '2s', animationDuration: '6s'}}>
          <div className="w-6 h-6 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/2 animate-bounce opacity-80" style={{animationDelay: '4s', animationDuration: '5s'}}>
          <div className="w-6 h-6 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Examples Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00E0FF]/20 to-[#00B8CC]/20 border border-[#00E0FF]/40 rounded-full shadow-xl backdrop-blur-sm mb-6">
              <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse"></div>
              <span className="text-[#00E0FF] text-sm font-bold uppercase tracking-wider">Portfolio</span>
              <div className="w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Short-Form
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#0099B3] bg-clip-text text-transparent">
                Video Examples
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Explore our creative portfolio of short-form content across different styles and formats
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                onClick={() => setActiveTab('shorts')} 
                className={`${activeTab === 'shorts' ? 'bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white shadow-2xl shadow-[#00E0FF]/40 ring-2 ring-[#00E0FF]/50' : 'bg-gradient-to-r from-white/10 to-white/5 text-white border border-[#00E0FF]/40 backdrop-blur-md hover:bg-white/20 hover:border-[#00E0FF]/60'} px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Motion Graphics
                </span>
              </button>
              <button 
                onClick={() => setActiveTab('motion')} 
                className={`${activeTab === 'motion' ? 'bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white shadow-2xl shadow-[#00E0FF]/40 ring-2 ring-[#00E0FF]/50' : 'bg-gradient-to-r from-white/10 to-white/5 text-white border border-[#00E0FF]/40 backdrop-blur-md hover:bg-white/20 hover:border-[#00E0FF]/60'} px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  2D/3D Animation Shorts
                </span>
              </button>
              <button 
                onClick={() => setActiveTab('creator')} 
                className={`${activeTab === 'creator' ? 'bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white shadow-2xl shadow-[#00E0FF]/40 ring-2 ring-[#00E0FF]/50' : 'bg-gradient-to-r from-white/10 to-white/5 text-white border border-[#00E0FF]/40 backdrop-blur-md hover:bg-white/20 hover:border-[#00E0FF]/60'} px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Creator & Educational Videos
                </span>
              </button>
            </div>
            {/* ADS button removed per request */}
            

            
            {/* Video Examples Display */}
            {activeTab === 'shorts' && (
              <div className="mt-10 flex flex-wrap justify-center gap-6 w-full max-w-[1400px] mx-auto">
                {shortsVideos.map((src, idx) => {
                  const videoId = getYouTubeId(src);
                  // Using hqdefault as maxresdefault often has black bars vertically on shorts
                  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
                  
                  return (
                    <div 
                      key={`shorts-${idx}`} 
                      className="relative group block"
                      style={{ ...portraitContainerStyle, maxWidth: '320px', width: '100%' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/20 to-[#00B8CC]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl flex items-center justify-center cursor-pointer">
                        <iframe
                          src={getEmbedUrl(src)}
                          style={portraitVideoStyle}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {/* Hide scrollbar while keeping scroll functionality */}
            <style jsx>{`
              .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
            {activeTab === 'motion' && (
              <div className="mt-10 flex flex-wrap justify-center gap-6 w-full max-w-[1400px] mx-auto">
                {motionVideos.map((src, idx) => {
                  const videoId = getYouTubeId(src);
                  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
                  
                  return (
                    <div 
                      key={`motion-${idx}`} 
                      className="relative group block"
                      style={{ ...portraitContainerStyle, maxWidth: '320px', width: '100%' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/20 to-[#00B8CC]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl flex items-center justify-center cursor-pointer">
                        <iframe
                          src={getEmbedUrl(src)}
                          style={portraitVideoStyle}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {activeTab === 'creator' && (
              <div className="mt-10 flex flex-wrap justify-center gap-6 w-full max-w-[1400px] mx-auto">
                {creatorVideos.map((src, idx) => {
                  const videoId = getYouTubeId(src);
                  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
                  
                  return (
                    <div 
                      key={`creator-${idx}`} 
                      className="relative group block"
                      style={{ ...portraitContainerStyle, maxWidth: '320px', width: '100%' }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/20 to-[#00B8CC]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl flex items-center justify-center cursor-pointer">
                        <iframe
                          src={getEmbedUrl(src)}
                          style={portraitVideoStyle}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {/* ADS tab removed */}
          </div>
        </div>
      </section>
      
      {false && (
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] relative overflow-hidden">
        {/* Dot Background Pattern */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 224, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Secondary Dot Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 184, 204, 0.12) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-20 w-32 h-32 border border-[#00E0FF] rotate-45 animate-spin opacity-20" style={{animationDuration: '25s'}}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-[#00B8CC] rounded-full animate-ping opacity-15"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-20" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/3 right-1/3 w-16 h-16 border border-[#00E0FF] rotate-12 animate-spin opacity-15" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
          
          {/* Additional Floating Elements */}
          <div className="absolute top-40 left-1/4 w-8 h-8 border border-[#00E0FF] rounded-full animate-bounce opacity-25" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-6 h-6 bg-[#00B8CC] rounded-full animate-pulse opacity-20" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/4 right-1/4 w-12 h-12 border border-[#0099B3] rotate-45 animate-spin opacity-15" style={{animationDuration: '35s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-10 h-10 bg-[#00E0FF] rounded-full animate-ping opacity-15" style={{animationDelay: '2s'}}></div>
          
          {/* Glowing Orbs */}
          <div className="absolute top-32 right-32 w-20 h-20 bg-[#00E0FF] rounded-full blur-xl animate-pulse opacity-10"></div>
          <div className="absolute bottom-32 left-32 w-16 h-16 bg-[#00B8CC] rounded-full blur-lg animate-pulse opacity-15" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-[#0099B3] rounded-full blur-2xl animate-pulse opacity-8" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-16 left-16 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-24 right-24 w-2 h-2 bg-[#00B8CC] rounded-full animate-ping opacity-50" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute bottom-16 left-1/3 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-40" style={{animationDelay: '0.6s'}}></div>
          <div className="absolute bottom-24 right-1/3 w-2 h-2 bg-[#00B8CC] rounded-full animate-ping opacity-45" style={{animationDelay: '0.9s'}}></div>
          <div className="absolute top-1/3 left-1/2 w-2 h-2 bg-[#0099B3] rounded-full animate-ping opacity-35" style={{animationDelay: '1.2s'}}></div>
          
          {/* Additional Particle Clusters */}
          <div className="absolute top-32 left-1/4 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-70" style={{animationDelay: '0.1s'}}></div>
          <div className="absolute top-36 left-1/4 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-60" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute top-40 left-1/4 w-1 h-1 bg-[#0099B3] rounded-full animate-ping opacity-50" style={{animationDelay: '0.7s'}}></div>
          
          <div className="absolute bottom-32 right-1/4 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-65" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute bottom-36 right-1/4 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-55" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 right-1/4 w-1 h-1 bg-[#0099B3] rounded-full animate-ping opacity-45" style={{animationDelay: '0.8s'}}></div>
          
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-40" style={{animationDelay: '1.1s'}}></div>
          <div className="absolute top-1/2 left-1/3 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-35" style={{animationDelay: '1.4s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#0099B3] rounded-full animate-ping opacity-30" style={{animationDelay: '1.7s'}}></div>
        </div>
        
        {/* Advanced Geometric Patterns */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Hexagon Pattern */}
          <div className="absolute top-40 left-20 w-16 h-16 border border-[#00E0FF] opacity-15">
            <div className="w-full h-full transform rotate-45 border border-[#00E0FF] opacity-30"></div>
          </div>
          
          {/* Diamond Pattern */}
          <div className="absolute bottom-40 right-20 w-20 h-20 border border-[#00B8CC] rotate-45 opacity-20"></div>
          
          {/* Triangle Pattern */}
          <div className="absolute top-1/3 right-20 w-0 h-0 border-l-[12px] border-l-transparent border-b-[20px] border-b-[#0099B3] border-r-[12px] border-r-transparent opacity-25 animate-pulse"></div>
          
          {/* Circle Grid Pattern */}
          <div className="absolute bottom-1/3 left-20 w-24 h-24 opacity-20">
            <div className="absolute top-0 left-0 w-8 h-8 border border-[#00E0FF] rounded-full"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border border-[#00B8CC] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border border-[#0099B3] rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border border-[#00E0FF] rounded-full"></div>
          </div>
          
          {/* Zigzag Pattern */}
          <div className="absolute top-1/4 left-1/2 w-32 h-8 opacity-15">
            <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#00E0FF] transform rotate-45"></div>
            <div className="absolute top-0 left-8 w-8 h-8 border-r-2 border-b-2 border-[#00B8CC] transform rotate-45"></div>
            <div className="absolute top-0 left-16 w-8 h-8 border-l-2 border-t-2 border-[#0099B3] transform rotate-45"></div>
            <div className="absolute top-0 left-24 w-8 h-8 border-r-2 border-b-2 border-[#00E0FF] transform rotate-45"></div>
          </div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Cube */}
          <div className="absolute top-1/4 right-1/3 w-12 h-12 opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}>
            <div className="w-full h-full border border-[#00E0FF] transform rotate-45"></div>
          </div>
          
          {/* Floating Star */}
          <div className="absolute bottom-1/4 left-1/3 w-16 h-16 opacity-15 animate-pulse" style={{animationDelay: '1s'}}>
            <div className="w-full h-full border border-[#00B8CC] transform rotate-45"></div>
            <div className="absolute inset-0 border border-[#00B8CC] transform rotate-90"></div>
          </div>
          
          {/* Floating Cross */}
          <div className="absolute top-1/2 right-1/4 w-20 h-20 opacity-18 animate-spin" style={{animationDuration: '40s'}}>
            <div className="absolute top-1/2 left-0 w-full h-1 bg-[#0099B3] transform -translate-y-1/2"></div>
            <div className="absolute left-1/2 top-0 w-1 h-full bg-[#0099B3] transform -translate-x-1/2"></div>
          </div>
        </div>
        
        {/* Energy Field Effects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top Energy Field */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-b from-[#00E0FF]/10 via-[#00B8CC]/5 to-transparent rounded-full blur-2xl animate-pulse opacity-30"></div>
          
          {/* Bottom Energy Field */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-24 bg-gradient-to-t from-[#0099B3]/10 via-[#00E0FF]/5 to-transparent rounded-full blur-xl animate-pulse opacity-25" style={{animationDelay: '1s'}}></div>
          
          {/* Left Energy Field */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-32 h-64 bg-gradient-to-r from-[#00B8CC]/8 via-[#00E0FF]/4 to-transparent rounded-full blur-lg animate-pulse opacity-20" style={{animationDelay: '0.5s'}}></div>
          
          {/* Right Energy Field */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-32 h-64 bg-gradient-to-l from-[#0099B3]/8 via-[#00B8CC]/4 to-transparent rounded-full blur-lg animate-pulse opacity-20" style={{animationDelay: '1.5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16 relative">
            {/* Heading Glow Effects */}
            <div className="absolute inset-0 flex justify-center">
              <div className="w-96 h-32 bg-gradient-to-r from-[#00E0FF]/20 via-[#00B8CC]/15 to-[#0099B3]/10 blur-3xl rounded-full"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">
              <span className="bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#0099B3] bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(0,224,255,0.3)]">
                Pricing & Plans
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto relative z-10">
              Choose the perfect plan for your content creation needs
            </p>
            
            {/* Decorative Elements */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-60"></div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-[#00B8CC] to-transparent opacity-60"></div>
          </div>

          {/* Creator Plans */}
          <div className="mb-20 relative">
            {/* Background Geometric Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Left Side Pattern */}
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 border border-[#00E0FF] rotate-45 opacity-10 animate-spin" style={{animationDuration: '30s'}}></div>
              <div className="absolute left-8 top-1/3 w-8 h-8 border border-[#00B8CC] rounded-full opacity-15 animate-ping" style={{animationDelay: '0.5s'}}></div>
              
              {/* Right Side Pattern */}
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 border border-[#00B8CC] rotate-45 opacity-10 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
              <div className="absolute right-8 bottom-1/3 w-8 h-8 border border-[#00E0FF] rounded-full opacity-15 animate-ping" style={{animationDelay: '1s'}}></div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 text-center relative">
              <span className="relative z-10 drop-shadow-[0_0_15px_rgba(0,224,255,0.4)]">Creator Plans</span>
              {/* Heading Underline Glow */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#00E0FF] rounded-full shadow-[0_0_10px_rgba(0,224,255,0.5)]"></div>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              {/* Background Card Patterns */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-[#00E0FF] rounded-full opacity-5 animate-spin" style={{animationDuration: '60s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#00B8CC] rounded-full opacity-5 animate-spin" style={{animationDuration: '80s', animationDirection: 'reverse'}}></div>
              </div>
              
              {/* Starter Plan */}
              <div className="bg-gradient-to-br from-[#001A1F]/80 to-[#002A2F]/80 p-8 rounded-2xl border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#00E0FF]/20 to-transparent rounded-bl-full"></div>
                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                {/* Side Glow Lines */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">Starter Plan</h4>
                  <div className="text-3xl font-bold text-[#00E0FF]">$600<span className="text-lg text-gray-300">/month</span></div>
                  <p className="text-gray-400 text-sm">For creators just starting to post consistently.</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00E0FF] mr-2">✓</span>
                    10 vertical short-form videos
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00E0FF] mr-2">✓</span>
                    Trendy captions & transitions
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00E0FF] mr-2">✓</span>
                    Jump cuts, zooms, light sound design
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00E0FF] mr-2">✓</span>
                    2 revisions
                  </div>
                </div>
                <div className="text-center p-4 bg-[#00E0FF]/10 rounded-lg">
                  <p className="text-[#00E0FF] text-sm font-medium">✅ Great if you already have raw footage or long-form episodes.</p>
                </div>
              </div>

              {/* Pro Creator Plan */}
              <div className="bg-gradient-to-br from-[#001A1F]/80 to-[#002A2F]/80 p-8 rounded-2xl border border-[#00B8CC]/30 hover:border-[#00B8CC]/50 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00B8CC]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#00B8CC]/20 to-transparent rounded-bl-full"></div>
                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                {/* Side Glow Lines */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white px-6 py-2 rounded-full text-sm font-bold">
                  Most Popular
                </div>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">Pro Creator Plan</h4>
                  <div className="text-3xl font-bold text-[#00B8CC]">$1,250<span className="text-lg text-gray-300">/month</span></div>
                  <p className="text-gray-400 text-sm">Best for creators posting 3–4x/week.</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00B8CC] mr-2">✓</span>
                    20 videos/month
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00B8CC] mr-2">✓</span>
                    Custom captions & animated text
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00B8CC] mr-2">✓</span>
                    Meme inserts, sound effects, B-roll
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00B8CC] mr-2">✓</span>
                    Content idea suggestions
                  </div>
                </div>
                <div className="text-center p-4 bg-[#00B8CC]/10 rounded-lg">
                  <p className="text-[#00B8CC] text-sm font-medium">🚀 Make every clip stand out on your feed.</p>
                </div>
              </div>

              {/* Creator+ Growth Plan */}
              <div className="bg-gradient-to-br from-[#001A1F]/80 to-[#002A2F]/80 p-8 rounded-2xl border border-[#0099B3]/40 hover:border-[#0099B3]/60 transition-all duration-300 hover:scale-105 relative overflow-hidden group">
                {/* Card Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0099B3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#0099B3]/20 to-transparent rounded-bl-full"></div>
                {/* Bottom Glow Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0099B3] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                {/* Side Glow Lines */}
                <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#0099B3] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-[#0099B3] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">Creator+ Growth Plan</h4>
                  <div className="text-3xl font-bold text-[#0099B3]">$2,000<span className="text-lg text-gray-300">/month</span></div>
                  <p className="text-gray-400 text-sm">Full-time creators, coaches & influencers.</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#0099B3] mr-2">✓</span>
                    30 videos/month
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#0099B3] mr-2">✓</span>
                    Premium editing (motion graphics, viral hooks)
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#0099B3] mr-2">✓</span>
                    Custom thumbnails & platform formatting
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#0099B3] mr-2">✓</span>
                    Scripting assistance & trend scouting
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#0099B3] mr-2">✓</span>
                    Analytics template included
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00E0FF] mr-2">⭐</span>
                    Priority turnaround & support
                  </div>
                </div>
              </div>
            </div>
          </div>

                    {/* 2D/3D Animation Plans */}
          <div className="mb-20 relative">
            {/* Background Geometric Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Top Pattern */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border border-[#00B8CC] rotate-45 opacity-12 animate-spin" style={{animationDuration: '35s'}}></div>
              <div className="absolute top-4 left-1/3 w-6 h-6 border border-[#00E0FF] rounded-full opacity-18 animate-ping" style={{animationDelay: '0.3s'}}></div>
              <div className="absolute top-4 right-1/3 w-6 h-6 border border-[#0099B3] rounded-full opacity-18 animate-ping" style={{animationDelay: '0.7s'}}></div>
              
              {/* Bottom Pattern */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-20 border border-[#00E0FF] rotate-45 opacity-12 animate-spin" style={{animationDuration: '28s', animationDirection: 'reverse'}}></div>
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-8 text-center relative">
              <span className="relative z-10 drop-shadow-[0_0_15px_rgba(0,184,204,0.4)]">2D/3D Animation Plans</span>
              {/* Heading Underline Glow */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-[#00B8CC] via-[#00E0FF] to-[#00B8CC] rounded-full shadow-[0_0_10px_rgba(0,184,204,0.5)]"></div>
            </h3>
              <div className="flex justify-center">
                {/* Monthly Animation Plan */}
                <div className="bg-gradient-to-br from-[#001A1F]/80 to-[#002A2F]/80 p-8 rounded-2xl border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 transition-all duration-300 max-w-2xl relative overflow-hidden group">
                  {/* Card Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#00E0FF]/20 to-transparent rounded-bl-full"></div>
                  {/* Bottom Glow Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
                  {/* Side Glow Lines */}
                  <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                  <div className="absolute top-0 bottom-0 right-0 w-1 bg-gradient-to-b from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-white mb-2">Monthly Animation Plan</h4>
                  <div className="text-3xl font-bold text-[#00E0FF]">$850<span className="text-lg text-gray-300">/month</span></div>
                  <p className="text-gray-400 text-sm">For brands and creators who want consistent, clean, and engaging animation—monthly.</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00E0FF] mr-2">•</span>
                    4 animated videos (60s each)
                  </div>
                  <div className="flex items-start text-gray-300">
                    <span className="text-[#00E0FF] mr-2">•</span>
                    <div>
                      Style options:
                      <div className="ml-4 text-sm text-gray-400">
                        – Explainers (like Vox or WSJ)<br/>
                        – Mixed media / collage<br/>
                        – Map + data-driven visuals
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00E0FF] mr-2">•</span>
                    With sound design and 2 rounds of revisions
                  </div>
                  <div className="flex items-center text-gray-300">
                    <span className="text-[#00E0FF] mr-2">•</span>
                    Vertical (9:16) or landscape (16:9) format
                  </div>
                </div>
                <div className="text-center p-4 bg-[#00E0FF]/10 rounded-lg">
                  <p className="text-[#00E0FF] text-sm font-medium">Need something different? More videos? Message us—we'll figure it out.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>)}


    </>
  );
};

export default TwoDThreeD;
