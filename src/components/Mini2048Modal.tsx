"use client";

import React, { useState, useEffect, useCallback } from "react";
import { playTypewriterClick } from "./audio";

interface Mini2048ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Board = number[][];

export default function Mini2048Modal({ isOpen, onClose }: Mini2048ModalProps) {
  const [board, setBoard] = useState<Board>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const spawnRandom = useCallback((currentBoard: Board): Board => {
    const emptyCells: { r: number; c: number }[] = [];
    currentBoard.forEach((row, r) => {
      row.forEach((cell, c) => {
        if (cell === 0) emptyCells.push({ r, c });
      });
    });

    if (emptyCells.length === 0) return currentBoard;
    const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const newBoard = currentBoard.map((row) => [...row]);
    newBoard[randomCell.r][randomCell.c] = Math.random() < 0.9 ? 2 : 4;
    return newBoard;
  }, []);

  const resetGame = useCallback(() => {
    let newBoard: Board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    newBoard = spawnRandom(newBoard);
    newBoard = spawnRandom(newBoard);
    setBoard(newBoard);
    setScore(0);
    setGameOver(false);
  }, [spawnRandom]);

  useEffect(() => {
    if (isOpen) {
      resetGame();
    }
  }, [isOpen, resetGame]);

  const slideRow = (row: number[]): { newRow: number[]; addedScore: number } => {
    let filtered = row.filter((val) => val !== 0);
    let addedScore = 0;
    for (let i = 0; i < filtered.length - 1; i++) {
      if (filtered[i] === filtered[i + 1]) {
        filtered[i] *= 2;
        addedScore += filtered[i];
        filtered[i + 1] = 0;
      }
    }
    filtered = filtered.filter((val) => val !== 0);
    while (filtered.length < 4) {
      filtered.push(0);
    }
    return { newRow: filtered, addedScore };
  };

  const move = useCallback(
    (direction: "up" | "down" | "left" | "right") => {
      if (gameOver) return;
      playTypewriterClick();
      let totalAddedScore = 0;
      let hasChanged = false;
      let newBoard = board.map((row) => [...row]);

      if (direction === "left") {
        for (let r = 0; r < 4; r++) {
          const { newRow, addedScore } = slideRow(newBoard[r]);
          totalAddedScore += addedScore;
          if (newRow.some((val, idx) => val !== newBoard[r][idx])) {
            hasChanged = true;
          }
          newBoard[r] = newRow;
        }
      } else if (direction === "right") {
        for (let r = 0; r < 4; r++) {
          const reversed = [...newBoard[r]].reverse();
          const { newRow, addedScore } = slideRow(reversed);
          totalAddedScore += addedScore;
          const restored = newRow.reverse();
          if (restored.some((val, idx) => val !== newBoard[r][idx])) {
            hasChanged = true;
          }
          newBoard[r] = restored;
        }
      } else if (direction === "up") {
        for (let c = 0; c < 4; c++) {
          const col = [newBoard[0][c], newBoard[1][c], newBoard[2][c], newBoard[3][c]];
          const { newRow, addedScore } = slideRow(col);
          totalAddedScore += addedScore;
          for (let r = 0; r < 4; r++) {
            if (newBoard[r][c] !== newRow[r]) hasChanged = true;
            newBoard[r][c] = newRow[r];
          }
        }
      } else if (direction === "down") {
        for (let c = 0; c < 4; c++) {
          const col = [newBoard[3][c], newBoard[2][c], newBoard[1][c], newBoard[0][c]];
          const { newRow, addedScore } = slideRow(col);
          totalAddedScore += addedScore;
          const restored = newRow.reverse();
          for (let r = 0; r < 4; r++) {
            if (newBoard[r][c] !== restored[r]) hasChanged = true;
            newBoard[r][c] = restored[r];
          }
        }
      }

      if (hasChanged) {
        newBoard = spawnRandom(newBoard);
        setBoard(newBoard);
        const newTotalScore = score + totalAddedScore;
        setScore(newTotalScore);
        if (newTotalScore > bestScore) setBestScore(newTotalScore);

        // Check game over
        let movesAvailable = false;
        for (let r = 0; r < 4; r++) {
          for (let c = 0; c < 4; c++) {
            if (newBoard[r][c] === 0) movesAvailable = true;
            if (r < 3 && newBoard[r][c] === newBoard[r + 1][c]) movesAvailable = true;
            if (c < 3 && newBoard[r][c] === newBoard[r][c + 1]) movesAvailable = true;
          }
        }
        if (!movesAvailable) setGameOver(true);
      }
    },
    [board, gameOver, score, bestScore, spawnRandom]
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "ArrowUp" || e.key === "w") {
        e.preventDefault();
        move("up");
      } else if (e.key === "ArrowDown" || e.key === "s") {
        e.preventDefault();
        move("down");
      } else if (e.key === "ArrowLeft" || e.key === "a") {
        e.preventDefault();
        move("left");
      } else if (e.key === "ArrowRight" || e.key === "d") {
        e.preventDefault();
        move("right");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, move, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="game-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-none"
    >
      <div className="relative w-full max-w-md bg-[var(--paper)] border-4 border-[var(--ink)] p-6 brutal-shadow-xl text-[var(--ink)]">
        {/* Top Tape decoration */}
        <div className="tape-strip top-[-14px] left-10 w-24 h-7 rotate-[-3deg]" />

        <div className="flex justify-between items-start border-b-2 border-dashed border-[var(--ink)] pb-3 mb-4">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--stamp)]">
              Easter Egg : Arcade Module
            </span>
            <h2 id="game-title" className="font-display text-3xl font-black uppercase">
              2048 Zine Edition
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close game"
            className="btn-brutal text-sm px-2.5 py-1"
          >
            Close
          </button>
        </div>

        <div className="flex justify-between items-center mb-4 font-mono text-sm">
          <div className="border-2 border-[var(--ink)] px-3 py-1 bg-[var(--paper-2)]">
            SCORE: <span className="font-bold">{score}</span>
          </div>
          <div className="border-2 border-[var(--ink)] px-3 py-1 bg-[var(--acid)] text-[var(--ink)] font-bold">
            BEST: {bestScore}
          </div>
          <button onClick={resetGame} className="btn-brutal text-xs py-1 px-2.5">
            Reset
          </button>
        </div>

        {/* 4x4 Grid */}
        <div className="grid grid-cols-4 gap-2 bg-[var(--ink)] p-2.5 border-2 border-[var(--ink)]">
          {board.map((row, r) =>
            row.map((val, c) => {
              let bg = "bg-[var(--paper-2)] text-[var(--ink)]";
              if (val === 2) bg = "bg-[#f5f1e6] text-[#0a0a0a]";
              else if (val === 4) bg = "bg-[#ebe4cf] text-[#0a0a0a]";
              else if (val === 8) bg = "bg-[var(--sage)] text-[#0a0a0a]";
              else if (val === 16) bg = "bg-[#94a17d] text-[#0a0a0a]";
              else if (val === 32) bg = "bg-[var(--acid)] text-[#0a0a0a] font-black";
              else if (val >= 64) bg = "bg-[var(--stamp)] text-[#eee9db] font-black";

              return (
                <div
                  key={`${r}-${c}`}
                  className={`h-16 flex items-center justify-center font-mono font-bold text-lg border border-[var(--ink)] transition-transform ${bg}`}
                >
                  {val !== 0 ? val : ""}
                </div>
              );
            })
          )}
        </div>

        {gameOver && (
          <div className="mt-4 p-3 bg-[var(--stamp)] text-[var(--paper)] text-center font-mono font-bold uppercase border-2 border-[var(--ink)]">
            GAME OVER! Final Score: {score}
          </div>
        )}

        {/* Arrow controls for touch & mobile */}
        <div className="mt-4 flex flex-col items-center gap-1.5 font-mono">
          <button
            onClick={() => move("up")}
            aria-label="Move Up"
            className="btn-brutal text-xs py-1 px-4"
          >
            ▲ UP
          </button>
          <div className="flex gap-2">
            <button
              onClick={() => move("left")}
              aria-label="Move Left"
              className="btn-brutal text-xs py-1 px-3"
            >
              ◀ LEFT
            </button>
            <button
              onClick={() => move("down")}
              aria-label="Move Down"
              className="btn-brutal text-xs py-1 px-4"
            >
              ▼ DOWN
            </button>
            <button
              onClick={() => move("right")}
              aria-label="Move Right"
              className="btn-brutal text-xs py-1 px-3"
            >
              ▶ RIGHT
            </button>
          </div>
          <span className="text-[11px] opacity-75 mt-1">
            (Use Arrow Keys or WASD on Keyboard)
          </span>
        </div>
      </div>
    </div>
  );
}
