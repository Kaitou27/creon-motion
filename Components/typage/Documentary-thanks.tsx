'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const DocumentaryThanks = () => {
  const previousWorks = [
    {
      title: 'Cinematic Documentary',
      thumbnail: 'https://img.youtube.com/vi/Fobf6gibbdo/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=Fobf6gibbdo'
    },
    {
      title: 'Motion Graphics Story',
      thumbnail: 'https://img.youtube.com/vi/sw698mclPKo/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=sw698mclPKo'
    },
    {
      title: 'Visual Storytelling',
      thumbnail: 'https://img.youtube.com/vi/NDRNIVqqu4c/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=NDRNIVqqu4c'
    }
  ];

  return (
    <ThanksLayout
      category="docu"
      title="Thank"
      subtitle="you!"
      description={`Your application for Documentary & Motion-Graphics driven videos has been submitted. We're ready to bring your vision to life with cinematic storytelling and high-end visuals.\n\nIn the meantime, you may watch this short video where we show you how we deliver exceptional results to our clients`}
      videoUrl="https://www.youtube.com/watch?v=Fobf6gibbdo"
      ctaText="View Portfolio"
      ctaLink="/brand"
      previousWorks={previousWorks}
      testimonials={[
        {
          name: "Old Money Luxury",
          text: "Cheenie's video team consistently delivers high-quality, documentary-style edits... they've proven to be reliable, scalable, and consistent.",
          logo: "/videos/Testimonial/logo/oldmoney.png"
        },
        {
          name: "Lhor",
          text: "We've been working with Cheenie for almost 2 years, and we are more than happy with the results... The communication is topnotch!",
          logo: "/videos/Testimonial/logo/lhor.jpg"
        },
        {
          name: "Bizarre Medical Stories",
          text: "Cheenie is extremely talented and very professional... her professionalism is like no other on this platform.",
          logo: "/videos/Testimonial/logo/bizzare.jpg"
        }
      ]}
    />
  );
};

export default DocumentaryThanks;
