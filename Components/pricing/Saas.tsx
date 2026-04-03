'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { 
  User, 
  Target, 
  Users, 
  Video, 
  Palette, 
  Layers, 
  Clock, 
  Globe,
  DollarSign, 
  Handshake, 
  HelpCircle,
  ArrowRight,
  TrendingUp,
  FileSearch
} from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  company: string;
  socials: string;
  trigger: string;
  successImpact: string;
  primaryGoal: string;
  successMetric: string;
  audience: string;
  audienceKnowledge: string;
  hasScript: string;
  hasVoiceover: string;
  hasFootage: string;
  nothingYet: string;
  ideaDescription: string;
  references: string;
  likeAboutRef: string[];
  productionLevel: string;
  complexity: string;
  videoLength: string;
  videoCount: string;
  platform: string;
  format: string;
  deadline: string;
  deadlineFlexible: string;
  investmentRange: string;
  workStyle: string;
  lookingFor: string;
  whyUs: string;
}

const Saas = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    company: '',
    socials: '',
    trigger: '',
    successImpact: '',
    primaryGoal: '',
    successMetric: '',
    audience: '',
    audienceKnowledge: '',
    hasScript: '',
    hasVoiceover: '',
    hasFootage: '',
    nothingYet: '',
    ideaDescription: '',
    references: '',
    likeAboutRef: [],
    productionLevel: '',
    complexity: '',
    videoLength: '',
    videoCount: '',
    platform: '',
    format: '',
    deadline: '',
    deadlineFlexible: '',
    investmentRange: '',
    workStyle: '',
    lookingFor: '',
    whyUs: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelect = (name: keyof FormState, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleMultiSelect = (name: 'likeAboutRef', value: string) => {
    setFormData(prev => {
      const current = prev[name];
      if (current.includes(value)) {
        return { ...prev, [name]: current.filter(i => i !== value) };
      }
      return { ...prev, [name]: [...current, value] };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(null);

    // Basic Validation
    if (!formData.fullName || !formData.email || !formData.company) {
      setSubmitError("Please fill in your name, email, and brand.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/send-discovery', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Submission failed');
      }

      setSubmitSuccess("Discovery Brief submitted successfully! We'll review your project and get back to you soon.");
      
      // Redirect after success
      setTimeout(() => {
        router.push('/thanks/brand');
      }, 2000);

    } catch (err: any) {
      setSubmitError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const sectionStyle = "relative bg-[#020D12]/60 backdrop-blur-3xl border border-white/5 p-8 md:p-10 rounded-[2rem] mb-10 overflow-hidden hover:border-[#00E0FF]/30 transition-all duration-700 shadow-2xl";
  const labelStyle = "block text-gray-400 text-sm font-bold uppercase tracking-wider mb-3 ml-1";
  const inputStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E0FF]/60 focus:bg-[#00E0FF]/5 transition-all duration-300 font-medium";
  const textAreaStyle = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00E0FF]/60 focus:bg-[#00E0FF]/5 transition-all duration-300 font-medium min-h-[100px] resize-none";
  const pillStyle = (selected: boolean) => `px-4 py-3 rounded-xl border ${selected ? 'bg-[#00E0FF]/15 border-[#00E0FF] text-white shadow-[0_0_15px_rgba(0,224,255,0.2)]' : 'border-white/10 text-gray-400 hover:border-[#00E0FF]/50'} transition-all duration-300 font-bold uppercase text-[11px] tracking-wider cursor-pointer flex items-center justify-center text-center`;

  const sections = [
    { id: "01", title: "Contact & Brand", icon: <User size={28} /> },
    { id: "02", title: "Project Context", icon: <FileSearch size={28} /> },
    { id: "03", title: "Objective Clarity", icon: <Target size={28} /> },
    { id: "04", title: "Audience Breakdown", icon: <Users size={28} /> },
    { id: "05", title: "Content Direction", icon: <Video size={28} /> },
    { id: "06", title: "Creative Direction", icon: <Palette size={28} /> },
    { id: "07", title: "Production Scope", icon: <Layers size={28} /> },
    { id: "08", title: "Deliverables", icon: <Globe size={28} /> },
    { id: "09", title: "Timeline", icon: <Clock size={28} /> },
    { id: "10", title: "Budget Alignment", icon: <DollarSign size={28} /> },
    { id: "11", title: "Collaboration Fit", icon: <Handshake size={28} /> },
    { id: "12", title: "Final Question", icon: <HelpCircle size={28} /> },
  ];

  return (
    <div className="relative bg-[#001A1F] min-h-screen text-white pt-24 pb-32 px-4 selection:bg-[#00E0FF]/30 selection:text-white overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Main Glow Orbs */}
        <div className="absolute top-0 -left-24 w-[600px] h-[600px] bg-[#00E0FF]/10 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-0 -right-24 w-[800px] h-[800px] bg-[#00B8CC]/10 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Dot Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        {/* Secondary Dot Pattern */}
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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="1000">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#00E0FF]/10 border border-[#00E0FF]/30 rounded-full text-[#00E0FF] text-xs font-bold tracking-widest uppercase mb-8 animate-pulse">
            <TrendingUp size={14} />
            Creon Motion Strategy
          </div>
          <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-4 leading-none text-white">
            Project <span className="text-[#00E0FF] block">Discovery Form</span>
          </h1>
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent mx-auto rounded-full mt-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base mt-8 font-medium leading-relaxed italic opacity-80">
             "To produce exceptional results, we must first deeply understand the foundation of your project."
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* SECTION 01: Contact & Brand */}
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
                <label className={labelStyle}>Full Name</label>
                <input name="fullName" type="text" placeholder="John Doe" className={inputStyle} value={formData.fullName} onChange={handleInputChange} />
              </div>
              <div>
                <label className={labelStyle}>Email</label>
                <input name="email" type="email" placeholder="john@brand.com" className={inputStyle} value={formData.email} onChange={handleInputChange} />
              </div>
              <div>
                <label className={labelStyle}>Company / Brand</label>
                <input name="company" type="text" placeholder="Your Brand Name" className={inputStyle} value={formData.company} onChange={handleInputChange} />
              </div>
              <div>
                <label className={labelStyle}>Website / Channel / Socials</label>
                <input name="socials" type="text" placeholder="youtube.com/@yourchannel" className={inputStyle} value={formData.socials} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* SECTION 02: Project Context */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">02</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <FileSearch size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Project Context</h2>
            </div>
            <div className="space-y-8">
              <div>
                <label className={labelStyle}>What triggered this project right now? <span className="text-[#00B8CC] italic lowercase tracking-normal">(Why are you making this video at this moment?)</span></label>
                <textarea name="trigger" className={textAreaStyle} placeholder="We are launching a new product next month and need high-impact visuals..." value={formData.trigger} onChange={handleInputChange}></textarea>
              </div>
              <div>
                <label className={labelStyle}>What happens if this video performs well? <span className="text-[#00B8CC] italic lowercase tracking-normal">(e.g. more sales, funding, audience growth)</span></label>
                <textarea name="successImpact" className={textAreaStyle} placeholder="Successful performance will allow us to scale our ad spend and secure Series B funding..." value={formData.successImpact} onChange={handleInputChange}></textarea>
              </div>
            </div>
          </div>

          {/* SECTION 03: Objective Clarity */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">03</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Target size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Objective Clarity</h2>
            </div>
            <div className="space-y-8">
              <div>
                <label className={labelStyle}>Primary Goal <span className="text-[#00B8CC] italic lowercase tracking-normal">(Choose one)</span></label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Increase conversions', 'Improve retention', 'Build brand authority', 'Educate audience', 'Launch product'].map(goal => (
                    <div key={goal} onClick={() => handleSelect('primaryGoal', goal)} className={pillStyle(formData.primaryGoal === goal)}>
                      {goal}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelStyle}>What does success look like? <span className="text-[#00B8CC] italic lowercase tracking-normal">(e.g. 10k views, 5% CTR, sales, signups)</span></label>
                <input name="successMetric" type="text" placeholder="10k views, 5% conversion rate" className={inputStyle} value={formData.successMetric} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* SECTION 04: Audience Breakdown */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">04</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Users size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Audience Breakdown</h2>
            </div>
            <div className="space-y-8">
              <div>
                <label className={labelStyle}>Who are we speaking to? <span className="text-[#00B8CC] italic lowercase tracking-normal">(Be specific — age, level, problem, awareness)</span></label>
                <textarea name="audience" className={textAreaStyle} placeholder="Tech startup founders, 25-40, struggling with user onboarding complexity..." value={formData.audience} onChange={handleInputChange}></textarea>
              </div>
              <div>
                <label className={labelStyle}>What do they already know? <span className="text-[#00B8CC] italic lowercase tracking-normal">(beginner / aware / expert)</span></label>
                <div className="grid grid-cols-3 gap-4">
                  {['Beginner', 'Aware', 'Expert'].map(level => (
                    <div key={level} onClick={() => handleSelect('audienceKnowledge', level)} className={pillStyle(formData.audienceKnowledge === level)}>
                      {level}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 05: Content Direction */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">05</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Video size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Content Direction</h2>
            </div>
            <div className="space-y-8">
              <div>
                <label className={labelStyle}>Do you already have:</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { key: 'hasScript', label: 'Script' },
                    { key: 'hasVoiceover', label: 'Voiceover' },
                    { key: 'hasFootage', label: 'Raw Footage' },
                    { key: 'nothingYet', label: 'Nothing yet' }
                  ].map(item => (
                    <div key={item.key} onClick={() => handleSelect(item.key as keyof FormState, formData[item.key as keyof FormState] === 'yes' ? 'no' : 'yes')} className={pillStyle(formData[item.key as keyof FormState] === 'yes')}>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelStyle}>If no script: Briefly explain your idea in simple words</label>
                <textarea name="ideaDescription" className={textAreaStyle} placeholder="A fast-paced walkthrough of our core feature with animated text overlays..." value={formData.ideaDescription} onChange={handleInputChange}></textarea>
              </div>
            </div>
          </div>

          {/* SECTION 06: Creative Direction */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">06</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Palette size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Creative Direction</h2>
            </div>
            <div className="space-y-8">
              <div>
                <label className={labelStyle}>Drop 2–3 references <span className="text-[#00B8CC] italic lowercase tracking-normal">(links only — YouTube, ads, etc.)</span></label>
                <textarea name="references" className={textAreaStyle} placeholder="https://youtube.com/watch?v=ref1&#10;https://youtube.com/watch?v=ref2" value={formData.references} onChange={handleInputChange}></textarea>
              </div>
              <div>
                <label className={labelStyle}>What do you like about them?</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Pacing', 'Storytelling', 'Visuals', 'Music'].map(trait => (
                    <div key={trait} onClick={() => toggleMultiSelect('likeAboutRef', trait)} className={pillStyle(formData.likeAboutRef.includes(trait))}>
                      {trait}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 07: Production Scope */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">07</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Layers size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Production Scope</h2>
            </div>
            <div className="space-y-8">
              <div>
                <label className={labelStyle}>What level of production do you need?</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['Editing only', 'Editing + motion graphics', 'Full production (script → final video)'].map(level => (
                    <div key={level} onClick={() => handleSelect('productionLevel', level)} className={pillStyle(formData.productionLevel === level)}>
                      {level}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelStyle}>Complexity level:</label>
                <div className="grid grid-cols-3 gap-4">
                  {['Simple', 'Moderate', 'High-end / cinematic'].map(comp => (
                    <div key={comp} onClick={() => handleSelect('complexity', comp)} className={pillStyle(formData.complexity === comp)}>
                      {comp}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 08: Deliverables */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">08</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Globe size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Deliverables</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelStyle}>Video length</label>
                <input name="videoLength" type="text" placeholder="e.g. 60 seconds" className={inputStyle} value={formData.videoLength} onChange={handleInputChange} />
              </div>
              <div>
                <label className={labelStyle}>Number of videos</label>
                <input name="videoCount" type="text" placeholder="e.g. 3 versions" className={inputStyle} value={formData.videoCount} onChange={handleInputChange} />
              </div>
              <div>
                <label className={labelStyle}>Platform</label>
                <input name="platform" type="text" placeholder="YT, ads, website" className={inputStyle} value={formData.platform} onChange={handleInputChange} />
              </div>
              <div>
                <label className={labelStyle}>Format</label>
                <input name="format" type="text" placeholder="16:9, 9:16, etc." className={inputStyle} value={formData.format} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          {/* SECTION 09: Timeline */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">09</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Clock size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Timeline</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelStyle}>Ideal deadline</label>
                <input name="deadline" type="text" placeholder="e.g. Next Month" className={inputStyle} value={formData.deadline} onChange={handleInputChange} />
              </div>
              <div>
                <label className={labelStyle}>Is this flexible?</label>
                <div className="grid grid-cols-2 gap-4">
                  {['Yes', 'No'].map(flex => (
                    <div key={flex} onClick={() => handleSelect('deadlineFlexible', flex)} className={pillStyle(formData.deadlineFlexible === flex)}>
                      {flex}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 10: Budget Alignment */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">10</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <DollarSign size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Budget Alignment</h2>
            </div>
            <div className="space-y-8">
              <div>
                <label className={labelStyle}>Investment range</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {['$1k – $3k', '$3k – $7k', '$7k+'].map(range => (
                    <div key={range} onClick={() => handleSelect('investmentRange', range)} className={pillStyle(formData.investmentRange === range)}>
                      {range}
                    </div>
                  ))}
                </div>
                <p className="text-gray-500 text-sm mt-6 font-bold uppercase tracking-widest text-center italic">
                  “We focus on high-impact videos designed for performance, not volume.”
                </p>
              </div>
            </div>
          </div>

          {/* SECTION 11: Collaboration Fit */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">11</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <Handshake size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Collaboration Fit</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <label className={labelStyle}>How do you prefer to work?</label>
                <div className="space-y-3">
                  {['Hands-on (frequent feedback)', 'Trust the team (minimal input)'].map(style => (
                    <div key={style} onClick={() => handleSelect('workStyle', style)} className={pillStyle(formData.workStyle === style)}>
                      {style}
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <label className={labelStyle}>Are you looking for:</label>
                <div className="space-y-3">
                  {['One project', 'Long-term partner'].map(type => (
                    <div key={type} onClick={() => handleSelect('lookingFor', type)} className={pillStyle(formData.lookingFor === type)}>
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 12: Final Question */}
          <div className={sectionStyle} data-aos="fade-up">
            <div className="absolute -top-12 -right-12 text-[10rem] font-black text-white/[0.015] pointer-events-none select-none">12</div>
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-[#00E0FF]/10 rounded-xl border border-[#00E0FF]/10 text-[#00E0FF]">
                <HelpCircle size={22} />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-tight">Final Question</h2>
            </div>
            <div>
              <label className={labelStyle}>Why do you want to work with us?</label>
              <textarea name="whyUs" className={textAreaStyle} placeholder="We love your retention-focused style and attention to detail..." value={formData.whyUs} onChange={handleInputChange}></textarea>
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
              {isSubmitting ? 'Submitting Discovery Brief...' : 'Apply for Project Review'}
            </button>
            <div className="mt-10 space-y-2">
              <p className="text-gray-300 font-bold uppercase tracking-widest text-sm">We review every project carefully.</p>
              <p className="text-[#00E0FF] font-medium italic">If it’s a strong fit, we’ll reach out within 24–48 hours with next steps.</p>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Saas;
