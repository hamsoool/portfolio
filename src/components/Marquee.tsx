"use client";

import React from "react";

interface MarqueeProps {
  items?: string[];
  speedSeconds?: number;
}

const DEFAULT_ITEMS = [
  "REACT",
  "VUE",
  "NEXT.JS",
  "NODE",
  "SUPABASE",
  "FIREBASE",
  "POSTGRES",
  "PYTHON",
  "CLINICKA",
  "PHOENIX E-WALLET",
  "GLASSHILL PANSOL",
  "SOUL SCRAPER",
  "OCTANE",
  "MEMOIR",
  "OPEN TO COLLAB",
];

export default function Marquee({ items = DEFAULT_ITEMS }: MarqueeProps) {
  // Duplicate array so ticker repeats continuously
  const displayItems = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="bg-[var(--ink)] text-[var(--acid)] overflow-hidden border-y-2 border-[var(--ink)] select-none py-2.5 transition-colors duration-200"
    >
      <div className="animate-marquee flex items-center gap-6 font-mono font-bold text-xs sm:text-sm tracking-widest uppercase">
        {displayItems.map((item, idx) => (
          <React.Fragment key={idx}>
            <span className="hover:text-[var(--paper)] transition-colors cursor-default whitespace-nowrap">
              {item}
            </span>
            <span className="text-[var(--stamp)] font-black select-none">·</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
