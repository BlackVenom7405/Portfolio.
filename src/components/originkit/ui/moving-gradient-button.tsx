"use client";

import * as React from "react";

export type MovingGradientButtonProps = {
  label?: string;
  link?: string;
  download?: string;
  newTab?: boolean;
  className?: string;
  gradientColors?: string[];
  padding?: string;
  rounded?: number | string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

export default function MovingGradientButton({
  label = "Resume 📄",
  link = "",
  download = "",
  newTab = false,
  className = "",
  gradientColors = ["#ff2a2a", "#ff7b00", "#e1306c", "#9333ea", "#ff2a2a"],
  padding = "8px 20px",
  rounded = 9999,
  onClick,
  style = {},
  children,
}: MovingGradientButtonProps) {
  const Component = link ? "a" : "button";
  const linkProps = link
    ? {
        href: link,
        target: newTab ? "_blank" : undefined,
        rel: newTab ? "noopener noreferrer" : undefined,
        download: download || undefined,
      }
    : { type: "button" as const };

  const gradientString = gradientColors.join(", ");

  return (
    <Component
      {...linkProps}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center p-[2px] font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 backdrop-blur-md cursor-pointer group overflow-hidden ${className}`}
      style={{
        borderRadius: typeof rounded === "number" ? `${rounded}px` : rounded,
        ...style,
      }}
    >
      {/* Continuous Moving Animated Gradient Border */}
      <span
        className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite] transition-all"
        style={{
          background: `conic-gradient(from 0deg, ${gradientString})`,
        }}
      />

      {/* Inner Button Content Box (Glassmorphic Backdrop) */}
      <span
        className="relative z-10 inline-flex items-center justify-center gap-2 bg-black/40 group-hover:bg-black/20 text-white backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] transition-all duration-300 w-full h-full"
        style={{
          borderRadius: typeof rounded === "number" ? `${rounded - 2}px` : `calc(${rounded} - 2px)`,
          padding,
        }}
      >
        {children || label}
      </span>
    </Component>
  );
}
