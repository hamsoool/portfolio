"use client";

import React from "react";
import { playTypewriterClick } from "./audio";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    playTypewriterClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Torn Edge Divider Polygon */}
      <div className="torn-divider bg-[var(--paper-2)]" aria-hidden="true">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-8 sm:h-9">
          <polygon
            points="0,18 40,2 80,24 120,4 160,20 200,6 240,26 280,2 320,22 360,8 400,24 440,4 480,20 520,6 560,26 600,2 640,22 680,8 720,24 760,4 800,20 840,6 880,26 920,2 960,22 1000,8 1040,24 1080,4 1120,20 1160,6 1200,18 1200,40 0,40"
            fill="var(--ink)"
          />
        </svg>
      </div>

      <footer className="bg-[var(--ink)] text-[var(--paper)] py-10 sm:py-14 border-t-2 border-[var(--ink)] transition-colors duration-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-xs">
          <div>
            <p className="opacity-80 mb-1">
              © 2026 Hans Lacuesta : printed digitally, no trees harmed.
            </p>
            <p className="text-[11px] opacity-60">
              Gordon College BSIT · Self-published photocopied zine volume 001.
            </p>
          </div>

          <div className="flex items-center gap-2 text-[var(--acid)] font-bold tracking-widest text-sm uppercase">
            <span>game over? to be continued ▸</span>
          </div>

          <a
            href="#top"
            onClick={scrollToTop}
            className="btn-brutal-dark text-xs py-2 px-4"
          >
            back to top ↑
          </a>
        </div>
      </footer>
    </>
  );
}
