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
          name: "alex_addison",
          text: "Excellent work video editing work, responded well to feedback and revision requests and did a great job of working with a limited amount of material. Can't recommend this editor enough, thank you very much for all your hard work - much appreciated!"
        },
        {
          name: "chuckp2",
          text: "He did a very good job. He tried mimicking the video style I had sent for reference, and did his research properly to put together the right footage. I also gave him a difficult video, and he was able to complete it without needing any assistance on my part. I will come back for more in the future. Highly recommended."
        },
        {
          name: "henryhunter93",
          text: "fantastic attention to detail and outstanding communication as well. Cheenie is extremely talented and you won't be disappointed with his service!"
        }
      ]}
    />
  );
};

export default MixedThanks;
