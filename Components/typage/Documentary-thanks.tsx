'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const DocumentaryThanks = () => {
  const previousWorks = [
    {
      thumbnail: 'https://img.youtube.com/vi/ukW2gvjDgJg/hqdefault.jpg',
      link: 'https://youtu.be/ukW2gvjDgJg'
    },
    {
      thumbnail: 'https://img.youtube.com/vi/ZWw1q-ZizGM/hqdefault.jpg',
      link: 'https://youtu.be/ZWw1q-ZizGM'
    },
    {
      thumbnail: 'https://img.youtube.com/vi/VZtMpcdPMpU/hqdefault.jpg',
      link: 'https://youtu.be/VZtMpcdPMpU'
    }
  ];

  return (
    <ThanksLayout
      category="docu"
      title="Thank"
      subtitle="you!"
      description={`Your application for Documentary & Motion-Graphics driven videos has been submitted. We're ready to bring your vision to life with cinematic storytelling and high-end visuals.\n\nIn the meantime, you may watch this short video where we show you how we deliver exceptional results to our clients`}
      videoUrl="https://www.youtube.com/shorts/4OxKDnC29go"
      ctaText="View Portfolio"
      ctaLink="/brand"
      hideIcons={true}
      previousWorks={previousWorks}
      testimonials={[
        {
          name: "Brimm",
          text: "Excellent video, I liked it a lot. Thanks for the efforts of the team! The clips were really strong and helped tell the story effectively.",
          logo: "/img/Logo/brimm.png"
        },
        {
          name: "Amos",
          text: "It was a pleasure working with Gemar! He’s a skilled and reliable editor, and I highly recommend him to anyone looking for quality work. Wishing him all the best in his future endeavors!"
        },
        {
          name: "henryhunter93",
          text: "fantastic attention to detail and outstanding communication as well. Cheenie is extremely talented and you won't be disappointed with his service!"
        }
      ]}
    />
  );
};

export default DocumentaryThanks;
