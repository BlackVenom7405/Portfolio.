"use client";

import * as React from "react";
import { motion } from "framer-motion";

export type ArrowRevealButtonProps = {
  label?: string;
  link?: string;
  download?: string;
  newTab?: boolean;
  className?: string;
  colors?: {
    bg?: string;
    text?: string;
    border?: string;
    hoverBg?: string;
    hoverText?: string;
    glow?: string;
  };
  padding?: string;
  rounded?: number | string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export default function ArrowRevealButton({
  label = "Explore Projects",
  link = "",
  download = "",
  newTab = false,
  className = "",
  colors = {
    bg: "#ff2a2a",
    text: "#ffffff",
    border: "#ff2a2a",
    hoverBg: "#dc2626",
    hoverText: "#ffffff",
    glow: "rgba(255, 42, 42, 0.6)",
  },
  padding = "12px 24px",
  rounded = 9999,
  onClick,
  style = {},
  children,
}: ArrowRevealButtonProps) {
  const Component = link ? "a" : "button";
  const linkProps = link
    ? {
        href: link,
        target: newTab ? "_blank" : undefined,
        rel: newTab ? "noopener noreferrer" : undefined,
        download: download || undefined,
      }
    : { type: "button" as const };

  return (
    <Component
      {...linkProps}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-3 font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer group/btn overflow-hidden ${className}`}
      style={{
        backgroundColor: colors.bg || "#ff2a2a",
        color: colors.text || "#ffffff",
        border: `1px solid ${colors.border || "#ff2a2a"}`,
        borderRadius: typeof rounded === "number" ? `${rounded}px` : rounded,
        padding,
        boxShadow: `0 0 20px ${colors.glow || "rgba(255, 42, 42, 0.4)"}`,
        ...style,
      }}
    >
      {/* Background Hover Expansion Effect */}
      <span 
        className="absolute inset-0 transition-all duration-500 transform scale-x-0 group-hover/btn:scale-x-100 origin-left pointer-events-none"
        style={{ backgroundColor: colors.hoverBg || "#dc2626" }}
      />

      {/* Button Content */}
      <span className="relative z-10 flex items-center gap-3">
        <span>{children || label}</span>

        {/* Arrow Reveal Container */}
        <span className="relative overflow-hidden w-4 h-4 flex items-center justify-center shrink-0">
          {/* Default Arrow sliding out to right */}
          <svg 
            className="w-4 h-4 transform group-hover/btn:translate-x-6 transition-transform duration-300 ease-out" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>

          {/* Revealed Arrow sliding in from left */}
          <svg 
            className="w-4 h-4 absolute inset-0 transform -translate-x-6 group-hover/btn:translate-x-0 transition-transform duration-300 ease-out" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </span>
      </span>
    </Component>
  );
}
