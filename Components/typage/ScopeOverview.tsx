'use client';

import React from 'react';
import {
  Zap,
  Package,
  Clock,
  RefreshCcw,
  XCircle,
  TrendingUp,
  Users,
  FileCheck
} from 'lucide-react';

const ScopeOverview = () => {
  const sections = [
    {
      id: "01",
      title: "1. What You’re Paying For",
      icon: <Zap className="text-[#00E0FF]" size={24} />,
      content: [
        { type: 'text', value: "You are not paying for “editing hours.” You are paying for a structured production workflow designed to improve clarity, retention, and performance." },
        { type: 'text', value: "Each deliverable includes:" },
        {
          type: 'list', value: [
            "Script and objective review",
            "Retention-focused structure and pacing",
            "Professional editing",
            "Motion graphics (if included in scope)",
            "Sound design and polish",
            "Quality control review before delivery"
          ]
        },
        { type: 'text', value: "Work is handled through a structured team workflow not informal, single editor production." }
      ]
    },
    {
      id: "02",
      title: "2. Deliverables",
      icon: <Package className="text-[#00E0FF]" size={24} />,
      content: [
        { type: 'text', value: "Before production begins, we formally define:" },
        {
          type: 'list', value: [
            "Deliverable type and format",
            "Duration range",
            "Output volume",
            "Complexity level",
            "Timeline",
            "Revision limits"
          ]
        },
        { type: 'text', value: "If it is not defined in writing, it is not included." }
      ]
    },
    {
      id: "03",
      title: "3. Timeline & Start Conditions",
      icon: <Clock className="text-[#00E0FF]" size={24} />,
      content: [
        { type: 'text', value: "Production timelines begin only when required inputs are received, including:" },
        {
          type: 'list', value: [
            "Final script (if applicable)",
            "Brand assets",
            "Raw footage",
            "Clear creative direction",
            "Confirmed decision-maker"
          ]
        },
        { type: 'text', value: "Delays in asset submission or feedback may shift delivery timelines." }
      ]
    },
    {
      id: "04",
      title: "4. Revisions",
      icon: <RefreshCcw className="text-[#00E0FF]" size={24} />,
      content: [
        { type: 'text', value: "Each deliverable includes defined revision rounds." },
        { type: 'text', value: "Revisions include:" },
        {
          type: 'list', value: [
            "Adjustments within approved direction",
            "Clarifications within scope"
          ]
        },
        { type: 'text', value: "Revisions do not include:" },
        {
          type: 'list', value: [
            "New creative direction",
            "Additional scenes",
            "Increased duration",
            "Expanded animation complexity",
            "Additional deliverables"
          ]
        },
        { type: 'text', value: "Material scope changes trigger formal change management." }
      ]
    },
    {
      id: "05",
      title: "5. What Is Not Included",
      icon: <XCircle className="text-[#00E0FF]" size={24} />,
      content: [
        { type: 'text', value: "Unless explicitly scoped:" },
        {
          type: 'list', value: [
            "Unlimited revisions",
            "Unpaid trial edits",
            "Speculative work",
            "Undefined-scope starts",
            "Same day turnaround",
            "Platform strategy / ads"
          ]
        },
        { type: 'text', value: "Structured production protects quality." }
      ]
    },
    {
      id: "06",
      title: "6. What Increases Investment",
      icon: <TrendingUp className="text-[#00E0FF]" size={24} />,
      content: [
        { type: 'text', value: "Investment adjusts when scope changes, including:" },
        {
          type: 'list', value: [
            "Increased output volume",
            "Higher complexity",
            "Accelerated timelines",
            "Additional revision cycles",
            "Expanded deliverables"
          ]
        },
        { type: 'text', value: "Any scope change requires written approval before continuation." }
      ]
    },
    {
      id: "07",
      title: "7. Engagement Models",
      icon: <Users className="text-[#00E0FF]" size={24} />,
      content: [
        { type: 'text', value: "Engagement Framework Original:" },
        {
          type: 'list', value: [
            "Retainer Commitment",
            "Paid Pilot",
            "Single Project"
          ]
        },
        { type: 'text', value: "Production capacity is reserved upon deposit." }
      ]
    },
    {
      id: "08",
      title: "8. Decision & Scheduling",
      icon: <FileCheck className="text-[#00E0FF]" size={24} />,
      content: [
        {
          type: 'list', value: [
            "Proposals are valid for 7–10 days",
            "Scheduling confirmed upon deposit",
            "Capacity is intentionally allocated"
          ]
        }
      ]
    }
  ];

  return (
    <div className="relative mt-24 mb-24 px-4 selection:bg-[#00E0FF]/30 selection:text-white overflow-hidden">
      {/* Custom Keyframe Animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
          100% { transform: scale(1); opacity: 0.1; }
        }
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
        .animate-float-icon { animation: float 6s ease-in-out infinite; }
        .shimmer-active:hover::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 224, 255, 0.05),
            transparent
          );
          animation: shimmer 1.5s ease-in-out infinite;
        }
      `}</style>

      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#00E0FF]/5 rounded-full blur-[140px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#00B8CC]/5 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto" data-aos="fade-down" data-aos-duration="1000">
        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-2 leading-tight drop-shadow-[0_10px_30px_rgba(0,224,255,0.1)]">
          What’s <span className="text-white">Included</span>
        </h2>
        <div className="inline-block relative px-2">
          <h3 className="text-xl md:text-4xl font-black uppercase tracking-tight text-[#00E0FF] relative z-10">
            Scope & Delivery Overview
          </h3>
          <div className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-[#00E0FF] to-[#00B8CC]"></div>
        </div>
      </div>

      {/* Grid: 3 columns on desktop for "more smaller" cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {sections.map((section, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col bg-[#020D12]/60 backdrop-blur-3xl border border-white/5 p-5 md:p-7 rounded-[1.5rem] transition-all duration-1000 ease-in-out hover:-translate-y-3 hover:shadow-[0_40px_80px_rgba(0,0,0,0.6),0_0_40px_rgba(0,224,255,0.08)] hover:border-[#00E0FF]/40 overflow-hidden shimmer-active"
            data-aos="fade-up"
            data-aos-delay={idx * 50}
          >
            {/* Background Numbering */}
            <span className="absolute top-0 right-2 text-[8rem] font-black text-white/[0.015] pointer-events-none select-none transition-all duration-1000 group-hover:text-[#00E0FF]/[0.05]">
              {section.id}
            </span>

            {/* Glowing Corner Blobs */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00E0FF]/5 rounded-full blur-[80px] group-hover:bg-[#00E0FF]/15 transition-all duration-1000 animate-pulse-glow"></div>

            <div className="relative z-10 flex flex-col h-full">
              {/* Floating Icon Container */}
              <div className="mb-6 inline-flex">
                <div className="relative p-4 rounded-[1.2rem] bg-gradient-to-br from-[#00E0FF]/20 to-transparent border border-[#00E0FF]/30 shadow-[0_0_20px_rgba(0,224,255,0.1)] group-hover:shadow-[0_0_30px_rgba(0,224,255,0.3)] transition-all duration-700 animate-float-icon">
                  {section.icon}
                  <div className="absolute inset-0 bg-[#00E0FF]/15 blur-xl rounded-full -z-10"></div>
                </div>
              </div>

              <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-6 group-hover:text-[#00E0FF] transition-colors duration-500">
                {section.title}
              </h3>

              <div className="space-y-4 flex-grow text-gray-400 leading-relaxed text-xs md:text-sm font-medium">
                {section.content.map((item, pIdx) => (
                  <div key={pIdx}>
                    {item.type === 'text' ? (
                      <p className="opacity-80 group-hover:opacity-100 transition-opacity duration-500">{item.value}</p>
                    ) : (
                      <ul className="space-y-3 mt-4">
                        {(item.value as string[]).map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-3 group/li">
                            <div className="mt-1 text-[#00E0FF] transition-all duration-500 group-hover/li:translate-x-1">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-[0_0_5px_rgba(0,224,255,0.8)]">
                                <polyline points="6 12 11 17 21 7"></polyline>
                              </svg>
                            </div>
                            <span className="group-hover/li:text-white transition-colors duration-300">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Animated Bottom Line */}
            <div className="absolute bottom-0 left-0 w-full h-[4px] bg-white/[0.05] overflow-hidden">
              <div className="h-full w-0 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] transition-all duration-1000 ease-in-out group-hover:w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScopeOverview;
