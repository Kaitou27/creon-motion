'use client';

import React, { useRef, useState, useEffect } from 'react';

type ReelsProps = {
  // Add props if needed in the future
};

const Reels: React.FC<ReelsProps> = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handlePlay = async () => {
    try {
      if (videoRef.current) {
        videoRef.current.muted = isMuted;
        videoRef.current.volume = volume;
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch (err) {
      // no-op: some browsers may block play; user can try again
    }
  };

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.muted = isMuted;
  }, [isMuted]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Check initial screen size
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const toggleFullscreen = async () => {
    if (!videoRef.current) return;

    try {
      if (!document.fullscreenElement) {
        await videoRef.current.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error('Error toggling fullscreen:', err);
    }
  };

  const togglePlayPause = async () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      try {
        video.muted = isMuted;
        video.volume = volume;
        await video.play();
        setIsPlaying(true);
      } catch (_) {
        // ignore play rejection
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative w-full h-[100svh] min-h-[100svh] max-h-screen flex items-center justify-center overflow-hidden sm:h-[100svh] bg-black">
      {(!isPlaying || isSmallScreen) && (
        <div className="absolute top-4 sm:top-6 md:top-8 left-0 w-full z-[2] px-4">
          <div className="mx-auto w-fit flex flex-col items-center gap-2">
            <h1
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] text-center"
              style={{ fontFamily: 'var(--font-montserrat)', textShadow: '2px 2px 6px rgba(0, 0, 0, 0.8)' }}
            >
              Showreel
            </h1>
            <span className="h-1.5 sm:h-2 w-32 xs:w-40 sm:w-56 md:w-64 lg:w-72 xl:w-80 rounded-full bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent" />
            <p className="text-white/80 text-xs sm:text-sm md:text-base text-center max-w-xs sm:max-w-md md:max-w-lg mt-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]" style={{ fontFamily: 'var(--font-montserrat)' }}>
              A look at the type of story-driven videos our team produces for creators and brands.
            </p>
          </div>
        </div>
      )}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-contain sm:object-cover z-0"
        style={{
          maxHeight: '100vh',
          maxWidth: '100vw'
        }}
        src="/videos/newshowreel.mp4"
        poster="/videos/showreelthumbnail.PNG"
        loop
        playsInline
        preload="metadata"
      />
      {!isPlaying && (
        <button
          type="button"
          onClick={handlePlay}
          className="absolute z-[3] flex items-center justify-center rounded-full w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-white/80 hover:bg-white text-black shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Play showreel"
        >
          <svg className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7-11-7z" />
          </svg>
        </button>
      )}
      {isPlaying && (
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[3] flex items-center gap-2 sm:gap-3 md:gap-4 bg-black/40 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-full">
          <button
            type="button"
            onClick={togglePlayPause}
            className="text-white hover:text-[#00E0FF] transition-colors duration-200 p-1"
            aria-label="Pause"
            title="Pause"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6 5h4v14H6V5zm8 0h4v14h-4V5z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={toggleMute}
            className="text-white hover:text-[#00E0FF] transition-colors duration-200 p-1"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.5 12c0-1.77-.77-3.36-2-4.47v8.94c1.23-1.11 2-2.7 2-4.47zm3.5 0c0 3.04-1.72 5.64-4.25 6.92l1.02 1.74C20.1 19.22 22 15.83 22 12s-1.9-7.22-5.23-8.66l-1.02 1.74C18.28 6.36 20 8.96 20 12zM3 9v6h4l5 5V4L7 9H3z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-.77-3.36-2-4.47v8.94c1.23-1.11 2-2.7 2-4.47zm3.5 0c0 3.04-1.72 5.64-4.25 6.92l1.02 1.74C20.1 19.22 22 15.83 22 12s-1.9-7.22-5.23-8.66l-1.02 1.74C18.28 6.36 20 8.96 20 12z" />
              </svg>
            )}
          </button>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={isMuted ? 0 : volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            onMouseDown={() => isMuted && setIsMuted(false)}
            onTouchStart={() => isMuted && setIsMuted(false)}
            aria-label="Volume"
            className="w-24 sm:w-32 md:w-40 h-1 sm:h-1.5 accent-[#00E0FF] bg-white/40 rounded-lg appearance-none cursor-pointer"
          />
          <button
            type="button"
            onClick={toggleFullscreen}
            className="text-white hover:text-[#00E0FF] transition-colors duration-200 p-1"
            aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
          >
            {isFullscreen ? (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
              </svg>
            )}
          </button>
        </div>
      )}
      <div className="relative z-[1] w-full h-full" />
    </section>
  );
};

export default Reels;


