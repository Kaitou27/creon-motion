'use client';

import React, { useRef, useState, useEffect } from 'react';

const features = [
  {
    title: 'Editing That Keeps People Watching',
    desc: 'A good video is more than clean cuts and transitions. We focus on pacing, structure, and sound so the final piece holds attention and communicates the message clearly.'
  },
  {
    title: 'Built for Teams That Publish Regularly',
    desc: 'Many of the people we work with release content on a consistent schedule. Our workflow supports ongoing production while maintaining the same level of quality from one project to the next.'
  },
  {
    title: 'Editors Who Understand Story',
    desc: 'Our team works across documentaries, branded videos, explainers, and social content. Every project is approached with attention to structure, visual clarity, and storytelling.'
  },
  {
    title: 'A Clear Production Process',
    desc: 'Once we receive your footage or brief, our team manages the editing through each stage until the final delivery. Clear communication and an organized workflow keep projects moving without unnecessary delays.'
  }
];

const FeatureCard = ({ title, desc, index }: { title: string; desc: string; index: number }) => {
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
      className={`bg-[#0A0F1A] border border-[#00E0FF]/20 rounded-xl p-6 hover:border-[#00E0FF]/40 transition-all duration-500 group hover:shadow-lg hover:shadow-[#00E0FF]/10 relative overflow-hidden transform ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'}`}
      style={{ 
        transitionDelay: `${index * 150}ms`,
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Card background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-[#00E0FF]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="space-y-2 relative z-10">
        <h3 className="text-[#00E0FF] font-bold text-lg tracking-wide group-hover:text-[#00B8CC] transition-all duration-500 group-hover:scale-105">
          {title}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
          {desc}
        </p>
      </div>
    </div>
  );
};

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

const WhyChooseUsSection = () => {
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
    <section className="relative overflow-hidden bg-[#001A1F] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#00E0FF]/15" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/40 to-transparent"></div>
    {/* Background texture */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>
    </div>

    {/* Floating background elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#00E0FF]/3 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E0FF]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00E0FF]/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-[#00E0FF]/4 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
    </div>

    {/* Floating particles */}
    <FloatingParticle delay={0} duration={3} className="top-10 left-20" />
    <FloatingParticle delay={1} duration={4} className="top-32 right-32" size="w-3 h-3" />
    <FloatingParticle delay={2} duration={3.5} className="bottom-32 left-1/4" />
    <FloatingParticle delay={3} duration={5} className="top-1/2 right-10" />
    <FloatingParticle delay={4} duration={4.5} className="bottom-20 left-1/3" />
    <FloatingParticle delay={5} duration={3} className="top-1/4 right-1/3" />

    <div className="max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">
        {/* Left Column: Heading */}
        <div ref={headerRef} className="space-y-6">
          {/* Tag */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-[#0A0F1A] border border-[#00E0FF]/30 rounded-full shadow-lg shadow-[#00E0FF]/10 transition-all duration-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse"></div>
            {/* <span className="text-white text-sm font-medium">Why choose us</span> */}
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h2 className={`text-4xl lg:text-6xl font-bold text-white leading-tight transition-all duration-1200 delay-200 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              WHY CREATORS AND BRANDS
              <span className={`block text-[#00E0FF] drop-shadow-lg transition-all duration-1200 delay-400 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>WORK WITH CREON MOTION</span>
            </h2>
            
            {/* Divider */}
            <div className={`flex items-center gap-3 transition-all duration-1000 delay-600 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-8 h-0.5 bg-gradient-to-r from-[#00E0FF] to-transparent rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse relative">
                <div className="absolute inset-0 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
              </div>
              <div className="w-8 h-0.5 bg-gradient-to-l from-[#00E0FF] to-transparent rounded-full animate-pulse"></div>
            </div>

            {/* Descriptive text */}
            <div className="space-y-4 pt-4">
              <p className={`text-lg text-gray-300 leading-relaxed max-w-lg transition-all duration-1000 delay-800 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                We work with creators, companies, and media teams who need dependable video production. Our role is to take raw footage, ideas, or scripts and shape them into videos that are clear, engaging, and ready to publish.
              </p>
              
              {/* Stats row */}
              <div className={`flex flex-wrap gap-6 pt-2 transition-all duration-1000 delay-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="flex items-center gap-2 group">
                  <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-[#00E0FF] font-semibold text-sm group-hover:text-[#00B8CC] transition-colors duration-300">Reliable turnaround</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse group-hover:scale-125 transition-all duration-300" style={{animationDelay: '0.5s'}}></div>
                  <span className="text-[#00E0FF] font-semibold text-sm group-hover:text-[#00B8CC] transition-colors duration-300">Professional production quality</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse group-hover:scale-125 transition-all duration-300" style={{animationDelay: '1s'}}></div>
                  <span className="text-[#00E0FF] font-semibold text-sm group-hover:text-[#00B8CC] transition-colors duration-300">Editing that supports the story</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Features */}
        <div className="space-y-4">
          {features.map((f, i) => (
            <FeatureCard
              key={i}
              title={f.title}
              desc={f.desc}
              index={i}
            />
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
      
      .animate-slide-up {
        animation: slide-up 0.8s ease-out forwards;
      }
      
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
      
      /* Enhanced hover effects */
      .group:hover .group-hover\\:scale-105 {
        transform: scale(1.05);
      }
      
      .group:hover .group-hover\\:scale-125 {
        transform: scale(1.25);
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

export default WhyChooseUsSection;
