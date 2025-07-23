"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

type Tile = {
  id: number;
  value: number;
};

const GAP = 8;
const TOTAL_TILES = 12;

const baseImagePaths = [
  "/logo/logo-bright-blue.png",
  "/logo/logo-golden.png",
  "/logo/logo-turq.png",
];

function shuffleArray<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function SlidingGame() {
  const [rows, setRows] = useState(4);
  const [cols, setCols] = useState(3);
  const [tiles, setTiles] = useState<(Tile | null)[]>([]);
  const [visible, setVisible] = useState<number[]>([]);
  const [tileSize, setTileSize] = useState(0);
  const boardRef = useRef<HTMLDivElement>(null);
  const imagePathsRef = useRef<string[]>([]);

  const getInitialTiles = (emptyIndexes: number[]): (Tile | null)[] => {
    return Array.from({ length: TOTAL_TILES }, (_, i) =>
      emptyIndexes.includes(i) ? null : { id: i + 1, value: i + 1 }
    );
  };

  const isAdjacent = (a: number, b: number): boolean => {
    const ax = a % cols;
    const ay = Math.floor(a / cols);
    const bx = b % cols;
    const by = Math.floor(b / cols);
    return (
      (Math.abs(ax - bx) === 1 && ay === by) ||
      (Math.abs(ay - by) === 1 && ax === bx)
    );
  };

  const getTileCenter = (
    index: number,
    tileSize: number,
    gap: number
  ): { x: number; y: number } => {
    const col = index % cols;
    const row = Math.floor(index / cols);
    const x = col * (tileSize + gap) + tileSize / 2;
    const y = row * (tileSize + gap) + tileSize / 2;
    return { x, y };
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const isDesktop = width >= 768;

      const newRows = isDesktop ? 3 : 4;
      const newCols = isDesktop ? 4 : 3;
      const emptyIndexes = isDesktop ? [5, 6] : [4, 7];

      setRows(newRows);
      setCols(newCols);

      const maxTileHeight = (height - GAP * (newRows - 1)) / newRows;
      const maxTileWidth = (width - GAP * (newCols - 1)) / newCols;
      setTileSize(Math.floor(Math.min(maxTileHeight, maxTileWidth)));

      const newTiles = getInitialTiles(emptyIndexes);
      setTiles(newTiles);

      // Always randomize imagePaths
      imagePathsRef.current = shuffleArray(
        Array.from(
          { length: TOTAL_TILES },
          (_, i) => baseImagePaths[i % baseImagePaths.length]
        )
      );

      // Animate tiles in correct order
      const animationOrder = isDesktop
        ? [0, 1, 2, 3, 7, 11, 10, 9, 8, 4]
        : [0, 1, 2, 5, 8, 11, 10, 9, 6, 3];

      setVisible([]);
      let i = 0;
      setTimeout(() => {
        const interval = setInterval(() => {
          if (i >= animationOrder.length) {
            clearInterval(interval);
            return;
          }
          const index = animationOrder[i];
          const tile = newTiles[index];
          if (tile) {
            setVisible((prev) => [...prev, tile.value]);
          }
          i++;
        }, 200);
      }, 800);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMove = (index: number, clientX: number, clientY: number) => {
    const emptyOptions = tiles
      .map((tile, i) => (tile === null && isAdjacent(index, i) ? i : -1))
      .filter((i) => i !== -1);

    if (emptyOptions.length === 1) {
      const newTiles = [...tiles];
      [newTiles[emptyOptions[0]], newTiles[index]] = [newTiles[index], null];
      setTiles(newTiles);
    }

    if (emptyOptions.length === 2) {
      const pointer = {
        x: clientX - (boardRef.current?.getBoundingClientRect().left ?? 0),
        y: clientY - (boardRef.current?.getBoundingClientRect().top ?? 0),
      };

      const distances = emptyOptions.map((emptyIndex) => {
        const center = getTileCenter(emptyIndex, tileSize, GAP);
        return {
          index: emptyIndex,
          distance: Math.hypot(pointer.x - center.x, pointer.y - center.y),
        };
      });

      distances.sort((a, b) => a.distance - b.distance);

      const chosen = distances[0].index;
      const newTiles = [...tiles];
      [newTiles[chosen], newTiles[index]] = [newTiles[index], null];
      setTiles(newTiles);
    }
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-azulejoBlue pt-12">
      <div
        ref={boardRef}
        className="relative my-4"
        style={{
          width: cols * (tileSize + GAP),
          height: rows * (tileSize + GAP),
        }}
      >
        {tiles.map((tile, index) => {
          if (!tile) return null;

          const row = Math.floor(index / cols);
          const col = index % cols;
          const isVisible = visible.includes(tile.value);

          return (
            <motion.div
              key={tile.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0.8,
                transition: {
                  delay: 0,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                },
              }}
              onPointerUp={(e) => {
                handleMove(index, e.clientX, e.clientY);
              }}
              className={clsx(
                "absolute rounded shadow-md cursor-pointer select-none overflow-hidden"
              )}
              style={{
                width: tileSize,
                height: tileSize,
                top: row * (tileSize + GAP),
                left: col * (tileSize + GAP),
              }}
            >
              <Image
                src={imagePathsRef.current[tile.value - 1]}
                alt={`Tile ${tile.value}`}
                width={tileSize}
                height={tileSize}
                className="object-contain w-full h-full bg-amber-50 pt-2"
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
