'use client';

import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InclusionEditing = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const outputDetails = [
    "6 to 8 long-form videos per month (Typically 15 to 20 minutes each)",
    "6 Short Clips Per Month (Selected moments prepared for Shorts, Reels, or TikTok)",
    "Custom Thumbnail for Every Video",
    "3 Revision Rounds Per Video",
    "Upload-Ready Final Files",
    "Project limits: Usually up to 60 minutes or 30 GB of raw footage per video"
  ];

  const editingDetails = [
    "Complete Long-Form Editing: Clean cuts, pacing, B-roll, text, transitions, sound, and final polish",
    "Hook and Intro Improvement: We help tighten openings that feel slow or take too long",
    "B-Roll and Visual Sourcing: Finding relevant footage, images, screenshots, and supporting visuals",
    "Light Motion Graphics and Animated Text: Titles, callouts, lower thirds, and simple graphics",
    "Music and Sound: Licensed music, sound effects, dialogue cleanup, and balanced audio",
    "Color Correction: Keeping footage clean and visually consistent"
  ];

  const teamDetails = [
    "Same Team for Your Channel: Your team gets familiar with your style and preferences over time",
    "One Point of Contact: No need to manage separate editors and designers",
    "Final Review Before Delivery: We check for editing mistakes, audio, spelling, and export issues",
    "Easy Video Feedback: Leave comments directly on the video so revisions are clear"
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
                Editing Partner
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Full Inclusions
              </h1>
              <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                You send the footage. We handle the edit, visuals, thumbnail, and final delivery.
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-4xl font-black text-[#00E0FF] drop-shadow-[0_0_10px_rgba(0,224,255,0.3)]">
                $1,599
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Per Month</div>
            </div>
          </div>
        </div>

        {/* Compact Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-6">
            <ListBlock title="Output & Deliverables" items={outputDetails} />
            <ListBlock title="Team & Workflow" items={teamDetails} />
          </div>
          <div>
            <ListBlock title="Included Editing Services" items={editingDetails} />
          </div>
        </div>

        {/* Best For & CTA */}
        <div className="bg-[#00E0FF]/5 border border-[#00E0FF]/30 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h4 className="text-[#00E0FF] font-bold uppercase tracking-widest text-xs mb-2">Best For</h4>
            <p className="text-white font-medium text-lg">
              Creators who already have their ideas, scripts, or footage ready and want a reliable team to handle post-production every month.
            </p>
          </div>
          <a href="/quote" className="w-full md:w-auto inline-flex items-center justify-center px-8 py-4 rounded bg-[#00E0FF] text-[#001A1F] font-black uppercase tracking-wider hover:bg-white transition-all shadow-[0_0_20px_rgba(0,224,255,0.3)]">
            Get Started
            <ArrowRight size={20} strokeWidth={3} className="ml-2" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default InclusionEditing;
