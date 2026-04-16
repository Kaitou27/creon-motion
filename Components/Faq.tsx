"use client";

import React, { useState } from 'react';

const FAQS = [
  {
    question: 'How fast will I receive my videos?',
    answer:
      'Delivery depends on the package and the complexity of the project. Most videos are delivered within 2 to 4 days, balancing speed and quality.',
  },
  {
    question: 'How do I request videos?',
    answer:
      'You can start by submitting a project brief with the details of your video. From there, we review the scope, align on the direction, and guide you through the next steps.',
  },
  {
    question: 'What happens after I submit a project brief?',
    answer:
      'After you submit your brief, we review your answers and send relevant samples based on your content type. This helps you understand the quality and style we deliver.\n\nWe also provide a short overview of how the process works, including what’s included, timelines, and how approvals are handled.\n\nFrom there, we guide you to the next step, either a short call or a simple scope confirmation to get started.',
  },
  {
    question: 'Why wouldn’t I just hire my own editor?',
    answer:
      'Hiring one editor means managing everything yourself. We handle the full process from editing and visuals to quality control, so you get consistent output without the extra workload.',
  },
  {
    question: 'What if I’m not happy with my video?',
    answer:
      'Revisions are included in every project. We refine the video until it aligns with your expectations and goals.',
  },
  {
    question: 'Do you offer trials or sample videos?',
    answer:
      'We can share relevant samples of our previous work. For custom styles, we offer a paid pilot project to make sure we are aligned before moving forward.',
  },
  {
    question: 'Are there any refunds if I don’t like the service?',
    answer:
      'Because of the time and resources involved, we don’t offer refunds. However, we work closely with you through revisions to make sure you’re satisfied with the final result.',
  },
  {
    question: 'Can I mix long-form and short-form videos in one plan?',
    answer:
      'Yes, depending on your needs. We can structure your plan to include both and recommend the best setup based on your content goals.',
  },
  {
    question: 'What if the package doesn’t fit my needs?',
    answer:
      'No problem. We can adjust the plan or recommend a better setup based on your content, workflow, and volume.',
  },
  {
    question: 'Do you work with content creators, businesses, or agencies?',
    answer:
      'We work with all three, especially creators and brands focused on building consistent, high-quality content.',
  },
  {
    question: 'What makes your service different?',
    answer:
      'We don’t just edit videos. We focus on how your content flows, combining structure, visuals, and pacing to keep viewers watching from start to finish.',
  },
  {
    question: 'Do I need to prepare everything before starting?',
    answer:
      'No. You can start with what you have, and we’ll help organize the direction, visuals, and overall flow from there.',
  },
];

