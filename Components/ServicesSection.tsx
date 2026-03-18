'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'YouTube Content Production',
    desc: 'Story-driven video production designed to keep viewers engaged and watching.',
    includes: [
      'talking-head and podcast content',
      'documentary and educational videos',
      'motion graphics and visual explanations',
      'research-based visuals and b-roll',
      'sound design and pacing'
    ],
    thumbnails: [
      'https://img.youtube.com/vi/UEsPFAEYy3s/maxresdefault.jpg',
      'https://img.youtube.com/vi/DNWXyjvCSmc/maxresdefault.jpg',
      'https://img.youtube.com/vi/Fobf6gibbdo/maxresdefault.jpg'
    ],
    thumbnailLinks: [
      'https://www.youtube.com/watch?v=UEsPFAEYy3s',
      'https://www.youtube.com/watch?v=DNWXyjvCSmc',
      'https://www.youtube.com/watch?v=Fobf6gibbdo'
    ],
    route: '/faceless'
  },
  {
    title: 'Short-Form Content',
    desc: 'Vertical video production designed for platforms like TikTok, Reels, and YouTube Shorts.',
    includes: [
      'Hook-driven storytelling',
      'Fast-paced captions and motion graphics',
      'vertical editing optimized for social feeds',
      'short-form pacing and sound design'
    ],
    thumbnails: [
      'https://img.youtube.com/vi/pP6SvvYY2yw/maxresdefault.jpg',
      'https://img.youtube.com/vi/1Z_p9aTT7G4/maxresdefault.jpg',
      'https://img.youtube.com/vi/SWyn1EblWso/maxresdefault.jpg'
    ],
    thumbnailLinks: [
      'https://www.youtube.com/shorts/pP6SvvYY2yw',
      'https://www.youtube.com/watch?v=1Z_p9aTT7G4',
      'https://www.youtube.com/shorts/SWyn1EblWso'
    ],
    route: '/2d3d'
  },
  {
    title: 'Brand & Commercial Projects',
    desc: 'Promotional and explainer videos created for brands and companies.',
    includes: [
      'SaaS explainers',
      'Product and promotional videos',
      'Landing page videos',
      'Brand storytelling'
    ],
    thumbnails: [
      'https://img.youtube.com/vi/NDRNIVqqu4c/maxresdefault.jpg',
      'https://img.youtube.com/vi/iANvo7hIaqE/maxresdefault.jpg',
      '/img/Images/branded.png'
    ],
    thumbnailLinks: [
      'https://www.youtube.com/watch?v=NDRNIVqqu4c',
      'https://www.youtube.com/watch?v=iANvo7hIaqE',
      '#'
    ],
    route: '/brand'
  }
];

interface ServiceCardProps {
  title: string;
  desc: string;
  includes: string[];
  thumbnails: string[];
  thumbnailLinks?: string[];
  route?: string;
}

const FloatingParticle = ({ delay, duration, className, size = "w-2 h-2" }: { delay: number, duration: number, className: string, size?: string }) => (
  <div
    className={`absolute ${className} opacity-50 animate-float`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  >
    <div className={`${size} bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/30 animate-pulse`}></div>
  </div>
);

const AnimatedLine = ({ delay, className }: { delay: number, className: string }) => (
  <div
    className={`absolute ${className} w-0.5 h-12 bg-gradient-to-b from-[#00E0FF] to-transparent opacity-60 animate-glow`}
    style={{ animationDelay: `${delay}s` }}
  ></div>
);

const ServiceCard = ({ title, desc, includes, thumbnails, thumbnailLinks, route, index }: ServiceCardProps & { index: number }) => {
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
      className={`w-full max-w-sm mx-auto flex flex-col rounded-2xl overflow-hidden border transition-all duration-500 relative group transform ${isVisible ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
        } bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border-[#00E0FF]/20 text-white`}
      style={{
        transitionDelay: `${index * 150}ms`,
        animationDelay: `${index * 150}ms`
      }}
    >
      {/* Header */}
      <div className="p-6 pb-2 bg-black/20">
        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight">{title}</h3>
      </div>

      {/* Body */}
      <div className="p-6 flex-grow flex flex-col">
        <p className="text-sm sm:text-base leading-relaxed mb-6 font-medium text-gray-300">
          {desc}
        </p>

        <div className="space-y-4 mb-8">
          <h4 className="text-sm font-bold uppercase tracking-widest text-[#00E0FF]">Includes</h4>
          <ul className="space-y-3">
            {includes.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00E0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-semibold capitalize text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Thumbnails Grid */}
        <div className="grid grid-cols-3 gap-2 mt-auto mb-8">
          {thumbnails.map((thumb, i) => {
            const content = (
              <div key={i} className="aspect-[4/5] rounded-lg overflow-hidden border border-white/10 group-hover:border-[#00E0FF]/40 transition-all shadow-lg">
                <img src={thumb} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            );

            if (thumbnailLinks?.[i]) {
              return (
                <a key={i} href={thumbnailLinks[i]} target="_blank" rel="noopener noreferrer" className="block transform hover:scale-105 transition-transform duration-300">
                  {content}
                </a>
              );
            }

            return content;
          })}
        </div>

        {/* Action Button */}
        {route && (
          <Link
            href={route}
            className="w-full py-3 px-6 rounded-xl font-bold text-center transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-[#00E0FF]/20 to-[#00B8CC]/20 border border-[#00E0FF]/40 text-white hover:border-[#00E0FF] hover:bg-[#00E0FF]/30"
          >
            View More
          </Link>
        )}
      </div>
    </div>
  );
};

const ServicesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320; // Width of one card + gap
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  React.useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, []);

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
    <section id="services" className="bg-[#001A1F] text-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative overflow-hidden border-t border-white/10" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#00E0FF]/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E0FF]/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00E0FF]/3 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-[#00E0FF]/4 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-3/4 right-1/3 w-56 h-56 bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '5s' }}></div>
      </div>

      {/* Subtle dotted grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}></div>
      </div>

      {/* Animated Lines */}
      <AnimatedLine delay={0} className="top-10 left-32" />
      <AnimatedLine delay={1} className="top-20 right-40" />
      <AnimatedLine delay={2} className="bottom-20 left-20" />
      <AnimatedLine delay={3} className="bottom-10 right-20" />
      <AnimatedLine delay={4} className="top-1/2 left-10" />
      <AnimatedLine delay={5} className="top-1/2 right-10" />

      {/* Floating Particles */}
      <FloatingParticle delay={0} duration={3} className="top-10 left-20" />
      <FloatingParticle delay={1} duration={4} className="top-32 right-32" />
      <FloatingParticle delay={2} duration={3.5} className="bottom-32 left-1/4" />
      <FloatingParticle delay={3} duration={5} className="top-1/2 right-10" />
      <FloatingParticle delay={4} duration={4.5} className="bottom-20 right-1/3" />
      <FloatingParticle delay={5} duration={3} className="top-1/4 left-1/3" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced Header Section */}
        <div ref={headerRef} className="mb-12 sm:mb-16 md:mb-20 text-center">
          {/* Decorative Elements */}
          <div className={`flex justify-center items-center gap-3 sm:gap-4 mb-6 sm:mb-8 transition-all duration-1000 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00E0FF] animate-pulse"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[#00E0FF] rounded-full animate-pulse relative">
              <div className="absolute inset-0 w-2 sm:w-3 h-2 sm:h-3 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
            </div>
            <div className="w-12 sm:w-16 h-0.5 bg-gradient-to-l from-transparent to-[#00E0FF] animate-pulse"></div>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 md:mb-8 uppercase tracking-tight relative transition-all duration-1200 delay-200 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Content Production
            <div className={`absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-2/3 sm:w-3/4 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent rounded-full transition-all duration-1500 delay-500 ${isHeaderVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
          </h2>

          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl leading-relaxed mx-auto px-4 sm:px-0 transition-all duration-1000 delay-400 ${isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            We help creators, businesses, and agencies turn raw clips into high performing content fast. Whether you need faceless videos, animated explainers, or branded reels, our team delivers scroll stopping edits that get results.
          </p>
        </div>

        {/* Enhanced Services Cards Section */}
        <div className="relative">
          {/* Responsive cards container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-6 sm:py-8 md:py-10">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                title={service.title}
                desc={service.desc}
                includes={service.includes}
                thumbnails={service.thumbnails}
                thumbnailLinks={service.thumbnailLinks}
                route={service.route}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations and scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
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
        
        .group:hover .group-hover\\:brightness-110 {
          filter: brightness(1.1);
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

export default ServicesSection;
