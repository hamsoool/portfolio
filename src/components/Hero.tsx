"use client";

import React from "react";
import { playTypewriterClick, playVinylScratch } from "./audio";

export default function Hero() {
  return (
    <header className="relative bg-[var(--sage)] border-b-2 border-[var(--ink)] overflow-hidden pt-6 pb-12 md:pb-20 transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Masthead Header */}
        <div className="flex flex-wrap justify-between items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest pb-3 mb-8 md:mb-12 border-b border-dashed border-[var(--ink)]/60">
          <span>gordon college · bsit · self-published, semi-regularly</span>
          <span className="bg-[var(--ink)] text-[var(--paper)] px-2 py-0.5 font-mono">
            vol. i / no. 001
          </span>
        </div>

        {/* Hero Main Stage */}
        <div className="relative">
          {/* Main Display Title */}
          <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] leading-[0.88] lowercase tracking-tight select-none">
            <span
              className="inline-block text-[var(--ink)] drop-shadow-[5px_5px_0_var(--acid)] sm:drop-shadow-[8px_8px_0_var(--acid)] md:drop-shadow-[10px_10px_0_var(--acid)] hover:rotate-[-1.5deg] transition-transform cursor-default"
            >
              hans
            </span>{" "}
            <span
              className="inline-block text-[var(--ink)] drop-shadow-[5px_5px_0_var(--acid)] sm:drop-shadow-[8px_8px_0_var(--acid)] md:drop-shadow-[10px_10px_0_var(--acid)] hover:rotate-[1.5deg] transition-transform cursor-default"
            >
              lacuesta
            </span>
          </h1>

          {/* Halftone / Dictionary Poster Entry Definition */}
          <div className="relative mt-8 max-w-xl bg-[var(--paper)] border-2 border-[var(--ink)] p-5 md:p-6 brutal-shadow-lg rotate-[-0.8deg]">
            {/* Highlighter scotch tape holding the card */}
            <div className="tape-strip -top-3.5 left-8 w-28 h-6 rotate-[-4deg]" />

            <p className="font-mono text-xs md:text-sm text-[var(--ink)] mb-1 opacity-80">
              <span className="font-bold text-[var(--stamp)]">/hɑːns ləˈkwɛs.tə/</span> : <em className="font-serif">noun.</em>
            </p>
            <p className="font-mono text-sm md:text-base text-[var(--ink)] leading-relaxed mb-3">
              a full-stack developer, based in the Philippines, who ships systems institutions actually rely on: clinics, wallets, scrapers, and one very persistent 2048 game.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-dashed border-[var(--ink)]/40">
              <a
                href="#about"
                onClick={playTypewriterClick}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase font-black text-[var(--ink)] border-b-2 border-[var(--ink)] hover:text-[var(--stamp)] transition-colors"
              >
                scroll for the good stuff <span className="animate-bob inline-block font-bold">↓</span>
              </a>
              <span className="text-[11px] font-mono uppercase tracking-wider bg-[var(--acid)] text-[var(--ink)] px-2 py-0.5 font-bold border border-[var(--ink)]">
                verified student author
              </span>
            </div>
          </div>

          {/* Doodles & Badges */}
          {/* Spiral Star 1 */}
          <div className="absolute top-2 right-6 md:right-32 w-12 h-12 md:w-16 md:h-16 pointer-events-none animate-wiggle opacity-85">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 4 L58 42 L96 50 L58 58 L50 96 L42 58 L4 50 L42 42 Z"
                stroke="var(--ink)"
                strokeWidth="4"
                strokeLinejoin="round"
                fill="var(--paper)"
              />
              <circle cx="50" cy="50" r="8" fill="var(--acid)" stroke="var(--ink)" strokeWidth="2" />
            </svg>
          </div>

          {/* Spiral Star 2 */}
          <div className="hidden sm:block absolute top-12 right-2 md:right-16 w-8 h-8 pointer-events-none animate-wiggle-alt opacity-75">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 4 L58 42 L96 50 L58 58 L50 96 L42 58 L4 50 L42 42 Z"
                stroke="var(--ink)"
                strokeWidth="5"
                strokeLinejoin="round"
                fill="var(--acid)"
              />
            </svg>
          </div>

          {/* Interactive Spinning Vinyl Record Doodle */}
          <div
            onClick={playVinylScratch}
            className="hidden lg:flex flex-col items-center absolute -bottom-10 right-44 cursor-pointer group select-none"
            title="Click to scratch vinyl"
          >
            <div className="relative w-28 h-28 rounded-full bg-[#0a0a0a] border-2 border-[var(--paper)] flex items-center justify-center animate-spin-slow group-hover:scale-105 transition-transform brutal-shadow">
              <div className="w-20 h-20 rounded-full border border-dashed border-white/20" />
              <div className="w-14 h-14 rounded-full border border-dashed border-white/25" />
              <div className="w-10 h-10 rounded-full bg-[var(--acid)] flex items-center justify-center border-2 border-[#0a0a0a]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#0a0a0a]" />
              </div>
            </div>
            <span className="font-mono text-[10px] uppercase font-bold tracking-widest mt-1 bg-[var(--paper)] border border-[var(--ink)] px-1.5 py-0.5">
              vinyl doodle
            </span>
          </div>

          {/* Circular Rubber Stamp Badge (Gordon College) */}
          <div className="hidden md:block absolute -bottom-8 right-4 w-36 h-36 lg:w-40 lg:h-40 rotate-[-8deg] pointer-events-none">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                id="heroStampCircle"
                d="M100,100 m-72,0 a72,72 0 1,1 144,0 a72,72 0 1,1 -144,0"
                fill="none"
              />
              <text
                fontFamily="var(--font-mono, monospace)"
                fontSize="10.5"
                letterSpacing="2.5"
                fill="var(--ink)"
                fontWeight="700"
              >
                <textPath href="#heroStampCircle" startOffset="0%">
                  EST. GORDON COLLEGE • BSIT • FULL-STACK •{" "}
                </textPath>
              </text>
              <circle
                cx="100"
                cy="100"
                r="38"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="2.5"
                strokeDasharray="5 4"
              />
              <text
                x="100"
                y="108"
                textAnchor="middle"
                fontFamily="var(--font-display, sans-serif)"
                fontWeight="900"
                fontSize="28"
                fill="var(--ink)"
              >
                HML
              </text>
            </svg>
          </div>
        </div>
      </div>

      {/* Torn Edge Divider Polygon */}
      <div className="torn-divider absolute bottom-0 left-0 right-0" aria-hidden="true">
        <svg viewBox="0 0 1200 40" preserveAspectRatio="none" className="w-full h-8 sm:h-9">
          <polygon
            points="0,18 40,2 80,24 120,4 160,20 200,6 240,26 280,2 320,22 360,8 400,24 440,4 480,20 520,6 560,26 600,2 640,22 680,8 720,24 760,4 800,20 840,6 880,26 920,2 960,22 1000,8 1040,24 1080,4 1120,20 1160,6 1200,18 1200,40 0,40"
            fill="var(--paper)"
          />
        </svg>
      </div>
    </header>
  );
}