const FloatingElement = ({ delay, duration, className, size = "w-3 h-3" }: { delay: number, duration: number, className: string, size?: string }) => (
  <div 
    className={`absolute ${className} animate-bounce opacity-40`}
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
    className={`absolute ${className} w-0.5 h-16 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-60`}
    style={{ animationDelay: `${delay}s` }}
  ></div>
);

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="bg-[#001A1F] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#00E0FF]/15" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/40 to-transparent"></div>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E0FF]/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#00E0FF]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 bg-[#00E0FF]/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 bg-[#00E0FF]/4 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-64 h-64 bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '5s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-[#00E0FF]/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '6s'}}></div>
      </div>
      
      {/* Enhanced Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Animated Lines */}
      <AnimatedLine delay={0} className="top-10 left-32" />
      <AnimatedLine delay={1} className="top-20 right-40" />
      <AnimatedLine delay={2} className="bottom-20 left-20" />
      <AnimatedLine delay={3} className="bottom-10 right-20" />
      
      {/* Enhanced Floating Elements */}
      <FloatingElement delay={0} duration={3} className="top-10 left-20" />
      <FloatingElement delay={1} duration={4} className="top-32 right-32" />
      <FloatingElement delay={2} duration={3.5} className="bottom-32 left-1/4" />
      <FloatingElement delay={3} duration={5} className="top-1/2 right-10" />
      <FloatingElement delay={4} duration={4.5} className="bottom-20 right-1/3" />
      <FloatingElement delay={5} duration={3} className="top-1/4 left-1/3" />
      <FloatingElement delay={6} duration={4} className="bottom-1/4 right-1/4" />
      <FloatingElement delay={7} duration={3.5} className="top-3/4 left-1/2" />
      
      {/* Larger floating elements */}
      <FloatingElement delay={2} duration={6} className="top-1/3 right-1/4" size="w-4 h-4" />
      <FloatingElement delay={4} duration={5} className="bottom-1/3 left-1/2" size="w-4 h-4" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Enhanced Heading and Description */}
          <div className="space-y-8">
            {/* Enhanced Tagline */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#00E0FF]/10 to-[#00B8CC]/10 text-[#00E0FF] px-6 py-3 rounded-2xl border border-[#00E0FF]/20 shadow-lg relative overflow-hidden group">
              <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse relative">
                <div className="absolute inset-0 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
              </div>
              <span className="text-sm font-semibold tracking-wide">Frequently asked questions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-0 h-0 border-l-[12px] border-l-[#00E0FF]/30 border-t-[12px] border-t-[#00E0FF]/30 rounded-tl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[12px] border-r-[#00E0FF]/30 border-b-[12px] border-b-[#00E0FF]/30 rounded-br-2xl"></div>
            </div>
            
            {/* Enhanced Main Heading */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight relative">
                <span className="text-white">Got Questions? Ask Us </span>
                <span className="text-[#00E0FF] relative">
                  Anything.
                  <div className="absolute inset-0 text-[#00E0FF] opacity-20 blur-sm animate-pulse"></div>
                  <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#00E0FF] to-transparent rounded-full"></div>
                </span>
              </h2>
              
              {/* Enhanced Decorative Elements */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-0.5 bg-gradient-to-r from-[#00E0FF] to-transparent animate-pulse"></div>
                <div className="w-3 h-3 bg-[#00E0FF] rounded-full animate-pulse relative">
                  <div className="absolute inset-0 w-3 h-3 bg-[#00E0FF] rounded-full animate-ping opacity-30"></div>
                </div>
                <div className="w-16 h-0.5 bg-gradient-to-l from-[#00E0FF] to-transparent animate-pulse"></div>
              </div>
            </div>
            
            {/* Enhanced Description */}
            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
             We've answered some of the most common ones below — but if you're unsure, just message us.
            </p>
            
            {/* Enhanced Info Box */}
            <div className="bg-gradient-to-r from-[#0A0F1A] to-[#0F1F2A] rounded-2xl p-8 border border-[#00E0FF]/25 shadow-xl relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E0FF] rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#00E0FF]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(0,224,255,0.2)]">
                    <svg className="w-6 h-6 text-[#00E0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#00E0FF] transition-colors duration-300">Still unsure?</h3>
                </div>
                <p className="text-gray-300 text-base group-hover:text-gray-200 transition-colors duration-300 mb-8 leading-relaxed">
                  We’ll guide you based on your content and goals.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/quote" className="flex-1 px-6 py-3.5 bg-[#00E0FF] text-[#001A1F] rounded-xl font-bold text-center hover:bg-[#00B8CC] transition-all duration-300 shadow-lg hover:shadow-[#00E0FF]/20 transform hover:-translate-y-0.5 whitespace-nowrap">
                    Start Project
                  </a>
                  <a href="/discovery" className="flex-1 px-6 py-3.5 bg-transparent border-2 border-[#00E0FF]/40 text-white rounded-xl font-bold text-center hover:border-[#00E0FF] hover:bg-[#00E0FF]/5 transition-all duration-300 transform hover:-translate-y-0.5 whitespace-nowrap">
                    Book a Call
                  </a>
                </div>
              </div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-l-[#00E0FF]/20 border-t-[16px] border-t-[#00E0FF]/20"></div>
            </div>
            
            {/* Additional decorative element */}
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Right Column - Enhanced FAQ Accordion */}
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-[#00E0FF]/10 border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 group relative overflow-hidden"
              >
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#00E0FF] rounded-full blur-2xl animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#00E0FF] rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Enhanced Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00E0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#00E0FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] rounded-2xl"></div>
                </div>
                
                <div className="relative z-10">
            <button
              onClick={() => handleToggle(idx)}
                    className="w-full flex items-center justify-between text-left focus:outline-none group"
                  >
                    <span className="text-lg font-semibold text-white group-hover:text-[#00E0FF] transition-colors duration-300 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 ml-4">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] flex items-center justify-center transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:scale-110 relative ${
                        openIndex === idx ? 'rotate-180' : ''
                      }`}>
                        <svg 
                          className="w-5 h-5 text-[#001A1F]" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M19 9l-7 7-7-7" 
                          />
                        </svg>
                        <div className="absolute inset-0 bg-[#00E0FF] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </div>
            </button>

                  {openIndex === idx && (
                    <div className="mt-4 pt-4 border-t border-[#00E0FF]/20 animate-in slide-in-from-top-2 duration-300">
                      <p className="text-gray-300 leading-relaxed">
                {faq.answer}
                      </p>
              </div>
            )}
                </div>
                
                {/* Enhanced Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[16px] border-l-[#00E0FF]/30"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[16px] border-r-[#00E0FF]/20"></div>
          </div>
        ))}
      </div>
    </div>
      </div>
    </section>
  );
};

export default Faq;
