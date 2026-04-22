'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Video, ChevronRight, Heart, MessageSquare } from 'lucide-react';
import ScopeOverview from './ScopeOverview';


interface ThanksLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  ctaText: string;
  ctaLink: string;
  previousWorks: {
    title?: string;
    thumbnail: string;
    link: string;
  }[];
  testimonials: {
    name: string;
    text: string;
    logo?: string;
    initial?: string;
  }[];
  category: 'youtube' | 'short' | 'brand' | 'docu' | 'edu' | 'mixed';
  hideIcons?: boolean;
}

const ThanksLayout: React.FC<ThanksLayoutProps> = ({
  title,
  subtitle,
  description,
  videoUrl,
  ctaText,
  ctaLink,
  previousWorks,
  testimonials,
  category,
  hideIcons = false
}) => {

  // Extract YouTube ID (works for watch, embed, shorts)
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Main video
  const finalEmbedUrl = `https://www.youtube.com/embed/PPUvhTXJO1A?rel=0`;

  return (
    <div className="bg-[#001A1F] text-white" style={{ fontFamily: 'var(--font-montserrat)' }}>

      {/* Main content with scoped backgrounds */}
      <div className="relative overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E0FF]/5 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#00B8CC]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E0FF]/3 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '4s' }} />
        </div>

        {/* Subtle dotted grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}></div>
        </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">

        {/* Hero */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full text-[#00E0FF] text-sm font-bold">
            <CheckCircle size={16} />
            Submission Successful
          </div>

          <h1 className="text-5xl md:text-7xl font-black uppercase">
            {title} <span className="text-[#00E0FF]">{subtitle}</span>
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto whitespace-pre-line">
            {description}
          </p>
        </div>

        {/* Main Video */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src={finalEmbedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

        </div>

        {/* Testimonials */}
        <div className="mb-32 selection:bg-[#00E0FF]/30 selection:text-white">
          <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              What our <span className="text-[#00E0FF]">clients say</span>
            </h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className="group relative flex flex-col bg-[#020D12]/60 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/5 hover:border-[#00E0FF]/40 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(0,224,255,0.1)] overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={i * 200}
                data-aos-duration="1000"
              >
                {/* Background Styling */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00E0FF]/5 rounded-full blur-[80px] group-hover:bg-[#00E0FF]/15 transition-all duration-700"></div>
                <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-[#00B8CC]/5 rounded-full blur-[80px] group-hover:bg-[#00B8CC]/10 transition-all duration-700"></div>

                {/* Stylized Quote Mark */}
                <span className="absolute top-4 left-6 text-9xl font-black text-[#00E0FF]/[0.05] pointer-events-none select-none transition-all duration-700 group-hover:text-[#00E0FF]/[0.1] group-hover:scale-110">
                  “
                </span>

                <p className="relative z-10 flex-grow text-lg leading-relaxed mb-10 font-medium text-gray-300 italic group-hover:text-white transition-colors duration-500">
                  "{t.text}"
                </p>

                <div className="relative z-10 flex items-center gap-4 mt-auto">
                  <div className="flex-shrink-0">
                    {t.logo ? (
                      <img 
                        src={t.logo} 
                        alt={t.name} 
                        className="h-12 w-12 rounded-full shadow-lg border border-white/10 object-cover transition-transform duration-500 group-hover:scale-110" 
                      />
                    ) : (
                      <div className="h-12 w-12 rounded-full bg-[#00E0FF]/10 flex items-center justify-center border border-[#00E0FF]/20 text-[#00E0FF] font-black shadow-lg shadow-[#00E0FF]/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-[#00E0FF]/20">
                        {t.initial || t.name.charAt(0).toUpperCase()}
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#00E0FF] font-black text-base uppercase tracking-wider group-hover:text-white transition-colors duration-300">{t.name}</span>
                    <span className="text-gray-500 text-[10px] uppercase font-bold tracking-[0.25em] mt-0.5">Verified Partner</span>
                  </div>
                </div>

                {/* Bottom Accentuating Line */}
                <div className="absolute bottom-0 left-0 w-full h-[5px] bg-white/[0.02] overflow-hidden">
                  <div className="h-full w-0 bg-gradient-to-r from-[#00E0FF] via-[#00B8CC] to-[#00E0FF] transition-all duration-1000 ease-in-out group-hover:w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scope and Delivery Overview */}
        <ScopeOverview />

        {/* Previous Works - VIDEOS PLAY DIRECTLY */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase">
                Explore Our <span className="text-[#00E0FF]">
                  {category === 'youtube' ? 'Videos' : category === 'short' ? 'Shorts' : category === 'docu' ? 'Documentary & Motion-Graphics' : category === 'edu' ? 'Talking-head & Educational VIDEOS' : category === 'mixed' ? 'Portfolio' : 'Projects'}
                </span>
              </h2>
              <p className="text-gray-400">Watch directly on this page.</p>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {previousWorks.map((work, index) => {
              const id = getYouTubeId(work.link);
              const embedUrl = id
                ? `https://www.youtube.com/embed/${id}?rel=0`
                : work.link;

              return (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden border border-white/10 hover:border-[#00E0FF]/50 transition-all shadow-lg"
                >
                  {/* Video */}
                  <div className="aspect-video">
                    <iframe
                      src={embedUrl}
                      title={work.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Feedback CTA */}
        <div className="mt-32 pt-20 border-t border-white/5 text-center">
          <div className="inline-flex items-center gap-2 mb-6 text-[#00E0FF]/60 text-xs font-bold uppercase tracking-widest">
            <Heart size={14} className="fill-[#00E0FF]/20" />
            Your Voice Matters
          </div>
          <h3 className="text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">
            How was your <span className="text-[#00E0FF]">experience?</span>
          </h3>
          <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
            Help us shape the future of Creon Motion. Tell us what we did great or where we can improve.
          </p>
          <Link 
            href="/feedback" 
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-[#00E0FF] text-[#00E0FF] font-black rounded-2xl overflow-hidden transition-all duration-300 hover:text-[#001A1F]"
          >
            <div className="absolute inset-0 w-0 bg-[#00E0FF] transition-all duration-300 ease-out group-hover:w-full -z-10"></div>
            <MessageSquare size={20} />
            GIVE FEEDBACK
            <ChevronRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      </div>

    </div>
  );
};

export default ThanksLayout;