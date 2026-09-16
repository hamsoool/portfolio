"use client";

import React from "react";
import { motion } from "framer-motion";
import { playStampThud, playTypewriterClick } from "./audio";

// =============================================================================
// 1. HERO VIGNETTE STICKERS
// Hanging telephone cord, black satin ribbon bow, and twin hypnotic spiral stars
// =============================================================================

export function HeroStickers() {
  return (
    <>
      {/* Dangling Rotary Telephone Handset with Coiled Wire */}
      <motion.div
        drag
        dragConstraints={{ left: -60, right: 60, top: -30, bottom: 60 }}
        whileHover={{ scale: 1.1, rotate: -6 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playStampThud}
        animate={{ y: [0, -6, 0], rotate: [-10, -6, -10] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-auto hidden xl:block absolute top-0 left-[max(0.75rem,calc(50%-576px-110px))] cursor-grab active:cursor-grabbing select-none z-10"
        style={{ filter: "drop-shadow(4px 4px 0px var(--ink))" }}
        title="Vintage dangling telephone receiver (Draggable)"
      >
        <div className="flex flex-col items-center">
          {/* Coiled Spiral Spring Cord */}
          <svg className="w-7 h-28 text-[var(--ink)]" viewBox="0 0 28 112" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round">
            <path d="M14 0 Q22 8 14 16 Q6 24 14 32 Q22 40 14 48 Q6 56 14 64 Q22 72 14 80 Q6 88 14 96 Q22 104 14 112" />
          </svg>
          {/* Rotary Handset Silhouette */}
          <svg className="w-11 h-28 text-[var(--ink)] -mt-1" viewBox="0 0 44 112" fill="currentColor">
            {/* Earpiece Cap */}
            <rect x="6" y="2" width="32" height="16" rx="6" stroke="var(--paper)" strokeWidth="1.5" />
            <ellipse cx="22" cy="10" rx="12" ry="5" fill="var(--paper)" fillOpacity="0.25" />
            {/* Central Grip Bar with Highlight Ridge */}
            <path d="M14 18 C14 42, 10 70, 14 94 L30 94 C34 70, 30 42, 30 18 Z" />
            <line x1="22" y1="26" x2="22" y2="86" stroke="var(--paper)" strokeWidth="2" strokeLinecap="round" strokeDasharray="6 4" strokeOpacity="0.35" />
            {/* Mouthpiece Cap */}
            <rect x="6" y="94" width="32" height="16" rx="6" stroke="var(--paper)" strokeWidth="1.5" />
            <circle cx="22" cy="102" r="3" fill="var(--acid)" />
          </svg>
        </div>
      </motion.div>

      {/* Die-Cut Black Satin Ribbon Bow with Translucent Washi Tape */}
      <motion.div
        drag
        dragConstraints={{ left: -60, right: 60, top: -40, bottom: 40 }}
        whileHover={{ scale: 1.12, rotate: -4 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playStampThud}
        animate={{ y: [0, -5, 0], rotate: [-8, -4, -8] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        className="pointer-events-auto hidden xl:block absolute top-20 left-[max(1rem,calc(50%-576px-45px))] cursor-grab active:cursor-grabbing select-none z-20"
        style={{ filter: "drop-shadow(4px 4px 0px var(--ink))" }}
        title="Black satin ribbon bow (Draggable)"
      >
        <div className="relative">
          {/* Translucent Scotch Tape Fastener */}
          <div className="absolute -top-2 left-3 w-16 h-4.5 bg-[var(--acid)]/40 border-y border-black/20 backdrop-blur-xs rotate-[-6deg] shadow-xs z-10 pointer-events-none" />
          {/* Silky Ribbon Bow SVG */}
          <svg className="w-22 h-18 text-[var(--ink)]" viewBox="0 0 88 72" fill="currentColor">
            {/* Left Loop */}
            <path d="M44 26 C36 10, 10 10, 8 26 C6 38, 28 40, 44 28 Z" />
            <path d="M38 23 C30 15, 16 16, 16 26 C16 32, 28 32, 38 25 Z" fill="var(--paper)" fillOpacity="0.15" />
            {/* Right Loop */}
            <path d="M44 26 C52 10, 78 10, 80 26 C82 38, 60 40, 44 28 Z" />
            <path d="M50 23 C58 15, 72 16, 72 26 C72 32, 60 32, 50 25 Z" fill="var(--paper)" fillOpacity="0.15" />
            {/* Knot Core */}
            <ellipse cx="44" cy="27" rx="7" ry="6" fill="currentColor" stroke="var(--paper)" strokeWidth="1" strokeOpacity="0.3" />
            {/* Left Tail with Notched V-Cut */}
            <path d="M40 31 C36 44, 22 56, 14 66 L22 66 L26 58 L34 66 L42 33 Z" />
            {/* Right Tail with Notched V-Cut */}
            <path d="M48 31 C52 44, 66 56, 74 66 L66 66 L62 58 L54 66 L46 33 Z" />
          </svg>
        </div>
      </motion.div>

      {/* Twin Hypnotic Spiral Stars (from Reference Artwork) */}
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -40, bottom: 40 }}
        whileHover={{ scale: 1.15, rotate: 6 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playStampThud}
        animate={{ rotate: [-4, 4, -4], y: [0, -5, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-auto hidden xl:block absolute top-12 left-[min(calc(100%-110px),calc(50%+576px+15px))] cursor-grab active:cursor-grabbing select-none z-10"
        style={{ filter: "drop-shadow(4px 4px 0px var(--ink))" }}
        title="Hypnotic spiral stars (Draggable)"
      >
        <div className="relative flex items-center gap-1">
          {/* Primary Large Star with Hypnotic Spiral */}
          <svg className="w-14 h-14" viewBox="0 0 100 100" fill="none">
            <defs>
              <clipPath id="heroSpiralStarClip">
                <path d="M50 2 L62 36 L98 38 L68 60 L78 96 L50 74 L22 96 L32 60 L2 38 L38 36 Z" />
              </clipPath>
            </defs>
            {/* Star Background & Border */}
            <path
              d="M50 2 L62 36 L98 38 L68 60 L78 96 L50 74 L22 96 L32 60 L2 38 L38 36 Z"
              fill="var(--paper)"
              stroke="var(--ink)"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            {/* Hypnotic Spiral Pattern Clipped to Star */}
            <g clipPath="url(#heroSpiralStarClip)">
              <path
                d="M50 50 
                   m 0, 0 
                   a 6,6 0 0,1 6,6 
                   a 12,12 0 0,1 -12,0 
                   a 18,18 0 0,1 18,-18 
                   a 24,24 0 0,1 -24,24 
                   a 30,30 0 0,1 30,-30 
                   a 36,36 0 0,1 -36,36 
                   a 42,42 0 0,1 42,-42"
                stroke="var(--ink)"
                strokeWidth="4.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="50" cy="50" r="4" fill="var(--acid)" />
            </g>
          </svg>

          {/* Secondary Smaller Star */}
          <svg className="w-9 h-9 -ml-2 -mt-3 rotate-12" viewBox="0 0 100 100" fill="none">
            <path
              d="M50 2 L62 36 L98 38 L68 60 L78 96 L50 74 L22 96 L32 60 L2 38 L38 36 Z"
              fill="var(--acid)"
              stroke="var(--ink)"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <circle cx="50" cy="50" r="14" stroke="var(--ink)" strokeWidth="5" fill="var(--paper)" />
            <circle cx="50" cy="50" r="5" fill="var(--ink)" />
          </svg>
        </div>
      </motion.div>
    </>
  );
}

// =============================================================================
// 2. ABOUT SECTION VIGNETTE STICKERS
// Unboxed botanical spider lily, retro cassette tape, and torn dictionary clipping
// =============================================================================

export function AboutStickers() {
  return (
    <>
      {/* Unboxed Botanical Spider Lily (Lycoris Radiata) Ink Illustration */}
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -40, bottom: 40 }}
        whileHover={{ scale: 1.1, rotate: 3 }}
        whileTap={{ scale: 0.96 }}
        onDragStart={playStampThud}
        animate={{ y: [0, -5, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-auto hidden xl:block absolute top-8 left-[max(0.5rem,calc(50%-576px-120px))] cursor-grab active:cursor-grabbing select-none z-10"
        style={{ filter: "drop-shadow(3px 3px 0px var(--ink))" }}
        title="Unboxed botanical spider lily ink drawing (Draggable)"
      >
        <div className="relative flex flex-col items-center">
          {/* Miniature Vintage Safety Pin Fastener */}
          <div className="absolute -top-3 left-4 rotate-[25deg] z-10">
            <svg className="w-5 h-5 text-[var(--ink)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17 L17 7 C19 5 22 8 20 10 L10 20 C7 23 4 20 7 17 Z" fill="var(--paper-2)" />
              <circle cx="6" cy="18" r="2" fill="currentColor" />
            </svg>
          </div>

          {/* Hand-Inked Botanical Silhouette with Sweeping Stamens (Pure Ink, NO Box) */}
          <svg className="w-24 h-24 text-[var(--ink)]" viewBox="0 0 100 100" fill="none" stroke="currentColor">
            <circle cx="50" cy="52" r="4.5" fill="currentColor" />
            {/* Curving Flower Petals */}
            <path d="M50 52 C40 32, 22 24, 8 32" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M50 52 C60 32, 78 24, 92 32" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M50 52 C32 44, 18 56, 12 74" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M50 52 C68 44, 82 56, 88 74" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M50 52 C42 68, 36 82, 28 92" strokeWidth="3" strokeLinecap="round" />
            <path d="M50 52 C58 68, 64 82, 72 92" strokeWidth="3" strokeLinecap="round" />
            {/* Dramatic Radiating Stamen Filaments */}
            <path d="M50 52 C42 22, 30 10, 20 8" strokeWidth="1.5" />
            <ellipse cx="20" cy="8" rx="2.5" ry="1.5" fill="currentColor" />
            <path d="M50 52 C58 22, 70 10, 80 8" strokeWidth="1.5" />
            <ellipse cx="80" cy="8" rx="2.5" ry="1.5" fill="currentColor" />
            <path d="M50 52 C30 26, 12 18, 3 20" strokeWidth="1.5" />
            <ellipse cx="3" cy="20" rx="2.5" ry="1.5" fill="currentColor" />
            <path d="M50 52 C70 26, 88 18, 97 20" strokeWidth="1.5" />
            <ellipse cx="97" cy="20" rx="2.5" ry="1.5" fill="currentColor" />
            <path d="M50 52 C48 30, 46 14, 50 4" strokeWidth="1.5" />
            <ellipse cx="50" cy="4" rx="2.5" ry="1.5" fill="currentColor" />
            {/* Long Stem */}
            <path d="M50 52 C50 70, 48 88, 48 100" strokeWidth="2.5" />
          </svg>
        </div>
      </motion.div>

      {/* Retro Compact Cassette Tape (TDK-90 "SYNTH & CODE") */}
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -40, bottom: 40 }}
        whileHover={{ scale: 1.12, rotate: -4 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playStampThud}
        animate={{ y: [0, -6, 0], rotate: [-8, -4, -8] }}
        transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        className="pointer-events-auto hidden xl:block absolute top-16 left-[min(calc(100%-130px),calc(50%+576px+25px))] cursor-grab active:cursor-grabbing select-none z-10"
        style={{ filter: "drop-shadow(4px 4px 0px var(--ink))" }}
        title="Retro compact cassette tape (Draggable)"
      >
        <div className="relative p-1.5 bg-[var(--paper-2)] border-2 border-[var(--ink)] rounded-xs rotate-[-7deg] flex flex-col items-center w-26 sm:w-28">
          {/* Cassette Header */}
          <div className="w-full bg-[var(--acid)] py-0.5 px-1.5 border border-[var(--ink)] flex justify-between items-center mb-1">
            <span className="text-[7px] font-mono font-black text-[var(--ink)]">TDK-90</span>
            <span className="text-[7px] font-mono font-bold text-[var(--ink)]">SIDE A</span>
          </div>
          {/* Dual Spool Window */}
          <div className="w-full h-7 bg-[var(--ink)] rounded-xs flex items-center justify-around px-1.5">
            <div className="w-4.5 h-4.5 rounded-full border-2 border-[var(--paper)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--acid)]" />
            </div>
            <div className="w-7 h-3 bg-[var(--paper-2)] border border-[var(--paper)] flex items-center justify-center">
              <span className="text-[6px] font-mono font-black text-[var(--ink)]">REC</span>
            </div>
            <div className="w-4.5 h-4.5 rounded-full border-2 border-[var(--paper)] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--acid)]" />
            </div>
          </div>
          <span className="text-[8px] font-mono font-bold tracking-tight text-[var(--ink)] mt-1 uppercase">
            SYNTH & CODE
          </span>
        </div>
      </motion.div>

      {/* Torn Deckle-Edge Dictionary Clipping ("grit /ɡrɪt/") */}
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -40, bottom: 40 }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playTypewriterClick}
        animate={{ y: [0, -5, 0], rotate: [3, 6, 3] }}
        transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        className="pointer-events-auto hidden 2xl:block absolute top-72 left-[min(calc(100%-140px),calc(50%+576px+35px))] cursor-grab active:cursor-grabbing select-none z-10"
        style={{ filter: "drop-shadow(4px 4px 0px var(--ink))" }}
        title="Torn dictionary slip (Draggable)"
      >
        <div className="relative p-2.5 bg-[var(--paper)] border-2 border-[var(--ink)] rotate-[4deg] w-28 text-[var(--ink)]">
          {/* Scotch Tape Strip */}
          <div className="absolute -top-2.5 left-4 w-16 h-4 bg-[var(--acid)]/40 border-y border-black/20 rotate-[-5deg] pointer-events-none" />
          <div className="border-b border-[var(--ink)] pb-1 mb-1">
            <span className="font-bold text-[11px] block leading-none font-serif">
              grit <span className="text-[8px] font-normal italic font-mono">/ɡrɪt/</span>
            </span>
            <span className="text-[7px] opacity-75 font-semibold font-mono">noun.</span>
          </div>
          <p className="text-[8px] leading-snug font-serif opacity-90">
            courage and resolve; e.g. debugging assembly code at 3 AM.
          </p>
          <div className="mt-1.5 bg-[var(--acid)] py-0.5 px-1 border border-[var(--ink)] text-center">
            <span className="text-[7px] font-mono font-black uppercase tracking-wider">
              DEF. NO. 07
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}

// =============================================================================
// 3. ARCHIVE / PROJECTS VIGNETTE STICKERS
// 8-bit chunky pixel badge, acid hazard strip, and vertical barcode ticket
// =============================================================================

export function ArchiveStickers() {
  return (
    <>
      {/* 8-Bit Chunky Pixel Badge ("2048 • READY") */}
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -40, bottom: 40 }}
        whileHover={{ scale: 1.15, rotate: -4 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playStampThud}
        animate={{ y: [0, -5, 0], rotate: [-4, 0, -4] }}
        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-auto hidden xl:block absolute top-14 left-[max(0.5rem,calc(50%-576px-100px))] cursor-grab active:cursor-grabbing select-none z-10"
        style={{ filter: "drop-shadow(4px 4px 0px var(--ink))" }}
        title="8-bit pixel game badge (Draggable)"
      >
        <div className="p-2 bg-[var(--ink)] text-[var(--paper)] border-2 border-[var(--paper)] rotate-[-4deg] flex flex-col items-center">
          <div className="flex items-center gap-1 mb-0.5">
            <span className="w-2 h-2 bg-[var(--acid)] animate-ping inline-block" />
            <span className="font-mono font-black text-xs tracking-wider text-[var(--acid)]">
              2048
            </span>
          </div>
          <span className="font-mono text-[7px] uppercase font-bold tracking-widest text-[var(--paper)]">
            HIGH SCORE
          </span>
        </div>
      </motion.div>

      {/* Acid Hazard Warning Caution Strip ("HIGH ENERGY • 100% RAW CODE") */}
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -40, bottom: 40 }}
        whileHover={{ scale: 1.12, rotate: -3 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playStampThud}
        animate={{ y: [0, -6, 0], rotate: [-6, -2, -6] }}
        transition={{ duration: 4.9, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        className="pointer-events-auto hidden xl:block absolute top-24 left-[min(calc(100%-140px),calc(50%+576px+20px))] cursor-grab active:cursor-grabbing select-none z-10"
        style={{ filter: "drop-shadow(4px 4px 0px var(--ink))" }}
        title="Acid hazard caution badge (Draggable)"
      >
        <div className="p-2 bg-[var(--acid)] text-[var(--ink)] border-2 border-[var(--ink)] rotate-[-5deg] text-center flex flex-col items-center">
          <div className="w-22 h-2 bg-[repeating-linear-gradient(45deg,#0a0a0a,#0a0a0a_4px,#cbff4d_4px,#cbff4d_8px)] border border-[var(--ink)] mb-1" />
          <div className="flex items-center gap-1">
            <span className="text-xs font-black">⚡</span>
            <span className="font-mono font-black text-[9px] tracking-wider uppercase">
              HIGH ENERGY
            </span>
          </div>
          <span className="text-[7px] font-mono font-bold tracking-tight opacity-90">
            100% RAW CODE
          </span>
        </div>
      </motion.div>

      {/* Vertical Barcode Dossier Ticket */}
      <motion.div
        drag
        dragConstraints={{ left: -50, right: 50, top: -40, bottom: 40 }}
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playTypewriterClick}
        animate={{ y: [0, -5, 0], rotate: [2, 5, 2] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="pointer-events-auto hidden 2xl:block absolute top-[680px] left-[max(0.5rem,calc(50%-576px-85px))] cursor-grab active:cursor-grabbing select-none z-10"
        style={{ filter: "drop-shadow(3px 3px 0px var(--ink))" }}
        title="Archive barcode ticket (Draggable)"
      >
        <div className="p-2 bg-[var(--paper-2)] border-2 border-[var(--ink)] rotate-[3deg] flex flex-col items-center w-20">
          <span className="text-[6px] font-mono font-black uppercase text-[var(--ink)] mb-1">
            INDEX TICKET
          </span>
          {/* Realistic Barcode Stripes */}
          <div className="flex items-center gap-[2px] h-9 w-full bg-[var(--paper)] p-1 border border-[var(--ink)]/40 justify-center">
            <div className="w-[2px] h-full bg-[var(--ink)]" />
            <div className="w-[1px] h-full bg-[var(--ink)]" />
            <div className="w-[3px] h-full bg-[var(--ink)]" />
            <div className="w-[1px] h-full bg-[var(--ink)]" />
            <div className="w-[2px] h-full bg-[var(--ink)]" />
            <div className="w-[1px] h-full bg-[var(--ink)]" />
            <div className="w-[3px] h-full bg-[var(--ink)]" />
            <div className="w-[2px] h-full bg-[var(--ink)]" />
            <div className="w-[1px] h-full bg-[var(--ink)]" />
          </div>
          <span className="text-[6px] font-mono font-bold text-[var(--ink)] mt-1 tracking-widest">
            #HML-2026
          </span>
        </div>
      </motion.div>
    </>
  );
}

// Default export kept for backwards compatibility
export default function CollageStickers() {
  return null;
}
