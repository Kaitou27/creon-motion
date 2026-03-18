'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const YtThanks = () => {
  const previousWorks = [
    {
      title: 'Commentary & Story',
      thumbnail: 'https://img.youtube.com/vi/sw698mclPKo/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=sw698mclPKo'
    },
    {
      title: 'Documentary Style',
      thumbnail: 'https://img.youtube.com/vi/Fobf6gibbdo/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=Fobf6gibbdo'
    },
    {
      title: 'Educational Series',
      thumbnail: 'https://img.youtube.com/vi/pVQMSKE6gLQ/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=pVQMSKE6gLQ'
    }
  ];

  return (
    <ThanksLayout
      category="youtube"
      title="Thank"
      subtitle="you!"
      description={`Your application for YouTube Content Strategy has been submitted. We're ready to help you scale your channel with high-retention storytelling.\n\nIn the meantime, you may watch this short video where we show you how we deliver exceptional results to our clients`}
      videoUrl="https://www.youtube.com/watch?v=sw698mclPKo"
      ctaText="Explore Faceless"
      ctaLink="/faceless"
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

export default YtThanks;

