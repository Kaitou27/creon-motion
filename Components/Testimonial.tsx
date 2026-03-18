'use client';

import React, { useState, useEffect } from 'react';

const userImages = [
  '/public/img/1.jpg',
  '/public/img/2.jpg',
  '/public/img/3.jpg',
  '/public/img/4.jpg',
  '/public/img/5.jpg',
  '/public/img/6.jpg',
  '/public/img/7.jpg',
];

const Testimonial = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const nextCard = () => {
    setCardIndex((prev) => {
      if (prev >= 3) {
        // When reaching the duplicate card, instantly jump to 0 without animation
        setTimeout(() => setCardIndex(0), 500);
        return 4; // Go to duplicate card
      }
      return prev + 1;
    });
  };
  
  const prevCard = () => {
    setCardIndex((prev) => {
      if (prev <= 0) {
        // When going back from first card, go to duplicate card then jump to last real card
        setTimeout(() => setCardIndex(3), 500);
        return 4; // Go to duplicate card
      }
      return prev - 1;
    });
  };
  

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Check initial screen size
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] relative overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
      

      

      <div className="relative w-full">
        <section className="w-full h-screen bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] relative overflow-hidden flex items-center" data-aos="fade-up" data-aos-duration="900">
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
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 items-center gap-10 relative">
            {/* Left: Heading + Copy */}
                          <div className="space-y-8 text-center md:pr-0 lg:pr-0">  
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#00E0FF]/25 to-[#00B8CC]/25 border border-[#00E0FF]/50 rounded-full shadow-2xl backdrop-blur-sm relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/10 to-[#00B8CC]/10 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF]/5 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                    
                    <div className="w-4 h-4 bg-[#00E0FF] rounded-full animate-pulse shadow-lg relative z-10"></div>
                    
                    <div className="w-4 h-4 bg-[#00E0FF] rounded-full animate-pulse shadow-lg relative z-10" style={{animationDelay: '0.5s'}}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-60"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-60" style={{animationDelay: '0.3s'}}></div>
                  </div>
                </div>
                
                <div className="space-y-5">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight tracking-tight uppercase">
                    <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl relative">
                      Testimonials
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-80"></div>
                    </span>
              </h1>
              {/* animated underline glow */}
              <div className="mt-3 flex justify-center">
                <div className="relative h-1 w-40 sm:w-56 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-80" />
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-40" />
                </div>
              </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-transparent rounded-full shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-50"></div>
                  </div>
                </div>
                
                <div>
                  <p className="mx-auto max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-[900px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-semibold text-gray-100 text-center px-4 sm:px-0">
                Creators and companies work with Creon Motion for dependable video production. Our clients value clear communication, organized workflows, and videos that are carefully edited from start to finish.
              </p>
                  {/* faint divider */}
                  <div className="mt-6 flex justify-center">
                    <div className="h-px w-64 sm:w-80 bg-gradient-to-r from-transparent via-[#00E0FF]/40 to-transparent" />
                  </div>
                </div>
                
          </div>

          </div>


        </section>
                </div>
                
      {/* Standalone Heading Section */}
      <section className="relative w-full flex flex-col items-center py-12 px-4">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,224,255,0.35) 1px, transparent 0)', backgroundSize: '22px 22px'}}></div>
        </div>
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl opacity-20"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-[#00B8CC] rounded-full blur-3xl opacity-20"></div>
        {/* Geometric Patterns */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[#00E0FF] rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-[#00B8CC] rotate-12 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        </div>
        {/* Particle Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
        </div>
        {/* Enhanced Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,184,204,0.35) 1px, transparent 0)',
            backgroundSize: '38px 38px'
          }}></div>
        </div>
        {/* Animated Lines */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute top-8 left-12 w-0.5 h-16 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse"></div>
          <div className="absolute top-16 right-16 w-0.5 h-14 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute bottom-12 left-20 w-0.5 h-14 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse" style={{animationDelay: '0.8s'}}></div>
        </div>
        {/* Extra Design Layer: corner rings */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-8 -left-8 w-28 h-28 border border-[#00E0FF]/50 rounded-full animate-spin" style={{animationDuration: '18s'}}></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-[#00B8CC]/50 rounded-full animate-spin" style={{animationDuration: '22s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/3 left-0 w-20 h-20 border border-[#00E0FF]/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-0 w-16 h-16 border border-[#00B8CC]/40 rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
                    </div>
        {/* Extra Design Layer: diagonal lines */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-8 top-10 w-px h-24 bg-gradient-to-b from-[#00E0FF] to-transparent" style={{transform: 'rotate(25deg)'}}></div>
          <div className="absolute right-10 top-8 w-px h-28 bg-gradient-to-b from-[#00B8CC] to-transparent" style={{transform: 'rotate(-20deg)'}}></div>
          <div className="absolute left-1/2 top-0 w-px h-24 bg-gradient-to-b from-[#00E0FF] to-transparent" style={{transform: 'rotate(12deg)'}}></div>
          <div className="absolute right-1/3 bottom-6 w-px h-24 bg-gradient-to-b from-[#00B8CC] to-transparent" style={{transform: 'rotate(-18deg)'}}></div>
                  </div>
        {/* Sweeping glow highlight */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 bg-gradient-to-r from-transparent via-[#00E0FF]/10 to-transparent blur-xl animate-pulse" style={{animationDuration: '2.2s'}}></div>
                </div>
        {/* Small sparkle dots */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute top-6 left-1/2 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute top-24 right-1/2 w-1 h-1 bg-[#00B8CC] rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-14 right-1/4 w-1 h-1 bg-[#00B8CC] rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
              </div>
        <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full border border-[#00E0FF] bg-black/30 backdrop-blur-sm shadow-md">
          <span className="w-3 h-3 bg-[#00E0FF] rounded-full"></span>
          <span className="text-[#00E0FF] text-sm sm:text-base md:text-lg font-bold tracking-wide uppercase">What Our Client Says</span>
          <span className="w-3 h-3 bg-[#00B8CC] rounded-full"></span>
            </div>
        <div className="mt-6 w-full flex justify-center px-4">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden">
            <video className="w-full h-full object-cover rounded-2xl sm:rounded-3xl" controls>
              <source src="/videos/Testimonial/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
                </div>
        {/* Testimonial card below video */}
        <div className="mt-6 sm:mt-8 w-full max-w-6xl relative px-8 sm:px-6 md:px-8">
          <button onClick={prevCard} className="absolute left-2 sm:-left-12 md:-left-14 lg:-left-16 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] text-black p-2 sm:p-3 rounded-full shadow hover:scale-110 transition-transform duration-200 z-10"> 
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={nextCard} className="absolute right-2 sm:-right-12 md:-right-14 lg:-right-16 top-1/2 -translate-y-1/2 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] text-black p-2 sm:p-3 rounded-full shadow hover:scale-110 transition-transform duration-200 z-10"> 
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>
          <div className="overflow-hidden">
            <div className="flex items-stretch transition-transform duration-500 ease-in-out" style={{ 
              transform: `translateX(-${cardIndex * (isMobile ? 100 : 50)}%)` 
            }}>
              {/* Card 0: Old Money Luxury */}
              <div className="flex-none w-full sm:basis-1/2 lg:basis-1/2 pr-2 sm:pr-4">
                <div className="h-full min-h-[200px] sm:min-h-[260px] flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#00E0FF]/20 bg-gradient-to-br from-[#0A0F1A] via-[#1A1F2A] to-[#0A0F1A] p-4 sm:p-5 md:p-6 text-[#E0E0E0]">
                  <p className="text-justify text-sm sm:text-base leading-relaxed">
               Cheenie's video team consistently delivers high-quality, documentary-style edits that have helped generate millions of views on YouTube. With multiple videos reaching over 100K–1M views, their unique editing style resonates with both creators and audiences. They've proven to be reliable, scalable, and consistent—rare qualities in video editing. After nearly a year of collaboration, this client continues to trust and recommend Cheenie's team for anyone aiming to create viral, professional content. Their ability to maintain quality across multiple projects makes them a go-to team for long-term creative partnerships.
              </p>
                  <div className="mt-3 sm:mt-4 flex items-center">
                    <img src="/videos/Testimonial/logo/oldmoney.png" alt="Old Money Luxury" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-white p-1 shadow object-contain" />
                    <div className="ml-2 sm:ml-3 flex flex-col">
                      <span className="font-semibold text-[#00E0FF] text-sm sm:text-base">Old Money Luxury</span>
                      <audio className="mt-1 sm:mt-2 w-full max-w-32 sm:max-w-40 md:max-w-48 lg:max-w-56" controls>
                        <source src="/videos/Testimonials/audio/audio1.mp3" type="audio/mp3" />
                    <source src="/videos/Testimonial/audio/audio1.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 1: Lhor */}
              <div className="flex-none w-full sm:basis-1/2 lg:basis-1/2 pr-2 sm:pr-4">
                <div className="h-full min-h-[200px] sm:min-h-[260px] flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#00E0FF]/20 bg-gradient-to-br from-[#0A0F1A] via-[#1A1F2A] to-[#0A0F1A] p-4 sm:p-5 md:p-6 text-[#E0E0E0]">
                  <p className="text-justify text-sm sm:text-base leading-relaxed">
                    We've been working with Cheenie for almost 2 years, and we are more than happy with the results, all of our 30 videos where done by Her, and all of them were done in amazing quality. She's attentive, and open to suggestions, to changes. The communication is topnotch! You won't find a friendlier person on the internet. But the most important thing we built is not the collaboration, it is the trust. We trust her, we know we don't even have to check the work no more, the journey has been amazing so far and we hope to continue this path with Cheenie, she always thrives for perfection. Thank you Cheenie!
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center">
                    <img src="/videos/Testimonial/logo/lhor.jpg" alt="Lhor" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-white p-1 shadow object-contain" />
                    <span className="ml-2 sm:ml-3 font-semibold text-[#00E0FF] text-sm sm:text-base">Lhor</span>
                  </div>
                </div>
              </div>
              {/* Card 2: Bizarre Medical Stories */}
              <div className="flex-none w-full sm:basis-1/2 lg:basis-1/2 pr-2 sm:pr-4">
                <div className="h-full min-h-[200px] sm:min-h-[260px] flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#00E0FF]/20 bg-gradient-to-br from-[#0A0F1A] via-[#1A1F2A] to-[#0A0F1A] p-4 sm:p-5 md:p-6 text-[#E0E0E0]">
                  <p className="text-justify text-sm sm:text-base leading-relaxed">
                    Cheenie is extremely talented and very professional. She has always delivered on time and even provided regular updates to me without me asking. Her large profile speaks for itself but her professionalism is like no other on this platform. If you are reading this Cheenie is the go-to person!!!
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center">
                    <img src="/videos/Testimonial/logo/bizzare.jpg" alt="Bizarre Medical Stories" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-white p-1 shadow object-contain" />
                    <span className="ml-2 sm:ml-3 font-semibold text-[#00E0FF] text-sm sm:text-base">Bizarre Medical Stories</span>
                  </div>
                </div>
              </div>
              {/* Card 3: K.B.M.H */}
              <div className="flex-none w-full sm:basis-1/2 lg:basis-1/2 pr-2 sm:pr-4">
                <div className="h-full min-h-[200px] sm:min-h-[260px] flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#00E0FF]/20 bg-gradient-to-br from-[#0A0F1A] via-[#1A1F2A] to-[#0A0F1A] p-4 sm:p-5 md:p-6 text-[#E0E0E0]">
                  <p className="text-justify text-sm sm:text-base leading-relaxed">
                    I was working with Cheenie on my follow along YouTube workouts, It was pleasure working together, great communication, good quality and fair prices. Looking forward working with you again!
                  </p>
                  <div className="mt-3 sm:mt-4 flex items-center">
                    <img src="/videos/Testimonial/logo/kbmh.png" alt="K.B.M.H" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-white p-1 shadow object-contain" />
                    <span className="ml-2 sm:ml-3 font-semibold text-[#00E0FF] text-sm sm:text-base">K.B.M.H</span>
                  </div>
                </div>
              </div>
              {/* Duplicate first card for seamless loop */}
              <div className="flex-none w-full sm:basis-1/2 lg:basis-1/2 pr-2 sm:pr-4">
                <div className="h-full min-h-[200px] sm:min-h-[260px] flex flex-col justify-between rounded-xl sm:rounded-2xl border border-[#00E0FF]/20 bg-gradient-to-br from-[#0A0F1A] via-[#1A1F2A] to-[#0A0F1A] p-4 sm:p-5 md:p-6 text-[#E0E0E0]">
                  <p className="text-justify text-sm sm:text-base leading-relaxed">
               Cheenie's video team consistently delivers high-quality, documentary-style edits that have helped generate millions of views on YouTube. With multiple videos reaching over 100K–1M views, their unique editing style resonates with both creators and audiences. They've proven to be reliable, scalable, and consistent—rare qualities in video editing. After nearly a year of collaboration, this client continues to trust and recommend Cheenie's team for anyone aiming to create viral, professional content. Their ability to maintain quality across multiple projects makes them a go-to team for long-term creative partnerships.
              </p>
                  <div className="mt-3 sm:mt-4 flex items-center">
                    <img src="/videos/Testimonial/logo/oldmoney.png" alt="Old Money Luxury" className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 rounded-full bg-white p-1 shadow object-contain" />
                    <div className="ml-2 sm:ml-3 flex flex-col">
                      <span className="font-semibold text-[#00E0FF] text-sm sm:text-base">Old Money Luxury</span>
                      <audio className="mt-1 sm:mt-2 w-full max-w-32 sm:max-w-40 md:max-w-48 lg:max-w-56" controls>
                        <source src="/videos/Testimonials/audio/audio1.mp3" type="audio/mp3" />
                    <source src="/videos/Testimonial/audio/audio1.mp3" type="audio/mp3" />
                    Your browser does not support the audio element.
                  </audio>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Additional video below cards */}
        <div className="mt-8 sm:mt-10 w-full flex justify-center px-4">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-48 sm:max-w-64 md:max-w-80 lg:max-w-96 overflow-hidden">
            <video className="w-full h-full object-cover rounded-2xl sm:rounded-3xl" controls>
            <source src="/videos/Testimonial/scott.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        </div>
        </section>

    </div>
  );
};

export default Testimonial;
