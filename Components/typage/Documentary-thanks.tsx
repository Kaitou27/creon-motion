'use client';

import React from 'react';
import ThanksLayout from './ThanksLayout';

const DocumentaryThanks = () => {
  const previousWorks = [
    {
      thumbnail: 'https://img.youtube.com/vi/pVQMSKE6gLQ/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=pVQMSKE6gLQ&t=1s'
    },
    {
      thumbnail: 'https://img.youtube.com/vi/K-ICjEZKqLE/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=K-ICjEZKqLE'
    },
    {
      thumbnail: 'https://img.youtube.com/vi/UEsPFAEYy3s/hqdefault.jpg',
      link: 'https://www.youtube.com/watch?v=UEsPFAEYy3s'
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
          text: "It was a pleasure working with Gemar! He’s a skilled and reliable editor, and I highly recommend him to anyone looking for quality work. Wishing him all the best in his future endeavors!"
        },
        {
          name: "Amos",
          text: "It was a pleasure working with Gemar! He’s a skilled and reliable editor, and I highly recommend him to anyone looking for quality work. Wishing him all the best in his future endeavors!"
        }
      ]}
    />
  );
};

export default DocumentaryThanks;
