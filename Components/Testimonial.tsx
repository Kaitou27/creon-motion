'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    id: 0,
    name: "Old Money Luxury",
    text: "Creon Motion's video team consistently delivers high-quality, documentary-style edits that have helped generate millions of views on YouTube. With multiple videos reaching over 100K–1M views, their unique editing style resonates with both creators and audiences. They've proven to be reliable, scalable, and consistent—rare qualities in video editing.",
    logo: "/videos/Testimonial/logo/oldmoney.png",
    audio: "/videos/Testimonial/audio/audio1.mp3"
  },
  {
    id: 1,
    name: "Lhor",
    text: "We've been working with Creon Motion for almost 2 years, and we are more than happy with the results, all of our 30 videos where done by them, and all of them were done in amazing quality. They're attentive, and open to suggestions, to changes. The communication is topnotch!",
    logo: "/videos/Testimonial/logo/lhor.jpg"
  },
  {
    id: 2,
    name: "Bizarre Medical Stories",
    text: "Creon Motion is extremely talented and very professional. They have always delivered on time and even provided regular updates to me without me asking. Their large profile speaks for itself but their professionalism is like no other on this platform.",
    logo: "/videos/Testimonial/logo/bizzare.jpg"
  },
  {
    id: 3,
    name: "K.B.M.H",
    text: "I was working with Creon Motion on my follow along YouTube workouts, It was pleasure working together, great communication, good quality and fair prices. Looking forward working with you again!",
    logo: "/videos/Testimonial/logo/kbmh.png"
  },
  {
    id: 4,
    name: "Becket U",
    text: "We have had the pleasure of working with Cheenie for over a year, and we are consistently impressed by her professionalism and attention to detail. She is a clear communicator, and she is always learning new skills that can be applied to our videos.",
    initial: "B"
  },
  {
    id: 5,
    name: "Juan",
    text: "Fantastic experience from start to finish. Gemar brought creative ideas, nailed the cinematic look, and maintained a great attitude throughout. Positive, responsive, and easy to collaborate with. Turnaround was fast, edits were spot-on.",
    initial: "J"
  },
  {
    id: 6,
    name: "Josh",
    text: "Gemar did an amazing job on this project. I'm 100% satisfied and will work with him again. Fantastic communication. Fast replies. Prompt edits on final project with very helpful suggestions along the way.",
    initial: "J"
  },
  {
    id: 7,
    name: "Brimm",
    text: "Excellent video, I liked it a lot. Thanks for the efforts of the team! The clips were really strong and helped tell the story effectively.",
    initial: "B"
  },
  {
    id: 8,
    name: "Amos",
    text: "It was a pleasure working with Gemar! He's a skilled and reliable editor, and I highly recommend him to anyone looking for quality work. Wishing him all the best in his future endeavors!",
    initial: "A"
  },
  {
    id: 9,
    name: "Amanda_jane_100",
    text: "Very fast turnaround and great communication, was able to bring my idea to life! Thank you so much.",
    initial: "A"
  },
  {
    id: 10,
    name: "alex_addison",
    text: "Excellent work video editing work, responded well to feedback and revision requests and did a great job of working with a limited amount of material. Can't recommend this editor enough.",
    initial: "A"
  },
  {
    id: 11,
    name: "chuckp2",
    text: "He did a very good job. He tried mimicking the video style I had sent for reference, and did his research properly to put together the right footage. I will come back for more in the future. Highly recommended.",
    initial: "C"
  },
  {
    id: 12,
    name: "bradocross",
    text: "Provided me a fantastic video. The quality was amazing. Better than I could have ever imagined. Really happy and the seller was nice too! A very good experience indeed and will certainly be using again!",
    initial: "B"
  },
  {
    id: 13,
    name: "kameronchristie",
    text: "This seller is absolutely amazing and I definitely recommend you try him , the price is completely worth it and justifies the price. Communication is good and he made sure he hit his deadlines",
    initial: "K"
  },
  {
    id: 14,
    name: "henryhunter93",
    text: "fantastic attention to detail and outstanding communication as well. Cheenie is extremely talented and you won't be disappointed with his service!",
    initial: "H"
  }
];

