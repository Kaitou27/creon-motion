'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Globe, ArrowRight, ExternalLink } from 'lucide-react';

const ConfirmationContent = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'the client';
  const brand = searchParams.get('brand') || 'their brand';
  const meetLink = searchParams.get('meet') || '#';

  return (
    <div className="min-h-screen bg-[#001A1F] text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E0FF]/5 rounded-full blur-[150px] animate-pulse" />
      </div>

      {/* Subtle dotted grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <div className="bg-[#020D12]/60 backdrop-blur-3xl border border-white/5 rounded-[2.5rem] p-12 shadow-2xl text-center space-y-8 animate-in fade-in zoom-in-95 duration-700">
          
          {/* Status Icon */}
          <div className="flex justify-center">
            <div className="p-6 bg-[#00E0FF]/10 rounded-full border border-[#00E0FF]/20 text-[#00E0FF] shadow-[0_0_40px_rgba(0,224,255,0.1)]">
              <CheckCircle2 size={48} className="animate-pulse" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-black uppercase tracking-tight">
              Booking <span className="text-[#00E0FF]">Confirmed</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              The strategy call with <span className="text-white font-bold">{name}</span> ({brand}) has been successfully added to your calendar.
            </p>
          </div>

          {/* Info Card */}
          <div className="bg-white/[0.03] border border-white/5 rounded-2xl p-6 text-left space-y-4">
            <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#00E0FF]/60">
              <Globe size={14} />
              Final Sync Completed
            </div>
            <p className="text-sm text-gray-300">
              A confirmation email has been sent to the client, and a calendar invitation is now in your inbox.
            </p>
          </div>

          {/* Actions */}
          <div className="pt-8">
            <a 
              href={meetLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] text-[#001A1F] font-black rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,224,255,0.3)] active:scale-[0.98]"
            >
              <ExternalLink size={20} />
              OPEN GOOGLE MEET
              <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            
            <p className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-gray-600">
              Creon Motion | Admin Approval System
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ConfirmationThanks = () => {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-[#001A1F] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-[#00E0FF]/20 border-t-[#00E0FF] rounded-full animate-spin" />
            </div>
        }>
            <ConfirmationContent />
        </Suspense>
    );
};

export default ConfirmationThanks;
