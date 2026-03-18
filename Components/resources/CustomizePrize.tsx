'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const FloatingParticle = ({ delay, duration, className, size = "w-2 h-2" }: { delay: number, duration: number, className: string, size?: string }) => (
  <div 
    className={`absolute ${className} opacity-50 animate-float`}
    style={{ 
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  >
    <div className={`${size} bg-[#00E0FF] rounded-full shadow-lg shadow-[#00E0FF]/30 animate-pulse`}></div>
  </div>
);

const AnimatedLine = ({ delay, className }: { delay: number, className: string }) => (
  <div 
    className={`absolute ${className} w-0.5 h-12 bg-gradient-to-b from-[#00E0FF] to-transparent opacity-60 animate-glow`}
    style={{ animationDelay: `${delay}s` }}
  ></div>
);

const CustomizePriceForm: React.FC = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');

  const [contentType, setContentType] = useState('');
  const [contentVolume, setContentVolume] = useState('');
  const [videoLength, setVideoLength] = useState('');
  const [productionComplexity, setProductionComplexity] = useState('');
  const [investmentRange, setInvestmentRange] = useState('');
  const [timeline, setTimeline] = useState('');
  const [objective, setObjective] = useState('');
  const [references, setReferences] = useState('');
  const [assetsStatus, setAssetsStatus] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    if (!fullName || !email || !company || !role || !contentType || !contentVolume || !videoLength || !productionComplexity || !investmentRange || !timeline || !objective || !assetsStatus) {
      setSubmitError('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          fullName,
          company,
          role,
          email,
          website,
          contentType,
          contentVolume,
          videoLength,
          productionComplexity,
          investmentRange,
          timeline,
          objective,
          references,
          assetsStatus
        })
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Failed to send application.');
      }

      setSubmitSuccess('Your application has been received. We review every submission personally and will get back to you soon.');
      
      // Dynamic Redirection after a short delay
      setTimeout(() => {
        if (contentType === 'long-form') {
          router.push('/thanks/yt');
        } else if (contentType === 'short-form') {
          router.push('/thanks/short');
        } else {
          router.push('/thanks/brand');
        }
      }, 1500);

      // Reset form
      setFullName('');
      setCompany('');
      setRole('');
      setEmail('');
      setWebsite('');
      setContentType('');
      setContentVolume('');
      setVideoLength('');
      setProductionComplexity('');
      setInvestmentRange('');
      setTimeline('');
      setObjective('');
      setReferences('');
      setAssetsStatus('');
    } catch (error: any) {
      setSubmitError(error?.message || 'Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const OptionButton = ({ label, value, current, setter }: { label: string, value: string, current: string, setter: (v: string) => void }) => (
    <button
      type="button"
      onClick={() => setter(value)}
      className={`px-4 py-3 rounded-xl border transition-all duration-300 text-left flex items-center group relative overflow-hidden ${current === value
          ? 'bg-[#00E0FF]/15 border-[#00E0FF] text-white shadow-[0_0_15px_rgba(0,224,255,0.2)]'
          : 'bg-[#001A1F]/40 border-[#00E0FF]/10 text-gray-400 hover:border-[#00E0FF]/30 hover:bg-[#001A1F]/60'
        }`}
      style={{ fontFamily: 'inherit' }}
    >
      <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center transition-all ${current === value ? 'border-[#00E0FF] bg-[#00E0FF]' : 'border-gray-600'
        }`}>
        {current === value && <div className="w-2 h-2 bg-[#001A1F] rounded-full"></div>}
      </div>
      <span className="relative z-10 text-sm font-medium">{label}</span>
      {current === value && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#00E0FF]/5 to-transparent pointer-events-none"></div>
      )}
    </button>
  );

  return (
    <section id="quote-form" className="relative bg-[#001A1F] min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col items-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#00E0FF]/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E0FF]/4 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#00E0FF]/3 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/3 w-48 h-48 bg-[#00E0FF]/4 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-3/4 right-1/3 w-56 h-56 bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{animationDelay: '5s'}}></div>
      </div>

      {/* Subtle dotted grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}></div>
      </div>
      
      {/* Animated Lines */}
      <AnimatedLine delay={0} className="top-10 left-32" />
      <AnimatedLine delay={1} className="top-20 right-40" />
      <AnimatedLine delay={2} className="bottom-20 left-20" />
      <AnimatedLine delay={3} className="bottom-10 right-20" />
      <AnimatedLine delay={4} className="top-1/2 left-10" />
      <AnimatedLine delay={5} className="top-1/2 right-10" />
      
      {/* Floating Particles */}
      <FloatingParticle delay={0} duration={3} className="top-10 left-20" />
      <FloatingParticle delay={1} duration={4} className="top-32 right-32" />
      <FloatingParticle delay={2} duration={3.5} className="bottom-32 left-1/4" />
      <FloatingParticle delay={3} duration={5} className="top-1/2 right-10" />
      <FloatingParticle delay={4} duration={4.5} className="bottom-20 right-1/3" />
      <FloatingParticle delay={5} duration={3} className="top-1/4 left-1/3" />

      <div className="relative w-full max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-[#00E0FF] font-black tracking-[0.2em] uppercase text-sm mb-4">Creon Motion</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">Apply for Production Partnership</h1>
          <p className="text-[#00E0FF] font-medium mb-2">(3–5 minutes)</p>
          <p className="text-gray-400 max-w-xl mx-auto">We review every submission personally before scheduling a fit call.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* 1. Basic Information */}
          <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border border-[#00E0FF]/20 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#00E0FF] mr-3">01.</span> Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-[#001A1F]/60 border border-[#00E0FF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E0FF] transition-all"
                  style={{ fontFamily: 'inherit' }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Company / Brand Name *</label>
                <input
                  type="text"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="Your brand name"
                  className="w-full bg-[#001A1F]/60 border border-[#00E0FF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E0FF] transition-all"
                  style={{ fontFamily: 'inherit' }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Your Role *</label>
                <input
                  type="text"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="Founder, Creator, etc."
                  className="w-full bg-[#001A1F]/60 border border-[#00E0FF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E0FF] transition-all"
                  style={{ fontFamily: 'inherit' }}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full bg-[#001A1F]/60 border border-[#00E0FF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E0FF] transition-all"
                  style={{ fontFamily: 'inherit' }}
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-bold text-gray-400 uppercase tracking-wider ml-1">Website or Channel Link (Optional)</label>
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://..."
                  className="w-full bg-[#001A1F]/60 border border-[#00E0FF]/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#00E0FF] transition-all"
                  style={{ fontFamily: 'inherit' }}
                />
              </div>
            </div>
          </div>

          {/* 2. Content Type */}
          <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border border-[#00E0FF]/20 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#00E0FF] mr-3">02.</span> Content Type
            </h3>
            <p className="text-gray-400 text-sm">What type of content are you planning to produce?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'YouTube long-form videos (8–20 minutes)', value: 'long-form' },
                { label: 'Short-form content (TikTok, Reels, Shorts)', value: 'short-form' },
                { label: 'Documentary or motion-graphics driven videos', value: 'documentary' },
                { label: 'Talking-head or educational videos', value: 'talking-head' },
                { label: 'Mixed content strategy', value: 'mixed' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={contentType} setter={setContentType} />
              ))}
            </div>
          </div>

          {/* 3. Content Volume */}
          <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border border-[#00E0FF]/20 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#00E0FF] mr-3">03.</span> Content Volume
            </h3>
            <p className="text-gray-400 text-sm">How much content are you planning to produce?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: '4–8 videos per month', value: '4-8' },
                { label: '9–15 videos per month', value: '9-15' },
                { label: '16+ videos per month', value: '16+' },
                { label: 'One-time project', value: 'one-time' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={contentVolume} setter={setContentVolume} />
              ))}
            </div>
          </div>

          {/* 4. Video Length */}
          <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border border-[#00E0FF]/20 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#00E0FF] mr-3">04.</span> Video Length
            </h3>
            <p className="text-gray-400 text-sm">What is the typical length of your videos? (Very important for pricing clarity.)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: 'Under 60 seconds', value: '<60s' },
                { label: '3–8 minutes', value: '3-8m' },
                { label: '8–15 minutes', value: '8-15m' },
                { label: '15+ minutes', value: '15m+' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={videoLength} setter={setVideoLength} />
              ))}
            </div>
          </div>

          {/* 5. Production Complexity */}
          <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border border-[#00E0FF]/20 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#00E0FF] mr-3">05.</span> Production Complexity
            </h3>
            <p className="text-gray-400 text-sm">What type of production style are you looking for? (This tells us if Growth or Authority plan is the fit.)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { label: 'Basic editing and captions', value: 'basic' },
                { label: 'Mixed footage with motion graphics', value: 'mixed-motion' },
                { label: 'Research-driven documentary editing', value: 'documentary-style' },
                { label: 'High-production content with custom visuals', value: 'high-production' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={productionComplexity} setter={setProductionComplexity} />
              ))}
            </div>
          </div>

          {/* 6. Investment Range */}
          <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border border-[#00E0FF]/20 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#00E0FF] mr-3">06.</span> Investment Range
            </h3>
            <p className="text-gray-400 text-sm">What is your estimated monthly budget for production? (This helps us recommend the right production structure.)</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: '$1,000–$2,500', value: '1k-2.5k' },
                { label: '$2,500–$5,000', value: '2.5k-5k' },
                { label: '$5,000+', value: '5k+' },
                { label: 'Not sure yet', value: 'not-sure' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={investmentRange} setter={setInvestmentRange} />
              ))}
            </div>
          </div>

          {/* 7. Timeline */}
          <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border border-[#00E0FF]/20 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#00E0FF] mr-3">07.</span> Timeline
            </h3>
            <p className="text-gray-400 text-sm">When are you planning to start?</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Immediately', value: 'immediately' },
                { label: 'Within 2–4 weeks', value: '2-4-weeks' },
                { label: 'Exploring / planning phase', value: 'exploring' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={timeline} setter={setTimeline} />
              ))}
            </div>
          </div>

          {/* 8. Project Objective */}
          <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border border-[#00E0FF]/20 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#00E0FF] mr-3">08.</span> Project Objective
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">In 1–2 sentences, what is the main outcome you want from this content?</p>
              <p className="text-gray-500 text-xs italic">Examples: Grow a YouTube channel, Educate customers, Build authority, Promote a product or service</p>
              <textarea
                required
                value={objective}
                onChange={(e) => setObjective(e.target.value)}
                placeholder="Describe your goals..."
                className="w-full bg-[#001A1F]/60 border border-[#00E0FF]/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00E0FF] transition-all resize-none h-32"
                style={{ fontFamily: 'inherit' }}
              />
            </div>
          </div>

          {/* 9. References */}
          <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border border-[#00E0FF]/20 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#00E0FF] mr-3">09.</span> References
            </h3>
            <p className="text-gray-400 text-sm">Share 1–2 videos or channels you like. (Paste links here.)</p>
            <textarea
              value={references}
              onChange={(e) => setReferences(e.target.value)}
              placeholder="Paste links here..."
              className="w-full bg-[#001A1F]/60 border border-[#00E0FF]/20 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-[#00E0FF] transition-all resize-none h-24"
              style={{ fontFamily: 'inherit' }}
            />
          </div>

          {/* 10. Assets */}
          <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] border border-[#00E0FF]/20 rounded-3xl p-8 space-y-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white flex items-center">
              <span className="text-[#00E0FF] mr-3">10.</span> Assets
            </h3>
            <p className="text-gray-400 text-sm">Do you already have materials prepared?</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: 'Yes! script, footage, or voiceover ready', value: 'ready' },
                { label: 'Partially prepared', value: 'partial' },
                { label: 'Still planning the content', value: 'planning' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={assetsStatus} setter={setAssetsStatus} />
              ))}
            </div>
          </div>

          {/* Messages */}
          {submitError && (
            <div className="p-4 bg-red-400/10 border border-red-400/20 rounded-xl text-red-400 text-center font-medium">
              {submitError}
            </div>
          )}
          {submitSuccess && (
            <div className="p-6 bg-[#00E0FF]/10 border border-[#00E0FF]/20 rounded-2xl text-[#00E0FF] text-center font-bold">
              {submitSuccess}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white py-5 px-8 rounded-full font-black text-xl transition-all duration-300 transform shadow-[0_10px_30px_rgba(0,224,255,0.3)] ${isSubmitting ? 'opacity-60 cursor-wait' : 'hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,224,255,0.4)] active:scale-[0.98]'
                }`}
              style={{ fontFamily: 'inherit' }}
            >
              {isSubmitting ? 'Submitting Application...' : 'Apply for Partnership'}
            </button>
            <p className="text-gray-500 text-xs text-center mt-6 uppercase tracking-widest font-bold">Creon Motion Production Partnership</p>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes glow {
          0%, 100% {
            opacity: 0.6;
            box-shadow: 0 0 5px rgba(0, 224, 255, 0.5);
          }
          50% {
            opacity: 1;
            box-shadow: 0 0 20px rgba(0, 224, 255, 0.8);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CustomizePriceForm;
