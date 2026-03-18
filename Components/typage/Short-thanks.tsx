'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const ShortThanks = () => {
  const previousWorks = [
    {
      title: 'Motion Graphics',
      thumbnail: 'https://img.youtube.com/vi/1Z_p9aTT7G4/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=1Z_p9aTT7G4'
    },
    {
      title: '2D/3D Animation',
      thumbnail: 'https://img.youtube.com/vi/4OxKDnC29go/hqdefault.jpg',
      link: 'https://www.youtube.com/shorts/4OxKDnC29go'
    },
    {
      title: 'Creator Content',
      thumbnail: 'https://img.youtube.com/vi/tyvNRGxh-3U/hqdefault.jpg',
      link: 'https://www.youtube.com/shorts/tyvNRGxh-3U'
    }
  ];

  return (
    <ThanksLayout
      category="short"
      title="Thank"
      subtitle="you!"
      description={`Your application for Short-Form Content Production has been submitted. We're excited to help you dominate platforms like TikTok, Reels, and Shorts.\n\nIn the meantime, you may watch this short video where we show you how we deliver exceptional results to our clients`}
      videoUrl="https://www.youtube.com/watch?v=1Z_p9aTT7G4"
      ctaText="View Services"
      ctaLink="/2d3d"
      previousWorks={previousWorks}
      testimonials={[
        {
          name: "Old Money Luxury",
          text: "Cheenie's video team consistently delivers high-quality editions... scalable and consistent. Rare qualities in video editing.",
          logo: "/videos/Testimonial/logo/oldmoney.png"
        },
        {
          name: "Lhor",
          text: "Working with the team for almost 2 years, and we are more than happy. The communication is topnotch!",
          logo: "/videos/Testimonial/logo/lhor.jpg"
        },
        {
          name: "Bizarre Medical Stories",
          text: "Extremely talented and very professional. Always delivered on time and provided regular updates.",
          logo: "/videos/Testimonial/logo/bizzare.jpg"
        }
      ]}
    />
  );
};

export default ShortThanks;

