"use client";

import React, { useState } from "react";
import { playTypewriterClick } from "./audio";

interface NavigationProps {
  isNegativeTheme: boolean;
  onToggleTheme: () => void;
  isAudioOn: boolean;
  onToggleAudio: () => void;
  isStampMode: boolean;
  onToggleStampMode: () => void;
}

export default function Navigation({
  isNegativeTheme,
  onToggleTheme,
  isAudioOn,
  onToggleAudio,
  isStampMode,
  onToggleStampMode,
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

          {/* Interactive Tools */}
          <div className="h-5 w-[2px] bg-[var(--ink)]/30 mx-1" />

          {/* Stamp Tool */}
          <button
            onClick={() => {
              playTypewriterClick();
              onToggleStampMode();
            }}
            className={`px-2.5 py-1 text-xs border-2 border-[var(--ink)] transition-colors ${
              isStampMode
                ? "bg-[var(--acid)] text-[var(--ink)] font-black brutal-shadow-sm"
                : "bg-[var(--paper-2)] hover:bg-[var(--acid)]"
            }`}
            title="Toggle stamp tool to stamp anywhere"
          >
            STAMP {isStampMode ? "ON" : "OFF"}
          </button>

          {/* Audio FX */}
          <button
            onClick={() => {
              playTypewriterClick();
              onToggleAudio();
            }}
            className={`px-2.5 py-1 text-xs border-2 border-[var(--ink)] transition-colors ${
              isAudioOn
                ? "bg-[var(--acid)] text-[var(--ink)] font-black brutal-shadow-sm"
                : "bg-[var(--paper-2)] hover:bg-[var(--acid)]"
            }`}
            title="Toggle typewriter & stamp sounds"
          >
            FX: {isAudioOn ? "ON" : "MUTE"}
          </button>

          {/* Xerox Negative Theme */}
          <button
            onClick={() => {
              playTypewriterClick();
              onToggleTheme();
            }}
            className="px-2.5 py-1 text-xs border-2 border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--acid)] hover:text-[var(--ink)] transition-colors font-black"
            title="Toggle Xerox Inverted Photocopy Theme"
          >
            {isNegativeTheme ? "PRINT" : "XEROX"}
          </button>
        </div>

        {/* Mobile controls & toggle button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="text-[11px] font-mono px-2 py-1 border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
            title="Invert Xerox Theme"
          >
            {isNegativeTheme ? "LIGHT" : "DARK"}
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

          <div className="flex items-center gap-2 pt-2 border-t border-[var(--ink)]/20">
            <button
              onClick={() => {
                onToggleStampMode();
                setIsOpen(false);
              }}
              className={`flex-1 py-1 text-xs border border-[var(--ink)] ${
                isStampMode ? "bg-[var(--acid)] font-black" : "bg-[var(--paper-2)]"
              }`}
            >
              Stamp Tool ({isStampMode ? "Active" : "Ready"})
            </button>
            <button
              onClick={onToggleAudio}
              className={`flex-1 py-1 text-xs border border-[var(--ink)] ${
                isAudioOn ? "bg-[var(--acid)] font-black" : "bg-[var(--paper-2)]"
              }`}
            >
              Sound ({isAudioOn ? "On" : "Muted"})
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
