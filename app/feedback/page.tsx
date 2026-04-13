'use client';

import React, { useState } from 'react';
import { Star, Send, ArrowLeft, MessageSquare, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

const FeedbackPage = () => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleRatingClick = (value: number) => setRating(value);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (rating === 0) {
      setError('Please provide a rating.');
      return;
    }
    setError('');
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, rating }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Failed to send feedback. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#001A1F] flex items-center justify-center p-6 relative overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E0FF]/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-md w-full bg-[#0A0F1A]/80 backdrop-blur-3xl border border-[#00E0FF]/30 rounded-3xl p-12 text-center shadow-[0_0_50px_rgba(0,224,255,0.1)]">
          <div className="w-20 h-20 bg-[#00E0FF]/20 rounded-full flex items-center justify-center mx-auto mb-6 scale-110">
            <Heart className="text-[#00E0FF] fill-[#00E0FF] animate-bounce" size={40} />
          </div>
          <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Thank You!</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Your feedback means the world to us. We'll use it to keep pushing the boundaries of motion design.
          </p>
          <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-[#00E0FF] text-[#001A1F] font-black rounded-xl hover:bg-white hover:scale-105 transition-all duration-300">
            <ArrowLeft size={18} />
            BACK HOME
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#001A1F] pt-32 pb-20 px-6 relative overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Premium Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E0FF]/5 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00B8CC]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full text-[#00E0FF] text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            Community Driven
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Share Your <span className="text-[#00E0FF]">Pulse</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-medium">
            How was your experience with Creon Motion? Your honest feedback helps us evolve.
          </p>
        </div>

        <div className="bg-[#0A0F1A]/60 backdrop-blur-2xl border border-white/5 p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Rating Section */}
            <div className="text-center space-y-4">
              <label className="text-xs font-black text-[#00E0FF] uppercase tracking-[0.2em]">Overall Rating</label>
              <div className="flex justify-center gap-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => handleRatingClick(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="group transition-all duration-300 transform hover:scale-125"
                  >
                    <Star
                      size={42}
                      className={`transition-all duration-300 ${star <= (hoverRating || rating)
                          ? 'text-[#00E0FF] fill-[#00E0FF] drop-shadow-[0_0_15px_rgba(0,224,255,0.5)]'
                          : 'text-white/10 fill-transparent'
                        }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Name or YouTube Channel</label>
                <input
                  type="text"
                  placeholder="EX: JOHN DOE"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00E0FF]/50 focus:bg-white/[0.08] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Email Address (Optional)</label>
                <input
                  type="email"
                  placeholder="EX: JOHN@EMAIL.COM"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00E0FF]/50 focus:bg-white/[0.08] transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Your Thoughts</label>
              <textarea
                placeholder="WHAT DID YOU LOVE? WHAT CAN WE IMPROVE?"
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#00E0FF]/50 focus:bg-white/[0.08] transition-all resize-none"
              ></textarea>
            </div>

            {error && <p className="text-red-400 text-sm text-center font-bold tracking-tight">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] text-[#001A1F] font-black py-5 rounded-2xl uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,224,255,0.2)]"
            >
              {isSubmitting ? (
                <div className="w-6 h-6 border-4 border-[#001A1F]/20 border-t-[#001A1F] rounded-full animate-spin"></div>
              ) : (
                <>
                  <Send size={20} />
                  SEND FEEDBACK
                </>
              )}
            </button>
          </form>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-white/30">
          <div className="flex items-center gap-2 italic">
            <MessageSquare size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Direct Access</span>
          </div>
          <div className="w-1 h-1 bg-white/10 rounded-full" />
          <div className="flex items-center gap-2 italic">
            <Heart size={16} />
            <span className="text-xs font-bold uppercase tracking-wider">Trusted Partners</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
