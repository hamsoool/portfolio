"use client";

import React from "react";
import Image from "next/image";
import { AboutStickers } from "./CollageStickers";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[var(--paper)] border-b-2 border-[var(--ink)] py-14 md:py-24 transition-colors duration-200"
    >
      {/* Editorial Scrapbook Framing Stickers (Botanical Spider Lily, Cassette, Dictionary Slip) */}
      <AboutStickers />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Circular Stamp & Reference Halftone Clipping */}
          <div className="flex flex-row lg:flex-col items-center gap-6 shrink-0 w-full lg:w-48 justify-center lg:justify-start">
            {/* Stamp Badge */}
            <div className="relative w-36 h-36 shrink-0 rotate-[-5deg] hover:rotate-0 transition-transform select-none">
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <path
                  id="aboutStampCircle"
                  d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
                  fill="none"
                />
                <text
                  fontFamily="var(--font-mono, monospace)"
                  fontSize="11"
                  letterSpacing="2.5"
                  fill="var(--ink)"
                  fontWeight="700"
                >
                  <textPath href="#aboutStampCircle" startOffset="0%">
                    ABOUT THE AUTHOR • READ ON •{" "}
                  </textPath>
                </text>
                <circle
                  cx="100"
                  cy="100"
                  r="38"
                  fill="none"
                  stroke="var(--ink)"
                  strokeWidth="2.5"
                  strokeDasharray="4 3"
                />
                <text
                  x="100"
                  y="94"
                  textAnchor="middle"
                  fontFamily="var(--font-display, sans-serif)"
                  fontWeight="800"
                  fontSize="18"
                  fill="var(--ink)"
                >
                  SINCE
                </text>
                <text
                  x="100"
                  y="118"
                  textAnchor="middle"
                  fontFamily="var(--font-display, sans-serif)"
                  fontWeight="900"
                  fontSize="28"
                  fill="var(--ink)"
                >
                  GC
                </text>
              </svg>
            </div>

            {/* Scrapbook Photocopy Photo Box */}
            <div className="relative w-36 h-48 border-2 border-[var(--ink)] bg-[var(--paper-2)] p-1.5 brutal-shadow rotate-[3deg] overflow-hidden hidden sm:block">
              <div className="tape-strip -top-3 left-6 w-20 h-5 rotate-[-6deg]" />
              <div className="relative w-full h-full overflow-hidden border border-[var(--ink)]">
                <Image
                  src="/assets/poster-halftone-cat.jpg"
                  alt="Photocopied halftone cat artifact"
                  fill
                  className="object-cover photocopy-filter"
                  sizes="150px"
                />
              </div>
              <span className="absolute bottom-1 right-2 text-[9px] font-mono uppercase bg-[var(--paper)] px-1 border border-[var(--ink)]">
                FIG. 01
              </span>
            </div>
          </div>

          {/* Typewriter Narrative Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--stamp)]">
                Dossier Entry
              </span>
              <div className="h-[2px] w-12 bg-[var(--ink)]/40" />
            </div>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lowercase tracking-tight mb-6">
              about the author
            </h2>

            <div className="font-mono text-sm sm:text-base leading-relaxed space-y-4 max-w-2xl text-[var(--ink)]">
              <p>
                Hans is a BSIT student at Gordon College who would rather be building something than reading about it. Most days that means front-end interfaces in React, Vue, or Next.js; some days it means wiring up the REST APIs and databases underneath.
              </p>

              <p>
                He gravitates toward projects with real users and real constraints (a clinic that needs an actual clearance workflow, a fuel tracker that needs actual government pricing data) over projects that only need to look good in a demo. Open to collaborating on open-source and creative builds when the timing is right.
              </p>
            </div>

            {/* Quick stats / facts ticker notes */}
            <div className="mt-8 pt-6 border-t-2 border-dashed border-[var(--ink)]/40 grid grid-cols-2 sm:grid-cols-3 gap-4 font-mono text-xs">
              <div className="border border-[var(--ink)] p-3 bg-[var(--paper-2)] brutal-shadow-sm rotate-[-1deg]">
                <span className="block opacity-70 uppercase tracking-wider text-[10px]">Institution</span>
                <strong className="text-sm">Gordon College</strong>
              </div>
              <div className="border border-[var(--ink)] p-3 bg-[var(--paper-2)] brutal-shadow-sm rotate-[1.5deg]">
                <span className="block opacity-70 uppercase tracking-wider text-[10px]">Degree</span>
                <strong className="text-sm">BSIT</strong>
              </div>
              <div className="border border-[var(--ink)] p-3 bg-[var(--acid)] text-[var(--ink)] brutal-shadow-sm rotate-[-1deg] col-span-2 sm:col-span-1">
                <span className="block opacity-70 uppercase tracking-wider text-[10px]">Focus</span>
                <strong className="text-sm">Full-Stack Systems</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
