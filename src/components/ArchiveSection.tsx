"use client";

import React from "react";
import { ProjectData } from "./ProjectDossierModal";
import { playTypewriterClick } from "./audio";

interface ArchiveSectionProps {
  onSelectProject: (project: ProjectData) => void;
  onOpen2048: () => void;
}

export const PROJECTS: ProjectData[] = [
  {
    id: "clinicka",
    fileNo: "no. 1 — flagship",
    title: "clinicka",
    tagline:
      "A role-based clinic management portal for Gordon College: because paper medical clearance forms were nobody's favorite part of enrollment.",
    description:
      "Four roles, one submission pipeline: students upload lab results and requirements, staff review and clear them, admins manage accounts and reports, and a super admin oversees it all. Built on React, TypeScript, and Supabase Edge Functions, with a pluggable OCR layer that reads lab results through Azure AI Vision or OCR.space: swappable from the admin settings, no redeploy required.",
    architectureDetails:
      "Edge-computed Supabase architecture with row-level security (RLS) across 4 role hierarchies. Includes asynchronous OCR queue worker with fallback provider routing and Upstash Redis rate-limiting.",
    lifecycle: [
      "pending",
      "in review",
      "returned",
      "resubmitted",
      "physical exam",
      "approved",
    ],
    techStack: [
      "React 18",
      "TypeScript",
      "Vite",
      "Tailwind",
      "Supabase",
      "Cloudinary",
      "Upstash Redis",
    ],
    isPrivate: true,
    statusLabel: "institutional deployment : source available internally",
    iconSvg: (
      <svg className="w-full h-full text-[var(--ink)]" viewBox="0 0 64 64">
        <rect x="26" y="8" width="12" height="48" fill="currentColor" />
        <rect x="8" y="26" width="48" height="12" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "phoenix-ewallet",
    fileNo: "file no. 2",
    title: "phoenix e-wallet",
    tagline:
      "A digital wallet & membership tracker for student orgs, with face-login and a 2048 game bolted on for fun.",
    description:
      "Members check balances, pay dues, and climb membership tiers, while admins get an analytics dashboard and exportable PDF/Excel reports.",
    architectureDetails:
      "Biometric facial authentication via face-api.js running entirely on-device tensor pipelines, synced with Firebase Realtime Database and exportable ledger reporting.",
    techStack: ["Vue 3", "Firebase", "face-api.js", "Chart.js"],
    repoUrl: "https://github.com/hamsoool/Phoenix-E-Wallet-Solutions",
    isPrivate: false,
    iconSvg: (
      <svg className="w-full h-full text-[var(--ink)]" viewBox="0 0 64 64">
        <path
          d="M32 6C22 20 14 28 14 40a18 18 0 0036 0c0-8-4-12-8-18 1 6-3 10-7 8 3-6 1-16-3-24z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "glasshill-pansol",
    fileNo: "file no. 3",
    title: "glasshill pansol",
    tagline: "A marketing site for a private hot-spring villa in Pansol, Calamba.",
    description:
      "Built section by section from the client's own marketing graphic: sampled colors, cropped photography, a custom wordmark typeface, so it reads as their property from the first scroll.",
    architectureDetails:
      "Next.js App Router static optimization with zero-runtime client components for lightning load performance on mobile networks in Laguna resort corridors.",
    techStack: ["Next.js 14", "TypeScript", "Tailwind"],
    isPrivate: true,
    statusLabel: "source private",
    iconSvg: (
      <svg className="w-full h-full text-[var(--ink)]" viewBox="0 0 64 64">
        <path
          d="M32 6C20 22 12 34 12 44a20 20 0 0040 0c0-10-8-22-20-38z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: "soul-scraper",
    fileNo: "file no. 4",
    title: "soul scraper",
    tagline: "A REST API that watches websites so you don't have to.",
    description:
      "Crawls configured sources on a schedule, pulls down PDFs and reports, extracts full text, and serves it through a paginated FastAPI backend: with SSRF protections and API-key auth.",
    architectureDetails:
      "Headless crawling architecture with PyMuPDF document dissection, asynchronous background tasks, server-side request forgery (SSRF) IP blocklisting, and PostgreSQL relational storage.",
    techStack: ["FastAPI", "PostgreSQL", "BeautifulSoup4", "PyMuPDF"],
    repoUrl: "https://github.com/hamsoool/soul-scaper",
    isPrivate: false,
    iconSvg: (
      <svg className="w-full h-full text-[var(--ink)]" viewBox="0 0 64 64">
        <circle cx="32" cy="30" r="9" fill="currentColor" />
        <line x1="32" y1="21" x2="14" y2="8" stroke="currentColor" strokeWidth="3" />
        <line x1="32" y1="24" x2="10" y2="22" stroke="currentColor" strokeWidth="3" />
        <line x1="32" y1="30" x2="8" y2="34" stroke="currentColor" strokeWidth="3" />
        <line x1="32" y1="36" x2="12" y2="48" stroke="currentColor" strokeWidth="3" />
        <line x1="32" y1="21" x2="50" y2="8" stroke="currentColor" strokeWidth="3" />
        <line x1="32" y1="24" x2="54" y2="22" stroke="currentColor" strokeWidth="3" />
        <line x1="32" y1="30" x2="56" y2="34" stroke="currentColor" strokeWidth="3" />
        <line x1="32" y1="36" x2="52" y2="48" stroke="currentColor" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: "octane",
    fileNo: "file no. 5",
    title: "octane",
    tagline: "Fuel-price intelligence, mapped.",
    description:
      "Pulls real Department of Energy fuel prices onto an interactive map, ranks stations by actual road distance from wherever you are, and wraps it in OTP-verified accounts with an admin console.",
    architectureDetails:
      "SolidJS ultra-reactive WebGL map client coupled with OpenStreetMap routing graphs, caching real-time DOE tariff tables in MongoDB GeoJSON indices.",
    techStack: ["SolidJS", "MapLibre GL", "Express", "MongoDB"],
    isPrivate: true,
    statusLabel: "source private",
    iconSvg: (
      <svg className="w-full h-full text-[var(--ink)]" viewBox="0 0 64 64">
        <rect x="10" y="18" width="26" height="38" fill="none" stroke="currentColor" strokeWidth="3" />
        <path d="M36 26h8a4 4 0 014 4v18a4 4 0 01-4 4h-2" fill="none" stroke="currentColor" strokeWidth="3" />
        <line x1="46" y1="26" x2="52" y2="20" stroke="currentColor" strokeWidth="3" />
        <rect x="15" y="24" width="16" height="10" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "memoir",
    fileNo: "file no. 6",
    title: "memoir",
    tagline: "A private, vintage-styled photo journal for two.",
    description:
      "Every upload develops like a Polaroid: film-strip styling, a retro photobooth generator, capture dates pulled from EXIF. Keepsakes deliver to a private Discord channel behind a passcode gate.",
    architectureDetails:
      "Serverless Node image buffer manipulation reading EXIF metadata, generating client-side canvas Polaroid frames, and triggering webhook payloads to encrypted Discord channels.",
    techStack: ["Next.js", "Cloudinary", "Upstash Redis", "Discord API"],
    isPrivate: true,
    statusLabel: "source private",
    iconSvg: (
      <svg className="w-full h-full text-[var(--ink)]" viewBox="0 0 64 64">
        <rect x="10" y="8" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="3" />
        <rect x="16" y="14" width="32" height="24" fill="currentColor" />
        <line x1="10" y1="52" x2="54" y2="52" stroke="currentColor" strokeWidth="8" />
      </svg>
    ),
  },
];

export default function ArchiveSection({
  onSelectProject,
  onOpen2048,
}: ArchiveSectionProps) {
  const flagship = PROJECTS[0];
  const gridProjects = PROJECTS.slice(1);

  return (
    <section
      id="work"
      className="relative bg-[var(--paper)] py-14 md:py-24 border-b-2 border-[var(--ink)] transition-colors duration-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="mb-10">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--stamp)]">
            Case Files
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lowercase tracking-tight">
            the archive
          </h2>
          <p className="font-mono text-xs sm:text-sm opacity-75 mt-2 max-w-xl">
            Ranked, not chronological: starting with the one he would defend in an argument.
          </p>
        </div>

        {/* Flagship Feature Article */}
        <article className="relative bg-[var(--paper)] border-2 border-[var(--ink)] p-6 sm:p-8 md:p-10 brutal-shadow-lg mb-12 transition-transform hover:-translate-y-1">
          {/* Distressed Red Rubber Stamp */}
          <div className="absolute -top-4 left-6 bg-[var(--stamp)] text-[var(--paper)] border-2 border-[var(--ink)] px-3 py-1 font-mono text-xs font-black uppercase tracking-wider rotate-[-2.5deg] select-none brutal-shadow-sm">
            case file no. 1 : flagship
          </div>

          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
            {/* Halftone Icon Frame */}
            <div className="w-24 h-24 sm:w-28 sm:h-28 halftone-dense border-2 border-[var(--ink)] flex items-center justify-center p-5 rotate-[-3deg] shrink-0 brutal-shadow-sm">
              {flagship.iconSvg}
            </div>

            {/* Feature Body */}
            <div className="flex-1 min-w-0 font-mono text-[var(--ink)]">
              <h3 className="font-display font-black text-3xl sm:text-4xl md:text-5xl lowercase mb-2">
                {flagship.title}
              </h3>
              <p className="font-semibold text-sm sm:text-base mb-3 leading-relaxed">
                {flagship.tagline}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed opacity-90 mb-4">
                {flagship.description}
              </p>

              {/* Clearance Pipeline Lifecycle */}
              <div className="mb-4">
                <span className="text-[11px] uppercase tracking-wider opacity-70 block mb-1.5 font-bold">
                  Document Pipeline:
                </span>
                <ol className="flex flex-wrap gap-2 sm:gap-3 list-none p-0">
                  {flagship.lifecycle?.map((stage, i) => (
                    <li
                      key={i}
                      className="border border-[var(--ink)] bg-[var(--paper-2)] px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider"
                    >
                      {stage}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Tech stack */}
              <ul className="flex flex-wrap gap-1.5 list-none p-0 mb-6">
                {flagship.techStack.map((tech, i) => (
                  <li
                    key={i}
                    className="border border-[var(--ink)] bg-[var(--paper)] px-2 py-0.5 text-xs font-semibold uppercase"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    playTypewriterClick();
                    onSelectProject(flagship);
                  }}
                  className="btn-brutal text-xs"
                >
                  <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                  Inspect Case Dossier
                </button>
                <span className="border border-dashed border-[var(--ink)] px-3 py-1 text-[11px] font-bold uppercase opacity-85">
                  {flagship.statusLabel}
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {gridProjects.map((proj, idx) => {
            const rotations = [
              "rotate-[-1.5deg]",
              "rotate-[1.8deg]",
              "rotate-[-1.2deg]",
              "rotate-[1.5deg]",
              "rotate-[-1.6deg]",
            ];
            const rotClass = rotations[idx % rotations.length];

            return (
              <article
                key={proj.id}
                className={`relative bg-[var(--paper)] border-2 border-[var(--ink)] p-5 sm:p-6 brutal-shadow transition-transform hover:rotate-0 hover:-translate-y-1.5 ${rotClass} flex flex-col justify-between`}
              >
                {/* Scotch Tape */}
                <div className="tape-strip -top-3 left-6 w-20 h-5 rotate-[-5deg]" />

                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider opacity-60">
                      {proj.fileNo}
                    </span>
                    <button
                      onClick={() => {
                        playTypewriterClick();
                        onSelectProject(proj);
                      }}
                      className="text-[11px] font-mono underline hover:text-[var(--stamp)] uppercase"
                    >
                      specs ↗
                    </button>
                  </div>

                  {/* Icon Frame */}
                  <div className="w-16 h-16 halftone-dense border-2 border-[var(--ink)] flex items-center justify-center p-3 my-3 rotate-[-3deg]">
                    {proj.iconSvg}
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl lowercase mb-1 text-[var(--ink)]">
                    {proj.title}
                  </h3>

                  <p className="font-mono font-semibold text-xs mb-2 leading-snug">
                    {proj.tagline}
                  </p>

                  <p className="font-mono text-xs opacity-85 leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Tech stack */}
                  <ul className="flex flex-wrap gap-1.5 list-none p-0 mb-4">
                    {proj.techStack.map((tech, tIdx) => (
                      <li
                        key={tIdx}
                        className="border border-[var(--ink)] bg-[var(--paper-2)] px-2 py-0.5 text-[11px] font-mono font-semibold uppercase"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-dashed border-[var(--ink)]/40">
                    {proj.repoUrl && (
                      <a
                        href={proj.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playTypewriterClick}
                        className="btn-brutal text-xs py-1 px-2.5"
                      >
                        view repo ↗
                      </a>
                    )}

                    {/* Bolted on 2048 game button for Phoenix */}
                    {proj.id === "phoenix-ewallet" && (
                      <button
                        onClick={() => {
                          playTypewriterClick();
                          onOpen2048();
                        }}
                        className="btn-brutal bg-[var(--acid)] text-[var(--ink)] text-xs py-1 px-2.5 font-bold"
                        title="Play the 2048 mini-game bolted onto Phoenix E-Wallet"
                      >
                        Play 2048
                      </button>
                    )}

                    {proj.isPrivate && (
                      <span className="border border-dashed border-[var(--ink)] px-2 py-0.5 text-[10px] font-mono uppercase opacity-75">
                        {proj.statusLabel}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
