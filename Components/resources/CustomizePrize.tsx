'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Target, 
  Video, 
  Palette, 
  Layers, 
  Clock, 
  DollarSign, 
  Handshake, 
  TrendingUp,
  FileSearch,
  CheckCircle,
  Briefcase,
  Globe,
  Sparkles
} from 'lucide-react';

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
        } else if (contentType === 'documentary') {
          router.push('/thanks/docu');
        } else if (contentType === 'talking-head') {
          router.push('/thanks/edu');
        } else if (contentType === 'mixed') {
          router.push('/thanks/mixed');
        } else if (contentType === 'branded') {
          router.push('/thanks/brand');
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

  const sectionStyle = "relative bg-[#020D12]/60 backdrop-blur-3xl border border-white/5 p-8 md:p-10 rounded-[2rem] mb-10 overflow-hidden hover:border-[#00E0FF]/30 transition-all duration-700 shadow-2xl";
  const labelStyle = "block text-gray-400 text-sm font-bold uppercase tracking-wider mb-3 ml-1";
  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E0FF]/60 focus:bg-[#00E0FF]/5 transition-all duration-300 font-medium";
  const textAreaStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E0FF]/60 focus:bg-[#00E0FF]/5 transition-all duration-300 font-medium min-h-[100px] resize-none";

  return (
    <section id="quote-form" className="relative bg-[#001A1F] min-h-screen py-24 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col items-center" style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}>
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#00E0FF]/10 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#00B8CC]/10 rounded-full blur-[160px] animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E0FF]/5 rounded-full blur-[180px] animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Dot Background Pattern (Primary) */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        {/* Secondary Dot Pattern (Cyan) */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0, 224, 255, 0.2) 1px, transparent 0)",
              backgroundSize: "64px 64px",
            }}
          ></div>
        </div>
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

      <div className="max-w-4xl mx-auto w-full relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full text-[#00E0FF] text-xs font-bold tracking-widest uppercase mb-8 animate-pulse">
            <Sparkles size={14} />
            Creon Motion Production
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 leading-none text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            Partner <span className="text-[#00E0FF] block">Application Form</span>
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent mx-auto rounded-full mt-6"></div>
          
          <div className="flex flex-col items-center gap-4 mt-10">
            <p className="text-gray-300 max-w-xl mx-auto text-sm md:text-base font-medium leading-relaxed italic opacity-80">
              "We partner with high-growth creators and brands to produce world-class storytelling content."
            </p>
            <div className="flex items-center gap-2 text-[#00B8CC] text-[10px] font-black uppercase tracking-[0.3em] mt-4">
              <Clock size={12} />
              <span>ESTIMATED TIME: 3–5 MINUTES</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* SECTION 01: Basic Information */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">01</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <User size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Contact & Brand</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelStyle}>Full Name *</label>
                <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter your name" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Email Address *</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="name@email.com" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Company / Brand Name *</label>
                <input type="text" required value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Your brand name" className={inputStyle} />
              </div>
              <div>
                <label className={labelStyle}>Your Role *</label>
                <input type="text" required value={role} onChange={(e) => setRole(e.target.value)} placeholder="Founder, Creator, etc." className={inputStyle} />
              </div>
              <div className="md:col-span-2">
                <label className={labelStyle}>Website or Channel Link (Optional)</label>
                <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="https://youtube.com/@yourchannel" className={inputStyle} />
              </div>
            </div>
          </div>

          {/* SECTION 02: Content Type */}
          <div className={sectionStyle} data-aos="fade-up" data-aos-delay="100">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">02</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Palette size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Content Type</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'YouTube Long-form (8–20 min)', value: 'long-form' },
                { label: 'Short-form Content (TikTok, Shorts)', value: 'short-form' },
                { label: 'Documentary or motion-graphics', value: 'documentary' },
                { label: 'Talking-head or educational', value: 'talking-head' },
                { label: 'Mixed content strategy', value: 'mixed' },
                { label: 'Branded & Commercial videos', value: 'branded' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={contentType} setter={setContentType} />
              ))}
            </div>
          </div>

          {/* SECTION 03: Content Volume */}
          <div className={sectionStyle} data-aos="fade-up" data-aos-delay="200">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">03</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Layers size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Content Volume</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: '4–8 videos / mo', value: '4-8' },
                { label: '9–15 videos / mo', value: '9-15' },
                { label: '16+ videos / mo', value: '16+' },
                { label: 'One-time project', value: 'one-time' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={contentVolume} setter={setContentVolume} />
              ))}
            </div>
          </div>

          {/* SECTION 04: Video Length */}
          <div className={sectionStyle} data-aos="fade-up" data-aos-delay="300">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">04</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Video size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Video Length</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Under 60s', value: '<60s' },
                { label: '3–8 minutes', value: '3-8m' },
                { label: '8–15 minutes', value: '8-15m' },
                { label: '15+ minutes', value: '15m+' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={videoLength} setter={setVideoLength} />
              ))}
            </div>
          </div>

          {/* SECTION 05: Production Complexity */}
          <div className={sectionStyle} data-aos="fade-up" data-aos-delay="400">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">05</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Layers size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Production Complexity</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'Basic editing and captions', value: 'basic' },
                { label: 'Mixed footage / motion graphics', value: 'mixed-motion' },
                { label: 'Research-driven docu-style', value: 'documentary-style' },
                { label: 'High-production / custom visuals', value: 'high-production' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={productionComplexity} setter={setProductionComplexity} />
              ))}
            </div>
          </div>

          {/* SECTION 06: Investment Range */}
          <div className={sectionStyle} data-aos="fade-up" data-aos-delay="500">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">06</div>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <DollarSign size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Investment Range</h2>
            </div>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] mb-8 ml-1">Monthly production budget</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

          {/* SECTION 07: Timeline */}
          <div className={sectionStyle} data-aos="fade-up" data-aos-delay="600">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">07</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Clock size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Timeline</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Immediately', value: 'immediately' },
                { label: 'Within 2–4 weeks', value: '2-4-weeks' },
                { label: 'Planning phase', value: 'exploring' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={timeline} setter={setTimeline} />
              ))}
            </div>
          </div>

          {/* SECTION 08: Project Objective */}
          <div className={sectionStyle} data-aos="fade-up" data-aos-delay="700">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">08</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Target size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Main Outcome</h2>
            </div>
            <div>
              <label className={labelStyle}>What is the single most important outcome you want from this partnership?</label>
              <textarea required value={objective} onChange={(e) => setObjective(e.target.value)} placeholder="Describe your main goals..." className={textAreaStyle} />
            </div>
          </div>

          {/* SECTION 09: References */}
          <div className={sectionStyle} data-aos="fade-up" data-aos-delay="800">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">09</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Briefcase size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Visual References</h2>
            </div>
            <div>
              <label className={labelStyle}>Paste links to 1–2 videos or channels you admire</label>
              <textarea value={references} onChange={(e) => setReferences(e.target.value)} placeholder="YouTube, Vimeo, or Portfolio links..." className={textAreaStyle} />
            </div>
          </div>

          {/* SECTION 10: Logic Assets */}
          <div className={sectionStyle} data-aos="fade-up" data-aos-delay="900">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">10</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Globe size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Existing Materials</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: 'Yes, everything ready', value: 'ready' },
                { label: 'Partially prepared', value: 'partial' },
                { label: 'Still planning phase', value: 'planning' }
              ].map((opt) => (
                <OptionButton key={opt.value} label={opt.label} value={opt.value} current={assetsStatus} setter={setAssetsStatus} />
              ))}
            </div>
          </div>

          {/* Messages */}
          <div className="max-w-xl mx-auto space-y-4">
            {submitError && (
              <div className="p-4 bg-red-400/10 border border-red-400/20 rounded-xl text-red-400 text-center font-medium" data-aos="fade-in">
                {submitError}
              </div>
            )}
            {submitSuccess && (
              <div className="p-6 bg-[#00E0FF]/10 border border-[#00E0FF]/20 rounded-2xl text-[#00E0FF] text-center font-bold" data-aos="fade-in">
                {submitSuccess}
              </div>
            )}
          </div>

          <div className="text-center pt-8 pb-16" data-aos="zoom-in">
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full max-w-xl bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white py-6 px-12 rounded-full font-black text-xl transition-all duration-300 transform shadow-[0_10px_30px_rgba(0,224,255,0.3)] ${isSubmitting ? 'opacity-60 cursor-wait' : 'hover:scale-[1.02] hover:shadow-[0_15px_40px_rgba(0,224,255,0.4)] active:scale-[0.98]'} uppercase tracking-widest flex items-center justify-center mx-auto group`}
            >
              {isSubmitting ? 'Submitting Application...' : 'Apply for Partnership'}
            </button>
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.4em] mt-10">Creon Motion Production Partnership</p>
          </div>
        </form>
      </div>

    </section>
  );
};

export default CustomizePriceForm;
