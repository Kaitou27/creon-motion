'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const Footer = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (sectionId: string) => {
    if (pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <footer className="bg-[#0A0F1A] text-gray-300 pt-6 sm:pt-8 md:pt-10 pb-4 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 border-t border-[#00E0FF]/10" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <div className="max-w-7xl mx-auto flex flex-col">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-8 items-start">
          {/* Connect Block */}
          <div className="flex flex-col items-center lg:items-start mb-6 sm:mb-8 lg:mb-0">
            <div className="bg-gradient-to-r from-[#0A0F1A] to-[#00B8CC] rounded-t-xl px-4 sm:px-6 py-2 mb-4 w-fit mx-auto lg:mx-0">
              <span className="text-2xl sm:text-3xl font-bold text-white">Connect.</span>
            </div>
            <div className="border border-[#00E0FF]/20 rounded-lg p-4 sm:p-6 mb-4 flex flex-col items-center w-32 sm:w-40 mx-auto lg:mx-0">
              <span className="font-semibold text-base sm:text-lg mb-2 text-white">BOOK NOW</span>
              <span className="text-xs text-[#00E0FF]/70">→</span>
            </div>
            <div className="flex space-x-3 sm:space-x-4 mb-4 justify-center lg:justify-start w-full text-[#00E0FF]">
              <a href="https://www.facebook.com/creonmotion/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200"><FaFacebookF size={18} /></a>
              <a href="https://www.instagram.com/creonmotion" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200"><FaInstagram size={18} /></a>
              <a href="https://www.youtube.com/@creonmotion" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200"><FaYoutube size={18} /></a>
              <a href="https://www.tiktok.com/@creonmotion?_t=ZS-90i9pAadHma&_r=1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200"><FaTiktok size={18} /></a>
            </div>
            <div className="mt-2 mb-2 text-center lg:text-left">
              <span className="text-xl sm:text-2xl font-bold text-white">Creon</span>
              <span className="block text-xs tracking-widest text-[#00E0FF]">Motion</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-6 sm:mb-8 lg:mb-0">
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
              <span className="flex items-center justify-center w-32 sm:w-40 h-8 sm:h-10 rounded-full border-2 border-[#00E0FF] text-sm sm:text-base font-bold tracking-widest text-center leading-tight bg-[#0A0F1A] text-[#00E0FF]">
                QUICK LINKS
              </span>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-center lg:text-left cursor-pointer">
              <li><span onClick={() => handleNavigation('home')} className="hover:underline hover:text-white transition-colors duration-200">Home</span></li>
              <li><span onClick={() => handleNavigation('services')} className="hover:underline hover:text-white transition-colors duration-200">Services</span></li>
              <li><span onClick={() => handleNavigation('pricing')} className="hover:underline hover:text-white transition-colors duration-200">Pricing</span></li>
              <li><a href="/about" className="hover:underline hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="/testimonial" className="hover:underline hover:text-white transition-colors duration-200">Testimonial</a></li>
              <li><span onClick={() => handleNavigation('contact')} className="hover:underline hover:text-white transition-colors duration-200">Contact Us</span></li>
            </ul>
          </div>

          {/* Other Links */}
          <div className="mb-6 sm:mb-8 lg:mb-0">
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
              <span className="flex items-center justify-center w-32 sm:w-40 h-8 sm:h-10 rounded-full border-2 border-[#00E0FF] text-sm sm:text-base font-bold tracking-widest text-center leading-tight bg-[#0A0F1A] text-[#00E0FF]">
                OTHER LINKS
              </span>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-center lg:text-left">
              <li><a href="https://www.facebook.com/creonmotion/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors duration-200">Facebook</a></li>
              <li><a href="https://www.instagram.com/creonmotion" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors duration-200">Instagram</a></li>
              <li><a href="https://www.youtube.com/@creonmotion" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors duration-200">YouTube</a></li>
              <li><a href="https://www.tiktok.com/@creonmotion?_t=ZS-90i9pAadHma&_r=1" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-white transition-colors duration-200">TikTok</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <div className="flex justify-center lg:justify-start mb-4 sm:mb-6">
              <span className="flex items-center justify-center w-32 sm:w-40 h-8 sm:h-10 rounded-full border-2 border-[#00E0FF] text-sm sm:text-base font-bold tracking-widest text-center leading-tight bg-[#0A0F1A] text-[#00E0FF]">
                CONTACT US
              </span>
            </div>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-center lg:text-left">
              <li className="flex items-center justify-center lg:justify-start gap-2"><MdPhone className="text-[#00E0FF]" size={16} /> <span className="text-white">+63 9661652640</span></li>
              <li className="flex items-center justify-center lg:justify-start gap-2"><MdEmail className="text-[#00E0FF]" size={16} /> <span className="text-white">info@creonmotion.com</span></li>
              <li className="flex items-center justify-center lg:justify-start gap-2"><MdLocationOn className="mt-0.5 text-[#00E0FF]" size={16} /> <span className="text-white">Tagum City, Davao del Norte</span></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#00E0FF]/10 mt-8 pt-4 text-center text-xs text-[#00E0FF]/60">
        <span className="font-semibold text-white">Copyright © Creon Motion</span> All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

