'use client';

import React, { useRef, useState, useEffect } from 'react';

const steps = [
  {
    number: 1,
    title: 'Share Your Idea',
    description: 'Send your video concept, reference, or raw footage to info@creonmotion.com. Not sure where to start? We\'ll guide you through it.',
    icon: (
      <svg className="w-8 h-8 text-[#00E0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    number: 2,
    title: 'Get a Quote & Timeline',
    description: 'We\'ll look over your project and give you a clear, upfront quote with no hidden fees. You\'ll know exactly how long it will take and how the work will go.',
    icon: (
      <svg className="w-8 h-8 text-[#00E0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: 3,
    title: 'We make changes. You Aggree.',
    description: 'Our team starts working. Frame.io will send you review links, and you can leave comments right there. No more messy email threads or back-and-forth.',
    icon: (
      <svg className="w-8 h-8 text-[#00E0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    number: 4,
    title: 'Last Delivery',
    description: 'Once you give us the go-ahead, we\'ll send you your video in full quality, ready to be published, pitched, or posted anywhere you need it.',
    icon: (
      <svg className="w-8 h-8 text-[#00E0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    )
  }
];

const FloatingParticle = ({ delay, duration, className, size = "w-2 h-2" }: { delay: number, duration: number, className: string, size?: string }) => (
  <div 
    className={`absolute ${className} opacity-60 animate-float`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  >
    <div className={`${size} bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/30 animate-pulse`}></div>
  </div>
);

const StepCard = ({ step, index, totalSteps }: { step: any, index: number, totalSteps: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`relative flex flex-col items-center group transform ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        animationDelay: `${index * 200}ms`
      }}
    >
      {/* Floating Particles around each card */}
      <FloatingParticle delay={index * 0.5} duration={3} className="top-0 left-0" />
      <FloatingParticle delay={index * 0.5 + 1} duration={4} className="top-1/4 right-0" />
      <FloatingParticle delay={index * 0.5 + 2} duration={3.5} className="bottom-1/4 left-0" />
      
      {/* STEP Label with enhanced styling */}
      <div className="relative mb-6">
        <div className="w-4 h-4 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] rounded-full shadow-lg shadow-[#00E0FF]/30 animate-pulse relative">
          <div className="absolute inset-0 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-20"></div>
        </div>
        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white text-xs font-bold uppercase tracking-wider bg-[#001A1F]/95 px-3 py-1 rounded-full border border-[#00E0FF]/60 shadow-[0_0_10px_rgba(0,224,255,0.4)] z-20">
          STEP
        </span>
      </div>
      
      {/* Main Step Card with enhanced design */}
      <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] rounded-3xl p-4 sm:p-6 md:p-8 border border-[#00E0FF]/20 shadow-2xl hover:shadow-[0_20px_40px_rgba(0,224,255,0.15)] hover:border-[#00E0FF]/40 transition-all duration-700 hover:scale-105 hover:-translate-y-2 w-full max-w-sm sm:max-w-md lg:min-w-[300px] relative overflow-hidden group">
        {/* Enhanced Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E0FF] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00E0FF] rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#00E0FF] rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Enhanced Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#00E0FF]/30"></div>
        <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[20px] border-r-transparent border-b-[20px] border-b-[#00E0FF]/30"></div>
        
        {/* Animated Border */}
        <div className="absolute inset-0 rounded-3xl p-[2px] bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#00E0FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="w-full h-full bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] rounded-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center">
          {/* Large Number with enhanced styling */}
          <div className="text-4xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00E0FF] to-white mb-4 sm:mb-6 leading-none drop-shadow-lg relative group-hover:scale-110 transition-transform duration-500">
            {step.number}
            <div className="absolute inset-0 text-4xl sm:text-6xl md:text-8xl font-black text-[#00E0FF] opacity-20 blur-sm animate-pulse"></div>
          </div>
          
          {/* Icon with enhanced container */}
          <div className="mb-4 sm:mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-[#00E0FF]/20 to-[#00B8CC]/20 rounded-2xl border border-[#00E0FF]/30 p-2 sm:p-3 shadow-lg relative group-hover:scale-110 transition-transform duration-300">
              {React.cloneElement(step.icon, { className: 'w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#00E0FF]' })}
              <div className="absolute inset-0 bg-[#00E0FF]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
          
          {/* Title with enhanced styling */}
          <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4 leading-tight bg-gradient-to-r from-white to-[#00E0FF] bg-clip-text text-transparent group-hover:from-[#00E0FF] group-hover:to-white transition-all duration-500 group-hover:scale-105">
            {step.title}
          </h3>
          
          {/* Description with enhanced styling */}
          {step.description && (
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
              {step.description}
            </p>
          )}
        </div>
      </div>
      
      {/* Enhanced Connection Line - Desktop Only */}
      {index < totalSteps - 1 && (
        <div className={`hidden lg:block absolute top-1/2 -right-20 transform -translate-y-1/2 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${(index + 1) * 200 + 500}ms` }}>
          <div className="w-40 h-0.5 bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-transparent relative animate-glow">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-transparent opacity-50 animate-pulse"></div>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] rounded-full shadow-lg shadow-[#00E0FF]/30 animate-pulse">
            <div className="absolute inset-0 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
          </div>
        </div>
      )}
      
      {/* Mobile/Tablet Connection Line - Vertical */}
      {index < totalSteps - 1 && (
        <div className={`lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${(index + 1) * 200 + 500}ms` }}>
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#00E0FF] via-[#00B8CC] to-transparent relative animate-glow">
            <div className="absolute inset-0 bg-gradient-to-b from-[#00E0FF] via-[#00B8CC] to-transparent opacity-50 animate-pulse"></div>
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-b from-[#00E0FF] to-[#00B8CC] rounded-full shadow-lg shadow-[#00E0FF]/30 animate-pulse">
            <div className="absolute inset-0 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
          </div>
        </div>
      )}
    </div>
  );
};

const HowToOrderSection = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Header animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#001A1F] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
    {/* Enhanced Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#00E0FF]/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E0FF]/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#00E0FF]/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#00E0FF]/4 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
    </div>
    
    {/* Enhanced Grid Pattern Overlay */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
    </div>
    
    {/* Floating Particles */}
    <FloatingParticle delay={0} duration={6} className="top-10 left-20" />
    <FloatingParticle delay={1} duration={5} className="top-32 right-32" size="w-3 h-3" />
    <FloatingParticle delay={2} duration={7} className="bottom-32 left-1/4" />
    <FloatingParticle delay={3} duration={4} className="top-1/2 right-10" />
    <FloatingParticle delay={4} duration={6} className="bottom-20 right-1/3" />
    <FloatingParticle delay={5} duration={5} className="top-1/4 left-1/3" />
    <FloatingParticle delay={6} duration={4} className="bottom-1/4 right-1/4" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      {/* Enhanced Section Header */}
      <div ref={headerRef} className="text-center mb-20">
        {/* Enhanced Decorative Elements */}
        <div className={`flex justify-center items-center gap-4 mb-8 transition-all duration-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00E0FF] animate-pulse"></div>
          <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse relative">
            <div className="absolute inset-0 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#00E0FF] animate-pulse"></div>
        </div>
        
        <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-wide mb-6 drop-shadow-lg relative transition-all duration-1200 delay-200 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          How To Order
          <div className="absolute inset-0 text-5xl sm:text-6xl lg:text-7xl font-black text-[#00E0FF] opacity-20 blur-sm animate-pulse"></div>
        </h2>
        
        <p className={`text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          A Simple Process Designed to Save You Time and Deliver Results
        </p>
        
        {/* Enhanced Bottom Decorative Elements */}
        <div className={`flex justify-center items-center gap-4 mt-8 transition-all duration-1000 delay-600 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00E0FF] to-transparent animate-pulse"></div>
          <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse relative">
            <div className="absolute inset-0 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-[#00E0FF] to-transparent animate-pulse"></div>
        </div>
      </div>
      
      {/* Enhanced Steps Layout */}
      <div className="relative">
        {/* Mobile Layout - Vertical Stack */}
        <div className="flex flex-col items-center gap-8 sm:hidden">
          {steps.map((step, index) => (
            <div key={index} className="relative w-full max-w-sm">
              <StepCard
                step={step}
                index={index}
                totalSteps={steps.length}
              />
            </div>
          ))}
        </div>
        
        {/* Tablet Layout - 2x2 Grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:hidden gap-8 items-start">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative ${index % 2 === 0 ? 'mt-0' : 'mt-16'}`}
            >
              <StepCard
                step={step}
                index={index}
                totalSteps={steps.length}
              />
            </div>
          ))}
        </div>
        
        {/* Desktop Layout - Horizontal */}
        <div className="hidden lg:flex lg:justify-center lg:items-start lg:gap-16 xl:gap-24">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`relative ${index % 2 === 0 ? 'mt-0' : 'mt-16'}`}
            >
              <StepCard
                step={step}
                index={index}
                totalSteps={steps.length}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    {/* Custom animations and styles */}
    <style jsx>{`
      @keyframes slide-up {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0px);
        }
        50% {
          transform: translateY(-10px);
        }
      }
      
      @keyframes glow {
        0%, 100% {
          opacity: 0.6;
          box-shadow: 0 0 5px rgba(0, 224, 255, 0.5);
        }
        50% {
          opacity: 1;
          box-shadow: 0 0 20px rgba(0, 224, 255, 0.8);
        }
      }
      
      .animate-slide-up {
        animation: slide-up 0.8s ease-out forwards;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      .animate-glow {
        animation: glow 2s ease-in-out infinite;
      }
      
      /* Enhanced hover effects */
      .group:hover .group-hover\\:scale-105 {
        transform: scale(1.05);
      }
      
      .group:hover .group-hover\\:scale-110 {
        transform: scale(1.1);
      }
      
      /* Smooth transitions for all interactive elements */
      * {
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      }
    `}</style>
  </section>
  );
};

export default HowToOrderSection;
