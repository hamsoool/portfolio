"use client";

import React, { useState } from "react";
import { playTypewriterClick, playStampThud } from "./audio";

export default function ConnectSection() {
  const [copied, setCopied] = useState(false);
  const email = "hanslacuesta@gmail.com";

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    playStampThud();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="connect"
      className="relative bg-[var(--paper-2)] border-b-2 border-[var(--ink)] py-14 md:py-24 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="relative bg-[var(--paper)] border-2 border-[var(--ink)] p-6 sm:p-10 md:p-12 brutal-shadow-lg">
          {/* Scotch tape in corners */}
          <div className="tape-strip -top-3 left-10 w-28 h-6 rotate-[-4deg]" />
          <div className="tape-strip -bottom-3 right-10 w-28 h-6 rotate-[3deg]" />

          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--stamp)]">
              Dispatch Terminal
            </span>

            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lowercase tracking-tight my-3">
              get in touch
            </h2>

            <p className="font-mono text-sm sm:text-base leading-relaxed text-[var(--ink)] mb-8">
              Open to internships, freelance builds, and anything that needs a developer who reads the whole spec before writing code.
            </p>

            {/* Connect Buttons Grid */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4 font-mono">
              <a
                href={`mailto:${email}`}
                onClick={playTypewriterClick}
                className="btn-brutal bg-[var(--acid)] text-[var(--ink)] text-xs sm:text-sm font-black"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="1" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Send Email
              </a>

              <button
                onClick={handleCopyEmail}
                className="btn-brutal text-xs sm:text-sm font-bold"
                title="Copy email address"
              >
                <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="14" height="14" x="8" y="8" rx="1" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
                {copied ? "Copied to Clipboard" : "Copy Email"}
              </button>

              <a
                href="https://github.com/hamsoool"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTypewriterClick}
                className="btn-brutal text-xs sm:text-sm font-bold"
              >
                GitHub ↗
              </a>

              <a
                href="https://linkedin.com/in/hanslacuesta"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTypewriterClick}
                className="btn-brutal text-xs sm:text-sm font-bold"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://facebook.com/hansmarcus"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTypewriterClick}
                className="btn-brutal text-xs sm:text-sm font-bold"
              >
                Facebook ↗
              </a>
            </div>
          </div>

          {/* Postage stamp decorative box */}
          <div className="hidden md:flex flex-col items-center justify-center absolute top-8 right-8 w-28 h-32 border-2 border-dashed border-[var(--ink)] p-2 rotate-[4deg] bg-[var(--paper-2)] select-none">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[var(--stamp)]">
              AIR MAIL
            </span>
            <div className="w-14 h-14 my-1 border border-[var(--ink)] flex items-center justify-center font-display font-black text-2xl">
              HML
            </div>
            <span className="text-[9px] font-mono uppercase tracking-tight">
              PHILIPPINES
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
