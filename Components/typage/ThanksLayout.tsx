'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Video, ChevronRight } from 'lucide-react';


interface ThanksLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  ctaText: string;
  ctaLink: string;
  previousWorks: {
    title: string;
    thumbnail: string;
    link: string;
  }[];
  testimonials: {
    name: string;
    text: string;
    logo?: string;
  }[];
  category: 'youtube' | 'short' | 'brand' | 'docu' | 'edu' | 'mixed';
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
  category
}) => {

  // Extract YouTube ID (works for watch, embed, shorts)
  const getYouTubeId = (url: string) => {
    const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=|shorts\/)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  // Main video
  const videoId = getYouTubeId(videoUrl);
  const finalEmbedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?rel=0`
    : videoUrl;

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

          <div className="mt-8 flex justify-center">
            <Link
              href={ctaLink}
              className="px-8 py-4 bg-[#00E0FF] text-black font-bold rounded-xl flex items-center gap-2"
            >
              {ctaText}
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-4">
              What our <span className="text-[#00E0FF]">clients say</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] p-8 rounded-2xl border border-[#00E0FF]/10 hover:border-[#00E0FF]/30 transition-all duration-300 group">
                <p className="text-base leading-relaxed mb-6 font-medium text-gray-300 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  {t.logo ? (
                    <img src={t.logo} className="w-10 h-10 rounded-full border border-[#00E0FF]/20" />
                  ) : (
                    <div className="w-10 h-10 bg-[#00E0FF]/10 rounded-full flex items-center justify-center border border-[#00E0FF]/20 text-[#00E0FF] font-bold">
                      {t.name[0]}
                    </div>
                  )}
                  <div className="flex flex-col">
                    <span className="text-[#00E0FF] font-bold text-sm tracking-wide">{t.name}</span>
                    <span className="text-gray-500 text-[10px] uppercase tracking-[0.2em]">Verified Client</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Previous Works - VIDEOS PLAY DIRECTLY */}
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black uppercase">
                Explore Our <span className="text-[#00E0FF]">
                  {category === 'youtube' ? 'Videos' : category === 'short' ? 'Shorts' : category === 'docu' ? 'Documentaries' : category === 'edu' ? 'Lessons' : category === 'mixed' ? 'Portfolio' : 'Projects'}
                </span>
              </h2>
              <p className="text-gray-400">Watch directly on this page.</p>
            </div>

            <Link href="/brand" className="flex items-center gap-2 text-[#00E0FF]">
              View Full Portfolio
              <ChevronRight size={18} />
            </Link>
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

                  {/* Title */}
                  <div className="p-4 flex items-center justify-between">
                    <span className="font-bold">{work.title}</span>
                    <Video size={16} className="text-[#00E0FF]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      </div>

    </div>
  );
};

export default ThanksLayout;