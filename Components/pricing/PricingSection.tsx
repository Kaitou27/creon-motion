'use client';

import React, { useState } from 'react';

const PricingSection = () => {
  const [activePlan, setActivePlan] = useState('Growth');

  const plans = [
    { name: 'Paid Pilot', delay: 100 },
    { name: 'Editing Partner', delay: 100 },
    { name: 'Growth', delay: 100, isPopular: true },
    { name: 'Visual Partner', delay: 100 }
  ];

  return (
    <section
      id="pricing"
      className="bg-[#001A1F] text-white py-16 md:py-24 px-4 w-full relative overflow-hidden font-montserrat border-t border-[#00E0FF]/25"
      style={{ fontFamily: 'var(--font-montserrat)' }}
    >
      {/* Background Elements from Services Section */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-[#00E0FF]/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00E0FF]/4 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00E0FF]/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Subtle dotted grid overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #00E0FF 1px, transparent 0)`,
          backgroundSize: '36px 36px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-tight" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="900">
            RETENTION-FOCUSED CONTENT PLANS
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every plan is built to improve pacing, strengthen storytelling, and help viewers keep watching.<br />
            From clean editing support to full creative direction.
          </p>
        </div>

        {/* Tab Navigation (Pills) */}
        <div className="flex flex-wrap justify-center gap-4 mb-14 max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-delay="200">
          {plans.map((plan) => (
            <button
              key={plan.name}
              onClick={() => setActivePlan(plan.name)}
              className={`px-8 py-3 rounded-md font-bold text-sm md:text-base transition-all duration-300 transform hover:scale-105 border-2 relative ${activePlan === plan.name
                ? 'bg-[#00E0FF] border-[#00E0FF] text-[#001A1F] shadow-[0_0_20px_rgba(0,224,255,0.4)]'
                : 'bg-transparent border-[#00E0FF] text-[#00E0FF] hover:bg-[#00E0FF]/10'
                }`}
            >
              {plan.isPopular && (
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#00E0FF] text-[#001A1F] text-[10px] px-2 py-0.5 rounded font-black tracking-tighter uppercase whitespace-nowrap shadow-sm border border-[#001A1F]/20">
                  Most Popular
                </span>
              )}
              {plan.name}
            </button>
          ))}
        </div>

        {/* Pricing Card Display area */}
        <div className="flex justify-center max-w-[1600px] w-full mx-auto mb-16 relative px-2 sm:px-4 lg:px-8">

          {/* Paid Pilot Plan */}
          {activePlan === 'Paid Pilot' && (
            <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] rounded-2xl border border-[#00E0FF]/25 shadow-lg hover:shadow-xl hover:border-[#00E0FF]/40 transition-all duration-300 flex flex-col h-full group transform relative z-0 max-w-full sm:max-w-md w-full mx-auto" data-aos="fade-up" data-aos-duration="600">
              <div className="absolute inset-0 bg-[#00E0FF]/0 group-hover:bg-[#00E0FF]/5 transition-all duration-500 rounded-2xl"></div>
              
              <div className="p-6 border-b border-[#00E0FF]/10 relative z-10 text-left">
                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[#00E0FF] transition-colors">Start With One Video</h3>
                <div className="flex items-baseline mb-3">
                  <span className="text-3xl font-black text-[#00E0FF]">$250</span>
                </div>
                <p className="text-gray-300 text-sm font-medium">Try our editing before moving to a monthly plan.</p>
              </div>

              <div className="p-8 pt-6 flex flex-col flex-grow relative z-10 text-left">
                <div className="space-y-6 mb-8 flex-grow">
                  
                  {/* SUMMARY LIST */}
                  <div>
                    <h4 className="text-[#00E0FF] font-semibold text-xs uppercase tracking-wider mb-3">Includes</h4>
                    <ul className="space-y-3">
                      {[
                        '1 long-form video (15–20 finished minutes)',
                        'Up to 60 minutes or 30 GB of raw footage',
                        'Complete video editing, styling, and revisions'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                          <svg className="w-5 h-5 text-[#00E0FF] mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* BEST FOR & LINK */}
                  <div className="pt-4 border-t border-[#00E0FF]/10">
                    <h4 className="text-[#00E0FF] font-semibold text-xs uppercase tracking-wider mb-2">Best For</h4>
                    <p className="text-gray-400 text-xs italic mb-4">
                      Creators who want to test our workflow, communication, and creative approach before committing to a monthly partnership.
                    </p>
                    <a 
                      href="/inclusion-paid"
                      className="text-[#00E0FF] text-xs font-semibold hover:underline focus:outline-none flex items-center group-hover:text-white transition-colors w-max"
                    >
                      See full inclusions
                      <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>

                <a href="/quote" className="w-full py-3 rounded-lg border border-[#00E0FF]/50 bg-transparent text-[#00E0FF] font-semibold hover:bg-[#00E0FF] hover:text-[#001A1F] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,224,255,0.4)] text-center flex items-center justify-center">
                  START WITH ONE VIDEO
                </a>
              </div>
            </div>
          )}

          {/* Editing Partner Plan */}
          {activePlan === 'Editing Partner' && (
            <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] rounded-2xl border border-[#00E0FF]/25 shadow-lg hover:shadow-xl hover:border-[#00E0FF]/40 transition-all duration-300 flex flex-col h-full group transform relative z-0 max-w-full sm:max-w-md w-full mx-auto" data-aos="fade-up" data-aos-duration="600">
              <div className="absolute inset-0 bg-[#00E0FF]/0 group-hover:bg-[#00E0FF]/5 transition-all duration-500 rounded-2xl"></div>
              <div className="p-8 pb-6 border-b border-[#00E0FF]/10 relative z-10 text-left">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase group-hover:text-[#00E0FF] transition-colors">Editing Partner</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl font-extrabold text-[#00E0FF]">$1,599</span>
                  <span className="text-gray-400 ml-2 font-medium">/ month</span>
                </div>
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#00E0FF]/30 to-transparent my-4 mt-6"></div>
                <p className="text-gray-300 text-sm mb-2 font-medium">You send the footage. We handle the rest.</p>
              </div>
              
              <div className="p-8 pt-6 flex flex-col flex-grow relative z-10 text-left">
                <div className="space-y-6 mb-8 flex-grow">
                  
                  {/* SUMMARY LIST */}
                  <div>
                    <h4 className="text-[#00E0FF] font-semibold text-xs uppercase tracking-wider mb-3">Includes</h4>
                    <ul className="space-y-3">
                      {[
                        '6 to 8 long-form videos (15-20 mins each)',
                        '6 short clips',
                        'Long-form editing, hook improvement & light motion graphics',
                        'Thumbnail for every video & Visual sourcing',
                        'Final quality check & 3 revisions'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                          <svg className="w-5 h-5 text-[#00E0FF] mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* LINK */}
                  <div className="pt-4 border-t border-[#00E0FF]/10">
                    <a 
                      href="/inclusion-editing"
                      className="text-[#00E0FF] text-xs font-semibold hover:underline focus:outline-none flex items-center group-hover:text-white transition-colors w-max"
                    >
                      See full inclusions
                      <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>

                <a href="/quote" className="w-full py-3 rounded-lg border border-[#00E0FF]/50 bg-transparent text-[#00E0FF] font-semibold hover:bg-[#00E0FF] hover:text-[#001A1F] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,224,255,0.4)] text-center flex items-center justify-center uppercase">
                  Get Started
                </a>
              </div>
            </div>
          )}

          {/* Growth Plan */}
          {activePlan === 'Growth' && (
            <div className="bg-gradient-to-br from-[#0F1F2A] to-[#012A34] rounded-2xl border-2 border-[#00E0FF] shadow-[0_0_30px_rgba(0,224,255,0.15)] hover:shadow-[0_0_40px_rgba(0,224,255,0.3)] transition-all duration-300 flex flex-col h-full transform relative z-10 max-w-full sm:max-w-md w-full sm:scale-105 mx-auto" data-aos="fade-up" data-aos-duration="600">
              <div className="absolute inset-0 bg-[#00E0FF]/5 transition-all duration-500 rounded-2xl"></div>
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00E0FF] text-[#001A1F] px-8 py-1.5 rounded-full font-bold text-sm tracking-wider uppercase shadow-[0_4px_10px_rgba(0,224,255,0.4)] z-20 whitespace-nowrap">
                Most Popular
              </div>
              <div className="p-8 pb-6 border-b border-[#00E0FF]/25 mt-4 relative z-10 text-left">
                <h3 className="text-3xl font-bold text-white mb-4 uppercase">Growth Partner</h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-5xl font-extrabold text-[#00E0FF] drop-shadow-[0_0_8px_rgba(0,224,255,0.5)]">$2,399</span>
                  <span className="text-gray-300 ml-2 font-medium">/ month</span>
                </div>
                <div className="h-0.5 w-24 bg-gradient-to-r from-[#00E0FF]/50 to-transparent my-5"></div>
                <p className="text-gray-200 text-sm mb-2 font-medium">More output and more creative support without building your own editing team.</p>
              </div>
              
              <div className="p-8 pt-6 flex flex-col flex-grow relative z-10 text-left">
                <div className="space-y-6 mb-8 flex-grow">
                  
                  {/* SUMMARY LIST */}
                  <div>
                    <h4 className="text-[#00E0FF] font-semibold text-xs uppercase tracking-wider mb-3">Includes</h4>
                    <ul className="space-y-3">
                      {[
                        '8 to 10 long-form videos (15-20 mins)',
                        'Everything in Editing Partner',
                        '8 short clips',
                        'Story and structure support',
                        'More visual sourcing & Custom graphics',
                        'Dedicated creative lead & priority production'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-white text-sm font-medium">
                          <svg className="w-5 h-5 text-[#00E0FF] mr-3 shrink-0 mt-0.5 drop-shadow-[0_0_5px_rgba(0,224,255,0.5)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* BEST FOR & LINK */}
                  <div className="pt-4 border-t border-[#00E0FF]/10">
                    <h4 className="text-[#00E0FF] font-semibold text-xs uppercase tracking-wider mb-2">Best For</h4>
                    <p className="text-gray-300 text-xs italic mb-4">
                      Creators and teams publishing consistently who want more than an editor and want help improving the videos as they produce more content.
                    </p>
                    <a 
                      href="/inclusions-growth"
                      className="text-[#00E0FF] text-xs font-semibold hover:underline focus:outline-none flex items-center w-max"
                    >
                      See full inclusions
                      <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
                
                <a href="/quote" className="w-full py-3 rounded-lg border border-[#00E0FF]/50 bg-[#00E0FF] text-[#001A1F] font-bold text-sm tracking-wide uppercase hover:bg-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,224,255,0.4)] text-center flex items-center justify-center">
                  GET STARTED
                </a>
              </div>
            </div>
          )}

          {/* Visual Partner Plan */}
          {activePlan === 'Visual Partner' && (
            <div className="bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] rounded-2xl border border-[#00E0FF]/25 shadow-lg hover:shadow-xl hover:border-[#00E0FF]/40 transition-all duration-300 flex flex-col h-full group transform relative z-0 max-w-full sm:max-w-md w-full mx-auto" data-aos="fade-up" data-aos-duration="600">
              <div className="absolute inset-0 bg-[#00E0FF]/0 group-hover:bg-[#00E0FF]/5 transition-all duration-500 rounded-2xl"></div>
              <div className="p-8 pb-6 border-b border-[#00E0FF]/10 relative z-10 text-left">
                <h3 className="text-2xl font-bold text-white mb-4 uppercase group-hover:text-[#00E0FF] transition-colors">Visual Partner</h3>
                <div className="flex items-baseline mb-2 mt-2">
                  <span className="text-3xl font-extrabold text-[#00E0FF]">Starting at $2,999</span>
                  <span className="text-gray-400 ml-2 font-medium">/ month</span>
                </div>
                <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-[#00E0FF]/30 to-transparent my-4 mt-6"></div>
                <p className="text-gray-300 text-sm mb-2 font-medium">Built for videos where the visuals need more time and attention.</p>
              </div>
              <div className="p-8 pt-6 flex flex-col flex-grow relative z-10 text-left">
                <div className="space-y-6 mb-8 text-left flex-grow">
                  
                  {/* SUMMARY LIST */}
                  <div>
                    <h4 className="text-[#00E0FF] font-semibold text-xs uppercase tracking-wider mb-3">Includes</h4>
                    <ul className="space-y-3">
                      {[
                        'Up to 4 visually detailed videos (15-20 mins each)',
                        'Detailed visual editing, story support & sound design',
                        'Deeper visual sourcing & Custom scene design',
                        '3D camera movement, parallax scenes & motion graphics',
                        'Maps, data visuals & thumbnails for every video'
                      ].map((item, idx) => (
                        <li key={idx} className="flex items-start text-gray-300 text-sm">
                          <svg className="w-5 h-5 text-[#00E0FF] mr-3 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* LINK */}
                  <div className="pt-4 border-t border-[#00E0FF]/10">
                    <a 
                      href="/inclusions-visual"
                      className="text-[#00E0FF] text-xs font-semibold hover:underline focus:outline-none flex items-center group-hover:text-white transition-colors w-max"
                    >
                      See full inclusions
                      <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
                <a href="/quote" className="w-full py-3 rounded-lg border border-[#00E0FF]/50 bg-transparent text-[#00E0FF] font-semibold hover:bg-[#00E0FF] hover:text-[#001A1F] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,224,255,0.4)] text-center flex items-center justify-center uppercase">
                  Discuss Your Video Style
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Commercial & Brand Projects */}
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0A0F1A] to-[#0F1F2A] rounded-2xl border border-[#00E0FF]/30 p-8 sm:p-10 shadow-lg hover:border-[#00E0FF]/50 transition-all duration-300 relative z-10 group mt-8 sm:mt-12" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
          <div className="absolute top-3 right-3 w-2.5 h-2.5 bg-[#00E0FF]/50 rounded-full shadow-[0_0_12px_rgba(0,224,255,0.35)] group-hover:bg-[#00E0FF] group-hover:shadow-[0_0_18px_rgba(0,224,255,0.55)] transition-all"></div>
          <div className="absolute inset-0 bg-[#00E0FF]/0 group-hover:bg-[#00E0FF]/5 transition-all duration-500 rounded-2xl"></div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 relative z-10 uppercase tracking-wide group-hover:text-[#00E0FF] transition-colors">Commercial & Brand Projects</h3>
          <p className="text-gray-300 mb-3 relative z-10 text-lg">For SaaS explainers, product commercials, promotional ads, and landing page videos.</p>
          <p className="text-gray-300 mb-2 relative z-10 text-base"><span className="text-[#00E0FF] font-bold">If your project requires a more custom approach</span>, we handle it separately based on scope, creative direction, and production complexity.</p>
          <p className="text-[#00E0FF] font-bold mb-4 relative z-10 text-base"> Each project is planned and quoted based on your specific goals.</p>
          <p className="text-gray-400 mb-8 relative z-10 text-sm italic max-w-2xl mx-auto">Submit your project brief and we’ll guide you from there.</p>

          <div className="h-px bg-gradient-to-r from-transparent via-[#00E0FF]/40 to-transparent w-full mb-8 max-w-lg mx-auto relative z-10"></div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-10">
            <a href="/discovery" className="px-10 py-4 rounded-lg bg-white/5 border border-[#00E0FF]/30 text-white font-bold hover:bg-[#00E0FF] hover:border-[#00E0FF] hover:text-[#001A1F] transition-all duration-300 uppercase tracking-wider text-sm sm:text-base hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] text-center inline-block">
              SUBMIT CUSTOM PROJECT BRIEF
            </a>
            <a href="/book-a-call" className="px-10 py-4 rounded-lg bg-transparent border border-[#00E0FF]/30 text-white font-bold hover:bg-[#00E0FF] hover:border-[#00E0FF] hover:text-[#001A1F] transition-all duration-300 uppercase tracking-wider text-sm sm:text-base hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] text-center inline-block">
              Book a Call
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
