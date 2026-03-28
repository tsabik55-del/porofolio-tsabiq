"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface PerLetterGlowProps {
  text: string;
  gradientMode?: 1 | 2 | 3;
  className?: string;
  baseDelay?: number;
}

export function PerLetterGlow({ text, gradientMode = 1, className, baseDelay = 0 }: PerLetterGlowProps) {
  return (
    <span className={cn("inline-block", className)}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className={`animate-letter-glow-${gradientMode} transition-colors duration-700`}
          style={{
            animationDelay: `${baseDelay + index * 0.1}s`,
            animationDuration: "3.5s",
            animationIterationCount: "infinite",
            animationFillMode: "both",
            animationTimingFunction: "ease-in-out",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export function TextColor() {
  return (
    <div className="p-10 flex flex-col gap-4 text-6xl font-black">
      <PerLetterGlow text="Develop." gradientMode={1} />
      <PerLetterGlow text="Preview." gradientMode={2} />
      <PerLetterGlow text="Ship." gradientMode={3} />
    </div>
  );
}
