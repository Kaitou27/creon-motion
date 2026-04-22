'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const EducationThanks = () => {
  const previousWorks = [
    {
      thumbnail: 'https://img.youtube.com/vi/ag16oa1qVvU/hqdefault.jpg',
      link: 'https://youtu.be/ag16oa1qVvU'
    },
    {
      thumbnail: 'https://img.youtube.com/vi/hF7vIwr1HYQ/hqdefault.jpg',
      link: 'https://youtu.be/hF7vIwr1HYQ'
    },
    {
      thumbnail: 'https://img.youtube.com/vi/DNWXyjvCSmc/hqdefault.jpg',
      link: 'https://youtu.be/DNWXyjvCSmc'
    }
  ];

  return (
    <ThanksLayout
      category="edu"
      title="Thank"
      subtitle="you!"
      description={`Your application for Talking-head & Educational content has been submitted. We'll help you share your knowledge with clarity and engaging visuals.\n\nIn the meantime, you may watch this short video where we show you how we deliver exceptional results to our clients`}
      videoUrl="https://www.youtube.com/watch?v=pVQMSKE6gLQ"
      ctaText="Explore Services"
      ctaLink="/faceless"
      previousWorks={previousWorks}
      testimonials={[
        {
          name: "Amanda_jane_100",
          text: "Very fast turnaround and great communication, was able to bring my idea to life! Thank you so much."
        },
        {
          name: "bradocross",
          text: "Provided me a fantastic video. The quality was amazing. Better than I could have ever imagined. Really happy and the seller was nice too! A very good experience indeed and will certainly be using again!"
        },
        {
          name: "kameronchristie",
          text: "This seller is absolutely amazing and I definitely recommend you try him , the price is completely worth it and justifies the price. Communication is good and he made sure he hit his deadlines"
        }
      ]}
    />
  );
};

export default EducationThanks;
