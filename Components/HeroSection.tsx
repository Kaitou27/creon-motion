'use client';

import React from 'react';

const HeroSection = () => (
  <>
    <section id="home" className="relative w-full min-h-screen h-screen flex flex-col items-center justify-center overflow-hidden opacity-70" data-aos="fade-up" data-aos-duration="900">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/videos/herobg.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Content */}
      <div className="relative z-[2] px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24 max-w-full lg:max-w-[900px] xl:max-w-[1000px] w-full mr-auto ml-2 sm:ml-4 md:ml-16 lg:ml-32 xl:ml-48 2xl:ml-64" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
        <h1
          className="text-left w-full break-words text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 md:mb-8"
          style={{
            fontFamily: 'var(--font-montserrat)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)'
          }}
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="900"
        >High-Retention Video Editing for YouTube Channels & Brands</h1>
        <p
          className="text-left break-words text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-0 mt-4 sm:mt-6 md:mt-8 font-semibold italic leading-relaxed"
          style={{
            fontFamily: 'var(--font-montserrat)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)'
          }}
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="900"
        >
          We help creators and businesses turn ideas into high-performing videos. From faceless YouTube documentaries to short-form content and commercial ads, our team focuses on storytelling, pacing, and motion graphics that keep viewers watching.
        </p>
        <div className="flex justify-start mt-6 sm:mt-8 md:mt-10 lg:mt-12">
          <button
            onClick={() => {
              const section = document.getElementById('services');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white text-sm xs:text-base sm:text-lg md:text-xl font-medium rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 cursor-pointer shadow-md transition-all duration-300 hover:opacity-90 hover:scale-105"
            style={{ fontFamily: 'var(--font-montserrat)' }}
            data-aos="zoom-in"
            data-aos-delay="800"
            data-aos-duration="900"
          >
            Start Your Project →
          </button>
        </div>
      </div>
    </section>
  </>
);

export default HeroSection;
