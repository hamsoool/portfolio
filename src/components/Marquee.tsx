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

export default function Marquee({
  items = DEFAULT_ITEMS,
  speedSeconds = 35,
}: MarqueeProps) {
  // Ensure single track comfortably exceeds ultrawide & 4K viewports (>= 3000px)
  const repeatCount = Math.max(4, Math.ceil(32 / items.length));
  const trackItems: string[] = [];
  for (let i = 0; i < repeatCount; i++) {
    trackItems.push(...items);
  }

  const renderTrack = (trackId: string) => (
    <div
      key={trackId}
      className="animate-marquee flex shrink-0 items-center gap-6 font-mono font-bold text-xs sm:text-sm tracking-widest uppercase pr-6"
      style={{
        animation: "marquee-scroll " + speedSeconds + "s linear infinite",
        willChange: "transform",
      }}
    >
      {trackItems.map((item, idx) => (
        <React.Fragment key={idx}>
          <span className="hover:text-[var(--paper)] transition-colors cursor-default whitespace-nowrap">
            {item}
          </span>
          <span className="text-[var(--stamp)] font-black select-none">·</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div
      aria-hidden="true"
      className="group bg-[var(--ink)] text-[var(--acid)] overflow-hidden border-y-2 border-[var(--ink)] select-none py-2.5 transition-colors duration-200 w-full"
    >
      {/* Self-contained, resilient keyframe definitions immune to minifier & CSS bundle quirks */}
      <style
        dangerouslySetInnerHTML={{
          __html:
            "@keyframes marquee-scroll { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-100%, 0, 0); } } " +
            ".animate-marquee { display: flex; flex-shrink: 0; width: max-content; animation: marquee-scroll 35s linear infinite; will-change: transform; } " +
            "@media (hover: hover) and (pointer: fine) { .group:hover .animate-marquee { animation-play-state: paused; } }",
        }}
      />

      <div className="flex w-fit">
        {/* Track 1 */}
        {renderTrack("track-1")}
        {/* Track 2: Identical twin that seamlessly follows Track 1 for infinite zero-snap looping */}
        {renderTrack("track-2")}
      </div>
    </div>
  );
}
