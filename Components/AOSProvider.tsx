
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 900,
    });
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
