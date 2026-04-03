'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const MixedThanks = () => {
  const previousWorks = [
    {
      thumbnail: 'https://img.youtube.com/vi/yPXUhqG29YI/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=yPXUhqG29YI'
    },
    {
      thumbnail: 'https://img.youtube.com/vi/HfpU7hASJNM/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=HfpU7hASJNM'
    },
    {
      thumbnail: 'https://img.youtube.com/vi/7z3ZfLcDrxM/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=7z3ZfLcDrxM'
    }
  ];

  return (
    <ThanksLayout
      category="mixed"
      title="Thank"
      subtitle="you!"
      description={`Your application for Mixed Content Strategy has been submitted. We're excited to build a comprehensive presence for you across all platforms.\n\nIn the meantime, you may watch this short video where we show you how we deliver exceptional results to our clients`}
      videoUrl="https://www.youtube.com/watch?v=sw698mclPKo"
      ctaText="View All Services"
      ctaLink="/2d3d"
      previousWorks={previousWorks}
      testimonials={[
        {
          name: "Old Money Luxury",
          text: "A truly holistic approach to content. They handle everything from long-form to shorts with the same high quality.",
          logo: "/videos/Testimonial/logo/oldmoney.png"
        },
        {
          name: "Lhor",
          text: "The most important thing for us is the trust, and the team has earned it through consistent mixed-media delivery.",
          logo: "/videos/Testimonial/logo/lhor.jpg"
        },
        {
          name: "Bizarre Medical Stories",
          text: "Scaling across platforms was easy with their help. Professionalism like no other.",
          logo: "/videos/Testimonial/logo/bizzare.jpg"
        }
      ]}
    />
  );
};

export default MixedThanks;
