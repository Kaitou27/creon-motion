'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/#services", isAnchor: true },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/#pricing", isAnchor: true },
  { name: "Contact", href: "/#contact", isAnchor: true },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderNavItem = (item: typeof navItems[0], isMobile = false) => {
    const isAnchor = item.isAnchor;
    const isHome = pathname === "/";
    // Anchor link when on home page should be relative
    const href = isAnchor && isHome ? item.href.replace("/", "") : item.href;
    
    // Base styles
    const baseClass = isMobile 
      ? "text-gray-300 text-lg sm:text-xl font-medium flex items-center justify-center gap-1 no-underline transition-all duration-200 hover:text-white w-full text-center mx-4 mb-3 py-2"
      : "text-gray-300 text-sm font-medium flex items-center justify-center gap-1 no-underline transition-all duration-200 hover:text-white w-full md:w-auto text-center";
    
    const style = { 
      fontFamily: 'var(--font-montserrat)'
    };

    if (isAnchor && isHome) {
      return (
        <a 
          key={item.name} 
          href={href} 
          className={baseClass} 
          style={style}
          onClick={() => isMobile && setMenuOpen(false)}
        >
          {item.name}
        </a>
      );
    }

    return (
      <Link 
        key={item.name} 
        href={item.href} 
        className={baseClass} 
        style={style}
        onClick={() => isMobile && setMenuOpen(false)}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-[#001A1F]/80 backdrop-blur-md text-white px-6 sm:px-8 md:px-12 py-4 z-[99999] border-b border-white/5" style={{ fontFamily: 'var(--font-montserrat)' }}>
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        
        {/* Left: Logo */}
        <div className="flex items-center z-50">
          <a href="/" className="flex flex-col items-center leading-none group no-underline">
            <span className="text-2xl sm:text-3xl font-black text-white tracking-tight group-hover:text-gray-200 transition-colors leading-none">CREON</span>
            <span className="flex justify-between w-[94%] text-[9px] sm:text-[11px] font-bold text-gray-400 uppercase group-hover:text-gray-300 transition-colors mt-[3px]">
              <span>M</span><span>O</span><span>T</span><span>I</span><span>O</span><span>N</span>
            </span>
          </a>
        </div>

        {/* Center: Nav (Desktop) */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {navItems.map(item => renderNavItem(item))}
        </nav>

        {/* Right: CTA (Desktop) */}
        <div className="hidden md:flex items-center">
          <a href="/quote" className="flex items-center border border-white/20 hover:border-white/50 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 hover:bg-white/5 no-underline">
            Start a Project <ChevronRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Hamburger Toggle Button (Mobile) */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none z-50 ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white mb-1.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

      </div>

      {/* Mobile Navigation Menu */}
      <nav className={`md:hidden flex-col absolute top-0 left-0 w-full h-screen bg-[#0A0F1A] flex items-center justify-center transition-all duration-300 ease-in-out z-40 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center w-full gap-4">
          {navItems.map(item => renderNavItem(item, true))}
          <a href="/quote" className="mt-8 border border-white/20 hover:border-white/50 text-white text-lg font-medium px-8 py-3 rounded-full transition-all duration-300 hover:bg-white/5 no-underline flex items-center" onClick={() => setMenuOpen(false)}>
            Start a Project <ChevronRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
