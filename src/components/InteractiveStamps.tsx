"use client";

import React from "react";
import { playStampThud } from "./audio";

export interface PlacedStamp {
  id: string;
  x: number;
  y: number;
  text: string;
  rotation: number;
  color: "stamp" | "ink" | "acid";
}

const STAMP_TEXTS = [
  "APPROVED",
  "SEEN & READ",
  "CONFIDENTIAL",
  "TOP SECRET",
  "CERTIFIED GC",
  "RELEASED",
  "ARCHIVED",
  "VO. 001",
];

interface InteractiveStampsProps {
  isStampMode: boolean;
  onDisableStampMode: () => void;
  stamps: PlacedStamp[];
  setStamps: React.Dispatch<React.SetStateAction<PlacedStamp[]>>;
}

export default function InteractiveStamps({
  isStampMode,
  onDisableStampMode,
  stamps,
  setStamps,
}: InteractiveStampsProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isStampMode) return;
    // Don't stamp on buttons or links
    const target = e.target as HTMLElement;
    if (target.closest("button, a, input, [role='dialog']")) return;

    const randomText = STAMP_TEXTS[Math.floor(Math.random() * STAMP_TEXTS.length)];
    const randomRotation = Math.floor(Math.random() * 30) - 15;
    const colors: ("stamp" | "ink" | "acid")[] = ["stamp", "ink", "stamp"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newStamp: PlacedStamp = {
      id: `${Date.now()}-${Math.random()}`,
      x: e.pageX,
      y: e.pageY,
      text: randomText,
      rotation: randomRotation,
      color: randomColor,
    };

    setStamps((prev) => [...prev, newStamp]);
    playStampThud();
  };

  return (
    <>
      {/* Click listener layer when stamp mode is active */}
      {isStampMode && (
        <div
          onClick={handleClick}
          className="fixed inset-0 z-40 cursor-crosshair select-none"
          title="Click anywhere to leave an ink stamp"
        />
      )}

      {/* Floating Toolbar when stamp mode is active */}
      {isStampMode && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[var(--paper)] border-2 border-[var(--ink)] p-3 brutal-shadow">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--ink)]">
            Stamp Mode Active (Click Page)
          </span>
          <button
            onClick={() => {
              setStamps([]);
              playStampThud();
            }}
            className="btn-brutal text-xs py-1 px-2"
          >
            Clear ({stamps.length})
          </button>
          <button
            onClick={onDisableStampMode}
            className="btn-brutal bg-[var(--ink)] text-[var(--paper)] hover:text-[var(--ink)] text-xs py-1 px-2"
          >
            Done
          </button>
        </div>
      )}

      {/* Render placed stamps */}
      {stamps.map((stamp) => {
        let borderClass = "border-[var(--stamp)] text-[var(--stamp)]";
        if (stamp.color === "ink") borderClass = "border-[var(--ink)] text-[var(--ink)]";
        if (stamp.color === "acid") borderClass = "border-[var(--ink)] bg-[var(--acid)] text-[var(--ink)]";

        return (
          <div
            key={stamp.id}
            style={{
              left: `${stamp.x}px`,
              top: `${stamp.y}px`,
              transform: `translate(-50%, -50%) rotate(${stamp.rotation}deg)`,
            }}
            className={`absolute pointer-events-none z-30 font-mono font-black text-sm tracking-widest uppercase border-4 border-dashed px-3 py-1.5 ${borderClass} opacity-90 select-none shadow-[2px_2px_0_rgba(0,0,0,0.2)] animate-wiggle-alt`}
          >
            [ {stamp.text} ]
          </div>
        );
      })}
    </>
  );
}
