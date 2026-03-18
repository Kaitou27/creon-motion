"use client";

import React from 'react';

const stats = [
  { 
    value: '2000+', 
    label: 'Videos Brought to Life'
  },
  { 
    value: '100+', 
    label: 'Clients We have Worked With'
  },
  { 
    value: '20+', 
    label: 'Countries Served'
  },
  { 
    value: '98%', 
    label: 'Client Satisfaction'
  }
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

const ClientStatsSection = () => (
  <section className="bg-[#001A1F] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/10" style={{ fontFamily: 'var(--font-montserrat)' }}>
    {/* Enhanced Background Elements */}
    <div className="absolute inset-0">
      {/* Dot background overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,224,255,0.35) 1px, transparent 0)',
          backgroundSize: '22px 22px'
        }}></div>
      </div>
      
      <div className="absolute top-20 left-10 w-80 h-80 bg-[#00E0FF]/3 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E0FF]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      
      {/* Additional floating elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00E0FF]/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-[#00E0FF]/4 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
      <div className="absolute top-3/4 right-1/3 w-56 h-56 bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '5s'}}></div>
      
      {/* More background elements */}
      <div className="absolute top-1/6 left-1/3 w-40 h-40 bg-[#00E0FF]/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
      <div className="absolute bottom-1/6 right-1/4 w-72 h-72 bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '7s'}}></div>
      <div className="absolute top-2/3 left-1/6 w-32 h-32 bg-[#00E0FF]/4 rounded-full blur-xl animate-pulse" style={{animationDelay: '8s'}}></div>
      <div className="absolute top-1/3 right-1/6 w-88 h-88 bg-[#00E0FF]/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '9s'}}></div>
    </div>
    
      
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border border-[#00E0FF]/20 rounded-lg rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-32 w-24 h-24 border border-[#00E0FF]/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 border border-[#00E0FF]/25 rotate-12 animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 border border-[#00E0FF]/20 rounded-lg animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Floating Hexagons */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 transform rotate-45">
          <div className="w-full h-full border border-[#00E0FF]/30 animate-pulse" style={{animationDelay: '5s'}}></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 transform -rotate-45">
          <div className="w-full h-full border border-[#00E0FF]/25 animate-pulse" style={{animationDelay: '6s'}}></div>
        </div>
        
        {/* Animated Triangles */}
        <div className="absolute top-1/3 right-1/6 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[35px] border-b-[#00E0FF]/20 animate-pulse" style={{animationDelay: '7s'}}></div>
        <div className="absolute bottom-1/3 left-1/6 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-[#00E0FF]/15 animate-pulse" style={{animationDelay: '8s'}}></div>
        
        {/* Enhanced Glow Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#00E0FF]/5 animate-pulse" style={{animationDelay: '9s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#00E0FF]/8 animate-pulse" style={{animationDelay: '10s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-[#00E0FF]/10 animate-pulse" style={{animationDelay: '11s'}}></div>
      </div>
      
      {/* Enhanced Animated Lines */}
    <AnimatedLine delay={0} className="top-10 left-32" />
    <AnimatedLine delay={1} className="top-20 right-40" />
    <AnimatedLine delay={2} className="bottom-20 left-20" />
    <AnimatedLine delay={3} className="bottom-10 right-20" />
    <AnimatedLine delay={4} className="top-1/2 left-10" />
    <AnimatedLine delay={5} className="top-1/2 right-10" />
    
    {/* Additional Animated Lines */}
    <AnimatedLine delay={6} className="top-1/4 left-1/2" />
    <AnimatedLine delay={7} className="bottom-1/4 right-1/2" />
    <AnimatedLine delay={8} className="top-3/4 left-1/3" />
    <AnimatedLine delay={9} className="bottom-1/6 right-1/3" />
    
    {/* Enhanced Floating Particles */}
    <FloatingParticle delay={0} duration={3} className="top-10 left-20" />
    <FloatingParticle delay={1} duration={4} className="top-32 right-32" />
    <FloatingParticle delay={2} duration={3.5} className="bottom-32 left-1/4" />
    <FloatingParticle delay={3} duration={5} className="top-1/2 right-10" />
    <FloatingParticle delay={4} duration={4.5} className="bottom-20 right-1/3" />
    <FloatingParticle delay={5} duration={3} className="top-1/4 left-1/3" />
    <FloatingParticle delay={6} duration={4} className="bottom-1/4 right-1/4" />
    <FloatingParticle delay={7} duration={3.5} className="top-3/4 left-1/2" />
    
    {/* Larger floating elements */}
    <FloatingParticle delay={2} duration={6} className="top-1/3 right-1/4" size="w-4 h-4" />
    <FloatingParticle delay={4} duration={5} className="bottom-1/3 left-1/2" size="w-4 h-4" />
    
    {/* Additional floating elements */}
    <FloatingParticle delay={8} duration={4} className="top-1/6 right-1/6" />
    <FloatingParticle delay={9} duration={3.5} className="bottom-1/6 left-1/6" />
    <FloatingParticle delay={10} duration={5} className="top-2/3 right-1/3" />
    <FloatingParticle delay={11} duration={4.5} className="bottom-2/3 left-1/3" />
    
    {/* Animated Dots */}
    <AnimatedDot delay={0} className="top-16 left-16" size="w-3 h-3" />
    <AnimatedDot delay={1} className="top-24 right-24" size="w-3 h-3" />
    <AnimatedDot delay={2} className="bottom-24 left-24" size="w-3 h-3" />
    <AnimatedDot delay={3} className="bottom-16 right-16" size="w-3 h-3" />
    <AnimatedDot delay={4} className="top-1/2 left-1/4" size="w-2 h-2" />
    <AnimatedDot delay={5} className="top-1/2 right-1/4" size="w-2 h-2" />
    
    <div className="max-w-7xl mx-auto relative z-10">
      {/* Enhanced Header */}
      <div className="text-center mb-16">
        {/* Enhanced Decorative Elements */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-[#00E0FF] animate-pulse"></div>
          <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse relative">
            <div className="absolute inset-0 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-[#00E0FF] animate-pulse"></div>
        </div>
        
        {/* Enhanced Tagline */}
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00E0FF]/10 to-[#00B8CC]/10 text-[#00E0FF] px-6 py-3 rounded-2xl border border-[#00E0FF]/20 shadow-lg mb-6 relative overflow-hidden group">
          <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse relative">
            <div className="absolute inset-0 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
          </div>
          <span className="text-sm font-semibold tracking-wide">Trusted by Creators Worldwide</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-0 h-0 border-l-[12px] border-l-[#00E0FF]/30 border-t-[12px] border-t-[#00E0FF]/30 rounded-tl-2xl"></div>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[12px] border-r-[#00E0FF]/30 border-b-[12px] border-b-[#00E0FF]/30 rounded-br-2xl"></div>
        </div>
        
        <h2 
          className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 text-white text-center relative"
      style={{ fontFamily: 'var(--font-montserrat)' }}
      data-aos="fade-up" 
      data-aos-duration="900"
    >
      What Makes Us a Trusted Editing Partner
          <div className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl font-black text-[#00E0FF] opacity-20 blur-sm animate-pulse"></div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent rounded-full"></div>
    </h2>

        {/* Enhanced Description */}
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Our track record speaks for itself. We've helped creators, brands, and businesses achieve their goals through exceptional video editing and animation.
        </p>
        
        {/* Enhanced Bottom Decorative Elements */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#00E0FF] to-transparent animate-pulse"></div>
          <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse relative">
            <div className="absolute inset-0 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
          </div>
          <div className="w-16 h-0.5 bg-gradient-to-l from-[#00E0FF] to-transparent animate-pulse"></div>
        </div>
      </div>

      {/* Enhanced Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 max-w-6xl mx-auto">
      {stats.map((stat, i) => (
        <div 
          key={i} 
            className="relative group"
          data-aos="fade-up" 
          data-aos-delay={i * 100 + 200} 
          data-aos-duration="900"
        >
            {/* Enhanced Stat Card */}
            <div className="relative bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] p-8 w-full h-80 text-center [clip-path:polygon(0_0,90%_0,100%_10%,100%_100%,10%_100%,0_90%)] shadow-2xl hover:shadow-[0_20px_40px_rgba(0,224,255,0.15)] transition-all duration-500 hover:scale-105 border border-[#00E0FF]/30 hover:border-[#00E0FF]/50 overflow-hidden">
              
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E0FF] rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00E0FF] rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#00E0FF] rounded-full blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
              
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 [clip-path:polygon(0_0,90%_0,100%_10%,100%_100%,10%_100%,0_90%)] p-[2px] bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#00E0FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="w-full h-full bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] [clip-path:polygon(0_0,90%_0,100%_10%,100%_100%,10%_100%,0_90%)]"></div>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-[#00E0FF]/30 border-t-[20px] border-t-[#00E0FF]/30"></div>
              <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[20px] border-r-[#00E0FF]/20 border-b-[20px] border-b-[#00E0FF]/20"></div>
              
              <div className="relative z-10 h-full flex flex-col justify-center items-center">
                {/* Spacer removed with emojis */}
                <div className="w-full flex justify-center mb-2"></div>
                
                {/* Enhanced Main Statistic */}
                <div className="text-5xl sm:text-6xl font-black text-[#00E0FF] mb-4 relative group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                  <div className="absolute inset-0 text-5xl sm:text-6xl font-black text-[#00E0FF] opacity-20 blur-sm animate-pulse"></div>
                  <div className="absolute inset-0 text-5xl sm:text-6xl font-black text-[#00E0FF] opacity-10 blur-md animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Enhanced Label */}
                <div className="text-lg sm:text-xl font-semibold text-[#00E0FF] mb-2 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            </div>
            
            {/* Enhanced Floating particles around each card */}
            <FloatingParticle delay={i * 0.5} duration={3} className="top-0 left-0" />
            <FloatingParticle delay={i * 0.5 + 1} duration={4} className="top-1/4 right-0" />
            <FloatingParticle delay={i * 0.5 + 2} duration={3.5} className="bottom-1/4 left-0" />
            <FloatingParticle delay={i * 0.5 + 3} duration={4.5} className="top-1/2 left-1/2" />
            <FloatingParticle delay={i * 0.5 + 4} duration={3} className="bottom-0 right-1/2" />
        </div>
      ))}
      </div>
      

    </div>
  </section>
);

export default ClientStatsSection;
