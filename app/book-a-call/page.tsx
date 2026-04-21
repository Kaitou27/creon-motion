'use client';

import React from 'react';
import CalendarSection from '../../Components/CalendarSection';
import { PhoneCall } from 'lucide-react';

const BookACallPage = () => {
  return (
    <main className="relative bg-[#001A1F] min-h-screen text-white pt-24 pb-32 px-4 selection:bg-[#00E0FF]/30 selection:text-white overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 -left-24 w-[600px] h-[600px] bg-[#00E0FF]/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-24 w-[800px] h-[800px] bg-[#00B8CC]/10 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Dot Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        {/* Secondary Dot Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 224, 255, 0.2) 1px, transparent 0)",
              backgroundSize: "64px 64px",
            }}
          ></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E0FF]/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00E0FF]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full text-[#00E0FF] text-xs font-bold tracking-widest uppercase mb-8 animate-pulse">
            <PhoneCall size={14} />
            Strategic Consultation
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight mb-4 leading-none text-white">
            Book <span className="text-[#00E0FF]">A Call</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent mx-auto rounded-full mt-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base mt-8 font-medium leading-relaxed italic opacity-80">
             "Select a time that works for you, and let's discuss how we can scale your content output."
          </p>
        </div>

        {/* Calendar Component */}
        <CalendarSection />

        {/* Bottom Decorative Element */}
        <div className="mt-20 flex flex-col items-center gap-4 opacity-30">
          <div className="w-px h-16 bg-gradient-to-b from-[#00E0FF] to-transparent" />
          <p className="text-[10px] uppercase tracking-[0.5em] font-black text-white">Creon Motion</p>
        </div>
      </div>
    </main>
  );
};

export default BookACallPage;
