"use client";

import React, { useState } from 'react';

const FAQS = [
  {
    question: 'What types of videos do you edit?',
    answer:
      'We specialize in short-form editing for Reels, TikToks, and Shorts, YouTube and faceless channel content, as well as motion graphics and 2D animation.',
  },
  {
    question: 'What services do you offer?',
    answer:
      'You can check our Services page for a complete list. TikToks, and Shorts, YouTube and faceless channel content, as well as motion graphics and 2D animation.',
  },
  {
    question: 'How much do your editing services cost?',
    answer:
      'Visit our Pricing page for detailed packages and rates. We offer flexible pricing to suit different project scopes and budgets.',
  },
  {
    question: 'Can I request revisions?',
    answer: 'Yes! We offer revision rounds to ensure you\'re completely satisfied with the final result.',
  },
  {
    question: 'Do you work with content creators, businesses, or agencies?',
    answer:
      'All of the above! Whether you\'re a solo creator or a brand, we tailor our editing to match your style and goals.',
  },
  {
    question: 'Do you provide sample work or client feedback?',
    answer:
      'Absolutely! Check out our Testimonials page to hear from satisfied clients and see examples of our previous work.',
  },
  {
    question: 'What if the package doesn\'t fit my needs?',
    answer:
      'We also offer custom pricing. If your project is different from our standard packages, just tell us what you need and we\'ll make a plan that works for you.',
  },
  {
    question: 'Can I mix long-form and short-form videos in one plan?',
    answer:
      'Yes. We can adjust your plan if you want a mix of long and short videos instead of sticking to one type.',
  },
  {
    question: 'If I don\'t use all my videos this month, can I use them next month?',
    answer:
      'No. Unused videos or minutes don\'t roll over. Each plan resets monthly, but you can adjust your package anytime if your needs change.',
  },
  {
    question: 'Do you also provide thumbnails, scripts, and voiceovers?',
    answer:
      'Yes. We can include thumbnails, scripts, and voiceovers in your package if you need them.',
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
    <section className="bg-[#001A1F] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#00E0FF]/15" style={{ fontFamily: 'var(--font-montserrat)' }}>
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
            <div className="bg-gradient-to-r from-[#0A0F1A] to-[#0F1F2A] rounded-2xl p-6 border border-[#00E0FF]/20 shadow-lg relative overflow-hidden group">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#00E0FF] rounded-full blur-2xl"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-[#00E0FF]/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-[#00E0FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-[#00E0FF] transition-colors duration-300">Need More Help?</h3>
                </div>
                <p className="text-gray-300 text-sm group-hover:text-gray-200 transition-colors duration-300">
                  Can't find what you're looking for? Our team is here to help with any specific questions about your project.
                </p>
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
