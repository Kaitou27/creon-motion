'use client';

import React, { useState } from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const projects = [
  {
    category: 'YouTube Content Production',
    description: 'Story-driven video production designed to keep viewers engaged and watching.',
    videos: [
      { id: 'UEsPFAEYy3s', link: 'https://www.youtube.com/watch?v=UEsPFAEYy3s' },
      { id: 'DNWXyjvCSmc', link: 'https://www.youtube.com/watch?v=DNWXyjvCSmc' },
      { id: 'Fobf6gibbdo', link: 'https://www.youtube.com/watch?v=Fobf6gibbdo' }
    ]
  },
  {
    category: 'Short-Form Content',
    description: 'Vertical video production designed for platforms like TikTok, Reels, and YouTube Shorts.',
    videos: [
      { id: 'pP6SvvYY2yw', link: 'https://www.youtube.com/shorts/pP6SvvYY2yw' },
      { id: '1Z_p9aTT7G4', link: 'https://www.youtube.com/watch?v=1Z_p9aTT7G4' },
      { id: 'SWyn1EblWso', link: 'https://www.youtube.com/shorts/SWyn1EblWso' }
    ]
  },
  {
    category: 'Brand & Commercial Projects',
    description: 'Promotional and explainer videos created for brands and companies.',
    videos: [
      { id: 'NDRNIVqqu4c', link: 'https://www.youtube.com/watch?v=NDRNIVqqu4c' },
      { id: 'iANvo7hIaqE', link: 'https://www.youtube.com/watch?v=iANvo7hIaqE' },
      { id: 'hejyfAFTnGw', link: 'https://www.youtube.com/watch?v=hejyfAFTnGw' }
    ]
  }
];

export default function WorkPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <div className="bg-[#001A1F] min-h-screen text-white flex flex-col" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <Header />
      
      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4">Our Work</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Explore our portfolio of high-retention video editing, motion design, and storytelling.</p>
        </div>

        <div className="space-y-24">
          {projects.map((project, idx) => (
            <div key={idx} className="space-y-8">
              <div className="border-b border-[#00E0FF]/20 pb-4">
                <h2 className="text-2xl md:text-4xl font-bold text-[#00E0FF] uppercase">{project.category}</h2>
                <p className="text-gray-400 mt-2 text-lg">{project.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {project.videos.map((vid, vIdx) => (
                  <button 
                    key={vIdx} 
                    onClick={() => setActiveVideo(vid.id)}
                    className="group block rounded-xl overflow-hidden border border-white/10 hover:border-[#00E0FF]/50 transition-all duration-300 shadow-xl bg-black relative text-left w-full cursor-pointer"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={`https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`} 
                        alt={`${project.category} video`} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${vid.id}/hqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-[#001A1F]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-16 h-16 bg-[#00E0FF] rounded-full flex items-center justify-center text-[#001A1F] shadow-[0_0_20px_rgba(0,224,255,0.5)] transform scale-90 group-hover:scale-100 transition-transform duration-300">
                          <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <Footer />

      {/* Video Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/90 backdrop-blur-sm transition-opacity" onClick={() => setActiveVideo(null)}>
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <iframe 
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`} 
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
