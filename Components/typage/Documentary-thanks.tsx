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
      hideIcons={true}
      previousWorks={previousWorks}
      testimonials={[
        {
          name: "Brimm",
          text: "Excellent video, I liked it a lot. Thanks for the efforts of the team! The clips were really strong and helped tell the story effectively."
        },
        {
          name: "Amos",
          text: "It was a pleasure working with Creon Motion! They’re a skilled and reliable editor, and I highly recommend them to anyone looking for quality work. Wishing them all the best in their future endeavors!"
        },
        {
          name: "Amos",
          text: "It was a pleasure working with Creon Motion! They're a skilled and reliable editor, and I highly recommend them to anyone looking for quality work. Wishing them all the best in their future endeavors!"
        }
      ]}
    />
  );
};

export default DocumentaryThanks;
