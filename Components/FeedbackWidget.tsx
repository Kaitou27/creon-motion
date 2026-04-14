'use client';

import React from 'react';
import Link from 'next/link';
import { MessageSquareText } from 'lucide-react';

const FeedbackWidget = () => {
  return (
    <Link 
      href="/feedback"
      className="fixed bottom-8 right-8 z-[9999] group"
      aria-label="Give Feedback"
    >
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#020D12] border border-[#00E0FF]/30 text-[#00E0FF] text-xs font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-[0_0_20px_rgba(0,224,255,0.1)]">
        Give Feedback
      </div>

      {/* Main Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#001A1F] border border-[#00E0FF]/50 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.5)] transform transition-all duration-500 group-hover:scale-110 group-hover:border-[#00E0FF] group-active:scale-95 overflow-hidden">
        {/* Animated Glow Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Pulsing Outer Glow */}
        <div className="absolute inset-0 border-2 border-[#00E0FF]/20 rounded-2xl animate-pulse" />

        {/* Icon */}
        <MessageSquareText 
          className="w-6 h-6 text-[#00E0FF] relative z-10 transition-transform duration-500 group-hover:rotate-[360deg]" 
        />

        {/* Corner Accents inside button */}
        <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#00E0FF]/40 rounded-tl-sm" />
        <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#00E0FF]/40 rounded-br-sm" />
      </div>
    </Link>
  );
};

export default FeedbackWidget;
