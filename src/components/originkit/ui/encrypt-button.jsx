"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const CYBER_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function EncryptButton({
  label = "ENCRYPT BUTTON",
  link = "",
  download = "",
  newTab = false,
  className = "",
  colors = {
    bg: "rgba(255, 42, 42, 0.9)",
    text: "#ffffff",
    border: "rgba(255, 42, 42, 0.8)",
    glow: "rgba(255, 42, 42, 0.5)",
  },
  icon = null,
  onClick,
  style = {},
}) {
  const [displayText, setDisplayText] = useState(label);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const scramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        label
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            if (index < iteration) {
              return label[index];
            }
            return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
          })
          .join("")
      );

      if (iteration >= label.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    scramble();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    clearInterval(intervalRef.current);
    setDisplayText(label);
  };

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  const Component = link ? "a" : "button";
  const linkProps = link
    ? {
        href: link,
        target: newTab ? "_blank" : undefined,
        rel: newTab ? "noopener noreferrer" : undefined,
        download: download || undefined,
      }
    : { type: "button" };

  return (
    <Component
      {...linkProps}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-bold text-xs sm:text-sm md:text-base tracking-wider uppercase overflow-hidden transition-all duration-300 backdrop-blur-md cursor-pointer group ${className}`}
      style={{
        backgroundColor: colors.bg || "rgba(255, 42, 42, 0.9)",
        color: colors.text || "#ffffff",
        border: `1px solid ${colors.border || "rgba(255, 42, 42, 0.8)"}`,
        boxShadow: isHovered
          ? `0 0 30px ${colors.glow || "rgba(255, 42, 42, 0.7)"}`
          : `0 0 15px ${colors.glow || "rgba(255, 42, 42, 0.3)"}`,
        ...style,
      }}
    >
      {/* Background Glitch / Encrypt Scanline Overlay */}
      <motion.span
        className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={false}
        animate={{
          x: isHovered ? ["-100%", "100%"] : "-100%",
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
      />

      {/* Button Text with Encrypt Scramble */}
      <span className="relative z-10 font-mono tracking-wider">
        {displayText}
      </span>

      {/* Optional Icon */}
      {icon && <span className="relative z-10 transition-transform group-hover:scale-110">{icon}</span>}
    </Component>
  );
}
