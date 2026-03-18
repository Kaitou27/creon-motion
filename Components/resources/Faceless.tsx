'use client';

import React, { useState } from 'react';


const Faceless = () => {
  const [category, setCategory] = useState<'Compilation' | 'Documentary' | 'Animation' | 'TalkingHead'>('Compilation');

  // Form state
  const [selectedService, setSelectedService] = useState('E-commerce');
  const [selectedBudget, setSelectedBudget] = useState('Less than $5K');
  const [selectedEngagement, setSelectedEngagement] = useState('Project-based Engagement');

  const compilationVideos = [
    'https://www.youtube.com/watch?v=sw698mclPKo',
    'https://www.youtube.com/watch?v=UEsPFAEYy3s',
    'https://www.youtube.com/watch?v=pVQMSKE6gLQ',
    'https://www.youtube.com/watch?v=-cnoTN9wqWI',
    'https://www.youtube.com/watch?v=K-ICjEZKqLE',
    'https://www.youtube.com/watch?v=FFfUDykIgRo',
    'https://www.youtube.com/watch?v=f_WWx3QFraY',
    'https://www.youtube.com/watch?v=O6anpTougUQ'
  ];

  // Helper function to extract YouTube ID
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const getEmbedUrl = (url: string) => {
    const id = getYouTubeId(url);
    return id ? `https://www.youtube.com/embed/${id}?rel=0` : url;
  };

  const documentaryVideos = [
    'https://www.youtube.com/watch?v=Fobf6gibbdo',
    'https://www.youtube.com/watch?v=HfpU7hASJNM',
    'https://www.youtube.com/watch?v=7z3ZfLcDrxM',
    'https://www.youtube.com/watch?v=yPXUhqG29YI'
  ];

  const animationVideos = [
    'https://www.youtube.com/watch?v=8Nm_CfKuzAg',
    'https://www.youtube.com/watch?v=DnjSg128UtY',
    'https://www.youtube.com/watch?v=ReJltXEppEg'
  ];

  const talkingHeadVideos = [
    'https://www.youtube.com/watch?v=DNWXyjvCSmc',
    'https://www.youtube.com/watch?v=hF7vIwr1HYQ',
    'https://www.youtube.com/watch?v=F2_IdN-4H0w',
    'https://www.youtube.com/watch?v=ag16oa1qVvU'
  ];

  const videoContainerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '700px',
    aspectRatio: '16 / 9',
    background: '#000',
    border: '1px solid rgba(0,255,255,0.1)',
    boxShadow: '0 8px 32px rgba(0,255,255,0.15), 0 4px 24px rgba(0,0,0,0.20)'
  };

  const videoFillStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '1rem'
  };

  return (
    <>

      <section className="w-full h-screen bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] relative overflow-hidden flex items-center" data-aos="fade-up" data-aos-duration="900" style={{ fontFamily: 'var(--font-montserrat)' }}>
        {/* Header Area Subtle Designs */}
        <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
          {/* Top Edge Glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-60"></div>

          {/* Top Left Corner Design */}
          <div className="absolute top-4 left-4 w-12 h-12 border border-[#00E0FF] rotate-45 animate-spin opacity-40" style={{ animationDuration: '20s' }}></div>
          <div className="absolute top-8 left-8 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-50"></div>

          {/* Top Right Corner Design */}
          <div className="absolute top-6 right-6 w-16 h-16 border border-[#00B8CC] rounded-full animate-ping opacity-40"></div>
          <div className="absolute top-12 right-12 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-60"></div>

          {/* Top Center Subtle Elements */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-20 border border-[#00E0FF] rounded-full animate-spin opacity-30" style={{ animationDuration: '25s' }}></div>
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#00E0FF] rounded-full animate-pulse opacity-40"></div>

          {/* Top Floating Elements */}
          <div className="absolute top-16 left-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-50"></div>
          <div className="absolute top-20 right-1/4 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-24 left-1/3 w-4 h-4 bg-[#00E0FF] rounded-full animate-bounce opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-28 right-1/3 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-50" style={{ animationDelay: '1.5s' }}></div>

          {/* Top Animated Lines */}
          <div className="absolute top-8 left-16 w-0.5 h-8 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-50"></div>
          <div className="absolute top-12 right-16 w-0.5 h-8 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse opacity-50" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-16 left-24 w-0.5 h-6 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-50" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute top-20 right-24 w-0.5 h-6 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse opacity-50" style={{ animationDelay: '0.9s' }}></div>
        </div>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#00E0FF] rounded-full blur-2xl animate-pulse opacity-50" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#00E0FF] rounded-full blur-xl animate-pulse opacity-45" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#00B8CC] rounded-full blur-lg animate-pulse opacity-55" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-[#0099B3] rounded-full blur-xl animate-pulse opacity-50" style={{ animationDelay: '0.8s' }}></div>
        </div>

        {/* Enhanced Geometric Patterns */}
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#00E0FF] rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#00E0FF] rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#00B8CC] rotate-12 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-[#00E0FF] rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/3 left-10 w-12 h-12 border-2 border-[#00E0FF] rotate-45 animate-spin" style={{ animationDuration: '18s' }}></div>
        </div>

        {/* Particle Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-90"></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#00B8CC] rounded-full animate-ping opacity-90" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-90" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#00B8CC] rounded-full animate-ping opacity-90" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-90" style={{ animationDelay: '0.8s' }}></div>
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
        <div className="absolute top-10 left-32 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-20 right-40 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-20 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-20 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{ animationDelay: '3s' }}></div>

        {/* Additional Prominent Design Elements */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-[#00E0FF] rounded-full animate-spin opacity-60" style={{ animationDuration: '30s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-[#00B8CC] rounded-full animate-ping opacity-70"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#00E0FF] rounded-full animate-pulse opacity-80"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-[#00B8CC] rounded-full animate-pulse opacity-80" style={{ animationDelay: '1s' }}></div>

        {/* Header Content Area Designs */}
        <div className="absolute top-32 left-8 w-16 h-16 border border-[#00E0FF] rotate-12 animate-spin opacity-50" style={{ animationDuration: '22s' }}></div>
        <div className="absolute top-36 right-8 w-12 h-12 bg-[#00B8CC] rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 left-1/4 w-10 h-10 border border-[#00E0FF] rotate-45 animate-spin opacity-55" style={{ animationDuration: '18s' }}></div>
        <div className="absolute top-44 right-1/4 w-8 h-8 bg-[#00E0FF] rounded-full animate-pulse opacity-65"></div>

        {/* Header Diagonal Lines */}
        <div className="absolute top-28 left-16 w-0.5 h-12 bg-gradient-to-br from-[#00E0FF] to-transparent animate-pulse opacity-60" style={{ transform: 'rotate(15deg)' }}></div>
        <div className="absolute top-32 right-16 w-0.5 h-12 bg-gradient-to-bl from-[#00B8CC] to-transparent animate-pulse opacity-60" style={{ transform: 'rotate(-15deg)', animationDelay: '0.5s' }}></div>
        <div className="absolute top-36 left-24 w-0.5 h-10 bg-gradient-to-br from-[#00E0FF] to-transparent animate-pulse opacity-60" style={{ transform: 'rotate(25deg)', animationDelay: '1s' }}></div>
        <div className="absolute top-40 right-24 w-0.5 h-10 bg-gradient-to-bl from-[#00B8CC] to-transparent animate-pulse opacity-60" style={{ transform: 'rotate(-25deg)', animationDelay: '1.5s' }}></div>

        {/* Enhanced Floating Elements */}
        <div className="absolute top-10 left-20 animate-bounce opacity-80" style={{ animationDelay: '0s', animationDuration: '3s' }}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute top-32 right-32 animate-bounce opacity-80" style={{ animationDelay: '1s', animationDuration: '4s' }}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 animate-bounce opacity-80" style={{ animationDelay: '2s', animationDuration: '3.5s' }}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute top-1/2 right-10 animate-bounce opacity-80" style={{ animationDelay: '3s', animationDuration: '5s' }}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute bottom-20 right-1/3 animate-bounce opacity-80" style={{ animationDelay: '4s', animationDuration: '4.5s' }}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute top-1/4 left-1/3 animate-bounce opacity-80" style={{ animationDelay: '5s', animationDuration: '3s' }}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute bottom-1/4 right-1/4 animate-bounce opacity-80" style={{ animationDelay: '6s', animationDuration: '4s' }}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute top-3/4 left-1/2 animate-bounce opacity-80" style={{ animationDelay: '7s', animationDuration: '3.5s' }}>
          <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>

        {/* Larger floating elements */}
        <div className="absolute top-1/3 right-1/4 animate-bounce opacity-80" style={{ animationDelay: '2s', animationDuration: '6s' }}>
          <div className="w-6 h-6 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/2 animate-bounce opacity-80" style={{ animationDelay: '4s', animationDuration: '5s' }}>
          <div className="w-6 h-6 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 items-center justify-items-center gap-12 relative z-10">
          {/* Centered: Heading + Copy (No container) */}
          <div className="w-full md:pr-0 lg:pr-0 text-center">
            {/* title */}
            <div className="pt-6 px-4">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-[1.05] tracking-tight">
                <span className="block bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Long Form Videos</span>
                <span className="block bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#0099B3] bg-clip-text text-transparent">Built for Storytelling and Retention</span>
              </h1>
              {/* animated underline glow */}
              <div className="mt-3 flex justify-center">
                <div className="relative h-1 w-40 sm:w-56 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-80" />
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-40" />
                </div>
              </div>
              <p className="mt-5 mx-auto max-w-[780px] text-xl sm:text-2xl text-gray-200/90">
                Explore examples of our high‑retention, story‑driven long‑form edits.
              </p>
              {/* soft halo behind heading */}
              <div className="pointer-events-none relative">
                <div className="absolute left-1/2 -translate-x-1/2 -top-8 w-80 sm:w-96 h-24 rounded-full blur-3xl bg-[#00E0FF]/15" />
              </div>
            </div>

            {/* stats grid */}
            <div className="mt-8 px-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-7 max-w-5xl mx-auto">
                <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5 text-center">
                  {/* top accent line */}
                  <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent" />
                  {/* tiny dot */}
                  <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 inline-block w-1.5 h-1.5 rounded-full bg-[#00E0FF]/80" />
                  <div className="text-4xl sm:text-5xl font-black text-white">2000+</div>
                  <div className="mt-1 text-xs sm:text-sm tracking-wide uppercase text-gray-300">Videos Brought to Life</div>
                </div>
                <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5 text-center">
                  <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent" />
                  <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 inline-block w-1.5 h-1.5 rounded-full bg-[#00E0FF]/80" />
                  <div className="text-4xl sm:text-5xl font-black text-white">100+</div>
                  <div className="mt-1 text-xs sm:text-sm tracking-wide uppercase text-gray-300">Clients Worked With</div>
                </div>
                <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5 text-center">
                  <div className="pointer-events-none absolute -top-px left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent" />
                  <span className="pointer-events-none absolute -top-1 left-1/2 -translate-x-1/2 inline-block w-1.5 h-1.5 rounded-full bg-[#00E0FF]/80" />
                  <div className="text-4xl sm:text-5xl font-black text-white">20+</div>
                  <div className="mt-1 text-xs sm:text-sm tracking-wide uppercase text-gray-300">Countries Served</div>
                </div>
                <div className="relative rounded-2xl border border-[#00E0FF]/20 bg-[#0A0F1A]/60 p-5 text-center">
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
      <section className="bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
        {/* Top Edge Glow */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-60"></div>

        {/* Top Left Corner Design */}
        <div className="absolute top-4 left-4 w-12 h-12 border border-[#00E0FF] rotate-45 animate-spin opacity-40" style={{ animationDuration: '20s' }}></div>
        <div className="absolute top-8 left-8 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-50"></div>

        {/* Top Right Corner Design */}
        <div className="absolute top-4 right-4 w-12 h-12 border border-[#00E0FF] rotate-45 animate-spin opacity-40" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
        <div className="absolute top-8 right-8 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-50" style={{ animationDelay: '0.5s' }}></div>

        {/* Top Center Subtle Elements */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 border border-[#00E0FF]/30 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00E0FF]/20 rounded-full animate-ping opacity-40"></div>

        {/* Top Floating Elements */}
        <div className="absolute top-16 left-1/4 w-6 h-6 bg-[#00E0FF]/25 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-20 right-1/4 w-5 h-5 bg-[#00E0FF]/30 rounded-full animate-bounce delay-1500"></div>
        <div className="absolute top-24 left-1/3 w-4 h-4 bg-[#00E0FF]/35 rounded-full animate-bounce delay-2000"></div>

        {/* Top Animated Lines */}
        <div className="absolute top-8 left-1/6 w-16 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/50 to-transparent blur-sm"></div>
        <div className="absolute top-16 right-1/6 w-20 h-px bg-gradient-to-l from-transparent via-[#00E0FF]/40 to-transparent blur-sm"></div>
        <div className="absolute top-24 left-1/4 w-12 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/45 to-transparent blur-sm"></div>

        {/* Large Glowing Cyan Orbs */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-60 shadow-[0_0_150px_rgba(0,224,255,0.4)]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-60 shadow-[0_0_150px_rgba(0,224,255,0.4)]" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#00E0FF] rounded-full blur-2xl animate-pulse opacity-50 shadow-[0_0_100px_rgba(0,224,255,0.5)]" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#00E0FF] rounded-full blur-xl animate-pulse opacity-50 shadow-[0_0_80px_rgba(0,224,255,0.6)]" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#00B8CC] rounded-full blur-lg animate-pulse opacity-55 shadow-[0_0_60px_rgba(0,184,204,0.5)]" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-[#0099B3] rounded-full blur-xl animate-pulse opacity-50 shadow-[0_0_70px_rgba(0,153,179,0.55)]" style={{ animationDelay: '0.8s' }}></div>
        </div>

        {/* Background Design Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Glowing Orbs */}
          <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-400 rounded-full opacity-20 blur-lg animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-blue-400 rounded-full opacity-25 blur-lg animate-pulse delay-1500"></div>
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-purple-400 rounded-full opacity-15 blur-xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-18 h-18 bg-teal-400 rounded-full opacity-20 blur-lg animate-pulse delay-3000"></div>

          {/* Floating Elements */}
          <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-teal-400/40 rounded-full animate-bounce"></div>
          <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-cyan-300/20 rounded-full animate-bounce delay-1000"></div>
          <div className="absolute bottom-1/2 right-1/4 w-4 h-4 bg-blue-300/30 rounded-full animate-bounce delay-2000"></div>

          {/* Additional Shapes */}
          <div className="absolute top-1/4 left-1/6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-purple-400/25 rotate-45 animate-bounce delay-500"></div>
          <div className="absolute bottom-1/4 right-1/6 w-8 h-8 border border-indigo-400/30 rotate-45 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 left-1/3 w-6 h-6 border-2 border-teal-300/35 rounded-full animate-spin-slow delay-1500"></div>
          <div className="absolute top-1/6 right-1/3 w-10 h-10 bg-gradient-to-br from-blue-400/15 to-cyan-400/15 rounded-full animate-pulse delay-2000"></div>

          {/* Glowing Lines */}
          <div className="absolute top-1/2 left-1/3 w-32 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent blur-sm"></div>
          <div className="absolute top-1/4 right-1/3 w-24 h-px bg-gradient-to-l from-transparent via-blue-400/35 to-transparent blur-sm"></div>

          {/* Additional Lines */}
          <div className="absolute top-1/3 left-1/6 w-20 h-px bg-gradient-to-r from-transparent via-teal-400/30 to-transparent blur-sm"></div>
          <div className="absolute bottom-1/4 right-1/4 w-16 h-px bg-gradient-to-l from-transparent via-purple-400/25 to-transparent blur-sm"></div>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-20 h-20 border-l-2 border-t-2 border-l-cyan-400/20 border-t-cyan-400/20"></div>
          <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-r-blue-400/20 border-b-blue-400/20"></div>

          {/* Additional Corner Accents */}
          <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-r-purple-400/20 border-t-purple-400/20"></div>
          <div className="absolute bottom-0 left-0 w-18 h-18 border-l-2 border-b-2 border-l-teal-400/25 border-b-teal-400/25"></div>

          {/* Corner Triangles */}
          <div className="absolute top-0 right-1/6 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-purple-400/20"></div>
          <div className="absolute bottom-0 left-1/6 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[10px] border-t-teal-400/25"></div>

          {/* Animated Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,255,0.06)_1px,transparent_0)] bg-[size:35px_35px] animate-pulse"></div>

          {/* Enhanced Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-30"></div>

          {/* Animated Lines */}
          <div className="absolute top-1/2 left-0 w-32 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/30 to-transparent blur-sm animate-pulse delay-3000"></div>
          <div className="absolute top-1/2 right-0 w-32 h-px bg-gradient-to-l from-transparent via-[#00E0FF]/30 to-transparent blur-sm animate-pulse delay-3500"></div>
          <div className="absolute left-1/2 top-0 w-px h-32 bg-gradient-to-b from-transparent via-[#00E0FF]/30 to-transparent blur-sm animate-pulse delay-4000"></div>
          <div className="absolute left-1/2 bottom-0 w-px h-32 bg-gradient-to-t from-transparent via-[#00E0FF]/30 to-transparent blur-sm animate-pulse delay-4500"></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#001A1F]/15 to-transparent"></div>

          {/* Enhanced Geometric Patterns */}
          <div className="absolute top-1/6 right-1/8 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[12px] border-b-purple-400/25 rotate-45 animate-bounce delay-3000"></div>
          <div className="absolute bottom-1/6 left-1/8 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-indigo-400/30 rotate-135 animate-bounce delay-3500"></div>

          {/* Particle Effects */}
          <div className="absolute top-1/8 right-1/6 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping delay-5000"></div>
          <div className="absolute top-1/8 right-1/6 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping delay-5000" style={{ marginLeft: '16px', marginTop: '8px' }}></div>
          <div className="absolute top-1/8 right-1/6 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping delay-5000" style={{ marginLeft: '24px', marginTop: '16px' }}></div>
          <div className="absolute top-1/8 right-1/6 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping delay-5000" style={{ marginLeft: '32px', marginTop: '24px' }}></div>

          <div className="absolute bottom-1/8 left-1/6 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping delay-5500"></div>
          <div className="absolute bottom-1/8 left-1/6 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping delay-5500" style={{ marginRight: '16px', marginBottom: '8px' }}></div>
          <div className="absolute bottom-1/8 left-1/6 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping delay-5500" style={{ marginRight: '24px', marginBottom: '16px' }}></div>
          <div className="absolute bottom-1/8 left-1/6 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping delay-5500" style={{ marginRight: '32px', marginBottom: '24px' }}></div>

          {/* Floating Dots with Trails */}
          <div className="absolute top-1/5 right-1/4 w-2 h-2 bg-cyan-300 rounded-full animate-ping delay-4000"></div>
          <div className="absolute top-1/5 right-1/4 w-1 h-1 bg-cyan-200 rounded-full animate-ping delay-4000" style={{ marginLeft: '8px', marginTop: '4px' }}></div>
          <div className="absolute top-1/5 right-1/4 w-0.5 h-0.5 bg-cyan-100 rounded-full animate-ping delay-4000" style={{ marginLeft: '12px', marginTop: '8px' }}></div>

          {/* Geometric Patterns */}
          <div className="absolute top-3/4 right-1/6 w-8 h-8 border border-teal-400/25 rotate-45 animate-pulse delay-4500"></div>
          <div className="absolute bottom-1/3 left-1/6 w-6 h-6 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full animate-pulse delay-5000"></div>

          {/* Curved Lines */}
          <div className="absolute top-1/2 right-1/8 w-16 h-16 border-r-2 border-t-2 border-r-cyan-400/30 border-t-cyan-400/30 rounded-tr-full animate-pulse delay-5500"></div>
          <div className="absolute bottom-1/2 left-1/8 w-12 h-12 border-l-2 border-b-2 border-l-blue-400/25 border-b-blue-400/25 rounded-bl-full animate-pulse delay-6000"></div>

          {/* Additional Prominent Design Elements */}
          <div className="absolute top-1/4 left-1/8 w-20 h-20 border-2 border-[#00E0FF]/20 rotate-45 animate-spin-slow delay-6500"></div>
          <div className="absolute bottom-1/4 right-1/8 w-16 h-16 border-2 border-[#00E0FF]/25 rotate-45 animate-spin-slow delay-7000"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-gradient-to-br from-[#00E0FF]/10 to-transparent rounded-full animate-pulse delay-7500"></div>
          <div className="absolute bottom-3/4 left-1/4 w-28 h-28 bg-gradient-to-tl from-[#00E0FF]/15 to-transparent rounded-full animate-pulse delay-8000"></div>

          {/* Enhanced Floating Elements */}
          <div className="absolute top-1/6 left-1/8 w-8 h-8 bg-[#00E0FF]/20 rounded-full animate-bounce delay-8500"></div>
          <div className="absolute top-1/3 right-1/8 w-6 h-6 bg-[#00E0FF]/25 rounded-full animate-bounce delay-9000"></div>
          <div className="absolute bottom-1/6 right-1/8 w-7 h-7 bg-[#00E0FF]/30 rounded-full animate-bounce delay-9500"></div>
          <div className="absolute bottom-1/3 left-1/8 w-5 h-5 bg-[#00E0FF]/35 rounded-full animate-bounce delay-10000"></div>

          {/* Additional Floating Elements */}
          <div className="absolute top-1/8 left-1/4 w-4 h-4 bg-[#00E0FF]/40 rounded-full animate-bounce delay-10500"></div>
          <div className="absolute top-1/8 right-1/4 w-3 h-3 bg-[#00E0FF]/45 rounded-full animate-bounce delay-11000"></div>
          <div className="absolute bottom-1/8 left-1/4 w-5 h-5 bg-[#00E0FF]/35 rounded-full animate-bounce delay-11500"></div>
          <div className="absolute bottom-1/8 right-1/4 w-4 h-4 bg-[#00E0FF]/40 rounded-full animate-bounce delay-12000"></div>

          {/* Micro Particles */}
          <div className="absolute top-1/12 left-1/6 w-1 h-1 bg-[#00E0FF]/60 rounded-full animate-ping delay-12500"></div>
          <div className="absolute top-1/12 right-1/6 w-1 h-1 bg-[#00E0FF]/55 rounded-full animate-ping delay-13000"></div>
          <div className="absolute bottom-1/12 left-1/6 w-1 h-1 bg-[#00E0FF]/65 rounded-full animate-ping delay-13500"></div>
          <div className="absolute bottom-1/12 right-1/6 w-1 h-1 bg-[#00E0FF]/50 rounded-full animate-ping delay-14000"></div>

          {/* Floating Diamonds */}
          <div className="absolute top-1/5 left-1/8 w-8 h-8 border border-[#00E0FF]/25 rotate-45 animate-pulse delay-14500"></div>
          <div className="absolute top-2/5 right-1/8 w-6 h-6 border border-[#00E0FF]/30 rotate-45 animate-pulse delay-15000"></div>
          <div className="absolute bottom-1/5 right-1/8 w-7 h-7 border border-[#00E0FF]/35 rotate-45 animate-pulse delay-15500"></div>
          <div className="absolute bottom-2/5 left-1/8 w-5 h-5 border border-[#00E0FF]/40 rotate-45 animate-pulse delay-16000"></div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 left-1/8 w-14 h-14 bg-gradient-to-br from-[#00E0FF]/12 to-transparent rounded-full animate-pulse delay-16500"></div>
          <div className="absolute top-3/4 right-1/8 w-12 h-12 bg-gradient-to-tl from-[#00E0FF]/15 to-transparent rounded-full animate-pulse delay-17000"></div>
          <div className="absolute bottom-1/4 left-1/8 w-16 h-16 bg-gradient-to-tr from-[#00E0FF]/10 to-transparent rounded-full animate-pulse delay-17500"></div>
          <div className="absolute bottom-3/4 right-1/8 w-10 h-10 bg-gradient-to-bl from-[#00E0FF]/18 to-transparent rounded-full animate-pulse delay-18000"></div>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Examples Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00E0FF]/20 to-[#00B8CC]/20 border border-[#00E0FF]/40 rounded-full shadow-xl backdrop-blur-sm mb-6">
              <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse"></div>
              <span className="text-[#00E0FF] text-sm font-bold uppercase tracking-wider">Portfolio</span>
              <div className="w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
                Long Form Videos Built
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#0099B3] bg-clip-text text-transparent">
                for Storytelling and Retention
              </span>
            </h2>

            {/* <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Explore our diverse portfolio of video content across different styles and formats
            </p> */}

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                className={`${category === 'Compilation' ? 'bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white shadow-2xl shadow-[#00E0FF]/40 ring-2 ring-[#00E0FF]/50' : 'bg-gradient-to-r from-white/10 to-white/5 text-white border border-[#00E0FF]/40 backdrop-blur-md hover:bg-white/20 hover:border-[#00E0FF]/60'} px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden group`}
                onClick={() => setCategory('Compilation')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Story Driven YouTube Videos
                </span>
              </button>
              <button
                className={`${category === 'Documentary' ? 'bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white shadow-2xl shadow-[#00E0FF]/40 ring-2 ring-[#00E0FF]/50' : 'bg-gradient-to-r from-white/10 to-white/5 text-white border border-[#00E0FF]/40 backdrop-blur-md hover:bg-white/20 hover:border-[#00E0FF]/60'} px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden group`}
                onClick={() => setCategory('Documentary')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Documentary and Educational Videos
                </span>
              </button>
              <button
                className={`${category === 'Animation' ? 'bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white shadow-2xl shadow-[#00E0FF]/40 ring-2 ring-[#00E0FF]/50' : 'bg-gradient-to-r from-white/10 to-white/5 text-white border border-[#00E0FF]/40 backdrop-blur-md hover:bg-white/20 hover:border-[#00E0FF]/60'} px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden group`}
                onClick={() => setCategory('Animation')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Animated Explainer Videos
                </span>
              </button>
              <button
                className={`${category === 'TalkingHead' ? 'bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white shadow-2xl shadow-[#00E0FF]/40 ring-2 ring-[#00E0FF]/50' : 'bg-gradient-to-r from-white/10 to-white/5 text-white border border-[#00E0FF]/40 backdrop-blur-md hover:bg-white/20 hover:border-[#00E0FF]/60'} px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer relative overflow-hidden group`}
                onClick={() => setCategory('TalkingHead')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Podcast and Talking Head Videos
                </span>
              </button>
            </div>

            {category === 'Compilation' && (
              <p className="text-gray-300 text-sm md:text-base text-center mt-2">
                Voiceover driven videos built with mixed footage and subtle motion graphics to keep viewers engaged.
              </p>
            )}

            {category === 'Documentary' && (
              <p className="text-gray-300 text-sm md:text-base text-center mt-2">
                Research driven videos combining mixed footage, motion graphics, and narrative storytelling.
              </p>
            )}

            {category === 'Animation' && (
              <p className="text-gray-300 text-sm md:text-base text-center mt-2 max-w-3xl mx-auto">
                Motion graphics and animation used to simplify complex ideas and concepts.
              </p>
            )}

            {category === 'TalkingHead' && (
              <p className="text-gray-300 text-sm md:text-base text-center mt-2">
                For thought leaders, coaches, and interview content
              </p>
            )}

            {/* Video Examples Grid */}
            {category === 'Compilation' && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
                {compilationVideos.map((src, idx) => {
                  const videoId = getYouTubeId(src);
                  // Use local image for the first video, otherwise use YouTube maxres default
                  const thumbnailUrl = idx === 0 ? '/img/thumbnailforcomentary.PNG' : (videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '');

                  return (
                    <div
                      key={`comp-${idx}`}
                      className="relative group block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            )}

            {category === 'Documentary' && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
                {documentaryVideos.map((src, idx) => {
                  const videoId = getYouTubeId(src);
                  // Default to maxresdefault, but you can override for specific indices later if some return 404
                  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';

                  return (
                    <div
                      key={`doc-${idx}`}
                      className="relative group block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            )}

            {category === 'Animation' && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
                {animationVideos.map((src, idx) => {
                  const videoId = getYouTubeId(src);
                  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';

                  return (
                    <div
                      key={`anim-${idx}`}
                      className="relative group block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            )}

            {category === 'TalkingHead' && (
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1400px] mx-auto">
                {talkingHeadVideos.map((src, idx) => {
                  const videoId = getYouTubeId(src);
                  const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg` : '';

                  return (
                    <div
                      key={`talking-${idx}`}
                      className="relative group block"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
            )}
          </div>
        </div>
      </section>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>



    </>
  );
};

export default Faceless;
