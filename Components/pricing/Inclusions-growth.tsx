'use client';

import React, { useEffect } from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const InclusionsGrowth = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  const videoDetails = [
    "8 to 10 long-form videos per month",
    "Typically 15 to 20 minutes each",
    "8 Short Clips Per Month (More content from the videos you are already producing)"
  ];

  const creativeDetails = [
    "Stronger Hook and Intro Support: We can suggest changes to the opening, not just edit what is already there",
    "Story and Structure Support: If a section feels too long, repetitive, confusing, or out of order, we help improve the flow",
    "More Visual Sourcing: More support finding footage, screenshots, images, references, and other visuals",
    "Custom Graphics for Selected Scenes: Simple maps, timelines, charts, diagrams, and designed graphics",
    "Extra Thumbnail Option: A second thumbnail idea for up to four priority videos each month",
    "Everything in Editing Partner"
  ];

  const teamDetails = [
    "Monthly Content Review: Once a month, we review recent videos and discuss improvements",
    "Dedicated Creative Lead: One person tracks your channel style, feedback, and creative direction",
    "Priority Production: Growth Partner projects receive priority in the schedule",
    "Your Channel Style Saved: We keep your fonts, colors, references, and preferences organized",
    "Final Review Before Delivery",
    "3 Revision Rounds Per Video",
    "Upload-Ready Final Files"
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
                Growth Partner
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Full Inclusions
              </h1>
              <p className="text-xl text-gray-400 mt-4 max-w-2xl">
                More videos, more creative support, and less for your team to manage.
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="text-4xl font-black text-[#00E0FF] drop-shadow-[0_0_10px_rgba(0,224,255,0.3)]">
                $2,399
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">Per Month</div>
            </div>
          </div>
        </div>

        {/* Compact Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="space-y-6">
            <ListBlock title="Output & Deliverables" items={videoDetails} />
            <ListBlock title="Team & Management" items={teamDetails} />
          </div>
          <div>
            <ListBlock title="Creative Support" items={creativeDetails} />
          </div>
        </div>

        {/* Best For & CTA */}
        <div className="bg-[#00E0FF]/5 border border-[#00E0FF]/30 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h4 className="text-[#00E0FF] font-bold uppercase tracking-widest text-xs mb-2">Best For</h4>
            <p className="text-white font-medium text-lg">
              Creators and teams publishing consistently who want more than an editor and want help improving the videos as they produce more content.
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

export default InclusionsGrowth;
