'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const ShortThanks = () => {
  const previousWorks = [
    {
      thumbnail: 'https://img.youtube.com/vi/1Z_p9aTT7G4/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=1Z_p9aTT7G4'
    },
    {
      thumbnail: 'https://img.youtube.com/vi/4OxKDnC29go/hqdefault.jpg',
      link: 'https://www.youtube.com/shorts/4OxKDnC29go'
    },
    {
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
      hideIcons={true}
      previousWorks={previousWorks}
      testimonials={[
        {
          name: "Becket U",
          text: "We have had the pleasure of working with Cheenie for over a year, and we are consistently impressed by her professionalism and attention to detail. She is a clear communicator, and she is always learning new skills that can be applied to our videos. Her skills have brought many exciting projects to life, and we highly recommend her to anyone seeking a talented and reliable animator.",
          logo: "/img/Logo/becket.png"
        },
        {
          name: "Juan",
          text: "Fantastic experience from start to finish. Gemar brought creative ideas, nailed the cinematic look, and maintained a great attitude throughout. Positive, responsive, and easy to collaborate with. Turnaround was fast, edits were spot-on, and the final product exceeded expectations. Strongly recommend.",
          logo: "/img/Logo/juan1.jpg"
        },
        {
          name: "Josh",
          text: "Gemar did an amazing job on this project. I'm 100% satisfied and will work with him again. Fantastic communication. Fast replies. Prompt edits on final project with very helpful suggestions along the way. I recommend him without reservation.",
          logo: "/img/Logo/josh.jpg"
        }
      ]}
    />
  );
};

export default ShortThanks;

