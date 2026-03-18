import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#001A1F]" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <div className="pt-0">
        {/* Hero Section - Full Screen About Us */}
        <section className="w-full h-screen bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] relative overflow-hidden flex items-center" data-aos="fade-up" data-aos-duration="900">
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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 place-items-center gap-8 sm:gap-10 md:gap-12 relative z-10">
            {/* Left: Heading + Copy */}
            <div className="space-y-6 sm:space-y-8 md:space-y-10 text-center md:pr-0 lg:pr-0 flex flex-col items-center">
              <div className="space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00E0FF]/25 to-[#00B8CC]/25 border border-[#00E0FF]/50 rounded-full shadow-2xl backdrop-blur-sm relative overflow-hidden mx-auto">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/10 to-[#00B8CC]/10 animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF]/5 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>

                  <div className="w-4 h-4 bg-[#00E0FF] rounded-full animate-pulse shadow-lg relative z-10"></div>
                  {/* <span className="text-[#00E0FF] text-sm font-bold uppercase tracking-wider relative z-10">About Us</span> */}
                  <div className="w-4 h-4 bg-[#00E0FF] rounded-full animate-pulse shadow-lg relative z-10" style={{ animationDelay: '0.5s' }}></div>

                  {/* Floating Elements */}
                  <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-60"></div>
                  <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.3s' }}></div>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight tracking-tight uppercase flex flex-wrap items-baseline justify-center text-center gap-2 sm:gap-4">
                  <span className="inline whitespace-nowrap bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl relative">
                    About CREON
                    <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-[#00E0FF] rounded-full animate-ping opacity-80"></div>
                  </span>
                  <span className="inline-flex bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#0099B3] bg-clip-text text-transparent drop-shadow-2xl relative">
                    MOTION
                    <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-2 h-2 sm:w-3 sm:h-3 bg-[#00B8CC] rounded-full animate-ping opacity-80" style={{ animationDelay: '0.5s' }}></div>
                  </span>
                </h1>
                {/* animated underline glow */}
                <div className="mt-2 sm:mt-3 flex justify-center">
                  <div className="relative h-0.5 sm:h-1 w-32 sm:w-40 md:w-56 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-80" />
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-40" />
                  </div>
                </div>
              </div>

              <div>
                <p className="mx-auto max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-[900px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-semibold text-gray-100 text-center px-4 sm:px-0">
                  We work with creators, companies, and agencies that need dependable video production. Our role is to turn ideas, scripts, and raw footage into videos that are clear, engaging, and ready to publish. At Creon Motion, we focus on structure, pacing, and visual clarity so every video communicates its message and keeps viewers watching.
                </p>
              </div>

            </div>

            {/* Right: Enhanced Image */}
            <div className="relative group">
              {/* Multiple Glow Layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/40 to-transparent rounded-2xl blur-3xl group-hover:blur-4xl transition-all duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/25 via-transparent to-[#00B8CC]/25 rounded-2xl blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#00B8CC]/20 via-transparent to-[#00E0FF]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>

              {/* Enhanced Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#00E0FF]/50 group-hover:border-[#00E0FF]/80 transition-all duration-700"></div>
              <div className="absolute inset-0 rounded-2xl border border-[#00B8CC]/30 group-hover:border-[#00B8CC]/60 transition-all duration-500" style={{ margin: '2px' }}></div>

              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,224,255,0.5)] group-hover:shadow-[0_40px_80px_rgba(0,224,255,0.8)] transition-all duration-1000">

                {/* Enhanced Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/10 via-transparent to-[#00B8CC]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Enhanced Hover Text */}
                <div className="absolute bottom-4 left-4 right-4 text-center opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-6 group-hover:translate-y-0">
                  <div className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-[#00E0FF]/40 shadow-2xl">
                    <p className="text-white text-sm font-bold">Creative Excellence</p>
                    <div className="flex justify-center items-center gap-2 mt-2">
                      <div className="w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                      <div className="w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-[#00E0FF] rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-[#00B8CC] rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-[#00E0FF] rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-[#00B8CC] rounded-br-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-10 h-10 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] rounded-full animate-bounce opacity-90 shadow-lg">
                <div className="absolute inset-1 bg-[#00E0FF] rounded-full animate-ping opacity-60"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-gradient-to-r from-[#00B8CC] to-[#00E0FF] rounded-full animate-bounce opacity-90 shadow-lg" style={{ animationDelay: '0.5s' }}>
                <div className="absolute inset-1 bg-[#00B8CC] rounded-full animate-ping opacity-60"></div>
              </div>
              <div className="absolute top-1/2 -left-4 w-6 h-6 bg-[#00E0FF] rounded-full animate-bounce opacity-80 shadow-lg" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/3 -right-4 w-5 h-5 bg-[#00B8CC] rounded-full animate-bounce opacity-80 shadow-lg" style={{ animationDelay: '1.5s' }}></div>

              {/* Connection Lines */}
              <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gradient-to-b from-[#00E0FF] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/2 w-0.5 h-16 bg-gradient-to-t from-[#00B8CC] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '0.3s' }}></div>
            </div>
          </div>


        </section>

        {/* Enhanced Timeline Section */}
        <section className="w-full py-24 bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] relative overflow-hidden" data-aos="fade-up" data-aos-delay="300" data-aos-duration="900">
          {/* Enhanced Background Pattern with More Glow */}
          <div className="absolute inset-0">
            {/* Primary Glow Orbs */}
            <div className="absolute top-10 left-1/4 w-32 h-32 bg-[#00E0FF] rounded-full blur-2xl animate-pulse opacity-30 drop-shadow-2xl drop-shadow-[#00E0FF]/25"></div>
            <div className="absolute bottom-10 right-1/4 w-32 h-32 bg-[#00E0FF] rounded-full blur-2xl animate-pulse opacity-30 drop-shadow-2xl drop-shadow-[#00E0FF]/25" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-[#00B8CC] rounded-full blur-xl animate-pulse opacity-25 drop-shadow-xl drop-shadow-[#00B8CC]/20" style={{ animationDelay: '2s' }}></div>

            {/* Additional Glow Orbs */}
            <div className="absolute top-1/6 left-1/6 w-20 h-20 bg-[#00E0FF] rounded-full blur-2xl animate-pulse opacity-25 drop-shadow-xl drop-shadow-[#00E0FF]/20" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/6 right-1/6 w-20 h-20 bg-[#00B8CC] rounded-full blur-2xl animate-pulse opacity-25 drop-shadow-xl drop-shadow-[#00B8CC]/20" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-2/3 left-2/3 w-16 h-16 bg-[#00E0FF] rounded-full blur-xl animate-pulse opacity-30 drop-shadow-lg drop-shadow-[#00E0FF]/15" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute bottom-2/3 left-2/3 w-16 h-16 bg-[#00B8CC] rounded-full blur-xl animate-pulse opacity-30 drop-shadow-lg drop-shadow-[#00B8CC]/15" style={{ animationDelay: '2.2s' }}></div>

            {/* New Micro Glow Particles */}
            <div className="absolute top-1/8 left-1/8 w-8 h-8 bg-[#00E0FF] rounded-full blur-lg animate-pulse opacity-40 drop-shadow-lg drop-shadow-[#00E0FF]/20" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute top-1/8 right-1/8 w-8 h-8 bg-[#00B8CC] rounded-full blur-lg animate-pulse opacity-40 drop-shadow-lg drop-shadow-[#00B8CC]/20" style={{ animationDelay: '0.7s' }}></div>
            <div className="absolute bottom-1/8 left-1/8 w-8 h-8 bg-[#00E0FF] rounded-full blur-lg animate-pulse opacity-40 drop-shadow-lg drop-shadow-[#00E0FF]/20" style={{ animationDelay: '1.3s' }}></div>
            <div className="absolute bottom-1/8 right-1/8 w-8 h-8 bg-[#00B8CC] rounded-full blur-lg animate-pulse opacity-40 drop-shadow-lg drop-shadow-[#00B8CC]/20" style={{ animationDelay: '1.8s' }}></div>

            {/* Nano Glow Specks */}
            <div className="absolute top-1/4 left-1/8 w-4 h-4 bg-[#00E0FF] rounded-full blur-md animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/15" style={{ animationDelay: '0.4s' }}></div>
            <div className="absolute top-1/4 right-1/8 w-4 h-4 bg-[#00B8CC] rounded-full blur-md animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/15" style={{ animationDelay: '0.9s' }}></div>
            <div className="absolute bottom-1/4 left-1/8 w-4 h-4 bg-[#00E0FF] rounded-full blur-md animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/15" style={{ animationDelay: '1.4s' }}></div>
            <div className="absolute bottom-1/4 right-1/8 w-4 h-4 bg-[#00B8CC] rounded-full blur-md animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/15" style={{ animationDelay: '1.9s' }}></div>
          </div>

          {/* Enhanced Dot Grid Pattern with Glow */}
          <div className="absolute inset-0 opacity-8">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.8px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
            {/* Glow overlay for dots */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/5 via-transparent to-[#00B8CC]/5"></div>
          </div>

          {/* Secondary Dot Pattern with Enhanced Glow */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 0.5px, transparent 0)`,
              backgroundSize: '70px 70px'
            }}></div>
            {/* Glow overlay for secondary dots */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#00B8CC]/5 via-transparent to-[#00E0FF]/5"></div>
          </div>

          {/* Tertiary Floating Dot Pattern */}
          <div className="absolute inset-0 opacity-4">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.3px, transparent 0)`,
              backgroundSize: '90px 90px'
            }}></div>
          </div>

          {/* Enhanced Geometric Patterns with Glow */}
          <div className="absolute inset-0 opacity-12">
            {/* Rotating Square with Glow */}
            <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-[#00E0FF] rotate-45 animate-spin drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDuration: '30s' }}>
              <div className="absolute inset-0 border border-[#00E0FF]/25 rounded-sm animate-pulse"></div>
            </div>

            {/* Pulsing Circle with Glow */}
            <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-[#00E0FF] rounded-full animate-ping drop-shadow-lg drop-shadow-[#00E0FF]/40">
              <div className="absolute inset-0 border border-[#00E0FF]/20 rounded-full animate-pulse"></div>
            </div>

            {/* Center Pulsing Dot with Glow */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '1.5s' }}></div>

            {/* Additional Geometric Elements */}
            <div className="absolute top-1/6 right-1/6 w-10 h-10 border border-[#00B8CC] rotate-30 animate-spin drop-shadow-lg drop-shadow-[#00B8CC]/35" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
            <div className="absolute bottom-1/6 left-1/6 w-8 h-8 border border-[#00E0FF] rotate-60 animate-spin drop-shadow-lg drop-shadow-[#00E0FF]/35" style={{ animationDuration: '35s' }}></div>
            <div className="absolute top-3/4 left-3/4 w-6 h-6 border border-[#00B8CC] rotate-15 animate-spin drop-shadow-lg drop-shadow-[#00B8CC]/35" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>

            {/* New Advanced Geometric Elements */}
            <div className="absolute top-1/8 left-3/4 w-12 h-12 border-2 border-[#00E0FF] rotate-22.5 animate-spin drop-shadow-lg drop-shadow-[#00E0FF]/45" style={{ animationDuration: '18s' }}>
              <div className="absolute inset-0 border border-[#00E0FF]/30 rounded-sm animate-pulse"></div>
            </div>
            <div className="absolute bottom-1/8 right-3/4 w-10 h-10 border border-[#00B8CC] rotate-67.5 animate-spin drop-shadow-lg drop-shadow-[#00B8CC]/45" style={{ animationDuration: '32s', animationDirection: 'reverse' }}></div>
            <div className="absolute top-5/8 left-1/8 w-7 h-7 border-2 border-[#00E0FF] rotate-90 animate-spin drop-shadow-lg drop-shadow-[#00E0FF]/45" style={{ animationDuration: '24s' }}></div>
            <div className="absolute bottom-5/8 right-1/8 w-9 h-9 border border-[#00B8CC] rotate-45 animate-spin drop-shadow-lg drop-shadow-[#00B8CC]/45" style={{ animationDuration: '28s', animationDirection: 'reverse' }}></div>

            {/* Diamond and Star Shapes */}
            <div className="absolute top-1/3 left-2/3 w-8 h-8 border border-[#00E0FF] rotate-45 animate-pulse drop-shadow-lg drop-shadow-[#00E0FF]/35"></div>
            <div className="absolute bottom-1/3 right-2/3 w-8 h-8 border border-[#00B8CC] rotate-45 animate-pulse drop-shadow-lg drop-shadow-[#00B8CC]/35" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-2/3 left-1/3 w-6 h-6 border border-[#00E0FF] rotate-30 animate-pulse drop-shadow-lg drop-shadow-[#00E0FF]/35" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-2/3 right-1/3 w-6 h-6 border border-[#00B8CC] rotate-30 animate-pulse drop-shadow-lg drop-shadow-[#00B8CC]/35" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Enhanced Animated Lines with Glow */}
          <div className="absolute top-16 left-16 w-0.5 h-10 bg-gradient-to-b from-[#00E0FF] via-[#00B8CC] to-transparent animate-pulse opacity-80 drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.3s' }}>
            <div className="absolute top-0 left-0 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-80"></div>
          </div>
          <div className="absolute top-24 right-24 w-0.5 h-10 bg-gradient-to-b from-[#00E0FF] via-[#00B8CC] to-transparent animate-pulse opacity-80 drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '1.3s' }}>
            <div className="absolute top-0 left-0 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-80"></div>
          </div>
          <div className="absolute bottom-16 left-24 w-0.5 h-10 bg-gradient-to-b from-[#00E0FF] via-[#00B8CC] to-transparent animate-pulse opacity-80 drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '2.3s' }}>
            <div className="absolute top-0 left-0 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-80"></div>
          </div>
          <div className="absolute bottom-24 right-16 w-0.5 h-10 bg-gradient-to-b from-[#00E0FF] via-[#00B8CC] to-transparent animate-pulse opacity-80 drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '3.3s' }}>
            <div className="absolute top-0 left-0 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-80"></div>
          </div>

          {/* Additional Diagonal Lines with Glow */}
          <div className="absolute top-1/3 left-1/3 w-0.5 h-6 bg-gradient-to-br from-[#00B8CC] to-transparent animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.8s', transform: 'rotate(45deg)' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-0.5 h-6 bg-gradient-to-tl from-[#00E0FF] to-transparent animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1.8s', transform: 'rotate(-45deg)' }}></div>

          {/* New Horizontal and Vertical Lines with Glow */}
          <div className="absolute top-1/6 left-1/3 w-12 h-0.5 bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-transparent animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.6s' }}>
            <div className="absolute top-0 left-0 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-70"></div>
          </div>
          <div className="absolute bottom-1/6 right-1/3 w-12 h-0.5 bg-gradient-to-l from-[#00B8CC] via-[#00E0FF] to-transparent animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.2s' }}>
            <div className="absolute top-0 right-0 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-70"></div>
          </div>

          {/* New Curved Connection Lines */}
          <div className="absolute top-1/4 left-1/2 w-0.5 h-4 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/35" style={{ animationDelay: '0.4s' }}></div>
          <div className="absolute top-1/4 left-1/2 w-4 h-0.5 bg-gradient-to-r from-[#00E0FF] to-transparent animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/35" style={{ animationDelay: '0.6s' }}></div>

          <div className="absolute bottom-1/4 right-1/2 w-0.5 h-4 bg-gradient-to-t from-[#00B8CC] to-transparent animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/35" style={{ animationDelay: '0.8s' }}></div>
          <div className="absolute bottom-1/4 right-1/2 w-4 h-0.5 bg-gradient-to-l from-[#00B8CC] to-transparent animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/35" style={{ animationDelay: '1s' }}></div>

          {/* New Zigzag Lines */}
          <div className="absolute top-1/2 left-1/4 w-0.5 h-3 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/35" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-3 h-0.5 bg-gradient-to-r from-[#00E0FF] to-transparent animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/35" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-0.5 h-3 bg-gradient-to-t from-[#00E0FF] to-transparent animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/35" style={{ animationDelay: '1.5s' }}></div>

          <div className="absolute top-1/2 right-1/4 w-0.5 h-3 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/35" style={{ animationDelay: '1.7s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-0.5 bg-gradient-to-l from-[#00B8CC] to-transparent animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/35" style={{ animationDelay: '1.9s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-0.5 h-3 bg-gradient-to-t from-[#00B8CC] to-transparent animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/35" style={{ animationDelay: '2.1s' }}></div>

          {/* Enhanced Floating Elements with More Glow */}
          <div className="absolute top-16 left-16 animate-bounce opacity-60" style={{ animationDelay: '0.3s', animationDuration: '3s' }}>
            <div className="w-2 h-2 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50 drop-shadow-lg drop-shadow-[#00E0FF]/60 animate-pulse"></div>
            <div className="absolute inset-0 w-4 h-4 bg-[#00E0FF] rounded-full opacity-25 animate-ping"></div>
          </div>
          <div className="absolute top-24 right-24 animate-bounce opacity-60" style={{ animationDelay: '1.3s', animationDuration: '4s' }}>
            <div className="w-2 h-2 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50 drop-shadow-lg drop-shadow-[#00E0FF]/60 animate-pulse"></div>
            <div className="absolute inset-0 w-4 h-4 bg-[#00E0FF] rounded-full opacity-25 animate-ping"></div>
          </div>
          <div className="absolute bottom-16 left-24 animate-bounce opacity-60" style={{ animationDelay: '2.3s', animationDuration: '3.5s' }}>
            <div className="w-2 h-2 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50 drop-shadow-lg drop-shadow-[#00E0FF]/60 animate-pulse"></div>
            <div className="absolute inset-0 w-4 h-4 bg-[#00E0FF] rounded-full opacity-25 animate-ping"></div>
          </div>
          <div className="absolute bottom-24 right-16 animate-bounce opacity-60" style={{ animationDelay: '3.3s', animationDuration: '5s' }}>
            <div className="w-2 h-2 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50 drop-shadow-lg drop-shadow-[#00E0FF]/60 animate-pulse"></div>
            <div className="absolute inset-0 w-4 h-4 bg-[#00E0FF] rounded-full opacity-25 animate-ping"></div>
          </div>

          {/* Additional Micro Floating Elements */}
          <div className="absolute top-1/3 left-1/3 animate-bounce opacity-50" style={{ animationDelay: '0.6s', animationDuration: '2.8s' }}>
            <div className="w-1.5 h-1.5 bg-[#00B8CC] rounded-full shadow-lg shadow-[#00B8CC]/40 drop-shadow-lg drop-shadow-[#00B8CC]/50 animate-pulse"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/3 animate-bounce opacity-50" style={{ animationDelay: '1.1s', animationDuration: '3.2s' }}>
            <div className="w-1.5 h-1.5 bg-[#00B8CC] rounded-full shadow-lg shadow-[#00B8CC]/40 drop-shadow-lg drop-shadow-[#00B8CC]/50 animate-pulse"></div>
          </div>

          {/* New Floating Sparkles and Particles */}
          <div className="absolute top-1/8 left-1/2 animate-spin opacity-60" style={{ animationDelay: '0s', animationDuration: '10s' }}>
            <div className="w-1 h-1 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50 drop-shadow-lg drop-shadow-[#00E0FF]/40"></div>
          </div>
          <div className="absolute top-1/8 right-1/2 animate-spin opacity-60" style={{ animationDelay: '2s', animationDuration: '12s', animationDirection: 'reverse' }}>
            <div className="w-1 h-1 bg-[#00B8CC] rounded-full shadow-lg shadow-[#00B8CC]/50 drop-shadow-lg drop-shadow-[#00B8CC]/40"></div>
          </div>
          <div className="absolute bottom-1/8 left-1/2 animate-spin opacity-60" style={{ animationDelay: '4s', animationDuration: '8s' }}>
            <div className="w-1 h-1 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50 drop-shadow-lg drop-shadow-[#00E0FF]/40"></div>
          </div>
          <div className="absolute bottom-1/8 right-1/2 animate-spin opacity-60" style={{ animationDelay: '6s', animationDuration: '14s', animationDirection: 'reverse' }}>
            <div className="w-1 h-1 bg-[#00B8CC] rounded-full shadow-lg shadow-[#00B8CC]/50 drop-shadow-lg drop-shadow-[#00B8CC]/40"></div>
          </div>

          {/* New Floating Energy Orbs */}
          <div className="absolute top-1/6 left-1/6 animate-pulse opacity-40" style={{ animationDelay: '0.3s' }}>
            <div className="w-0.5 h-0.5 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/40"></div>
          </div>
          <div className="absolute top-1/6 right-1/6 animate-pulse opacity-40" style={{ animationDelay: '0.7s' }}>
            <div className="w-0.5 h-0.5 bg-[#00B8CC] rounded-full shadow-lg shadow-[#00B8CC]/40"></div>
          </div>
          <div className="absolute bottom-1/6 left-1/6 animate-pulse opacity-40" style={{ animationDelay: '1.1s' }}>
            <div className="w-0.5 h-0.5 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/40"></div>
          </div>
          <div className="absolute bottom-1/6 right-1/6 animate-pulse opacity-40" style={{ animationDelay: '1.5s' }}>
            <div className="w-0.5 h-0.5 bg-[#00B8CC] rounded-full shadow-lg shadow-[#00B8CC]/40"></div>
          </div>

          {/* Enhanced Energy Field Patterns */}
          <div className="absolute inset-0 opacity-20">
            {/* Circular Energy Rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-[#00E0FF]/20 rounded-full animate-pulse drop-shadow-lg drop-shadow-[#00E0FF]/25"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-[#00B8CC]/15 rounded-full animate-pulse drop-shadow-lg drop-shadow-[#00B8CC]/25" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-[#00E0FF]/12 rounded-full animate-pulse drop-shadow-lg drop-shadow-[#00E0FF]/25" style={{ animationDelay: '1s' }}></div>

            {/* Additional Energy Rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-[#00B8CC]/8 rounded-full animate-pulse drop-shadow-md drop-shadow-[#00B8CC]/20" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-[#00E0FF]/6 rounded-full animate-pulse drop-shadow-md drop-shadow-[#00E0FF]/20" style={{ animationDelay: '2s' }}></div>

            {/* Elliptical Energy Fields */}
            <div className="absolute top-1/4 left-1/4 w-72 h-36 border border-[#00E0FF]/18 rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-72 h-36 border border-[#00B8CC]/18 rounded-full animate-pulse opacity-70" style={{ animationDelay: '0.8s' }}></div>

            {/* New Wave Patterns */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#00E0FF]/8 via-transparent to-transparent animate-pulse"></div>
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#00B8CC]/8 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-0 left-0 bottom-0 w-24 bg-gradient-to-r from-[#00E0FF]/8 via-transparent to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-0 right-0 bottom-0 w-24 bg-gradient-to-l from-[#00B8CC]/8 via-transparent to-transparent animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>

          {/* Enhanced Corner Accent Glows */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#00E0FF]/20 to-transparent rounded-br-3xl"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#00B8CC]/20 to-transparent rounded-bl-3xl"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#00E0FF]/20 to-transparent rounded-tr-3xl"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00B8CC]/20 to-transparent rounded-tl-3xl"></div>

          {/* Additional Corner Accents */}
          <div className="absolute top-1/4 left-0 w-16 h-16 bg-gradient-to-r from-[#00E0FF]/10 to-transparent rounded-r-2xl"></div>
          <div className="absolute top-1/4 right-0 w-16 h-16 bg-gradient-to-l from-[#00B8CC]/10 to-transparent rounded-l-2xl"></div>
          <div className="absolute bottom-1/4 left-0 w-16 h-16 bg-gradient-to-r from-[#00E0FF]/10 to-transparent rounded-r-2xl"></div>
          <div className="absolute bottom-1/4 right-0 w-16 h-16 bg-gradient-to-l from-[#00B8CC]/10 to-transparent rounded-l-2xl"></div>

          {/* Center Accent Glows */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-[#00E0FF]/15 to-transparent rounded-full"></div>
          <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-gradient-to-bl from-[#00B8CC]/15 to-transparent rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-gradient-to-tr from-[#00E0FF]/15 to-transparent rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-gradient-to-tl from-[#00B8CC]/15 to-transparent rounded-full"></div>

          {/* Floating Design Elements */}
          <div className="absolute top-1/3 left-0 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40"></div>
          <div className="absolute top-1/3 right-0 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-0 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/3 right-0 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.5s' }}></div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Enhanced Dot Background Patterns for Entire Section */}
            <div className="absolute inset-0 opacity-6">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.6px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
              {/* Glow overlay for main dots */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/8 via-transparent to-[#00B8CC]/8"></div>
            </div>

            {/* Secondary Dot Pattern for Entire Section */}
            <div className="absolute inset-0 opacity-4">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 0.4px, transparent 0)`,
                backgroundSize: '70px 70px'
              }}></div>
              {/* Glow overlay for secondary dots */}
              <div className="absolute inset-0 bg-gradient-to-tl from-[#00B8CC]/6 via-transparent to-[#00E0FF]/6"></div>
            </div>

            {/* Tertiary Dot Pattern for Entire Section */}
            <div className="absolute inset-0 opacity-3">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #0099B3 0.3px, transparent 0)`,
                backgroundSize: '90px 90px'
              }}></div>
            </div>

            {/* Additional Micro Dot Pattern */}
            <div className="absolute inset-0 opacity-2">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.2px, transparent 0)`,
                backgroundSize: '120px 120px'
              }}></div>
            </div>

            {/* Enhanced Corner Dot Patterns */}
            <div className="absolute top-0 left-0 w-32 h-32 opacity-8">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.8px, transparent 0)`,
                backgroundSize: '25px 25px'
              }}></div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 opacity-8">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 0.8px, transparent 0)`,
                backgroundSize: '25px 25px'
              }}></div>
            </div>
            <div className="absolute bottom-0 left-0 w-32 h-32 opacity-8">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 0.8px, transparent 0)`,
                backgroundSize: '25px 25px'
              }}></div>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 opacity-8">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.8px, transparent 0)`,
                backgroundSize: '25px 25px'
              }}></div>
            </div>

            {/* Center Area Enhanced Dot Patterns */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.5px, transparent 0)`,
                backgroundSize: '35px 35px'
              }}></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative">
              {/* Center divider line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#00E0FF]/60 to-transparent transform -translate-x-1/2">
                {/* Glow effect for the divider */}
                <div className="absolute inset-0 w-3 -left-1 bg-gradient-to-b from-transparent via-[#00E0FF]/20 to-transparent blur-sm"></div>
                {/* Animated pulse effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E0FF]/40 to-transparent animate-pulse"></div>
              </div>
              {/* Left Column: Tag, Heading, Description, Stats */}
              <div className="space-y-8 relative lg:pr-8">
                {/* Enhanced Dot Grid Pattern with Glow */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.8px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                  {/* Glow overlay for dots */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/8 via-transparent to-[#00B8CC]/8"></div>
                </div>

                {/* Secondary Dot Pattern with Enhanced Glow */}
                <div className="absolute inset-0 opacity-8">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 0.5px, transparent 0)`,
                    backgroundSize: '60px 60px'
                  }}></div>
                  {/* Glow overlay for secondary dots */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00B8CC]/8 via-transparent to-[#00E0FF]/8"></div>
                </div>

                {/* Tertiary Floating Dot Pattern */}
                <div className="absolute inset-0 opacity-6">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.3px, transparent 0)`,
                    backgroundSize: '80px 80px'
                  }}></div>
                </div>

                {/* Additional Micro Dot Pattern for Left Column */}
                <div className="absolute inset-0 opacity-4">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #0099B3 0.2px, transparent 0)`,
                    backgroundSize: '100px 100px'
                  }}></div>
                </div>



                {/* Enhanced Main Heading with Glow */}
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#00E0FF] relative group">
                  <span className="relative z-10">Our Approach</span>
                  {/* Enhanced Glow effect behind heading */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/30 to-[#00B8CC]/30 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Additional Glow Layers */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/15 to-[#00B8CC]/15 blur-2xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  {/* Floating glow orbs around heading */}
                  <div className="absolute -top-3 -left-3 w-5 h-5 bg-[#00E0FF] rounded-full animate-ping opacity-70 blur-sm drop-shadow-lg drop-shadow-[#00E0FF]/50"></div>
                  <div className="absolute -top-3 -right-3 w-5 h-5 bg-[#00B8CC] rounded-full animate-ping opacity-70 blur-sm drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse opacity-60 blur-sm drop-shadow-md drop-shadow-[#00E0FF]/40"></div>
                  <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-60 blur-sm drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.8s' }}></div>

                  {/* Additional Floating Elements */}
                  <div className="absolute top-1/2 -left-4 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute top-1/2 -right-4 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '0.6s' }}></div>
                </h2>

                {/* Enhanced Description with Floating Elements */}
                <div className="relative">
                  <p className="text-gray-300 text-lg leading-relaxed max-w-lg relative z-10 text-justify">
                    At Creon Motion, we focus on turning ideas and raw footage into videos that are clear, engaging, and well structured.
                    Our team pays attention to pacing, storytelling, and visual clarity so every project communicates its message and keeps viewers watching.
                  </p>
                  {/* Enhanced Floating elements around description */}
                  <div className="absolute -left-4 top-1/3 w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse opacity-70 transform -translate-y-1/2 drop-shadow-lg drop-shadow-[#00E0FF]/50"></div>
                  <div className="absolute -right-4 bottom-1/3 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-70 transform -translate-y-1/2 drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.7s' }}></div>
                  <div className="absolute -left-3 top-1/4 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute -right-3 bottom-1/4 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.5s' }}></div>
                  <div className="absolute -left-2 top-1/6 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-pulse opacity-50 drop-shadow-sm drop-shadow-[#00E0FF]/30" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute -right-2 bottom-1/6 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-pulse opacity-50 drop-shadow-sm drop-shadow-[#00B8CC]/30" style={{ animationDelay: '1.8s' }}></div>

                  {/* Additional Micro Particles */}
                  <div className="absolute -left-1 top-1/2 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-40 drop-shadow-sm drop-shadow-[#00E0FF]/25"></div>
                  <div className="absolute -right-1 bottom-1/2 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-40 drop-shadow-sm drop-shadow-[#00B8CC]/25" style={{ animationDelay: '0.4s' }}></div>
                </div>

                {/* Enhanced Stats with Glow */}
                <div className="hidden">
                  <div className="flex gap-6 pt-6 relative">
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse drop-shadow-lg drop-shadow-[#00E0FF]/50 group-hover:scale-110 transition-transform duration-300 relative">
                        <div className="absolute inset-0 w-full h-full bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
                      </div>
                      <span className="text-[#00E0FF] font-semibold text-sm group-hover:text-white transition-colors duration-300 drop-shadow-lg drop-shadow-[#00E0FF]/30">Professional Quality</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse drop-shadow-lg drop-shadow-[#00E0FF]/50 group-hover:scale-110 transition-transform duration-300 relative" style={{ animationDelay: '0.5s' }}>
                        <div className="absolute inset-0 w-full h-full bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
                      </div>
                      <span className="text-[#00E0FF] font-semibold text-sm group-hover:text-white transition-colors duration-300 drop-shadow-lg drop-shadow-[#00E0FF]/30">Fast Delivery</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                      <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse drop-shadow-lg drop-shadow-[#00E0FF]/50 group-hover:scale-110 transition-transform duration-300 relative" style={{ animationDelay: '1s' }}>
                        <div className="absolute inset-0 w-full h-full bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
                      </div>
                      <span className="text-[#00E0FF] font-semibold text-sm group-hover:text-white transition-colors duration-300 drop-shadow-lg drop-shadow-[#00E0FF]/30">Creative Excellence</span>
                    </div>

                    {/* Floating Elements Around Stats */}
                    <div className="absolute -top-2 left-1/4 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '0.2s' }}></div>
                    <div className="absolute -top-2 right-1/4 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '0.7s' }}></div>
                    <div className="absolute -bottom-2 left-1/3 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-pulse opacity-40 drop-shadow-sm drop-shadow-[#00E0FF]/25" style={{ animationDelay: '1.2s' }}></div>
                  </div>
                </div>

                {/* Enhanced Decorative Line with Glow */}
                <div className="w-32 h-0.5 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] rounded-full shadow-lg shadow-[#00E0FF]/50 relative">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-60"></div>
                  {/* Additional Glow Effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E0FF]/20 to-[#00B8CC]/20 rounded-full blur-sm"></div>
                </div>

                {/* Enhanced Background Design Elements */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#00E0FF]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#00B8CC]/10 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-0 w-24 h-24 bg-gradient-to-r from-[#00E0FF]/8 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/2 right-0 w-24 h-24 bg-gradient-to-l from-[#00B8CC]/8 to-transparent rounded-full blur-2xl"></div>

                {/* Enhanced Floating Design Particles */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1.2s' }}></div>
                <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/25" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/25" style={{ animationDelay: '1.5s' }}></div>

                {/* Additional Micro Glow Particles */}
                <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-40 drop-shadow-sm drop-shadow-[#00E0FF]/20"></div>
                <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-40 drop-shadow-sm drop-shadow-[#00B8CC]/20" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute top-2/3 left-2/3 w-1 h-1 bg-[#00E0FF] rounded-full animate-pulse opacity-30 drop-shadow-sm drop-shadow-[#00E0FF]/15" style={{ animationDelay: '1.1s' }}></div>
                <div className="absolute bottom-2/3 right-2/3 w-1 h-1 bg-[#00B8CC] rounded-full animate-pulse opacity-30 drop-shadow-sm drop-shadow-[#00B8CC]/15" style={{ animationDelay: '0.9s' }}></div>
              </div>

              {/* Right Column: Mission & Vision with connecting line */}
              <div className="relative lg:pl-8">
                {/* Enhanced Dot Background Patterns for Right Column */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.8px, transparent 0)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                  {/* Glow overlay for dots */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00B8CC]/8 via-transparent to-[#00E0FF]/8"></div>
                </div>

                {/* Secondary Dot Pattern for Right Column */}
                <div className="absolute inset-0 opacity-8">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 0.5px, transparent 0)`,
                    backgroundSize: '60px 60px'
                  }}></div>
                  {/* Glow overlay for secondary dots */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#00E0FF]/8 via-transparent to-[#00B8CC]/8"></div>
                </div>

                {/* Tertiary Dot Pattern for Right Column */}
                <div className="absolute inset-0 opacity-6">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.3px, transparent 0)`,
                    backgroundSize: '80px 80px'
                  }}></div>
                </div>

                {/* Additional Micro Dot Pattern for Right Column */}
                <div className="absolute inset-0 opacity-4">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #0099B3 0.2px, transparent 0)`,
                    backgroundSize: '100px 100px'
                  }}></div>
                </div>

                {/* Corner Dot Patterns for Right Column */}
                <div className="absolute top-0 left-0 w-24 h-24 opacity-8">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 0.6px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 opacity-8">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.6px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 opacity-8">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.6px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-8">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 0.6px, transparent 0)`,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                {/* Enhanced Vertical connecting line with glow */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00E0FF] via-[#00B8CC] to-[#00E0FF] shadow-lg shadow-[#00E0FF]/30">
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#00E0FF]/20 via-[#00B8CC]/20 to-[#00E0FF]/20 animate-pulse"></div>
                  {/* Additional Glow Layers */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#00E0FF]/10 via-[#00B8CC]/10 to-[#00E0FF]/10 blur-sm"></div>
                  {/* Floating Elements Along Line */}
                  <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30"></div>
                  <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Removed right-side Mission section */}

                {/* Enhanced Vision Section */}
                <div className="relative pl-8 group">
                  {/* Enhanced bullet point with glow */}
                  <div className="absolute left-0 top-2 w-4 h-4 bg-[#00B8CC] rounded-full transform -translate-x-2 drop-shadow-lg drop-shadow-[#00B8CC]/50 animate-pulse" style={{ animationDelay: '0.5s' }}>
                    <div className="absolute inset-0 w-full h-full bg-[#00B8CC] rounded-full animate-ping opacity-30"></div>
                    {/* Additional Inner Glow */}
                    <div className="absolute inset-0 w-full h-full bg-[#00B8CC] rounded-full blur-sm opacity-20"></div>
                  </div>

                  {/* Enhanced Floating elements around vision */}
                  <div className="absolute -left-3 top-1/4 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute -right-3 bottom-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.9s' }}></div>
                  <div className="absolute -left-2 top-1/6 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '0.6s' }}></div>
                  <div className="absolute -right-2 bottom-1/6 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '1.2s' }}></div>

                  {/* Additional Micro Particles */}
                  <div className="absolute -left-1 top-1/2 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-40 drop-shadow-sm drop-shadow-[#00B8CC]/25" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute -right-1 bottom-1/2 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-40 drop-shadow-sm drop-shadow-[#00E0FF]/25" style={{ animationDelay: '0.8s' }}></div>

                  <h3 className="text-4xl lg:text-5xl font-bold text-[#00E0FF] mb-6 relative transition-colors duration-300">
                    <span className="relative z-10">How We Work</span>
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00B8CC]/15 to-[#00E0FF]/15 blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Additional Glow Layer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00B8CC]/8 to-[#00E0FF]/8 blur-lg -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </h3>
                  <p className="text-gray-300 text-xl leading-relaxed text-justify relative z-10">
                    We believe good production comes from clear communication and an organized process. From the first discussion to final delivery, our goal is to make the editing process smooth and dependable for every client we work with.
                  </p>

                  {/* Enhanced decorative line below vision */}
                  <div className="w-24 h-0.5 bg-gradient-to-r from-[#00B8CC] to-[#00E0FF] rounded-full shadow-lg shadow-[#00B8CC]/30 mt-4 relative">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-60"></div>
                    {/* Additional Glow Effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00B8CC]/20 to-[#00E0FF]/20 rounded-full blur-sm"></div>
                  </div>

                  {/* Background Glow Effects for Vision */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#00B8CC]/8 to-transparent rounded-full blur-xl"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#00E0FF]/8 to-transparent rounded-full blur-lg"></div>
                </div>



                {/* Enhanced Additional floating design elements */}
                <div className="absolute top-1/2 -right-4 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute bottom-1/4 -right-4 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute top-1/4 -right-4 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/2 -right-4 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '1.1s' }}></div>

                {/* Enhanced Background glow effects */}
                <div className="absolute top-1/4 -right-8 w-20 h-20 bg-gradient-to-l from-[#00E0FF]/15 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-1/4 -right-8 w-20 h-20 bg-gradient-to-l from-[#00B8CC]/15 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 -right-6 w-16 h-16 bg-gradient-to-l from-[#00E0FF]/10 to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-1/2 -right-6 w-16 h-16 bg-gradient-to-l from-[#00B8CC]/10 to-transparent rounded-full blur-xl"></div>

                {/* Additional Micro Glow Particles */}
                <div className="absolute top-1/6 -right-2 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-40 drop-shadow-sm drop-shadow-[#00E0FF]/20"></div>
                <div className="absolute bottom-1/6 -right-2 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-40 drop-shadow-sm drop-shadow-[#00B8CC]/20" style={{ animationDelay: '0.7s' }}></div>
                <div className="absolute top-2/3 -right-3 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-pulse opacity-30 drop-shadow-sm drop-shadow-[#00E0FF]/15" style={{ animationDelay: '1.3s' }}></div>
                <div className="absolute bottom-2/3 -right-3 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-pulse opacity-30 drop-shadow-sm drop-shadow-[#00B8CC]/15" style={{ animationDelay: '0.9s' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Team Section - Completely Redesigned with Enhanced Visual Appeal */}
        <section className="w-full py-24 bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] relative overflow-hidden" data-aos="fade-up" data-aos-delay="400" data-aos-duration="900">
          {/* Enhanced Background Elements with More Glow */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00B8CC] rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#00E0FF] rounded-full blur-2xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#00B8CC] rounded-full blur-xl animate-pulse opacity-35" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-[#0099B3] rounded-full blur-lg animate-pulse opacity-40" style={{ animationDelay: '1.5s' }}></div>

            {/* Additional Enhanced Glow Orbs */}
            <div className="absolute top-1/4 left-1/2 w-80 h-80 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-25" style={{ animationDelay: '0.8s' }}></div>
            <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-[#00B8CC] rounded-full blur-2xl animate-pulse opacity-30" style={{ animationDelay: '1.2s' }}></div>
            <div className="absolute top-2/3 left-1/6 w-56 h-56 bg-[#0099B3] rounded-full blur-xl animate-pulse opacity-35" style={{ animationDelay: '0.3s' }}></div>
            <div className="absolute top-1/6 right-1/6 w-40 h-40 bg-[#00E0FF] rounded-full blur-lg animate-pulse opacity-45" style={{ animationDelay: '1.8s' }}></div>
          </div>

          {/* Enhanced Comprehensive Dot Background Patterns with More Glow */}
          <div className="absolute inset-0 opacity-12">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.8px, transparent 0)`,
              backgroundSize: '45px 45px'
            }}></div>
            {/* Enhanced Glow overlay for dots */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/15 via-transparent to-[#00B8CC]/15"></div>
            {/* Additional Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-tl from-[#00B8CC]/10 via-transparent to-[#00E0FF]/10"></div>
          </div>

          {/* Enhanced Secondary Dot Pattern with More Glow */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #00B8CC 0.5px, transparent 0)`,
              backgroundSize: '65px 65px'
            }}></div>
            {/* Enhanced Glow overlay for secondary dots */}
            <div className="absolute inset-0 bg-gradient-to-tl from-[#00B8CC]/12 via-transparent to-[#00E0FF]/12"></div>
            {/* Additional Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/8 via-transparent to-[#00B8CC]/8"></div>
          </div>

          {/* Enhanced Tertiary Dot Pattern with Glow */}
          <div className="absolute inset-0 opacity-8">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #0099B3 0.3px, transparent 0)`,
              backgroundSize: '85px 85px'
            }}></div>
            {/* Glow overlay for tertiary dots */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0099B3]/8 via-transparent to-[#00E0FF]/8"></div>
          </div>

          {/* Additional Micro Dot Pattern with Glow */}
          <div className="absolute inset-0 opacity-6">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 0.2px, transparent 0)`,
              backgroundSize: '120px 120px'
            }}></div>
            {/* Glow overlay for micro dots */}
            <div className="absolute inset-0 bg-gradient-to-tl from-[#00E0FF]/6 via-transparent to-[#00B8CC]/6"></div>
          </div>

          {/* Enhanced Geometric Patterns with More Glow */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#00E0FF] rotate-45 animate-spin drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDuration: '20s' }}>
              <div className="absolute inset-0 border border-[#00E0FF]/30 rounded-sm animate-pulse"></div>
            </div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#00E0FF] rounded-full animate-ping drop-shadow-lg drop-shadow-[#00E0FF]/50">
              <div className="absolute inset-0 border border-[#00E0FF]/25 rounded-full animate-pulse"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 w-full h-full bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
            </div>
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#00B8CC] rotate-12 animate-spin drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDuration: '25s', animationDirection: 'reverse' }}>
              <div className="absolute inset-0 border border-[#00B8CC]/30 rounded-sm animate-pulse"></div>
            </div>
            <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-[#00E0FF] rounded-full animate-ping drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 w-full h-full bg-[#00E0FF] rounded-full animate-ping opacity-25"></div>
            </div>
            <div className="absolute top-1/3 left-10 w-12 h-12 border-2 border-[#00E0FF] rotate-45 animate-spin drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDuration: '18s' }}>
              <div className="absolute inset-0 border border-[#00E0FF]/25 rounded-sm animate-pulse"></div>
            </div>

            {/* Additional Enhanced Geometric Elements */}
            <div className="absolute top-1/4 right-1/4 w-28 h-28 border-2 border-[#00B8CC] rotate-30 animate-spin drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDuration: '22s', animationDirection: 'reverse' }}>
              <div className="absolute inset-0 border border-[#00B8CC]/30 rounded-sm animate-pulse"></div>
            </div>
            <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border-2 border-[#00E0FF] rounded-full animate-ping drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.7s' }}>
              <div className="absolute inset-0 w-full h-full bg-[#00E0FF] rounded-full animate-ping opacity-25"></div>
            </div>
            <div className="absolute top-2/3 left-1/3 w-16 h-16 border-2 border-[#00B8CC] rotate-45 animate-spin drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDuration: '28s' }}>
              <div className="absolute inset-0 border border-[#00B8CC]/25 rounded-sm animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced Animated Lines with More Glow */}
          <div className="absolute top-20 left-20 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-80 drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.7s' }}></div>
          <div className="absolute top-32 right-32 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-80 drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '1.7s' }}></div>
          <div className="absolute bottom-20 left-32 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-80 drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '2.7s' }}></div>
          <div className="absolute bottom-32 right-20 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-80 drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '3.7s' }}></div>

          {/* Additional Enhanced Animated Lines */}
          <div className="absolute top-1/4 left-1/2 w-1 h-16 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.3s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-16 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.3s' }}></div>
          <div className="absolute bottom-1/4 left-1/4 w-1 h-16 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute bottom-1/2 right-1/2 w-1 h-16 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '2.1s' }}></div>

          {/* Enhanced Floating Elements with More Glow */}
          <div className="absolute top-20 left-20 animate-bounce opacity-70" style={{ animationDelay: '0.7s', animationDuration: '3s' }}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-2xl shadow-[#00E0FF]/60 drop-shadow-lg drop-shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute top-32 right-32 animate-bounce opacity-70" style={{ animationDelay: '1.7s', animationDuration: '4s' }}>
            <div className="w-4 h-4 bg-[#00B8CC] rounded-full shadow-2xl shadow-[#00B8CC]/60 drop-shadow-lg drop-shadow-[#00B8CC]/50"></div>
          </div>
          <div className="absolute bottom-20 left-32 animate-bounce opacity-70" style={{ animationDelay: '2.7s', animationDuration: '3.5s' }}>
            <div className="w-3 h-3 bg-[#00E0FF] rounded-full shadow-xl shadow-[#00E0FF]/50 drop-shadow-lg drop-shadow-[#00E0FF]/40"></div>
          </div>
          <div className="absolute bottom-32 right-20 animate-bounce opacity-70" style={{ animationDelay: '3.7s', animationDuration: '5s' }}>
            <div className="w-3 h-3 bg-[#00B8CC] rounded-full shadow-xl shadow-[#00B8CC]/50 drop-shadow-lg drop-shadow-[#00B8CC]/40"></div>
          </div>

          {/* Enhanced Additional Floating Particles with More Glow */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#00B8CC] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00E0FF]/60" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-[#00B8CC] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00E0FF]/60" style={{ animationDelay: '0.8s' }}></div>

          {/* Additional Enhanced Floating Elements */}
          <div className="absolute top-1/6 left-1/6 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.2s' }}></div>
          <div className="absolute top-1/6 right-1/6 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.6s' }}></div>
          <div className="absolute bottom-1/6 left-1/6 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1.1s' }}></div>
          <div className="absolute bottom-1/6 right-1/6 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.4s' }}></div>
          <div className="absolute top-2/3 left-2/3 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '0.9s' }}></div>
          <div className="absolute top-2/3 right-2/3 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '1.7s' }}></div>

          {/* Enhanced Corner Glow Effects */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#00E0FF]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#00B8CC]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#00B8CC]/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-[#00E0FF]/15 to-transparent rounded-full blur-3xl"></div>

          {/* Enhanced Center Glow Effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#00E0FF]/8 via-[#00B8CC]/8 to-[#00E0FF]/8 rounded-full blur-3xl"></div>

          <div className="max-w-6xl mx-auto px-4 relative z-10">
            {/* Enhanced Section Header with Glow Effects */}
            <div className="text-center mb-20 relative">
              {/* Enhanced Tag with More Glow */}
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#00E0FF]/30 to-[#00B8CC]/30 border-2 border-[#00E0FF]/60 rounded-full mb-8 shadow-2xl shadow-[#00E0FF]/40 backdrop-blur-sm relative overflow-hidden">
                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/25 via-transparent to-[#00B8CC]/25 rounded-full blur-xl"></div>
                {/* Pulsing Border Glow */}
                <div className="absolute inset-0 rounded-full border-2 border-[#00E0FF]/60 animate-pulse shadow-2xl shadow-[#00E0FF]/50"></div>
                {/* Additional Inner Glow */}
                <div className="absolute inset-1 rounded-full bg-gradient-to-r from-[#00E0FF]/15 via-transparent to-[#00B8CC]/15 blur-lg"></div>

                <div className="w-4 h-4 bg-[#00E0FF] rounded-full animate-pulse shadow-2xl drop-shadow-xl drop-shadow-[#00E0FF]/70 relative">
                  <div className="absolute inset-0 w-full h-full bg-[#00E0FF] rounded-full animate-ping opacity-50"></div>
                  {/* Additional Inner Glow */}
                  <div className="absolute inset-0 w-full h-full bg-[#00E0FF] rounded-full blur-sm opacity-30"></div>
                </div>
                <span className="text-[#00E0FF] text-sm font-bold uppercase tracking-wider drop-shadow-xl drop-shadow-[#00E0FF]/50 relative z-10">Our Team</span>
                <div className="w-4 h-4 bg-[#00B8CC] rounded-full animate-pulse shadow-2xl drop-shadow-xl drop-shadow-[#00B8CC]/70 relative" style={{ animationDelay: '0.5s' }}>
                  <div className="absolute inset-0 w-full h-full bg-[#00B8CC] rounded-full animate-ping opacity-50"></div>
                  {/* Additional Inner Glow */}
                  <div className="absolute inset-0 w-full h-full bg-[#00B8CC] rounded-full blur-sm opacity-30"></div>
                </div>

                {/* Enhanced Floating Elements Around Tag */}
                <div className="absolute -top-3 -left-3 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-80 drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                <div className="absolute -top-3 -right-3 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-80 drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute -bottom-3 -left-3 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/50"></div>
                <div className="absolute -bottom-3 -right-3 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.7s' }}></div>

                {/* Additional Micro Floating Elements */}
                <div className="absolute -top-1 -left-1 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40"></div>
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.4s' }}></div>
                <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.2s' }}></div>
              </div>

              {/* Enhanced Main Heading with More Glow */}
              <h2 className="text-7xl font-bold text-white font-serif mb-6 bg-gradient-to-r from-white via-[#00E0FF]/90 to-gray-200 bg-clip-text text-transparent drop-shadow-2xl drop-shadow-[#00E0FF]/40 group relative">
                <span className="relative z-10">Meet Our Team</span>
                {/* Enhanced Glow effect behind heading */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/30 to-[#00B8CC]/30 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Additional Enhanced Glow Layer */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/20 to-[#00B8CC]/20 blur-2xl -z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                {/* Enhanced Floating glow orbs around heading */}
                <div className="absolute -top-4 -left-4 w-6 h-6 bg-[#00E0FF] rounded-full animate-ping opacity-80 blur-sm drop-shadow-2xl drop-shadow-[#00E0FF]/70"></div>
                <div className="absolute -top-4 -right-4 w-6 h-6 bg-[#00B8CC] rounded-full animate-ping opacity-80 blur-sm drop-shadow-2xl drop-shadow-[#00B8CC]/70" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-4 -left-4 w-4 h-4 bg-[#00E0FF] rounded-full animate-pulse opacity-70 blur-sm drop-shadow-xl drop-shadow-[#00E0FF]/50"></div>
                <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-[#00B8CC] rounded-full animate-pulse opacity-70 blur-sm drop-shadow-xl drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.8s' }}></div>

                {/* Additional Enhanced Floating Elements */}
                <div className="absolute top-1/2 -left-6 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.2s' }}></div>
                <div className="absolute top-1/2 -right-6 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.6s' }}></div>
                <div className="absolute top-1/4 -left-4 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.4s' }}></div>
                <div className="absolute top-1/4 -right-4 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.9s' }}></div>
                <div className="absolute bottom-1/4 -left-4 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1.1s' }}></div>
                <div className="absolute bottom-1/4 -right-4 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.5s' }}></div>
              </h2>

              {/* Enhanced Description with More Glow */}
              <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed font-medium relative z-10 drop-shadow-lg drop-shadow-[#00E0FF]/20">
                The creative minds behind Creon Motion who bring your vision to life through exceptional video editing and animation.
              </p>

              {/* Enhanced Decorative Elements with More Glow */}
              <div className="flex justify-center items-center gap-8 mt-10">
                <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#00E0FF] to-[#00E0FF] rounded-full relative shadow-lg shadow-[#00E0FF]/30">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-80"></div>
                  {/* Additional Glow Effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E0FF]/30 to-[#00B8CC]/30 rounded-full blur-sm"></div>
                </div>
                <div className="w-6 h-6 bg-[#00E0FF] rounded-full animate-ping drop-shadow-2xl drop-shadow-[#00E0FF]/70 relative">
                  <div className="absolute inset-0 w-full h-full bg-[#00E0FF] rounded-full animate-ping opacity-50"></div>
                  {/* Additional Inner Glow */}
                  <div className="absolute inset-0 w-full h-full bg-[#00E0FF] rounded-full blur-sm opacity-30"></div>
                </div>
                <div className="w-24 h-0.5 bg-gradient-to-l from-transparent via-[#00E0FF] to-[#00E0FF] rounded-full relative shadow-lg shadow-[#00E0FF]/30">
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white to-transparent rounded-full animate-pulse opacity-80"></div>
                  {/* Additional Glow Effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-[#00E0FF]/30 to-[#00B8CC]/30 rounded-full blur-sm"></div>
                </div>
              </div>

              {/* Enhanced Additional Floating Elements Around Header */}
              <div className="absolute top-8 left-1/4 w-4 h-4 bg-[#00E0FF] rounded-full animate-bounce opacity-80 drop-shadow-xl drop-shadow-[#00E0FF]/60" style={{ animationDelay: '0.3s' }}></div>
              <div className="absolute top-8 right-1/4 w-4 h-4 bg-[#00B8CC] rounded-full animate-bounce opacity-80 drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-16 left-1/3 w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/50" style={{ animationDelay: '1.1s' }}></div>
              <div className="absolute top-16 right-1/3 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDelay: '1.5s' }}></div>

              {/* Additional Micro Floating Elements */}
              <div className="absolute top-12 left-1/6 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.2s' }}></div>
              <div className="absolute top-12 right-1/6 w-2 h-2 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-lg drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute top-20 left-2/3 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '1.3s' }}></div>
              <div className="absolute top-20 right-2/3 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '1.9s' }}></div>
            </div>

            {/* Enhanced Team Member Profiles with More Glow */}
            <div className="space-y-32">
              {/* Cheenie Profile - Enhanced with More Glow */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center group mb-16" data-aos="fade-up" data-aos-delay="450" data-aos-duration="900">
                {/* Enhanced Image Container with More Glow */}
                <div className="relative max-w-xl mx-auto md:mx-0 rounded-3xl p-0 overflow-hidden h-80 md:h-[28rem] transition-all duration-500">

                  <img
                    src="/img/Team/cheenie2.png"
                    alt="Cheenie Caballero"
                    className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Enhanced Floating Elements Around Image */}
                  <div className="absolute -top-3 -left-3 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                  <div className="absolute -top-3 -right-3 w-4 h-4 bg-[#00B8CC] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/50"></div>
                  <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.7s' }}></div>

                  {/* Additional Micro Floating Elements */}
                  <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40"></div>
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.9s' }}></div>
                  <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.1s' }}></div>
                </div>

                {/* Enhanced Content with More Glow */}
                <div className="space-y-8 relative" data-aos="fade-left" data-aos-delay="550" data-aos-duration="900">
                  {/* Enhanced Name and Role with More Glow */}
                  <div className="space-y-4">
                    <h3 className="text-4xl sm:text-5xl font-bold text-white leading-tight bg-gradient-to-r from-white via-[#00E0FF]/90 to-gray-200 bg-clip-text text-transparent group-hover:from-white group-hover:via-[#00E0FF] group-hover:to-white transition-all duration-500 drop-shadow-xl whitespace-nowrap">
                      Cheenie Caballero
                    </h3>
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00E0FF]/25 to-[#00B8CC]/25 border-2 border-[#00E0FF]/50 rounded-full backdrop-blur-sm shadow-xl shadow-[#00E0FF]/30 relative overflow-hidden">
                      <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                      <span className="text-[#00E0FF] text-lg font-semibold tracking-wide drop-shadow-xl drop-shadow-[#00E0FF]/40">Co-Founder • Lead Editor • Marketing & Visual Strategist</span>
                      <div className="w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>

                  {/* Enhanced Description with More Glow */}
                  <p className="text-gray-300 leading-relaxed text-xl font-medium group-hover:text-gray-200 transition-colors duration-500 relative z-10 drop-shadow-lg drop-shadow-[#00E0FF]/20">
                    Leads storytelling, client direction, and visual strategy - ensuring every video aligns with the brand's voice and purpose.
                  </p>

                  {/* Enhanced Decorative Line with More Glow */}
                  <div className="w-32 h-0.5 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] rounded-full shadow-xl shadow-[#00E0FF]/40 relative">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-80"></div>
                    {/* Additional Glow Effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E0FF]/30 to-[#00B8CC]/30 rounded-full blur-sm"></div>
                  </div>

                  {/* Enhanced Background Glow Effects */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#00E0FF]/12 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00B8CC]/12 to-transparent rounded-full blur-2xl"></div>

                  {/* Enhanced Floating Design Particles */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.8s' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1.2s' }}></div>

                  {/* Additional Micro Glow Particles */}
                  <div className="absolute top-1/6 left-1/6 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '1.0s' }}></div>
                </div>
              </div>

              {/* Jake Profile - Enhanced with More Glow */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center group mb-16" data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">
                {/* Enhanced Image Container with More Glow */}
                <div className="relative max-w-xl mx-auto md:mx-0 rounded-3xl p-0 overflow-hidden h-80 md:h-[28rem] transition-all duration-500">

                  <img
                    src="/img/Team/jake-edited.png"
                    alt="Jake Caballero"
                    className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Enhanced Floating Elements Around Image */}
                  <div className="absolute -top-3 -left-3 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                  <div className="absolute -top-3 -right-3 w-4 h-4 bg-[#00B8CC] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/50"></div>
                  <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.7s' }}></div>

                  {/* Additional Micro Floating Elements */}
                  <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40"></div>
                  <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.9s' }}></div>
                  <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.1s' }}></div>
                </div>

                {/* Enhanced Content with More Glow */}
                <div className="space-y-8 relative" data-aos="fade-left" data-aos-delay="600" data-aos-duration="900">
                  {/* Enhanced Name and Role with More Glow */}
                  <div className="space-y-4">
                    <h3 className="text-5xl sm:text-6xl font-bold text-white leading-tight bg-gradient-to-r from-white via-[#00E0FF]/90 to-gray-200 bg-clip-text text-transparent group-hover:from-white group-hover:via-[#00E0FF] group-hover:to-white transition-all duration-500 drop-shadow-xl whitespace-nowrap">
                      Jake Caballero
                    </h3>
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00E0FF]/25 to-[#00B8CC]/25 border-2 border-[#00E0FF]/50 rounded-full backdrop-blur-sm shadow-xl shadow-[#00E0FF]/30 relative overflow-hidden">
                      <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                      <span className="text-[#00E0FF] text-lg font-semibold tracking-wide drop-shadow-xl drop-shadow-[#00E0FF]/40">Co-Founder • Creative Director • Motion Graphics Designer </span>
                      <div className="w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                  </div>

                  {/* Enhanced Description with More Glow */}
                  <p className="text-gray-300 leading-relaxed text-xl font-medium group-hover:text-gray-200 transition-colors duration-500 relative z-10 drop-shadow-lg drop-shadow-[#00E0FF]/20">
                    Oversees animation, design, and motion direction - blending technical precision with creativity to define Creon's signature style.
                  </p>

                  {/* Enhanced Decorative Line with More Glow */}
                  <div className="w-32 h-0.5 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] rounded-full shadow-xl shadow-[#00E0FF]/40 relative">
                    <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-80"></div>
                    {/* Additional Glow Effect */}
                    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E0FF]/30 to-[#00B8CC]/30 rounded-full blur-sm"></div>
                  </div>

                  {/* Enhanced Background Glow Effects */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#00E0FF]/12 to-transparent rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00B8CC]/12 to-transparent rounded-full blur-2xl"></div>

                  {/* Enhanced Floating Design Particles */}
                  <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.3s' }}></div>
                  <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.8s' }}></div>
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1.2s' }}></div>

                  {/* Additional Micro Glow Particles */}
                  <div className="absolute top-1/6 left-1/6 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '1.0s' }}></div>
                </div>
              </div>
            </div>

            {/* Sophia Profile - Enhanced with More Glow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center group mb-16" data-aos="fade-up" data-aos-delay="550" data-aos-duration="900">
              {/* Enhanced Image Container with More Glow */}
              <div className="relative max-w-xl mx-auto md:mx-0 rounded-3xl p-0 overflow-hidden h-80 md:h-[28rem] transition-all duration-500">



                <img
                  src="/img/Team/sophie1.png"
                  alt="Sophia Escoro"
                  className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Enhanced Floating Elements Around Image */}
                <div className="absolute -top-3 -left-3 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                <div className="absolute -top-3 -right-3 w-4 h-4 bg-[#00B8CC] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/50"></div>
                <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.7s' }}></div>

                {/* Additional Micro Floating Elements */}
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40"></div>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.9s' }}></div>
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.1s' }}></div>
              </div>

              {/* Enhanced Content with More Glow */}
              <div className="space-y-8 relative" data-aos="fade-left" data-aos-delay="650" data-aos-duration="900">
                {/* Enhanced Name and Role with More Glow */}
                <div className="space-y-4">
                  <h3 className="text-5xl sm:text-6xl font-bold text-white leading-tight bg-gradient-to-r from-white via-[#00E0FF]/90 to-gray-200 bg-clip-text text-transparent group-hover:from-white group-hover:via-[#00E0FF] group-hover:to-white transition-all duration-500 drop-shadow-xl whitespace-nowrap">
                    Sophia Escoro
                  </h3>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00E0FF]/25 to-[#00B8CC]/25 border-2 border-[#00E0FF]/50 rounded-full backdrop-blur-sm shadow-xl shadow-[#00E0FF]/30 relative overflow-hidden">
                    <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                    <span className="text-[#00E0FF] text-lg font-semibold tracking-wide drop-shadow-xl drop-shadow-[#00E0FF]/40">Senior Editor • Project Manager • Motion Graphics Designer</span>
                    <div className="w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Enhanced Description with More Glow */}
                <p className="text-gray-300 leading-relaxed text-xl font-medium group-hover:text-gray-200 transition-colors duration-500 relative z-10 drop-shadow-lg drop-shadow-[#00E0FF]/20">
                  Leads the team in delivering clean, on-brand edits with a focus on Vox-style storytelling.
                </p>

                {/* Enhanced Decorative Line with More Glow */}
                <div className="w-32 h-0.5 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] rounded-full shadow-xl shadow-[#00E0FF]/40 relative">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-80"></div>
                  {/* Additional Glow Effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E0FF]/30 to-[#00B8CC]/30 rounded-full blur-sm"></div>
                </div>

                {/* Enhanced Background Glow Effects */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#00E0FF]/12 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00B8CC]/12 to-transparent rounded-full blur-2xl"></div>

                {/* Enhanced Floating Design Particles */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1.2s' }}></div>

                {/* Additional Micro Glow Particles */}
                <div className="absolute top-1/6 left-1/6 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '1.0s' }}></div>
              </div>
            </div>

            {/* Mayrose Profile - Enhanced with More Glow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center group mb-16" data-aos="fade-up" data-aos-delay="600" data-aos-duration="900">
              {/* Enhanced Image Container with More Glow */}
              <div className="relative max-w-xl mx-auto md:mx-0 rounded-3xl p-0 overflow-hidden h-80 md:h-[28rem] transition-all duration-500">



                <img
                  src="/img/Team/mayrose1.png"
                  alt="May Rose Stephan Aberlos"
                  className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Enhanced Floating Elements Around Image */}
                <div className="absolute -top-3 -left-3 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                <div className="absolute -top-3 -right-3 w-4 h-4 bg-[#00B8CC] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/50"></div>
                <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.7s' }}></div>

                {/* Additional Micro Floating Elements */}
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40"></div>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.9s' }}></div>
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.1s' }}></div>
              </div>

              {/* Enhanced Content with More Glow */}
              <div className="space-y-8 relative" data-aos="fade-left" data-aos-delay="700" data-aos-duration="900">
                {/* Enhanced Name and Role with More Glow */}
                <div className="space-y-4">
                  <h3 className="text-4xl sm:text-5xl font-bold text-white leading-tight bg-gradient-to-r from-white via-[#00E0FF]/90 to-gray-200 bg-clip-text text-transparent group-hover:from-white group-hover:via-[#00E0FF] group-hover:to-white transition-all duration-500 drop-shadow-xl">
                    <span className="block">May Rose Stephan</span>
                    <span className="block">Aberlos</span>
                  </h3>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00E0FF]/25 to-[#00B8CC]/25 border-2 border-[#00E0FF]/50 rounded-full backdrop-blur-sm shadow-xl shadow-[#00E0FF]/30 relative overflow-hidden">
                    <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                    <span className="text-[#00E0FF] text-lg font-semibold tracking-wide drop-shadow-xl drop-shadow-[#00E0FF]/40">Video Editor • Motion Graphics Designer</span>
                    <div className="w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Enhanced Description with More Glow */}
                <p className="text-gray-300 leading-relaxed text-xl font-medium group-hover:text-gray-200 transition-colors duration-500 relative z-10 drop-shadow-lg drop-shadow-[#00E0FF]/20">
                  Builds the visual first, then brings it to life with animation. Focused on clean edits, strong pacing, and motion that makes sense—no fluff, just solid work that hits.
                </p>

                {/* Enhanced Decorative Line with More Glow */}
                <div className="w-32 h-0.5 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] rounded-full shadow-xl shadow-[#00E0FF]/40 relative">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-80"></div>
                  {/* Additional Glow Effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E0FF]/30 to-[#00B8CC]/30 rounded-full blur-sm"></div>
                </div>

                {/* Enhanced Background Glow Effects */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#00E0FF]/12 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00B8CC]/12 to-transparent rounded-full blur-2xl"></div>

                {/* Enhanced Floating Design Particles */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-lg drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1.2s' }}></div>

                {/* Additional Micro Glow Particles */}
                <div className="absolute top-1/6 left-1/6 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '1.0s' }}></div>
              </div>
            </div>

            {/* Joaquin Profile - Enhanced with More Glow */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center group mb-16" data-aos="fade-up" data-aos-delay="650" data-aos-duration="900">
              {/* Enhanced Image Container with More Glow */}
              <div className="relative max-w-xl mx-auto md:mx-0 rounded-3xl p-0 overflow-hidden h-80 md:h-[28rem] transition-all duration-500">



                <img
                  src="/img/Team/joaquin1.png"
                  alt="Joaquin Canete"
                  className="w-full h-full object-contain relative z-10 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Enhanced Floating Elements Around Image */}
                <div className="absolute -top-3 -left-3 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                <div className="absolute -top-3 -right-3 w-4 h-4 bg-[#00B8CC] rounded-full animate-ping opacity-80 drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute -bottom-3 -left-3 w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00E0FF]/50"></div>
                <div className="absolute -bottom-3 -right-3 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-70 drop-shadow-lg drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.7s' }}></div>

                {/* Additional Micro Floating Elements */}
                <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40"></div>
                <div className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00E0FF]/40" style={{ animationDelay: '0.9s' }}></div>
                <div className="absolute -bottom-1 -right-1 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60 drop-shadow-md drop-shadow-[#00B8CC]/40" style={{ animationDelay: '1.1s' }}></div>
              </div>

              {/* Enhanced Content with More Glow */}
              <div className="space-y-8 relative" data-aos="fade-left" data-aos-delay="750" data-aos-duration="900">
                {/* Enhanced Name and Role with More Glow */}
                <div className="space-y-4">
                  <h3 className="text-5xl sm:text-6xl font-bold text-white leading-tight bg-gradient-to-r from-white via-[#00E0FF]/90 to-gray-200 bg-clip-text text-transparent group-hover:from-white group-hover:via-[#00E0FF] group-hover:to-white transition-all duration-500 drop-shadow-xl whitespace-nowrap">
                    Joaquin Canete
                  </h3>
                  <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#00E0FF]/25 to-[#00B8CC]/25 border-2 border-[#00E0FF]/50 rounded-full backdrop-blur-sm shadow-xl shadow-[#00E0FF]/30 relative overflow-hidden">
                    <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse drop-shadow-xl drop-shadow-[#00E0FF]/60"></div>
                    <span className="text-[#00E0FF] text-lg font-semibold tracking-wide drop-shadow-xl drop-shadow-[#00E0FF]/40">Video Editor • 2D/3D Animator</span>
                    <div className="w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse drop-shadow-xl drop-shadow-[#00B8CC]/60" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                </div>

                {/* Enhanced Description with More Glow */}
                <p className="text-gray-300 leading-relaxed text-xl font-medium group-hover:text-gray-200 transition-colors duration-500 relative z-10 drop-shadow-lg drop-shadow-[#00E0FF]/20">
                  Handles both 2D and 3D animation projects. Also edits explainer videos, commercial content, and animated visuals for YouTube and social platforms.
                </p>

                {/* Enhanced Decorative Line with More Glow */}
                <div className="w-32 h-0.5 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] rounded-full shadow-xl shadow-[#00E0FF]/40 relative">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-80"></div>
                  {/* Additional Glow Effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00E0FF]/30 to-[#00B8CC]/30 rounded-full blur-sm"></div>
                </div>

                {/* Enhanced Background Glow Effects */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#00E0FF]/12 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#00B8CC]/12 to-transparent rounded-full blur-2xl"></div>

                {/* Enhanced Floating Design Particles */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00E0FF]/50" style={{ animationDelay: '0.3s' }}></div>
                <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-70 drop-shadow-xl drop-shadow-[#00B8CC]/50" style={{ animationDelay: '0.8s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-pulse opacity-60 drop-shadow-xl drop-shadow-[#00E0FF]/40" style={{ animationDelay: '1.2s' }}></div>

                {/* Additional Micro Glow Particles */}
                <div className="absolute top-1/6 left-1/6 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-50 drop-shadow-md drop-shadow-[#00E0FF]/30" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-1/6 right-1/6 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-50 drop-shadow-md drop-shadow-[#00B8CC]/30" style={{ animationDelay: '1.0s' }}></div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default AboutUs;
