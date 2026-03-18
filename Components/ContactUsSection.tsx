"use client";
import React from 'react';

export default function ContactUsSection() {
	const handleEmailClick = (e: React.MouseEvent) => {
		e.preventDefault();
		const email = 'info@creonmotion.com';

		// Open Gmail compose window
		const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
		window.open(gmailUrl, '_blank');
	};

	return (
		<section id="contact" className="relative bg-gradient-to-br from-[#001A1F] via-[#002A2F] to-[#001A1F] py-16 text-white overflow-hidden" style={{ fontFamily: 'var(--font-montserrat)' }}>
			{/* Dot Background Pattern */}
			<div className="absolute inset-0 opacity-25">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
						backgroundSize: "20px 20px",
					}}
				></div>
			</div>
			{/* Secondary Dot Pattern */}
			<div className="absolute inset-0 opacity-15">
				<div
					className="absolute inset-0"
					style={{
						backgroundImage:
							"radial-gradient(circle at 1px 1px, rgba(0, 184, 204, 0.15) 1px, transparent 0)",
						backgroundSize: "40px 40px",
					}}
				></div>
			</div>

			{/* Animated Background Pattern: Orbs and Glows */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute -top-10 -left-10 w-72 h-72 bg-[#00E0FF] rounded-full blur-3xl opacity-10 animate-pulse"></div>
				<div className="absolute bottom-0 right-10 w-80 h-80 bg-[#00B8CC] rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
				<div className="absolute top-1/3 left-1/4 w-48 h-48 bg-[#0099B3] rounded-full blur-2xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
			</div>

			{/* Enhanced Geometric Patterns */}
			<div className="absolute inset-0 pointer-events-none">
				{/* Rotating squares */}
				<div className="absolute top-10 left-10 w-12 h-12 border border-[#00E0FF] opacity-20 rotate-45 animate-spin" style={{ animationDuration: '25s' }}></div>
				<div className="absolute bottom-16 right-12 w-16 h-16 border border-[#00B8CC] opacity-20 rotate-45 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}></div>
				{/* Circle grid cluster */}
				<div className="absolute top-1/2 left-8 w-24 h-24 opacity-20">
					<div className="absolute top-0 left-0 w-6 h-6 border border-[#00E0FF] rounded-full"></div>
					<div className="absolute top-0 right-0 w-6 h-6 border border-[#00B8CC] rounded-full"></div>
					<div className="absolute bottom-0 left-0 w-6 h-6 border border-[#0099B3] rounded-full"></div>
					<div className="absolute bottom-0 right-0 w-6 h-6 border border-[#00E0FF] rounded-full"></div>
				</div>
				{/* Triangle accent */}
				<div className="absolute top-1/4 right-8 w-0 h-0 border-l-[10px] border-l-transparent border-b-[18px] border-b-[#00B8CC] border-r-[10px] border-r-transparent opacity-30 animate-pulse"></div>
			</div>

			{/* Particle Effects */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-8 left-1/3 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-60"></div>
				<div className="absolute top-16 right-1/4 w-1.5 h-1.5 bg-[#00B8CC] rounded-full animate-ping opacity-50" style={{ animationDelay: '0.3s' }}></div>
				<div className="absolute bottom-12 left-1/2 w-1.5 h-1.5 bg-[#0099B3] rounded-full animate-ping opacity-40" style={{ animationDelay: '0.6s' }}></div>
				<div className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-[#00E0FF] rounded-full animate-ping opacity-50" style={{ animationDelay: '0.9s' }}></div>
				{/* micro cluster */}
				<div className="absolute bottom-24 left-12 w-1 h-1 bg-[#00E0FF] rounded-full animate-ping opacity-70" style={{ animationDelay: '0.1s' }}></div>
				<div className="absolute bottom-28 left-16 w-1 h-1 bg-[#00B8CC] rounded-full animate-ping opacity-60" style={{ animationDelay: '0.4s' }}></div>
				<div className="absolute bottom-32 left-20 w-1 h-1 bg-[#0099B3] rounded-full animate-ping opacity-50" style={{ animationDelay: '0.7s' }}></div>
			</div>

			{/* Animated Lines */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-6 left-24 w-0.5 h-16 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-70"></div>
				<div className="absolute top-24 left-40 w-0.5 h-12 bg-gradient-to-b from-[#00B8CC] to-transparent animate-pulse opacity-60" style={{ animationDelay: '0.2s' }}></div>
				<div className="absolute top-10 right-24 w-0.5 h-14 bg-gradient-to-b from-[#0099B3] to-transparent animate-pulse opacity-60" style={{ animationDelay: '0.4s' }}></div>
				<div className="absolute bottom-10 right-16 w-0.5 h-16 bg-gradient-to-b from-[#00E0FF] to-transparent animate-pulse opacity-70" style={{ animationDelay: '0.6s' }}></div>
			</div>

			{/* Section Frame Lines */}
			<div className="absolute inset-0 pointer-events-none">
				<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00E0FF]/40 to-transparent"></div>
				<div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00B8CC]/40 to-transparent"></div>
				<div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-[#00B8CC]/30 to-transparent"></div>
				<div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-[#00E0FF]/30 to-transparent"></div>
				{/* Corner Accents */}
				<div className="absolute top-2 left-2 w-3 h-3 rounded-sm bg-[#00E0FF]/40"></div>
				<div className="absolute top-2 right-2 w-3 h-3 rounded-sm bg-[#00B8CC]/40"></div>
				<div className="absolute bottom-2 left-2 w-3 h-3 rounded-sm bg-[#0099B3]/40"></div>
				<div className="absolute bottom-2 right-2 w-3 h-3 rounded-sm bg-[#00E0FF]/40"></div>
			</div>
			<div className="max-w-6xl mx-auto px-4 relative">
				{/* Heading Glow */}
				<div className="absolute -top-6 left-1/2 -translate-x-1/2 w-80 h-24 bg-gradient-to-r from-[#00E0FF]/20 via-[#00B8CC]/15 to-[#0099B3]/10 blur-3xl rounded-full"></div>
				<h2
					className="text-4xl sm:text-5xl font-extrabold mb-2 font-montserrat tracking-tight text-white"
					data-aos="fade-up"
					data-aos-duration="900"
				>
					Contact Us
				</h2>

				<div
					className="w-14 h-1 bg-gradient-to-r from-[#00E0FF] to-[#00B8CC] mb-10"
					data-aos="zoom-in"
					data-aos-delay="200"
					data-aos-duration="900"
				/>

				<div
					className="text-center mb-10"
					data-aos="fade-up"
					data-aos-delay="400"
					data-aos-duration="900"
				>
					<h3 className="text-2xl sm:text-3xl font-extrabold text-[#00E0FF] mb-2">
						Start a Project With Creon Motion
					</h3>
					<p className="text-lg font-semibold text-gray-300">If you have a project in mind or want to explore working together, feel free to fill out this form. We're happy to discuss ideas, timelines, and the type of video you want to produce.</p>
					<div className="flex justify-center mt-8">
						<a
							href="/quote"
							className="bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] text-white text-sm xs:text-base sm:text-lg md:text-xl font-montserrat font-bold rounded-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 cursor-pointer shadow-md transition-all duration-300 hover:opacity-90 hover:scale-105 tracking-wide"
						>
							FORM LINK
						</a>
					</div>
				</div>

				{/* Top Row: Phone, Address, Email, Facebook 
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 text-center mt-8 sm:mt-10 md:mt-12">
					<a href="tel:+639661652640" aria-label="Call us" className="flex flex-col items-center w-full max-w-xs mx-auto p-4 sm:p-5 md:p-6 rounded-2xl border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 bg-[#0A0F1A] relative overflow-hidden group transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E0FF]" data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
						<div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
						<div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
						<span className="text-4xl text-[#00E0FF] mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5.75v.58c0 8.07 6.57 14.64 14.64 14.64h.61a2.25 2.25 0 0 0 2.25-2.25v-2.48a2.25 2.25 0 0 0-2.25-2.25h-1.8a2.25 2.25 0 0 0-2.25 2.25v.4a11.25 11.25 0 0 1-6.72-6.72h.4a2.25 2.25 0 0 0 2.25-2.25V5.75A2.25 2.25 0 0 0 8.25 3.5H5.75A2.25 2.25 0 0 0 3.5 5.75z" />
							</svg>
						</span>
						<span className="font-bold text-lg mt-2 text-white">Call Us On</span>
						<span className="text-[#00E0FF] mt-1">+63 9661652640</span>
					</a>

					<a href="https://www.google.com/maps/search/?api=1&query=Tagum+City%2C+Davao+del+Norte%2C+Philippines" target="_blank" rel="noopener noreferrer" aria-label="Open address in maps" className="flex flex-col items-center w-full max-w-xs mx-auto p-4 sm:p-5 md:p-6 rounded-2xl border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 bg-[#0A0F1A] relative overflow-hidden group transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E0FF]" data-aos="fade-up" data-aos-delay="300" data-aos-duration="900">
						<div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
						<div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
						<span className="text-4xl text-[#00E0FF] mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-7.5 8-13.5a8 8 0 1 0-16 0C4 14.5 12 22 12 22z" />
							</svg>
						</span>
						<span className="font-bold text-lg mt-2 text-white">Address</span>
						<span className="text-[#00E0FF] mt-1">Tagum City, Davao del Norte, Philippines</span>
					</a>

					<button onClick={handleEmailClick} aria-label="Copy email address" className="flex flex-col items-center w-full max-w-xs mx-auto p-4 sm:p-5 md:p-6 rounded-2xl border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 bg-[#0A0F1A] relative overflow-hidden group transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E0FF]" data-aos="fade-up" data-aos-delay="400" data-aos-duration="900">
						<div className="absolute inset-0 bg-gradient-to-br from-[#00E0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
						<div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-[#00E0FF] to-transparent opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
						<span className="text-4xl text-[#00E0FF] mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
						</span>
						<span className="font-bold text-lg mt-2 text-white">Email</span>
						<span className="text-[#00E0FF] mt-1 hover:underline">info@creonmotion.com</span>
					</button>

					<a href="https://www.facebook.com/creonmotion" target="_blank" rel="noopener noreferrer" aria-label="Open Facebook" className="flex flex-col items-center w-full max-w-xs mx-auto p-4 sm:p-5 md:p-6 rounded-2xl border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 bg-[#0A0F1A] relative overflow-hidden group transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E0FF]" data-aos="fade-up" data-aos-delay="500" data-aos-duration="900">
						<div className="absolute inset-0 bg-gradient-to-br from-[#00B8CC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
						<div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
						<span className="text-4xl text-[#00B8CC] mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
								<path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.407.593 24 1.325 24h11.5v-9.294H9.691v-3.622h3.134V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.464.099 2.796.143v3.24l-1.92.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z"/>
							</svg>
						</span>
						<span className="font-bold text-lg mt-2 text-white">Facebook</span>
						<span className="text-[#00E0FF] mt-1 hover:underline">facebook.com/creonmotion</span>
					</a>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center mt-6 sm:mt-8">
					<a href="https://www.instagram.com/creonmotion" target="_blank" rel="noopener noreferrer" aria-label="Open Instagram" className="flex flex-col items-center w-full max-w-xs mx-auto p-4 sm:p-5 md:p-6 rounded-2xl border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 bg-[#0A0F1A] relative overflow-hidden group transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E0FF]" data-aos="fade-up" data-aos-delay="600" data-aos-duration="900">
						<div className="absolute inset-0 bg-gradient-to-br from-[#00B8CC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
						<div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
						<span className="text-4xl text-[#00B8CC] mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-10 h-10">
								<path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm5.25-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
							</svg>
						</span>
						<span className="font-bold text-lg mt-2 text-white">Instagram</span>
						<span className="text-[#00E0FF] mt-1 hover:underline">instagram.com/creonmotion</span>
					</a>

					<a href="https://www.tiktok.com/@creonmotion?_t=ZS-90i9pAadHma&_r=1" target="_blank" rel="noopener noreferrer" aria-label="Open TikTok" className="flex flex-col items-center w-full max-w-xs mx-auto p-4 sm:p-5 md:p-6 rounded-2xl border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 bg-[#0A0F1A] relative overflow-hidden group transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E0FF]" data-aos="fade-up" data-aos-delay="700" data-aos-duration="900">
						<div className="absolute inset-0 bg-gradient-to-br from-[#00B8CC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
						<div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
						<span className="text-4xl text-[#00B8CC] mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-10 h-10" fill="currentColor">
								<defs>
									<linearGradient id="tiktokGradient" x1="0%" y1="0%" x2="100%" y2="100%">
										<stop offset="0%" stopColor="#00E0FF" />
										<stop offset="100%" stopColor="#00B8CC" />
									</linearGradient>
								</defs>
								<path fill="url(#tiktokGradient)" d="M173.6 44.8c-7.3-8.5-11.6-19.5-11.6-31.4h-27v130.6c0 16.6-13.4 30-30 30s-30-13.4-30-30 13.4-30 30-30c3.4 0 6.7.6 9.7 1.7V89.3c-3.2-.4-6.5-.7-9.7-.7-31.4 0-57 25.6-57 57s25.6 57 57 57 57-25.6 57-57V84.3c11 8.2 24.5 13 39 13V70c-16.8 0-31.7-7.3-42.4-18.9z"/>
							</svg>
						</span>
						<span className="font-bold text-lg mt-2 text-white">TikTok</span>
						<span className="text-[#00E0FF] mt-1 hover:underline">tiktok.com/@creonmotion</span>
					</a>

					<a href="https://www.youtube.com/@creonmotion" target="_blank" rel="noopener noreferrer" aria-label="Open YouTube" className="flex flex-col items-center w-full max-w-xs mx-auto p-4 sm:p-5 md:p-6 rounded-2xl border border-[#00E0FF]/20 hover:border-[#00E0FF]/40 bg-[#0A0F1A] relative overflow-hidden group transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00E0FF]" data-aos="fade-up" data-aos-delay="800" data-aos-duration="900">
						<div className="absolute inset-0 bg-gradient-to-br from-[#00B8CC]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
						<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-60 transition-opacity pointer-events-none"></div>
						<div className="absolute top-0 bottom-0 left-0 w-0.5 bg-gradient-to-b from-transparent via-[#00B8CC] to-transparent opacity-0 group-hover:opacity-40 transition-opacity pointer-events-none"></div>
						<span className="text-4xl text-[#00B8CC] mb-2">
							<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512" className="w-10 h-10">
								<path d="M549.7 124.1c-6.3-23.7-24.9-42.3-48.6-48.6C456.5 64 288 64 288 64S119.5 64 74.9 75.5c-23.7 6.3-42.3 24.9-48.6 48.6C15.8 168.5 16 224 16 224s-.2 55.5 10.3 99.9c6.3 23.7 24.9 42.3 48.6 48.6C119.5 384 288 384 288 384s168.5 0 213.1-11.5c23.7-6.3 42.3-24.9 48.6-48.6C560.2 279.5 560 224 560 224s.2-55.5-10.3-99.9zM232 312V136l142 88-142 88z"/>
							</svg>
						</span>
						<span className="font-bold text-lg mt-2 text-white">YouTube</span>
						<span className="text-[#00E0FF] mt-1 hover:underline">youtube.com/@creonmotion</span>
					</a>
				</div>
				*/}
			</div>
		</section>
	);
}
