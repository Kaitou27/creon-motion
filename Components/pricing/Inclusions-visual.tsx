'use client';

import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InclusionsVisual = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const outputDetails = [
    "Up to 5 visually detailed long-form videos per month",
    "Typically 15 to 20 minutes each",
    "5 Short Clips Per Month (Selected moments repurposed from the finished long-form videos)",
    "Custom Thumbnail for Every Video",
    "3 Revision Rounds Per Video",
    "Upload-Ready Final Files"
  ];

  const editingDetails = [
    "Detailed Long-Form Editing: More time is spent building scenes, pacing the story, and developing the visuals",
    "Deeper Visual Sourcing: We find and organize more of the footage, images, screenshots, and archival material needed",
    "Hook and Story Support: We help improve the opening and structure when something can be clearer",
    "Custom Scene Design: Selected parts can be built from multiple visual layers instead of standard B-roll",
    "3D Camera Movement & Parallax Scenes: Layered photo and graphic scenes with depth",
    "Custom Motion Graphics, Maps, and Timelines: Detailed graphics for locations, events, and story progression",
    "Charts and Data Visuals: Clear explanations for numbers, comparisons, or statistics",
    "Animated Text and Callouts",
    "Music and Detailed Sound Design",
    "Color Correction and Final Polish"
  ];

  const teamDetails = [
    "Dedicated Creative Lead",
    "Priority Production",
    "Final Review Before Delivery"
  ];

  const ListBlock = ({ title, items }: { title: string, items: string[] }) => (
    <div className="bg-[#0A0F1A]/80 border border-[#00E0FF]/20 rounded-xl p-6 hover:border-[#00E0FF]/50 transition-all">
      <h3 className="text-[#00E0FF] font-black uppercase tracking-widest text-sm mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-start text-gray-200 text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-[#00E0FF] mr-3 shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="bg-[#001A1F] text-white py-24 px-4 min-h-screen relative font-montserrat" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Subtle Background */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10" data-aos="fade-up" data-aos-duration="600">
        
        {/* Header Section */}
        <div className="mb-12 border-b border-[#00E0FF]/20 pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-[#00E0FF] font-bold tracking-widest text-xs uppercase bg-[#00E0FF]/10 px-3 py-1 rounded border border-[#00E0FF]/20 mb-4 inline-block">
                Visual Partner
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Full Inclusions
              </h1>
              <p className="text-lg text-gray-400 mt-4 max-w-2xl font-medium">
                For documentary, faceless, explainer, and story-led videos that need more visual work in every edit.
                This package is different—you are not paying for more videos, you are paying for more work inside each video.
              </p>
            </div>
            <div className="text-left md:text-right shrink-0">
              <div className="text-sm font-bold uppercase tracking-widest text-[#00E0FF] mb-1">Starting at</div>
              <div className="text-4xl font-black text-[#00E0FF] drop-shadow-[0_0_10px_rgba(0,224,255,0.3)]">
                $2,999
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Per Month</div>
            </div>
          </div>
        </div>

        {/* Compact Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="space-y-6">
            <ListBlock title="Output & Deliverables" items={outputDetails} />
            <ListBlock title="Team & Workflow" items={teamDetails} />
          </div>
          <div>
            <ListBlock title="Editing & Visual Work" items={editingDetails} />
          </div>
        </div>
        
        {/* Important Notice */}
        <div className="bg-[#00E0FF]/5 border border-[#00E0FF]/30 rounded-xl p-6 mb-12 flex items-start gap-4">
          <AlertTriangle className="text-[#00E0FF] w-6 h-6 shrink-0 mt-0.5" />
          <p className="text-gray-300 text-sm font-medium">
            <strong className="text-white block mb-1">Important</strong>
            Full 3D modeling, character animation, highly complex animation, and unusually large amounts of custom scene work are quoted separately.
          </p>
        </div>

        {/* Best For & CTA */}
        <div className="bg-[#00E0FF]/5 border border-[#00E0FF]/30 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h4 className="text-[#00E0FF] font-bold uppercase tracking-widest text-xs mb-2">Best For</h4>
            <p className="text-white font-medium text-lg">
              Faceless channels, documentaries, explainers, visual essays, and story-led videos where the visuals are a major part of the viewing experience.
            </p>
          </div>
          <a href="/quote" className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 rounded bg-[#00E0FF] text-[#001A1F] font-black uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(0,224,255,0.3)] text-center shrink-0">
            Discuss Your Video Style
            <ArrowRight size={20} strokeWidth={3} className="ml-2 hidden sm:block" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default InclusionsVisual;
