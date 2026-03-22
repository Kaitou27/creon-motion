'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: "HOME", href: "/" },
  { name: "SERVICES", href: "/#services", isAnchor: true },
  { name: "PRICING", href: "/#pricing", isAnchor: true },
  { name: "ABOUT US", href: "/about" },
  { name: "TESTIMONIAL", href: "/testimonial" },
  { name: "CONTACT US", href: "/#contact", isAnchor: true },
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
      ? "text-white text-lg sm:text-xl font-medium flex items-center justify-center gap-1 no-underline transition-all duration-200 hover:text-[#00E0FF] w-full text-center mx-4 mb-3 uppercase tracking-wide py-2"
      : "text-white text-base sm:text-lg font-medium flex items-center justify-center gap-1 no-underline transition-all duration-200 hover:text-[#00E0FF] w-full md:w-auto text-center uppercase tracking-wide";
    
    const style = { 
      fontFamily: 'var(--font-montserrat)',
      textShadow: !isMobile ? '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)' : undefined
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
    <header className="fixed top-0 left-0 w-full bg-transparent text-white flex items-center justify-between px-3 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 z-[99999]">
      {/* Mobile Logo */}
      <div className="md:hidden flex items-center">
        <span 
          className="text-lg sm:text-xl font-medium uppercase tracking-wide" 
          style={{ 
            fontFamily: 'var(--font-montserrat)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)'
          }}
        >
          Creon Motion
        </span>
      </div>

      {/* Centered Logo and Nav */}
      <div className="hidden md:flex items-center justify-center gap-12 lg:gap-16 xl:gap-20 w-full">
        <span 
          className="text-lg sm:text-xl md:text-2xl font-medium uppercase tracking-wide" 
          style={{ 
            fontFamily: 'var(--font-montserrat)',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.6)'
          }}
        >
          Creon Motion
        </span>
        <nav className="flex items-center gap-6 md:gap-10">
          {navItems.map(item => renderNavItem(item))}
        </nav>
      </div>

      {/* Hamburger Toggle Button (Mobile) */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-8 h-8 sm:w-10 sm:h-10 focus:outline-none z-40 ml-auto"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white mb-1 transition-transform duration-300 ease-in-out ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
        <span className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white mb-1 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-5 h-0.5 sm:w-6 sm:h-0.5 bg-white transition-transform duration-300 ease-in-out ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
      </button>

      {/* Mobile Navigation Menu */}
      <nav className={`md:hidden flex-col absolute top-full left-0 w-full bg-[#0A0F1A] backdrop-blur-md py-6 border-t border-[#00E0FF]/20 transition-all duration-300 ease-in-out z-30 ${menuOpen ? 'flex' : 'hidden'}`}>
        {navItems.map(item => renderNavItem(item, true))}
      </nav>
    </header>
  );
};

export default Header;
