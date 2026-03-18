"use client";

import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSProvider = ({ children }: { children: React.ReactNode }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
