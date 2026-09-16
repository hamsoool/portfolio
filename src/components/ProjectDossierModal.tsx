"use client";

import React, { useEffect } from "react";
import { playTypewriterClick } from "./audio";

export interface ProjectData {
  id: string;
  fileNo: string;
  title: string;
  tagline: string;
  description: string;
  architectureDetails?: string;
  lifecycle?: string[];
  techStack: string[];
  repoUrl?: string;
  isPrivate?: boolean;
  statusLabel?: string;
  iconSvg: React.ReactNode;
}

interface ProjectDossierModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export default function ProjectDossierModal({
  project,
  onClose,
}: ProjectDossierModalProps) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-none"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--paper)] border-4 border-[var(--ink)] p-6 md:p-8 brutal-shadow-xl text-[var(--ink)]">
        {/* Tape highlight */}
        <div className="tape-strip top-[-14px] right-12 w-32 h-7 rotate-[2.5deg]" />

        {/* Dossier Header */}
        <div className="flex justify-between items-start border-b-2 border-dashed border-[var(--ink)] pb-4 mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 halftone-dense border-2 border-[var(--ink)] flex items-center justify-center p-2.5 rotate-[-3deg] shrink-0">
              {project.iconSvg}
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--stamp)]">
                Classified Case File : {project.fileNo}
              </span>
              <h2
                id="dossier-title"
                className="font-display text-3xl md:text-4xl font-black lowercase tracking-tight"
              >
                {project.title}
              </h2>
            </div>
          </div>
          <button
            onClick={() => {
              playTypewriterClick();
              onClose();
            }}
            aria-label="Close dossier"
            className="btn-brutal text-sm px-3 py-1 font-mono"
          >
            Close
          </button>
        </div>

        {/* Body */}
        <div className="space-y-4 font-mono text-sm leading-relaxed">
          <div className="p-3 bg-[var(--paper-2)] border-l-4 border-[var(--ink)]">
            <p className="font-semibold text-base mb-1">{project.tagline}</p>
            <p className="opacity-90">{project.description}</p>
          </div>

          {project.architectureDetails && (
            <div>
              <h3 className="font-display text-xl uppercase font-bold tracking-wide border-b border-dashed border-[var(--ink)]/40 pb-1 mb-2">
                Technical Blueprint
              </h3>
              <p className="text-xs md:text-sm opacity-95">
                {project.architectureDetails}
              </p>
            </div>
          )}

          {project.lifecycle && (
            <div>
              <h3 className="font-display text-xl uppercase font-bold tracking-wide border-b border-dashed border-[var(--ink)]/40 pb-1 mb-2">
                Processing Lifecycle
              </h3>
              <ol className="flex flex-wrap gap-2 list-none p-0">
                {project.lifecycle.map((stage, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-1.5 border border-[var(--ink)] bg-[var(--paper-2)] px-2.5 py-1 text-xs uppercase font-bold"
                  >
                    <span>{idx + 1}. {stage}</span>
                    {idx < project.lifecycle!.length - 1 && (
                      <span className="text-[var(--stamp)] font-black">→</span>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div>
            <h3 className="font-display text-xl uppercase font-bold tracking-wide border-b border-dashed border-[var(--ink)]/40 pb-1 mb-2">
              Technology Inventory
            </h3>
            <ul className="flex flex-wrap gap-2 list-none p-0">
              {project.techStack.map((tech, i) => (
                <li
                  key={i}
                  className="border-1.5 border-[var(--ink)] bg-[var(--paper)] px-2.5 py-1 text-xs uppercase font-semibold rotate-[-1deg]"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-4 border-t-2 border-[var(--ink)] flex flex-wrap justify-between items-center gap-4">
          <div>
            {project.isPrivate ? (
              <span className="border-1.5 border-dashed border-[var(--ink)] px-3 py-1 text-xs font-mono font-bold uppercase opacity-85">
                {project.statusLabel || "Source Private : Institutional Deployment"}
              </span>
            ) : project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playTypewriterClick}
                className="btn-brutal text-xs"
              >
                Inspect Repository ↗
              </a>
            ) : null}
          </div>

          <div className="rubber-stamp text-xs rotate-[-2deg]">
            [ VERIFIED RECORD ]
          </div>
        </div>
      </div>
    </div>
  );
}
