'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const avatars = [
  { src: '/videos/Testimonial/logo/brimnobg.png', name: 'Bizarre Medical Stories' },
  { src: '/videos/Testimonial/logo/kbmh-removebg.png', name: 'K.B.M.H'},
  { src: '/videos/Testimonial/logo/w-nobg.png', name: 'Lhor'},
  { src: '/videos/Testimonial/logo/oldmoneywhite.png', name: 'Old Money Luxury'},
  { src: '/videos/Testimonial/logo/huelnobg.png', name: 'Huel'},
  { src: '/videos/Testimonial/logo/F-removebg.png', name: 'F'},
  { src: '/videos/Testimonial/logo/evercoach-removebg.png', name: 'Evercoach'},
  { src: '/videos/Testimonial/logo/croppednobg.png', name: 'Cropped'},
  { src: '/videos/Testimonial/logo/LogoMic.png', name: 'LogoMic'},
];

const uniqueCards = [
  {
    icon: '🤝',
    title: 'Your Story, Our Mission',
    desc: 'We treat every project as if it\'s our own, ensuring your message shines through with clarity and creativity.',
  },
  {
    icon: '🎬',
    title: 'Collaborative Process',
    desc: 'From brainstorming to final cut, we work closely with you at every step, making sure your vision comes to life.',
  },
  {
    icon: '✨',
    title: 'Beyond Editing',
    desc: 'Expect more than just cuts and transitions—get storytelling, branding, and a video that truly connects with your audience.',
  },
];

const FloatingParticle = ({ delay, duration, className, size = "w-2 h-2" }: { delay: number, duration: number, className: string, size?: string }) => (
  <div 
    className={`absolute ${className} animate-bounce opacity-50`}
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  >
    <div className={`${size} bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/30`}></div>
  </div>
);

const AnimatedLine = ({ delay, className }: { delay: number, className: string }) => (
  <div 
    className={`absolute ${className} w-0.5 h-12 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-60`}
    style={{ animationDelay: `${delay}s` }}
  ></div>
);

const AnimatedDot = ({ delay, className, size = "w-2 h-2" }: { delay: number, className: string, size?: string }) => (
  <div 
    className={`absolute ${className} ${size} bg-[#00E0FF] rounded-full animate-ping opacity-30`}
    style={{ animationDelay: `${delay}s` }}
  ></div>
);

export default function WhoWeAreSection() {
  return (
    <section className="w-full bg-[#001A1F] flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/10" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Dot background overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,224,255,0.35) 1px, transparent 0)',
          backgroundSize: '22px 22px'
        }}></div>
      </div>
      {/* Glow overlays */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-[#00E0FF]/25 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-[26rem] h-[26rem] bg-[#00B8CC]/25 rounded-full blur-3xl"></div>
        {/* Sweeping glow band */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-28 bg-gradient-to-r from-transparent via-[#00E0FF]/12 to-transparent blur-2xl opacity-80"></div>
      </div>
      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle corner accent */}
        <div className="absolute top-0 left-0 w-16 h-16 border-l border-t border-[#00E0FF]/10"></div>
        <div className="absolute top-0 right-0 w-16 h-16 border-r border-t border-[#00E0FF]/10"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-[#00E0FF]/10"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-[#00E0FF]/10"></div>
        
        {/* Single subtle glow element */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#00E0FF]/3 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Additional geometric patterns & shapes */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        {/* Rotating squares */}
        <div className="absolute top-10 left-10 w-16 h-16 border-2 border-[#00E0FF]/60 rotate-45 animate-spin" style={{animationDuration: '24s'}}></div>
        <div className="absolute bottom-14 right-12 w-14 h-14 border-2 border-[#00B8CC]/60 -rotate-12 animate-spin" style={{animationDuration: '28s', animationDirection: 'reverse'}}></div>
        {/* Concentric rings */}
        <div className="absolute top-1/4 right-1/4 w-24 h-24 rounded-full border border-[#00E0FF]/40 animate-ping"></div>
        <div className="absolute top-[28%] right-[26%] w-16 h-16 rounded-full border border-[#00B8CC]/40 animate-ping" style={{animationDelay: '0.5s'}}></div>
        {/* Diagonal line accents */}
        <div className="absolute left-12 top-24 w-px h-24 bg-gradient-to-b from-[#00E0FF] to-transparent" style={{transform: 'rotate(22deg)'}}></div>
        <div className="absolute right-16 top-16 w-px h-28 bg-gradient-to-b from-[#00B8CC] to-transparent" style={{transform: 'rotate(-20deg)'}}></div>
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
      
      {/* Animated Dots */}
      <AnimatedDot delay={0} className="top-16 left-16" size="w-3 h-3" />
      <AnimatedDot delay={1} className="top-24 right-24" size="w-3 h-3" />
      <AnimatedDot delay={2} className="bottom-24 left-24" size="w-3 h-3" />
      <AnimatedDot delay={3} className="bottom-16 right-16" size="w-3 h-3" />

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00E0FF] animate-pulse"></div>
            <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse relative">
              <div className="absolute inset-0 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
            </div>
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#00E0FF] animate-pulse"></div>
          </div>
          
          <h2 
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white text-center relative"
          style={{ fontFamily: 'var(--font-montserrat)' }}
            data-aos="fade-up" 
            data-aos-duration="900"
          >
            Trusted By
            <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl font-black text-[#00E0FF] opacity-20 blur-sm animate-pulse"></div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent rounded-full"></div>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            We've had the privilege of working with amazing creators and brands who trust us to bring their vision to life.
          </p>
        </div>

        {/* Enhanced Trusted by avatars with Swiper carousel */}
        <div className="mb-20 w-full">
          <div className="w-full max-w-7xl mx-auto">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={3}
            loop={true}
            speed={3000}
            freeMode={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            allowTouchMove={true}
            className="e-n-carousel"
            aria-label="Carousel"
          >
            {avatars.concat(avatars).map((a, i) => (
              <SwiperSlide key={a.name + i}>
                  <div className="flex flex-col items-center mx-auto group">
                    <div className="relative mb-4">
                      {a.name === 'Old Money Luxury' || a.name === 'K.B.M.H' || a.name === 'Lhor' || a.name === 'Huel' || a.name === 'F' || a.name === 'Evercoach' || a.name === 'Cropped' || a.name === 'LogoMic' || a.name === 'Bizarre Medical Stories' ? (
                        <>
                          <img 
                            src={a.src} 
                            alt={a.name} 
                            className={`w-40 h-40 rounded-full border-2 border-[#00E0FF]/30 shadow-lg mx-auto group-hover:border-[#00E0FF] transition-all duration-300 group-hover:scale-105 bg-[#001A1F]/60 ${(a.name === 'Huel' || a.name === 'Cropped' || a.name === 'LogoMic') ? 'object-contain p-4' : 'object-cover'}`}
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </>
                      ) : (
                        <>
                          <div 
                            className="w-40 h-40 rounded-full border-2 border-[#00E0FF]/30 shadow-lg mx-auto flex items-center justify-center bg-[#001A1F]/60 group-hover:border-[#00E0FF] transition-all duration-300 group-hover:scale-105"
                            aria-label={a.name}
                          >
                            <span 
                              className="px-4 text-center font-bold text-white text-lg leading-snug"
                              style={{ fontFamily: 'var(--font-montserrat)' }}
                            >
                              {a.name}
                            </span>
                          </div>
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#00E0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </>
                      )}
                    </div>
                  </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>


          </div>
    </section>
  );
}
