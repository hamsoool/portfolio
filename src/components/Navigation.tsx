"use client";

import React, { useState } from "react";
import { playTypewriterClick } from "./audio";

interface NavigationProps {
  isNegativeTheme: boolean;
  onToggleTheme: () => void;
  isAudioOn?: boolean;
  onToggleAudio?: () => void;
  isStampMode?: boolean;
  onToggleStampMode?: () => void;
}

export default function Navigation({
  isNegativeTheme,
  onToggleTheme,
}: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    playTypewriterClick();
    setIsOpen(false);
  };

  return (
    <nav
      aria-label="Main Navigation"
      className="sticky top-0 z-40 bg-[var(--paper)] border-b-2 border-[var(--ink)] px-4 sm:px-8 py-3 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Brand Mark */}
        <a
          href="#top"
          onClick={playTypewriterClick}
          className="font-display font-black text-2xl tracking-wider hover:text-[var(--stamp)] transition-colors"
        >
          H·M·L
        </a>

        {/* Action Controls & Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6 text-sm font-mono font-bold uppercase">
          <a
            href="#about"
            onClick={handleLinkClick}
            className="hover:underline underline-offset-4 decoration-[var(--acid)] decoration-2"
          >
            about
          </a>
          <a
            href="#stack"
            onClick={handleLinkClick}
            className="hover:underline underline-offset-4 decoration-[var(--acid)] decoration-2"
          >
            stack
          </a>
          <a
            href="#work"
            onClick={handleLinkClick}
            className="hover:underline underline-offset-4 decoration-[var(--acid)] decoration-2"
          >
            archive
          </a>
          <a
            href="#connect"
            onClick={handleLinkClick}
            className="hover:underline underline-offset-4 decoration-[var(--acid)] decoration-2"
          >
            connect
          </a>

          {/* Separator */}
          <div className="h-5 w-[2px] bg-[var(--ink)]/30 mx-1" />

          {/* Xerox Negative Theme Toggle (Preserved & Configured) */}
          <button
            onClick={() => {
              playTypewriterClick();
              onToggleTheme();
            }}
            className="px-3 py-1 text-xs border-2 border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--acid)] hover:text-[var(--ink)] transition-colors font-black tracking-wider flex items-center gap-1.5 brutal-shadow-xs cursor-pointer"
            title={isNegativeTheme ? "Switch to standard paper theme" : "Invert to xerox negative photocopy theme"}
            aria-label={isNegativeTheme ? "Switch to standard print theme" : "Switch to xerox negative theme"}
          >
            <span className="inline-block w-2 h-2 rounded-full border border-current bg-current" />
            {isNegativeTheme ? "PRINT" : "XEROX"}
          </button>
        </div>

        {/* Mobile controls & toggle button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => {
              playTypewriterClick();
              onToggleTheme();
            }}
            className="text-xs font-mono font-black px-2.5 py-1 border-2 border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--acid)] hover:text-[var(--ink)] transition-colors tracking-wider"
            title={isNegativeTheme ? "Switch to standard paper theme" : "Invert to xerox negative photocopy theme"}
            aria-label={isNegativeTheme ? "Switch to standard print theme" : "Switch to xerox negative theme"}
          >
            {isNegativeTheme ? "PRINT" : "XEROX"}
          </button>

          <button
            onClick={() => {
              playTypewriterClick();
              setIsOpen(!isOpen);
            }}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="btn-brutal text-xs px-3 py-1.5"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div
          id="mobile-nav"
          className="md:hidden mt-3 pt-3 border-t-2 border-dashed border-[var(--ink)] flex flex-col gap-3 font-mono font-bold text-sm uppercase pb-2"
        >
          <a
            href="#about"
            onClick={handleLinkClick}
            className="py-1 px-2 border border-transparent hover:border-[var(--ink)] hover:bg-[var(--paper-2)]"
          >
            about
          </a>
          <a
            href="#stack"
            onClick={handleLinkClick}
            className="py-1 px-2 border border-transparent hover:border-[var(--ink)] hover:bg-[var(--paper-2)]"
          >
            stack
          </a>
          <a
            href="#work"
            onClick={handleLinkClick}
            className="py-1 px-2 border border-transparent hover:border-[var(--ink)] hover:bg-[var(--paper-2)]"
          >
            archive
          </a>
          <a
            href="#connect"
            onClick={handleLinkClick}
            className="py-1 px-2 border border-transparent hover:border-[var(--ink)] hover:bg-[var(--paper-2)]"
          >
            connect
          </a>

          <div className="pt-2 border-t border-[var(--ink)]/20">
            <button
              onClick={() => {
                playTypewriterClick();
                onToggleTheme();
                setIsOpen(false);
              }}
              className="w-full py-2 text-xs font-mono font-black border-2 border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--acid)] hover:text-[var(--ink)] transition-colors tracking-wider flex items-center justify-center gap-2"
            >
              <span className="inline-block w-2 h-2 rounded-full border border-current bg-current" />
              <span>THEME: {isNegativeTheme ? "XEROX NEGATIVE (CLICK FOR PRINT)" : "STANDARD PRINT (CLICK FOR XEROX)"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
