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
    text: "It was a pleasure working with Gemar! He’s a skilled and reliable editor, and I highly recommend him to anyone looking for quality work. Wishing him all the best in his future endeavors!",
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cardIndex, setCardIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const nextCard = () => {
    setCardIndex((prev) => (prev + 1) % testimonialsData.length);
  };
  
  const prevCard = () => {
    setCardIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const getCardStyle = (index: number) => {
    const total = testimonialsData.length;
    let diff = index - cardIndex;
    
    // Handle circular distance
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const absDiff = Math.abs(diff);
    const isActive = diff === 0;
    
    // Only show center and neighbors for 3D effect, hide others or fade them
    const opacity = absDiff > 2 ? 0 : 1 - (absDiff * 0.4);
    const scale = 1 - (absDiff * 0.15);
    const translateX = diff * (isMobile ? 80 : 120); // Responsive spacing
    const translateZ = absDiff * -150;
    const rotateY = diff * -25;
    const zIndex = 100 - absDiff * 10;

    return {
      transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity: opacity,
      zIndex: zIndex,
      visibility: opacity === 0 ? 'hidden' : 'visible' as any,
      transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
    };
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // Use 1024 for better 3D stage on desktop
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] relative overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
      

      

      <div className="relative w-full">
        <section className="w-full h-screen bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] relative overflow-hidden flex items-center" data-aos="fade-up" data-aos-duration="900">
          {/* Header Area Subtle Designs */}
          <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
            {/* Top Edge Glow */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-60"></div>
            
            {/* Top Left Corner Design */}
            <div className="absolute top-4 left-4 w-12 h-12 border border-[#00E0FF] rotate-45 animate-spin opacity-40" style={{animationDuration: '20s'}}></div>
            <div className="absolute top-8 left-8 w-4 h-4 bg-[#00E0FF] rounded-full animate-ping opacity-50"></div>
            
            {/* Top Right Corner Design */}
            <div className="absolute top-6 right-6 w-16 h-16 border border-[#00B8CC] rounded-full animate-ping opacity-40"></div>
            <div className="absolute top-12 right-12 w-3 h-3 bg-[#00B8CC] rounded-full animate-pulse opacity-60"></div>
            
            {/* Top Center Subtle Elements */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-20 h-20 border border-[#00E0FF] rounded-full animate-spin opacity-30" style={{animationDuration: '25s'}}></div>
            <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#00E0FF] rounded-full animate-pulse opacity-40"></div>
            
            {/* Top Floating Elements */}
            <div className="absolute top-16 left-1/4 w-3 h-3 bg-[#00E0FF] rounded-full animate-bounce opacity-50"></div>
            <div className="absolute top-20 right-1/4 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-50" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-24 left-1/3 w-4 h-4 bg-[#00E0FF] rounded-full animate-bounce opacity-50" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-28 right-1/3 w-3 h-3 bg-[#00B8CC] rounded-full animate-bounce opacity-50" style={{animationDelay: '1.5s'}}></div>
            
            {/* Top Animated Lines */}
            <div className="absolute top-8 left-16 w-0.5 h-8 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-50"></div>
            <div className="absolute top-12 right-16 w-0.5 h-8 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse opacity-50" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-16 left-24 w-0.5 h-6 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-50" style={{animationDelay: '0.6s'}}></div>
            <div className="absolute top-20 right-24 w-0.5 h-6 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse opacity-50" style={{animationDelay: '0.9s'}}></div>
          </div>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl animate-pulse opacity-60" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#00E0FF] rounded-full blur-2xl animate-pulse opacity-50" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#00E0FF] rounded-full blur-xl animate-pulse opacity-45" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#00B8CC] rounded-full blur-lg animate-pulse opacity-55" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-[#0099B3] rounded-full blur-xl animate-pulse opacity-50" style={{animationDelay: '0.8s'}}></div>
          </div>
          
          {/* Enhanced Geometric Patterns */}
          <div className="absolute inset-0 opacity-25">
            <div className="absolute top-20 left-20 w-32 h-32 border-2 border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
            <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#00E0FF] rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-[#00B8CC] rotate-12 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-[#00E0FF] rounded-full animate-ping" style={{animationDelay: '0.3s'}}></div>
            <div className="absolute top-1/3 left-10 w-12 h-12 border-2 border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration: '18s'}}></div>
          </div>
          
          {/* Particle Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-90"></div>
            <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-[#00B8CC] rounded-full animate-ping opacity-90" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-90" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 right-1/3 w-2 h-2 bg-[#00B8CC] rounded-full animate-ping opacity-90" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute top-1/2 right-1/2 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-90" style={{animationDelay: '0.8s'}}></div>
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
          <div className="absolute top-10 left-32 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-20 right-40 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 right-20 w-1 h-20 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-90" style={{animationDelay: '3s'}}></div>
          
          {/* Additional Prominent Design Elements */}
          <div className="absolute top-1/4 left-1/4 w-24 h-24 border-2 border-[#00E0FF] rounded-full animate-spin opacity-60" style={{animationDuration: '30s'}}></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border-2 border-[#00B8CC] rounded-full animate-ping opacity-70"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-[#00E0FF] rounded-full animate-pulse opacity-80"></div>
          <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-[#00B8CC] rounded-full animate-pulse opacity-80" style={{animationDelay: '1s'}}></div>
          
          {/* Header Content Area Designs */}
          <div className="absolute top-32 left-8 w-16 h-16 border border-[#00E0FF] rotate-12 animate-spin opacity-50" style={{animationDuration: '22s'}}></div>
          <div className="absolute top-36 right-8 w-12 h-12 bg-[#00B8CC] rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-40 left-1/4 w-10 h-10 border border-[#00E0FF] rotate-45 animate-spin opacity-55" style={{animationDuration: '18s'}}></div>
          <div className="absolute top-44 right-1/4 w-8 h-8 bg-[#00E0FF] rounded-full animate-pulse opacity-65"></div>
          
          {/* Header Diagonal Lines */}
          <div className="absolute top-28 left-16 w-0.5 h-12 bg-gradient-to-br from-[#00E0FF] to-transparent animate-pulse opacity-60" style={{transform: 'rotate(15deg)'}}></div>
          <div className="absolute top-32 right-16 w-0.5 h-12 bg-gradient-to-bl from-[#00B8CC] to-transparent animate-pulse opacity-60" style={{transform: 'rotate(-15deg)', animationDelay: '0.5s'}}></div>
          <div className="absolute top-36 left-24 w-0.5 h-10 bg-gradient-to-br from-[#00E0FF] to-transparent animate-pulse opacity-60" style={{transform: 'rotate(25deg)', animationDelay: '1s'}}></div>
          <div className="absolute top-40 right-24 w-0.5 h-10 bg-gradient-to-bl from-[#00B8CC] to-transparent animate-pulse opacity-60" style={{transform: 'rotate(-25deg)', animationDelay: '1.5s'}}></div>
          
          {/* Enhanced Floating Elements */}
          <div className="absolute top-10 left-20 animate-bounce opacity-80" style={{animationDelay: '0s', animationDuration: '3s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute top-32 right-32 animate-bounce opacity-80" style={{animationDelay: '1s', animationDuration: '4s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
          <div className="absolute bottom-32 left-1/4 animate-bounce opacity-80" style={{animationDelay: '2s', animationDuration: '3.5s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
      </div>
          <div className="absolute top-1/2 right-10 animate-bounce opacity-80" style={{animationDelay: '3s', animationDuration: '5s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute bottom-20 right-1/3 animate-bounce opacity-80" style={{animationDelay: '4s', animationDuration: '4.5s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>
          <div className="absolute top-1/4 left-1/3 animate-bounce opacity-80" style={{animationDelay: '5s', animationDuration: '3s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
            </div>
          <div className="absolute bottom-1/4 right-1/4 animate-bounce opacity-80" style={{animationDelay: '6s', animationDuration: '4s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>
          <div className="absolute top-3/4 left-1/2 animate-bounce opacity-80" style={{animationDelay: '7s', animationDuration: '3.5s'}}>
            <div className="w-4 h-4 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
        </div>

          {/* Larger floating elements */}
          <div className="absolute top-1/3 right-1/4 animate-bounce opacity-80" style={{animationDelay: '2s', animationDuration: '6s'}}>
            <div className="w-6 h-6 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
                  </div>
          <div className="absolute bottom-1/3 left-1/2 animate-bounce opacity-80" style={{animationDelay: '4s', animationDuration: '5s'}}>
            <div className="w-6 h-6 bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/50"></div>
          </div>

          {/* Main Content Container */}
          <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 items-center gap-10 relative">
            {/* Left: Heading + Copy */}
                          <div className="space-y-8 text-center md:pr-0 lg:pr-0">  
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-[#00E0FF]/25 to-[#00B8CC]/25 border border-[#00E0FF]/50 rounded-full shadow-2xl backdrop-blur-sm relative overflow-hidden">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/10 to-[#00B8CC]/10 animate-pulse"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF]/5 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                    
                    <div className="w-4 h-4 bg-[#00E0FF] rounded-full animate-pulse shadow-lg relative z-10"></div>
                    
                    <div className="w-4 h-4 bg-[#00E0FF] rounded-full animate-pulse shadow-lg relative z-10" style={{animationDelay: '0.5s'}}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#00E0FF] rounded-full animate-bounce opacity-60"></div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#00B8CC] rounded-full animate-bounce opacity-60" style={{animationDelay: '0.3s'}}></div>
                  </div>
                </div>
                
                <div className="space-y-5">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight tracking-tight uppercase">
                    <span className="block bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent drop-shadow-2xl relative">
                      Testimonials
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-80"></div>
                    </span>
              </h1>
              {/* animated underline glow */}
              <div className="mt-3 flex justify-center">
                <div className="relative h-1 w-40 sm:w-56 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-80" />
                  <div className="absolute -left-1/2 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse opacity-40" />
                </div>
              </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-transparent rounded-full shadow-2xl relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse opacity-50"></div>
                  </div>
                </div>
                
                <div>
                  <p className="mx-auto max-w-xs sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-[900px] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed font-semibold text-gray-100 text-center px-4 sm:px-0">
                Creators and companies work with Creon Motion for dependable video production. Our clients value clear communication, organized workflows, and videos that are carefully edited from start to finish.
              </p>
                  {/* faint divider */}
                  <div className="mt-6 flex justify-center">
                    <div className="h-px w-64 sm:w-80 bg-gradient-to-r from-transparent via-[#00E0FF]/40 to-transparent" />
                  </div>
                </div>
                
          </div>

          </div>


        </section>
                </div>
                
      {/* Standalone Heading Section */}
      <section className="relative w-full flex flex-col items-center py-12 px-4">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,224,255,0.35) 1px, transparent 0)', backgroundSize: '22px 22px'}}></div>
        </div>
        <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-[#00E0FF] rounded-full blur-3xl opacity-20"></div>
        <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-[#00B8CC] rounded-full blur-3xl opacity-20"></div>
        {/* Geometric Patterns */}
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#00E0FF] rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-[#00E0FF] rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 border-2 border-[#00B8CC] rotate-12 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        </div>
        {/* Particle Effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-60"></div>
          <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-60" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-[#00E0FF] rounded-full animate-ping opacity-60" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/3 right-1/2 w-2 h-2 bg-[#00B8CC] rounded-full animate-pulse opacity-60" style={{animationDelay: '1.5s'}}></div>
        </div>
        {/* Enhanced Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-15">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(0,184,204,0.35) 1px, transparent 0)',
            backgroundSize: '38px 38px'
          }}></div>
        </div>
        {/* Animated Lines */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute top-8 left-12 w-0.5 h-16 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse"></div>
          <div className="absolute top-16 right-16 w-0.5 h-14 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute bottom-12 left-20 w-0.5 h-14 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse" style={{animationDelay: '0.8s'}}></div>
        </div>
        {/* Extra Design Layer: corner rings */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -top-8 -left-8 w-28 h-28 border border-[#00E0FF]/50 rounded-full animate-spin" style={{animationDuration: '18s'}}></div>
          <div className="absolute -bottom-8 -right-8 w-24 h-24 border border-[#00B8CC]/50 rounded-full animate-spin" style={{animationDuration: '22s', animationDirection: 'reverse'}}></div>
          <div className="absolute top-1/3 left-0 w-20 h-20 border border-[#00E0FF]/40 rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-0 w-16 h-16 border border-[#00B8CC]/40 rounded-full animate-ping" style={{animationDelay: '0.7s'}}></div>
                    </div>
        {/* Extra Design Layer: diagonal lines */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-8 top-10 w-px h-24 bg-gradient-to-b from-[#00E0FF] to-transparent" style={{transform: 'rotate(25deg)'}}></div>
          <div className="absolute right-10 top-8 w-px h-28 bg-gradient-to-b from-[#00B8CC] to-transparent" style={{transform: 'rotate(-20deg)'}}></div>
          <div className="absolute left-1/2 top-0 w-px h-24 bg-gradient-to-b from-[#00E0FF] to-transparent" style={{transform: 'rotate(12deg)'}}></div>
          <div className="absolute right-1/3 bottom-6 w-px h-24 bg-gradient-to-b from-[#00B8CC] to-transparent" style={{transform: 'rotate(-18deg)'}}></div>
                  </div>
        {/* Sweeping glow highlight */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-24 bg-gradient-to-r from-transparent via-[#00E0FF]/10 to-transparent blur-xl animate-pulse" style={{animationDuration: '2.2s'}}></div>
                </div>
        {/* Small sparkle dots */}
        <div className="pointer-events-none absolute inset-0 opacity-70">
          <div className="absolute top-6 left-1/2 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute top-24 right-1/2 w-1 h-1 bg-[#00B8CC] rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
          <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-14 right-1/4 w-1 h-1 bg-[#00B8CC] rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
              </div>
        <div className="inline-flex items-center gap-4 px-8 py-3 rounded-full border border-[#00E0FF] bg-black/30 backdrop-blur-sm shadow-md">
          <span className="w-3 h-3 bg-[#00E0FF] rounded-full"></span>
          <span className="text-[#00E0FF] text-sm sm:text-base md:text-lg font-bold tracking-wide uppercase">What Our Client Says</span>
          <span className="w-3 h-3 bg-[#00B8CC] rounded-full"></span>
            </div>
        <div className="mt-6 w-full flex justify-center px-4">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden">
            <video className="w-full h-full object-cover rounded-2xl sm:rounded-3xl" controls>
              <source src="/videos/Testimonial/1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
                </div>
        {/* 3D Curved Carousel */}
        <div className="mt-12 sm:mt-16 w-full max-w-7xl relative px-4 sm:px-6 lg:px-8 mx-auto" style={{ perspective: '1500px' }}>
          {/* Navigation Buttons */}
          <button 
            onClick={prevCard} 
            className="absolute left-4 sm-left-0 top-1/2 -translate-y-1/2 bg-[#00E0FF] text-black p-3 rounded-full shadow-[0_0_20px_rgba(0,224,255,0.4)] hover:scale-110 active:scale-95 transition-all duration-200 z-50 group"
            aria-label="Previous testimonial"
          > 
            <ChevronRight className="w-6 h-6 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <button 
            onClick={nextCard} 
            className="absolute right-4 sm-right-0 top-1/2 -translate-y-1/2 bg-[#00E0FF] text-black p-3 rounded-full shadow-[0_0_20px_rgba(0,224,255,0.4)] hover:scale-110 active:scale-95 transition-all duration-200 z-50 group"
            aria-label="Next testimonial"
          > 
            <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {/* 3D Stage */}
          <div className="relative h-[450px] sm:h-[500px] w-full flex items-center justify-center overflow-visible" style={{ transformStyle: 'preserve-3d' }}>
            {testimonialsData.map((t, i) => {
              const style = getCardStyle(i);
              return (
                <div 
                  key={t.id}
                  className="absolute w-[90%] max-w-[450px] transition-all duration-700 ease-out cursor-pointer group"
                  style={style}
                  onClick={() => setCardIndex(i)}
                >
                  <div className="relative flex flex-col h-full min-h-[320px] bg-[#020D12]/60 backdrop-blur-3xl p-8 sm:p-10 rounded-[2.5rem] border border-white/5 hover:border-[#00E0FF]/40 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(0,224,255,0.1)] overflow-hidden">
                    {/* Background Styling */}
                    <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00E0FF]/5 rounded-full blur-[80px] group-hover:bg-[#00E0FF]/15 transition-all duration-700"></div>
                    <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#00B8CC]/5 rounded-full blur-[80px] group-hover:bg-[#00B8CC]/10 transition-all duration-700"></div>

                    {/* Stylized Quote Mark */}
                    <span className="absolute top-4 left-6 text-9xl font-black text-[#00E0FF]/[0.05] pointer-events-none select-none transition-all duration-700 group-hover:text-[#00E0FF]/[0.1] group-hover:scale-110">
                      “
                    </span>

                    <p className="relative z-10 flex-grow text-base sm:text-lg leading-relaxed mb-8 font-medium text-gray-300 italic group-hover:text-white transition-colors duration-500 line-clamp-6">
                      "{t.text}"
                    </p>

                    <div className="relative z-10 flex items-center gap-4 mt-auto">
                      {/* Avatar / Logo */}
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
                        
                        {t.audio && (
                          <audio className="mt-3 h-8 w-32 sm:w-40 opacity-70 hover:opacity-100 transition-opacity" controls>
                            <source src={t.audio} type="audio/mp3" />
                          </audio>
                        )}
                      </div>
                    </div>

                    {/* Bottom Accentuating Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/[0.02] overflow-hidden">
                      <div className="h-full w-0 bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#00E0FF] transition-all duration-1000 ease-in-out group-hover:w-full"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Additional video below cards */}
        <div className="mt-8 sm:mt-10 w-full flex justify-center px-4">
          <div className="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-48 sm:max-w-64 md:max-w-80 lg:max-w-96 overflow-hidden">
            <video className="w-full h-full object-cover rounded-2xl sm:rounded-3xl" controls>
            <source src="/videos/Testimonial/scott.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        </div>
        </section>

    </div>
  );
};

export default Testimonial;
