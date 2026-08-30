import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import EncryptButton from './originkit/ui/encrypt-button';
// Adjusted import path for the video
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';

const Hero = () => {
  const videoRef = useRef(null);
  const playCountRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out'
    });

    // Auto-play video with sound on mount
    if (videoRef.current) {
      videoRef.current.muted = false;
      setIsMuted(false);
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.log("Browser unmuted autoplay policy triggered:", err);
          // If browser restricts unmuted autoplay, play muted first & unmute on user interaction
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
          }

          const enableAudio = () => {
            if (videoRef.current) {
              videoRef.current.muted = false;
              setIsMuted(false);
            }
            window.removeEventListener('click', enableAudio);
            window.removeEventListener('touchstart', enableAudio);
          };
          window.addEventListener('click', enableAudio);
          window.addEventListener('touchstart', enableAudio);
        });
    }
  }, []);

  // Handle playing the video exactly twice with sound then auto-pausing
  const handleVideoEnded = () => {
    playCountRef.current += 1;
    if (playCountRef.current < 2 && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Play error:", err));
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        // Reset count if user manually hits play
        if (playCountRef.current >= 2) {
          playCountRef.current = 0;
          videoRef.current.currentTime = 0;
        }
        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Video (Plays twice with sound, bright & high contrast) */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        onEnded={handleVideoEnded}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle Bottom Gradient for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20 z-10 pointer-events-none"></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col justify-end items-start text-left w-full pointer-events-none">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-3xl w-full pointer-events-auto">
          {/* Tag badge */}
          <div data-aos="fade-down" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/30 border border-red-500/50 text-red-300 text-xs font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#ff2a2a] animate-ping"></span>
            Cybersecurity & Full-Stack
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl sm:text-5xl md:text-7xl font-black mb-4 tracking-tight leading-none drop-shadow-lg"
          >
            Hi, I’m <br />
            <span className="text-[#ff2a2a]">Bharath Gowda D</span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-200 text-sm sm:text-base md:text-xl font-medium mb-8 max-w-2xl leading-relaxed drop-shadow-md"
          >
            Building secure, innovative digital solutions while exploring the worlds of cybersecurity and software development.
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-4 w-full"
          >
            {/* Primary Button */}
            <EncryptButton 
              label="View My Work ↓" 
              link="#projects"
              colors={{
                bg: "#ff2a2a",
                text: "#ffffff",
                border: "#ff2a2a",
                glow: "rgba(255, 42, 42, 0.8)",
              }}
            />

            {/* Contact Button */}
            <EncryptButton 
              label="Contact Me" 
              link="#contact"
              colors={{
                bg: "rgba(0, 0, 0, 0.6)",
                text: "#ff4d4d",
                border: "rgba(255, 42, 42, 0.6)",
                glow: "rgba(255, 42, 42, 0.8)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Complete Bottom Right Corner: Compact Controls (Sound On/Off & Play/Pause) */}
      <div 
        className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-40 flex flex-row items-center gap-2 pointer-events-auto"
      >
        {/* Sound On / Mute Button */}
        <div 
          className="flex flex-col items-center gap-1 cursor-pointer group"
          onClick={toggleMute}
          title={isMuted ? "Unmute Sound" : "Mute Sound"}
        >
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/40 bg-black/60 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(255,42,42,0.7)]">
            {isMuted ? (
              // Mute Icon
              <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
              </svg>
            ) : (
              // Volume High / Sound On Icon
              <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[7px] md:text-[9px] font-extrabold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md">
            {isMuted ? "Sound Off" : "Sound On"}
          </span>
        </div>

        {/* Play / Pause Control Button */}
        <div 
          className="flex flex-col items-center gap-1 cursor-pointer group"
          onClick={toggleVideo}
          title={isPlaying ? "Pause Video" : "Play Video"}
        >
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/40 bg-black/60 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_20px_rgba(255,42,42,0.7)]">
            {!isPlaying ? (
              // Play Icon
              <svg className="w-3 h-3 md:w-4 md:h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              // Pause Icon
              <svg className="w-3 h-3 md:w-4 md:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[7px] md:text-[9px] font-extrabold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity drop-shadow-md">
            {!isPlaying ? "Play" : "Pause"}
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
