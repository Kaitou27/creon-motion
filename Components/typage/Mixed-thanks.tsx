'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const MixedThanks = () => {
  const previousWorks = [
    {
      title: 'Long-form Video',
      thumbnail: 'https://img.youtube.com/vi/sw698mclPKo/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=sw698mclPKo'
    },
    {
      title: 'Short-form Content',
      thumbnail: 'https://img.youtube.com/vi/1Z_p9aTT7G4/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=1Z_p9aTT7G4'
    },
    {
      title: 'Social Media Strategy',
      thumbnail: 'https://img.youtube.com/vi/4OxKDnC29go/hqdefault.jpg',
      link: 'https://www.youtube.com/shorts/4OxKDnC29go'
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
