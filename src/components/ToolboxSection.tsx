"use client";

import React, { useState } from "react";
import { playTypewriterClick, playStampThud } from "./audio";

const TOOLBOX_DATA = [
  {
    category: "languages",
    skills: ["JavaScript", "TypeScript", "Python", "HTML5", "CSS3"],
  },
  {
    category: "frontend",
    skills: ["React", "React Native", "Vue.js", "Next.js", "Tailwind CSS", "Vite"],
  },
  {
    category: "backend",
    skills: ["Node.js", "Express"],
  },
  {
    category: "data & infra",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Firebase"],
  },
  {
    category: "tools",
    skills: ["Git", "Docker", "Figma", "Vercel", "Render"],
  },
];

export default function ToolboxSection() {
  const [copied, setCopied] = useState(false);

  const copyAllSkills = () => {
    playStampThud();
    const all = TOOLBOX_DATA.map(
      (group) => `${group.category.toUpperCase()}: ${group.skills.join(", ")}`
    ).join("\n");
    navigator.clipboard.writeText(all);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="stack"
      className="relative bg-[var(--paper-2)] border-b-2 border-[var(--ink)] py-14 md:py-24 transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 pb-4 border-b-2 border-[var(--ink)]">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--stamp)]">
              Specification Sheet
            </span>
            <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lowercase tracking-tight">
              the toolbox
            </h2>
          </div>

          <button
            onClick={copyAllSkills}
            className="btn-brutal text-xs"
            title="Copy all tools as formatted text"
          >
            <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
              <rect width="14" height="14" x="8" y="8" rx="1" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
            {copied ? "Copied to Clipboard" : "Copy Full Inventory"}
          </button>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TOOLBOX_DATA.map((group, idx) => (
            <div
              key={idx}
              className="bg-[var(--paper)] border-2 border-[var(--ink)] p-5 brutal-shadow relative transition-transform hover:-translate-y-1"
            >
              {/* Corner tape on alternate cards */}
              {idx % 2 === 0 && (
                <div className="tape-strip -top-3 left-6 w-20 h-5 rotate-[-3deg]" />
              )}

              <h3 className="font-display text-2xl lowercase tracking-wide border-b-1.5 border-dashed border-[var(--ink)]/40 pb-2 mb-3 text-[var(--ink)]">
                {group.category}
              </h3>

              <ul className="flex flex-wrap gap-2 list-none p-0">
                {group.skills.map((skill, sIdx) => {
                  const rotation =
                    sIdx % 3 === 0
                      ? "rotate-[-2deg]"
                      : sIdx % 3 === 1
                      ? "rotate-[1.5deg]"
                      : "rotate-[-1deg]";
                  return (
                    <li
                      key={sIdx}
                      onClick={playTypewriterClick}
                      className={`border border-[var(--ink)] px-2.5 py-1 text-xs uppercase font-mono font-semibold bg-[var(--paper-2)] hover:bg-[var(--acid)] transition-colors cursor-default ${rotation}`}
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
