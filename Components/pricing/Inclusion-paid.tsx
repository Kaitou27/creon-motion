'use client';

import React, { useEffect } from 'react';
import { Video, Target, Scissors, Zap, Film, Type, Music, RotateCcw, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InclusionPaid = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const inclusions = [
    { text: "1 video up to 8–10 minutes", icon: Video },
    { text: "Hook improvement recommendations", icon: Target },
    { text: "Professional editing and cleanup", icon: Scissors },
    { text: "Improved pacing and flow", icon: Zap },
    { text: "Script-to-visual matching", icon: Film },
    { text: "Text animations and visual highlights", icon: Type },
    { text: "Licensed music and balanced audio", icon: Music },
    { text: "1 revision round", icon: RotateCcw }
  ];

  return (
    <section className="bg-[#001A1F] text-white py-24 px-4 min-h-screen relative overflow-hidden font-montserrat" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Background Glows matching other components */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E0FF]/5 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#00E0FF]/3 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Subtle dotted grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24" data-aos="fade-up" data-aos-duration="800">
          <div className="inline-block mb-6">
            <span className="text-[#00E0FF] font-bold tracking-widest text-xs sm:text-sm uppercase bg-[#00E0FF]/10 px-5 py-2 rounded-full border border-[#00E0FF]/20 shadow-[0_0_15px_rgba(0,224,255,0.15)]">
              Paid Pilot
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 text-white tracking-tight uppercase drop-shadow-md">
            Starting at <span className="text-[#00E0FF] drop-shadow-[0_0_15px_rgba(0,224,255,0.4)]">$750</span>
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6 px-4">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-semibold">
              A trial project designed to help both sides evaluate fit before moving into a monthly partnership.
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Experience our approach to retention, storytelling, pacing, and content production on a single project before committing to an ongoing plan.
            </p>
          </div>
        </div>

        {/* Zig Zag Inclusions Section */}
        <div className="mb-32 relative">
          <div className="text-center mb-20" data-aos="fade-up">
            <h3 className="text-3xl md:text-4xl font-bold uppercase tracking-wider text-white inline-block relative">
              Includes
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent"></div>
            </h3>
          </div>
          
          {/* Vertical Connecting Line for Desktop */}
          <div className="absolute left-1/2 top-40 bottom-0 w-px bg-gradient-to-b from-[#00E0FF]/0 via-[#00E0FF]/30 to-transparent transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-16 md:space-y-28 max-w-5xl mx-auto px-4 sm:px-8">
            {inclusions.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon = item.icon;
              
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-20 relative`} data-aos={isEven ? "fade-right" : "fade-left"} data-aos-duration="800">
                  
                  {/* Center Dot for desktop */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-[#001A1F] shadow-[0_0_20px_#00E0FF] hidden md:flex items-center justify-center z-10 border-2 border-[#00E0FF]">
                    <div className="w-2 h-2 bg-[#00E0FF] rounded-full animate-ping"></div>
                  </div>

                  {/* Text Side */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-end text-center md:text-right' : 'md:justify-start text-center md:text-left'}`}>
                    <div className="bg-[#0A0F1A]/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-[#00E0FF]/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-[#00E0FF]/60 hover:shadow-[0_0_25px_rgba(0,224,255,0.2)] transition-all duration-300 w-full max-w-md group relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-[#00E0FF] transition-colors">
                        {item.text}
                      </h4>
                    </div>
                  </div>

                  {/* Icon Side */}
                  <div className={`w-full md:w-1/2 flex ${isEven ? 'md:justify-start justify-center' : 'md:justify-end justify-center'}`}>
                    <div className="relative group cursor-pointer">
                      <div className="absolute inset-0 bg-[#00E0FF] blur-[40px] opacity-20 group-hover:opacity-50 transition-all duration-500 rounded-full"></div>
                      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#0F1F2A] to-[#012A34] border border-[#00E0FF]/30 flex items-center justify-center relative z-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">
                        <Icon size={56} className="text-[#00E0FF] drop-shadow-[0_0_15px_rgba(0,224,255,0.8)]" strokeWidth={1.5} />
                      </div>
                      
                      {/* Decorative elements around icon to simulate the trail from reference */}
                      <div className={`absolute ${isEven ? '-left-6 top-1/2' : '-right-6 top-1/2'} transform -translate-y-1/2 w-3 h-3 rounded-full bg-[#00E0FF]/40 hidden md:block group-hover:bg-[#00E0FF] transition-colors duration-300`}></div>
                      <div className={`absolute ${isEven ? '-left-12 top-1/3' : '-right-12 top-2/3'} transform w-2 h-2 rounded-full bg-[#00E0FF]/20 hidden md:block`}></div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Best For & CTA Section */}
        <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] rounded-3xl border border-[#00E0FF]/40 p-8 sm:p-12 md:p-16 text-center max-w-5xl mx-auto shadow-[0_0_50px_rgba(0,224,255,0.15)] relative overflow-hidden group" data-aos="zoom-in" data-aos-duration="1000">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#00E0FF]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-[#00E0FF]/20 transition-all duration-700"></div>
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#00E0FF]/5 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>
          
          <div className="relative z-10">
            <h3 className="text-[#00E0FF] text-lg md:text-xl font-bold uppercase tracking-[0.2em] mb-6 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-[#00E0FF]/50"></span>
              Best For
              <span className="w-12 h-px bg-[#00E0FF]/50"></span>
            </h3>
            
            <p className="text-2xl md:text-3xl text-white font-medium mb-16 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Creators who want to test our workflow, communication, and creative approach before committing to a monthly partnership.
            </p>
            
            <a href="/quote" className="inline-flex items-center justify-center px-10 py-5 rounded-xl bg-[#00E0FF] text-[#001A1F] font-black text-lg md:text-xl hover:bg-white transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,224,255,0.6)] transform hover:-translate-y-1 uppercase tracking-wider gap-3">
              Start Pilot Project
              <ArrowRight size={24} strokeWidth={3} className="animate-bounce-x" />
            </a>
          </div>
        </div>

      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(25%); }
        }
        .animate-bounce-x {
          animation: bounce-x 1.5s infinite;
        }
      `}} />
    </section>
  );
};

export default InclusionPaid;