const Testimonial = () => {
  const [cardIndex, setCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const nextCard = () => setCardIndex((prev) => (prev + 1) % testimonialsData.length);
  const prevCard = () => setCardIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  const getCardStyle = (index: number) => {
    const total = testimonialsData.length;
    let diff = index - cardIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    const absDiff = Math.abs(diff);
    const opacity = absDiff > 2 ? 0 : 1 - absDiff * 0.4;
    const scale = 1 - absDiff * 0.15;
    const translateX = diff * (isMobile ? 80 : 120);
    const translateZ = absDiff * -150;
    const rotateY = diff * -25;
    const zIndex = 100 - absDiff * 10;
    return {
      transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      visibility: opacity === 0 ? 'hidden' : 'visible' as any,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#001A1F] relative overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>

      {/* ─── HERO SECTION ─────────────────────────────────────────── */}
      <section className="w-full h-screen bg-[#001A1F] relative overflow-hidden flex items-center" data-aos="fade-up" data-aos-duration="900">

        {/* Top edge glow line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/60 to-transparent pointer-events-none" />

        {/* Corner bracket accents */}
        <div className="absolute top-6 left-6 w-14 h-14 border-l-2 border-t-2 border-[#00E0FF]/50 pointer-events-none" />
        <div className="absolute top-6 right-6 w-14 h-14 border-r-2 border-t-2 border-[#00E0FF]/50 pointer-events-none" />
        <div className="absolute bottom-6 left-6 w-14 h-14 border-l-2 border-b-2 border-[#00B8CC]/50 pointer-events-none" />
        <div className="absolute bottom-6 right-6 w-14 h-14 border-r-2 border-b-2 border-[#00B8CC]/50 pointer-events-none" />

        {/* Subtle glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-32 -left-32 w-[30rem] h-[30rem] bg-[#00E0FF]/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] bg-[#00B8CC]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay:'1.2s'}} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] bg-[#00E0FF]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay:'2.4s'}} />
        </div>

        {/* Dot grid background */}
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,224,255,0.35) 1px, transparent 0)',
            backgroundSize: '22px 22px'
          }} />
        </div>

        {/* Animated geometric shapes */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-20 w-20 h-20 border border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration:'24s'}} />
          <div className="absolute bottom-20 right-20 w-16 h-16 border border-[#00E0FF] rounded-full animate-ping" />
          <div className="absolute top-10 right-10 w-14 h-14 border border-[#00B8CC] rotate-12 animate-spin" style={{animationDuration:'28s',animationDirection:'reverse'}} />
          <div className="absolute bottom-10 left-10 w-12 h-12 border border-[#00E0FF] rounded-full animate-ping" style={{animationDelay:'0.4s'}} />
          <div className="absolute top-1/3 left-12 w-10 h-10 border border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration:'18s'}} />
          <div className="absolute top-1/4 right-1/3 w-8 h-8 border border-[#00B8CC] rounded-full animate-ping" style={{animationDelay:'0.8s'}} />
          <div className="absolute bottom-1/3 left-1/2 w-6 h-6 border border-[#00E0FF] rotate-30 animate-spin" style={{animationDuration:'20s'}} />
        </div>

        {/* Animated vertical light lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 left-1/4 w-px h-20 bg-gradient-to-b from-[#00E0FF]/60 to-transparent animate-pulse" style={{animationDelay:'0s'}} />
          <div className="absolute top-20 right-1/3 w-px h-20 bg-gradient-to-b from-[#00B8CC]/60 to-transparent animate-pulse" style={{animationDelay:'0.8s'}} />
          <div className="absolute bottom-16 left-1/3 w-px h-20 bg-gradient-to-b from-[#00E0FF]/60 to-transparent animate-pulse" style={{animationDelay:'1.6s'}} />
          <div className="absolute bottom-12 right-1/4 w-px h-20 bg-gradient-to-b from-[#00B8CC]/60 to-transparent animate-pulse" style={{animationDelay:'2.4s'}} />
        </div>

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-24 left-14 w-px h-16 bg-gradient-to-br from-[#00E0FF] to-transparent animate-pulse" style={{transform:'rotate(20deg)',animationDelay:'0.3s'}} />
          <div className="absolute top-28 right-14 w-px h-16 bg-gradient-to-bl from-[#00B8CC] to-transparent animate-pulse" style={{transform:'rotate(-20deg)',animationDelay:'0.7s'}} />
        </div>

        {/* Floating sparkle particles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60" />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60" style={{animationDelay:'0.5s'}} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60" style={{animationDelay:'1s'}} />
          <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-60" style={{animationDelay:'1.5s'}} />
          <div className="absolute top-1/2 right-1/2 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60" style={{animationDelay:'0.8s'}} />
          <div className="absolute top-2/3 left-1/5 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-50" style={{animationDelay:'1.2s'}} />
          <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-50" style={{animationDelay:'0.3s'}} />
        </div>

        {/* Sweeping horizontal glow band */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-32 bg-gradient-to-r from-transparent via-[#00E0FF]/8 to-transparent blur-2xl pointer-events-none animate-pulse" style={{animationDuration:'3s'}} />

        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 items-center gap-10 relative z-10">
          <div className="space-y-8 text-center">
            <div className="space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 px-7 py-3.5 bg-gradient-to-r from-[#00E0FF]/20 to-[#00B8CC]/20 border border-[#00E0FF]/40 rounded-full shadow-xl backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/8 to-[#00B8CC]/8 animate-pulse" />
                <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse shadow-md relative z-10" />
                <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse shadow-md relative z-10" style={{animationDelay:'0.5s'}} />
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-50" />
                <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-50" style={{animationDelay:'0.3s'}} />
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight tracking-tight uppercase">
                  <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl relative">
                    Testimonials
                    <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-80" />
                  </span>
                </h1>
                {/* Underline glow */}
                <div className="flex justify-center">
                  <div className="relative h-1 w-48 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-80" />
                    <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-40" />
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-copy */}
            <div>
              <p className="mx-auto max-w-2xl md:max-w-3xl lg:max-w-4xl text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed font-semibold text-gray-200 text-center px-4 sm:px-0">
                Creators and companies work with Creon Motion for dependable video production. Our clients value clear communication, organized workflows, and videos that are carefully edited from start to finish.
              </p>
              <div className="mt-6 flex justify-center">
                <div className="h-px w-72 bg-gradient-to-r from-transparent via-[#00E0FF]/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION DIVIDER ─────────────────────────────────────────── */}
      <div className="relative flex items-center justify-center py-2 pointer-events-none">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#00E0FF]/30 to-transparent" />
        <div className="absolute w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-60" />
      </div>

      {/* ─── WHAT OUR CLIENTS SAY + CAROUSEL ────────────────────────── */}
      <section className="relative w-full flex flex-col items-center py-16 px-4 overflow-hidden">

        {/* Section dot grid */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,224,255,0.35) 1px, transparent 0)',
            backgroundSize: '22px 22px'
          }} />
        </div>

        {/* Section glow blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#00E0FF]/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#00B8CC]/15 rounded-full blur-3xl" />
        </div>

        {/* Section corner bracket accents */}
        <div className="pointer-events-none absolute top-6 left-6 w-10 h-10 border-l-2 border-t-2 border-[#00E0FF]/40" />
        <div className="pointer-events-none absolute top-6 right-6 w-10 h-10 border-r-2 border-t-2 border-[#00E0FF]/40" />
        <div className="pointer-events-none absolute bottom-6 left-6 w-10 h-10 border-l-2 border-b-2 border-[#00B8CC]/40" />
        <div className="pointer-events-none absolute bottom-6 right-6 w-10 h-10 border-r-2 border-b-2 border-[#00B8CC]/40" />

        {/* Section geometric shapes */}
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-16 h-16 border border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration:'20s'}} />
          <div className="absolute bottom-10 right-10 w-14 h-14 border border-[#00E0FF] rounded-full animate-ping" />
          <div className="absolute top-1/3 right-1/4 w-10 h-10 border border-[#00B8CC] rotate-12 animate-spin" style={{animationDuration:'25s',animationDirection:'reverse'}} />
          <div className="absolute bottom-1/4 left-1/4 w-8 h-8 border border-[#00E0FF] rounded-full animate-ping" style={{animationDelay:'0.6s'}} />
        </div>

        {/* Section diagonal accent lines */}
        <div className="pointer-events-none absolute inset-0 opacity-35">
          <div className="absolute left-8 top-12 w-px h-20 bg-gradient-to-b from-[#00E0FF] to-transparent" style={{transform:'rotate(22deg)'}} />
          <div className="absolute right-10 top-10 w-px h-24 bg-gradient-to-b from-[#00B8CC] to-transparent" style={{transform:'rotate(-18deg)'}} />
          <div className="absolute left-1/2 top-0 w-px h-20 bg-gradient-to-b from-[#00E0FF] to-transparent" style={{transform:'rotate(10deg)'}} />
          <div className="absolute right-1/3 bottom-8 w-px h-20 bg-gradient-to-b from-[#00B8CC] to-transparent" style={{transform:'rotate(-14deg)'}} />
        </div>

        {/* Section sparkle particles */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-50" />
          <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-pulse opacity-50" style={{animationDelay:'0.5s'}} />
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-50" style={{animationDelay:'1s'}} />
          <div className="absolute bottom-1/3 right-1/2 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-pulse opacity-50" style={{animationDelay:'1.5s'}} />
          <div className="absolute top-6 left-1/2 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-40" style={{animationDelay:'0.2s'}} />
          <div className="absolute top-20 right-1/2 w-1 h-1 bg-[#00B8CC] rounded-full animate-pulse opacity-40" style={{animationDelay:'0.6s'}} />
          <div className="absolute bottom-12 left-1/4 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-40" style={{animationDelay:'1s'}} />
          <div className="absolute bottom-14 right-1/4 w-1 h-1 bg-[#00B8CC] rounded-full animate-pulse opacity-40" style={{animationDelay:'1.3s'}} />
        </div>

        {/* Sweeping glow band */}
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-28 bg-gradient-to-r from-transparent via-[#00E0FF]/8 to-transparent blur-2xl animate-pulse" style={{animationDuration:'2.5s'}} />

        {/* Section animated lines */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute top-8 left-16 w-0.5 h-14 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse" />
          <div className="absolute top-16 right-16 w-0.5 h-12 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse" style={{animationDelay:'0.4s'}} />
          <div className="absolute bottom-12 left-24 w-0.5 h-12 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse" style={{animationDelay:'0.8s'}} />
        </div>

        {/* ── "What Our Client Says" badge ── */}
        <div className="relative z-10 inline-flex items-center gap-3 px-8 py-3 rounded-full border border-[#00E0FF]/70 bg-[#001A1F]/60 backdrop-blur-md shadow-[0_0_24px_rgba(0,224,255,0.15)]">
          <span className="w-2.5 h-2.5 bg-[#00E0FF] rounded-full animate-pulse shadow-md shadow-[#00E0FF]/50" />
          <span className="text-[#00E0FF] text-sm sm:text-base md:text-lg font-bold tracking-widest uppercase">What Our Client Says</span>
          <span className="w-2.5 h-2.5 bg-[#00B8CC] rounded-full animate-pulse shadow-md shadow-[#00B8CC]/50" style={{animationDelay:'0.5s'}} />
        </div>

        {/* Decorative rule below badge */}
        <div className="relative z-10 mt-5 flex items-center gap-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#00E0FF]/60" />
          <div className="w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-70" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#00E0FF]/60" />
        </div>

        {/* ── Top video ── */}
        <div className="relative z-10 mt-8 w-full flex justify-center px-4">
          <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,224,255,0.15)] hover:shadow-[0_12px_60px_rgba(0,224,255,0.3)] transition-all duration-500 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-[#020D12]/80 backdrop-blur-sm">
            {/* Glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00E0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-5 h-5 border-l border-t border-[#00E0FF]/50 pointer-events-none z-20" />
            <div className="absolute top-2 right-2 w-5 h-5 border-r border-t border-[#00E0FF]/50 pointer-events-none z-20" />
            <div className="absolute bottom-2 left-2 w-5 h-5 border-l border-b border-[#00B8CC]/50 pointer-events-none z-20" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-r border-b border-[#00B8CC]/50 pointer-events-none z-20" />
            <video className="w-full h-full object-cover rounded-2xl sm:rounded-3xl relative z-0" controls>
              <source src="/videos/Testimonial/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* ─── 3D Carousel ─────────────────────────────────────────── */}
        <div className="relative z-10 mt-14 sm:mt-16 w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto" style={{ perspective: '1500px' }}>

          {/* Nav – Prev */}
          <button
            onClick={prevCard}
            className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 bg-[#00E0FF] text-black p-3 rounded-full shadow-[0_0_20px_rgba(0,224,255,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 z-50 group"
            aria-label="Previous testimonial"
          >
            <ChevronRight className="w-5 h-5 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Nav – Next */}
          <button
            onClick={nextCard}
            className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 bg-[#00E0FF] text-black p-3 rounded-full shadow-[0_0_20px_rgba(0,224,255,0.5)] hover:scale-110 active:scale-95 transition-all duration-200 z-50 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* 3D Stage */}
          <div className="relative h-[420px] sm:h-[480px] w-full flex items-center justify-center overflow-visible" style={{ transformStyle: 'preserve-3d' }}>
            {testimonialsData.map((t, i) => {
              const style = getCardStyle(i);
              return (
                <div
                  key={t.id}
                  className="absolute w-[90%] max-w-[450px] cursor-pointer group"
                  style={style}
                  onClick={() => setCardIndex(i)}
                >
                  <div className="relative flex flex-col h-full min-h-[320px] bg-[#020D12]/70 backdrop-blur-3xl p-8 sm:p-10 rounded-[2.5rem] border border-white/5 hover:border-[#00E0FF]/40 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_40px_rgba(0,224,255,0.12)] overflow-hidden">
                    {/* Inner glow blobs */}
                    <div className="absolute -top-28 -right-28 w-56 h-56 bg-[#00E0FF]/5 rounded-full blur-[70px] group-hover:bg-[#00E0FF]/12 transition-all duration-700" />
                    <div className="absolute -bottom-28 -left-28 w-56 h-56 bg-[#00B8CC]/5 rounded-full blur-[70px] group-hover:bg-[#00B8CC]/10 transition-all duration-700" />

                    {/* Decorative top-left bracket inside card */}
                    <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-[#00E0FF]/20 pointer-events-none" />
                    <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-[#00B8CC]/20 pointer-events-none" />

                    {/* Oversized quote mark */}
                    <span className="absolute top-2 left-5 text-9xl font-black text-[#00E0FF]/[0.05] pointer-events-none select-none group-hover:text-[#00E0FF]/[0.12] group-hover:scale-110 transition-all duration-700">
                      "
                    </span>

                    <p className="relative z-10 flex-grow text-base sm:text-lg leading-relaxed mb-8 font-medium text-gray-300 italic group-hover:text-white transition-colors duration-500 line-clamp-6">
                      "{t.text}"
                    </p>

                    <div className="relative z-10 flex items-center gap-4 mt-auto">
                      <div className="flex-shrink-0">
                        {t.logo ? (
                          <img src={t.logo} alt={t.name} className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/10 p-1 shadow-lg border border-white/10 object-contain" />
                        ) : (
                          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#00E0FF]/10 flex items-center justify-center border border-[#00E0FF]/20 text-[#00E0FF] font-bold text-xl">
                            {t.initial}
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[#00E0FF] font-black text-sm sm:text-base uppercase tracking-wider group-hover:text-white transition-colors duration-300">
                          {t.name}
                        </span>
                        <span className="text-gray-500 text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.25em] mt-0.5">
                          Verified Partner
                        </span>
                        {(t as any).audio && (
                          <audio className="mt-3 h-8 w-32 sm:w-40 opacity-70 hover:opacity-100 transition-opacity" controls>
                            <source src={(t as any).audio} type="audio/mp3" />
                          </audio>
                        )}
                      </div>
                    </div>

                    {/* Animated bottom accent line */}
                    <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/[0.02] overflow-hidden">
                      <div className="h-full w-0 bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#00E0FF] transition-all duration-1000 ease-in-out group-hover:w-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => setCardIndex(i)}
                className={`rounded-full transition-all duration-300 ${i === cardIndex ? 'w-6 h-2 bg-[#00E0FF] shadow-[0_0_8px_rgba(0,224,255,0.7)]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ─── Bottom decorative divider ─────────────────────────────── */}
        <div className="relative z-10 mt-14 flex items-center gap-4 w-full max-w-xs">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-[#00E0FF]/40" />
          <div className="w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60" />
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-[#00E0FF]/40" />
        </div>

        {/* ── Bottom video ── */}
        <div className="relative z-10 mt-10 w-full flex justify-center px-4">
          <div className="relative group rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_8px_40px_rgba(0,224,255,0.12)] hover:shadow-[0_12px_60px_rgba(0,224,255,0.28)] transition-all duration-500 w-full max-w-48 sm:max-w-64 md:max-w-80 lg:max-w-96 bg-[#020D12]/80 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-t from-[#00E0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />
            <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-[#00E0FF]/50 pointer-events-none z-20" />
            <div className="absolute top-2 right-2 w-4 h-4 border-r border-t border-[#00E0FF]/50 pointer-events-none z-20" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-l border-b border-[#00B8CC]/50 pointer-events-none z-20" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-[#00B8CC]/50 pointer-events-none z-20" />
            <video className="w-full h-full object-cover rounded-2xl sm:rounded-3xl relative z-0" controls>
              <source src="/videos/Testimonial/scott.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Bottom edge glow line */}
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/30 to-transparent mt-10" />

      </section>

    </div>
  );
};

export default Testimonial;
