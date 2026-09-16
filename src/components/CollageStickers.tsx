"use client";

import React from "react";
import { motion } from "framer-motion";
import { playStampThud } from "./audio";

export default function CollageStickers() {
  return (
    <div className="hidden xl:block pointer-events-none fixed inset-0 z-20 overflow-hidden">
      {/* Draggable Ribbon Bow Sticker (Custom Ink Vector) */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playStampThud}
        className="pointer-events-auto absolute top-28 left-4 cursor-grab active:cursor-grabbing select-none"
        title="Draggable zine sticker"
      >
        <div className="relative p-2.5 bg-[var(--paper)] border-2 border-[var(--ink)] brutal-shadow-sm rotate-[-8deg] flex flex-col items-center">
          <svg
            className="w-8 h-8 text-[var(--ink)]"
            viewBox="0 0 48 48"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Center knot */}
            <circle cx="24" cy="22" r="4" fill="currentColor" />
            {/* Left loop */}
            <path d="M20 22 C12 12, 4 16, 6 24 C8 30, 18 25, 20 22 Z" fill="currentColor" fillOpacity="0.2" />
            {/* Right loop */}
            <path d="M28 22 C36 12, 44 16, 42 24 C40 30, 30 25, 28 22 Z" fill="currentColor" fillOpacity="0.2" />
            {/* Ribbon tails */}
            <path d="M22 25 L14 42 L20 40 L23 26" fill="currentColor" />
            <path d="M26 25 L34 42 L28 40 L25 26" fill="currentColor" />
          </svg>
          <span className="block text-[8px] font-mono font-bold uppercase tracking-tighter text-center mt-1">
            DRAG ME
          </span>
        </div>
      </motion.div>

      {/* Draggable Spider Lily Flower Vector */}
      <motion.div
        drag
        dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
        whileHover={{ scale: 1.15, rotate: 8 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playStampThud}
        className="pointer-events-auto absolute bottom-44 left-6 cursor-grab active:cursor-grabbing select-none"
        title="Draggable spider lily doodle"
      >
        <div className="p-2.5 bg-[var(--paper-2)] border-2 border-[var(--ink)] brutal-shadow-sm rotate-[12deg] text-center flex flex-col items-center">
          <svg
            className="w-9 h-9 text-[var(--ink)]"
            viewBox="0 0 64 64"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="32" cy="32" r="3" fill="currentColor" />
            <path d="M32 32 C26 20, 16 16, 8 20" strokeWidth="1.5" />
            <path d="M32 32 C38 20, 48 16, 56 20" strokeWidth="1.5" />
            <path d="M32 32 C20 28, 12 36, 10 46" strokeWidth="1.5" />
            <path d="M32 32 C44 28, 52 36, 54 46" strokeWidth="1.5" />
            <path d="M32 32 C28 44, 24 54, 20 60" strokeWidth="1.5" />
            <path d="M32 32 C36 44, 40 54, 44 60" strokeWidth="1.5" />
            <circle cx="8" cy="20" r="1.5" fill="currentColor" />
            <circle cx="56" cy="20" r="1.5" fill="currentColor" />
            <circle cx="10" cy="46" r="1.5" fill="currentColor" />
            <circle cx="54" cy="46" r="1.5" fill="currentColor" />
          </svg>
          <span className="block text-[8px] font-mono font-bold uppercase text-[var(--stamp)] mt-1">
            SPIDER LILY
          </span>
        </div>
      </motion.div>

      {/* Draggable Star Badge */}
      <motion.div
        drag
        dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
        whileHover={{ scale: 1.15, rotate: -10 }}
        whileTap={{ scale: 0.95 }}
        onDragStart={playStampThud}
        className="pointer-events-auto absolute top-1/2 right-4 cursor-grab active:cursor-grabbing select-none"
        title="Draggable zine badge"
      >
        <div className="p-2 bg-[var(--acid)] text-[var(--ink)] border-2 border-[var(--ink)] brutal-shadow-sm rotate-[-6deg] text-center">
          <div className="flex items-center justify-center gap-1">
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
            <span className="font-mono font-black text-xs">ZINE #01</span>
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
            </svg>
          </div>
          <span className="block text-[8px] font-mono font-bold tracking-widest mt-0.5">
            SCRAPBOOK
          </span>
        </div>
      </motion.div>
    </div>
  );
}
