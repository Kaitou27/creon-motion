'use client';

import React, { useState } from 'react';


const Brand = () => {
  const [shortformCategory, setShortformCategory] = useState<'ADS Video'>('ADS Video');

  // Helper function to extract YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
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
            {/* Centered: Heading + Copy */}
                          <div className="space-y-10 text-center md:pr-0 lg:pr-0">  
            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
                    <span className="block whitespace-nowrap bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl relative">
                      Branded &
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-80"></div>
                    </span>
                    <span className="block bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#0099B3] bg-clip-text text-transparent drop-shadow-2xl relative">
                      Commercial Video
                      <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#00B8CC] rounded-full animate-ping opacity-80" style={{animationDelay: '0.5s'}}></div>
                    </span>
              </h1>
              {/* animated underline glow */}
              <div className="mt-3 flex justify-center">
                <div className="relative h-1 w-40 sm:w-56 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-80" />
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-40" />
                </div>
              </div>
                </div>
                
                <div className="relative mx-auto">
                  <p className="text-gray-100 max-w-[780px] text-xl sm:text-2xl leading-relaxed font-medium mx-auto text-center">
                Story-driven edits using cinematic stock, text overlays, and motion graphics. Ideal for business, finance, and real-world breakdowns.
              </p>
                  <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-80"></div>
            </div>
            {/* Statistics Section (styled like Faceless) */}
            <div className="mt-8 px-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-7 max-w-5xl mx-auto text-center">
                <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5">
                  <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent" />
                  <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 inline-block w-1.5 h-1.5 rounded-full bg-[#00E0FF]/80" />
                  <div className="text-4xl sm:text-5xl font-black text-white">2000+</div>
                  <div className="mt-1 text-xs sm:text-sm tracking-wide uppercase text-gray-300">Videos Brought to Life</div>
                </div>
                <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5">
                  <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent" />
                  <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 inline-block w-1.5 h-1.5 rounded-full bg-[#00E0FF]/80" />
                  <div className="text-4xl sm:text-5xl font-black text-white">100+</div>
                  <div className="mt-1 text-xs sm:text-sm tracking-wide uppercase text-gray-300">Clients We have Worked With</div>
                </div>
                <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5">
                  <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent" />
                  <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 inline-block w-1.5 h-1.5 rounded-full bg-[#00E0FF]/80" />
                  <div className="text-4xl sm:text-5xl font-black text-white">20+</div>
                  <div className="mt-1 text-xs sm:text-sm tracking-wide uppercase text-gray-300">Countries Served</div>
                </div>
                <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5">
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
              <span className="text-[#00E0FF] text-sm font-bold uppercase tracking-wider">Showcase</span>
              <div className="w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Branded & Commercial
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#0099B3] bg-clip-text text-transparent">
                Video Examples
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Discover our creative portfolio of branded content and animated shorts
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button 
                onClick={() => setShortformCategory('ADS Video')} 
                className={`${shortformCategory === 'ADS Video' ? 'bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white shadow-2xl shadow-[#00E0FF]/40 ring-2 ring-[#00E0FF]/50' : 'bg-gradient-to-r from-white/10 to-white/5 text-white border border-[#00E0FF]/40 backdrop-blur-md hover:bg-white/20 hover:border-[#00E0FF]/60'} px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden group`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  View Commercial Work
                </span>
              </button>
            </div>
            
            {/* Video Examples Display */}
            {shortformCategory === "ADS Video" && (() => {
                const commercialVideos = [
                  'https://www.youtube.com/watch?v=hejyfAFTnGw',
                  'https://www.youtube.com/watch?v=iANvo7hIaqE',
                  'https://www.youtube.com/watch?v=NDRNIVqqu4c'
                ];
                const videoContainerStyle: React.CSSProperties = {
                  width: '100%',
                  aspectRatio: '16 / 9',
                  background: '#000',
                  borderRadius: '16px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                  position: 'relative',
                  overflow: 'hidden'
                };
                const videoFillStyle: React.CSSProperties = {
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '16px'
                };
                return (
                  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
                    {commercialVideos.map((src, idx) => {
                      return (
                        <div
                          key={`commercial-${idx}`}
                          className="relative group block"
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/20 to-[#00B8CC]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="relative z-10 rounded-2xl overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl flex items-center justify-center cursor-pointer" style={videoContainerStyle}>
                            <iframe
                              src={getEmbedUrl(src)}
                              style={videoFillStyle}
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
                );
              })()
            }
            {/* Hide scrollbar while keeping scroll functionality */}
            <style jsx>{`
              .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `}</style>
          </div>
        </div>
      </section>
      
      {/* </section> */}


    </>
  );
};

export default Brand;
