'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const EducationThanks = () => {
  const previousWorks = [
    {
      title: 'Tutorial Series',
      thumbnail: 'https://img.youtube.com/vi/pVQMSKE6gLQ/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=pVQMSKE6gLQ'
    },
    {
      title: 'Explainer Video',
      thumbnail: 'https://img.youtube.com/vi/sw698mclPKo/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=sw698mclPKo'
    },
    {
      title: 'Educational Content',
      thumbnail: 'https://img.youtube.com/vi/Fobf6gibbdo/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=Fobf6gibbdo'
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
          name: "Old Money Luxury",
          text: "Their unique editing style resonates with both creators and audiences. Highly recommended for educational channels.",
          logo: "/videos/Testimonial/logo/oldmoney.png"
        },
        {
          name: "Lhor",
          text: "Attentive, open to suggestions, and the communication is topnotch! Great for educational series development.",
          logo: "/videos/Testimonial/logo/lhor.jpg"
        },
        {
          name: "Bizarre Medical Stories",
          text: "The go-to team for professional content. They understand how to present complex information clearly.",
          logo: "/videos/Testimonial/logo/bizzare.jpg"
        }
      ]}
    />
  );
};

export default EducationThanks;
