'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const BrandThanks = () => {
  const previousWorks = [
    {
      title: 'Commercial Ad',
      thumbnail: 'https://img.youtube.com/vi/hejyfAFTnGw/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=hejyfAFTnGw'
    },
    {
      title: 'Product Showcase',
      thumbnail: 'https://img.youtube.com/vi/iANvo7hIaqE/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=iANvo7hIaqE'
    },
    {
      title: 'Brand Identity',
      thumbnail: 'https://img.youtube.com/vi/NDRNIVqqu4c/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=NDRNIVqqu4c'
    }
  ];

  return (
    <ThanksLayout
      category="brand"
      title="Thank"
      subtitle="you!"
      description={`Your application for Branded & Commercial Video has been submitted. We'll help you tell your brand's story with cinematic excellence.\n\nIn the meantime, you may watch this short video where we show you how we deliver exceptional results to our clients`}
      videoUrl="https://www.youtube.com/watch?v=hejyfAFTnGw"
      ctaText="View Branding"
      ctaLink="/brand"
      previousWorks={previousWorks}
      testimonials={[
        {
          name: "Old Money Luxury",
          text: "Consistently delivers high-quality edits. Their unique editing style resonates with both creators and audiences.",
          logo: "/videos/Testimonial/logo/oldmoney.png"
        },
        {
          name: "Lhor",
          text: "Attentive, open to suggestions, and the communication is topnotch! The most important thing is the trust.",
          logo: "/videos/Testimonial/logo/lhor.jpg"
        },
        {
          name: "Bizarre Medical Stories",
          text: "The go-to team for cinematic and professional content. Professionalism like no other on this platform.",
          logo: "/videos/Testimonial/logo/bizzare.jpg"
        }
      ]}
    />
  );
};

export default BrandThanks;
