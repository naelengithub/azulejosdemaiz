"use client";

import React, { useState, useEffect } from "react";
import { motion, PanInfo } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Tile = number;

// Images in /public/logo
const imagePaths = [
  "/logo/logo-bright-blue.png",
  "/logo/logo-turq.png",
  "/logo/logo-golden.png",
  "/logo/logo-bright-blue.png",
  "/logo/logo-golden.png",
  "/logo/logo-turq.png",
  "/logo/logo-bright-blue.png",
  "/logo/logo-golden.png",
  "/logo/logo-turq.png",
  "/logo/logo-bright-blue.png",
  "/logo/logo-bright-blue.png",
  "/logo/logo-beige.png",
];

const generateInitialTiles = (cols: number, rows: number): Tile[] => {
  const total = cols * rows;
  const tiles = Array.from({ length: total }, (_, i) => i + 1);
  const centerRow = Math.floor(rows / 2);
  let firstHoleIndex: number, secondHoleIndex: number;

  if (cols % 2 === 0 && rows % 2 === 1) {
    firstHoleIndex = centerRow * cols + (cols / 2 - 1);
    secondHoleIndex = centerRow * cols + cols / 2;
  } else if (cols % 2 === 1 && rows % 2 === 0) {
    const col = Math.floor(cols / 2);
    firstHoleIndex = (rows / 2 - 1) * cols + col;
    secondHoleIndex = (rows / 2) * cols + col;
  } else {
    firstHoleIndex = 0;
    secondHoleIndex = 1;
  }

  tiles[firstHoleIndex] = 0;
  tiles[secondHoleIndex] = 0;
  let num = 1;
  return tiles.map((t) => (t === 0 ? 0 : num++));
};

export default function SlidingPuzzleHero() {
  const [cols, setCols] = useState(3);
  const [rows, setRows] = useState(4);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [tileSize, setTileSize] = useState(0);
  const [cursor, setCursor] = useState<Record<number, string>>({});
  const [demo, setDemo] = useState(false);
  const [demoPlayed, setDemoPlayed] = useState(false);

  // Responsive grid
  useEffect(() => {
    const update = () => {
      const md = window.innerWidth >= 768;
      setCols(md ? 4 : 3);
      setRows(md ? 3 : 4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Init tiles
  useEffect(() => {
    setTiles(generateInitialTiles(cols, rows));
  }, [cols, rows]);

  // Compute tileSize
  useEffect(() => {
    const update = () => {
      setTileSize(
        Math.min(window.innerWidth / cols, window.innerHeight / rows)
      );
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [cols, rows]);

  // Compute border order map
  const border: number[] = [];
  for (let c = 0; c < cols; c++) border.push(c);
  for (let r = 1; r < rows - 1; r++) border.push(r * cols + (cols - 1));
  for (let c = cols - 1; c >= 0; c--) border.push((rows - 1) * cols + c);
  for (let r = rows - 2; r >= 1; r--) border.push(r * cols);
  const orderMap: Record<number, number> = {};
  border.forEach((idx, i) => {
    if (tiles[idx] !== 0) orderMap[idx] = i;
  });
  const total = Object.keys(orderMap).length;

  // Demo trigger
  useEffect(() => {
    if (!demoPlayed && tileSize && total) {
      const delay = (0.2 + total * 0.5) * 1000;
      const on = setTimeout(() => setDemo(true), delay);
      const off = setTimeout(() => {
        setDemo(false);
        setDemoPlayed(true);
      }, delay + 2000);
      return () => {
        clearTimeout(on);
        clearTimeout(off);
      };
    }
  }, [tileSize, total, demoPlayed]);

  // Helpers for dragging
  const emptyIndex = tiles.findIndex((t) => t === 0);
  const getNeighbor = (idx: number) => {
    const tx = idx % cols;
    const ty = Math.floor(idx / cols);
    const ex = emptyIndex % cols;
    const ey = Math.floor(emptyIndex / cols);
    const dx = ex - tx;
    const dy = ey - ty;
    return Math.abs(dx) + Math.abs(dy) === 1 ? { dx, dy } : null;
  };
  const swapWithEmpty = (idx: number) => {
    const t2 = [...tiles];
    [t2[emptyIndex], t2[idx]] = [t2[idx], t2[emptyIndex]];
    setTiles(t2);
  };

  // Click logic
  const handleClick = (idx: number, e: React.MouseEvent<HTMLDivElement>) => {
    const empties = tiles
      .map((t, i) => (t === 0 ? i : -1))
      .filter((i) => i !== -1);
    const tx = idx % cols,
      ty = Math.floor(idx / cols);
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const left = e.clientX - rect.left < rect.width / 2;
    const top = e.clientY - rect.top < rect.height / 2;
    const cands = empties
      .map((ei) => {
        const ex = ei % cols,
          ey = Math.floor(ei / cols);
        return { ei, dx: ex - tx, dy: ey - ty };
      })
      .filter((c) => Math.abs(c.dx) + Math.abs(c.dy) === 1);
    let pick = cands[0];
    if (cands.length > 1)
      cands.forEach((c) => {
        if (c.dx === -1 && left) pick = c;
        if (c.dx === 1 && !left) pick = c;
        if (c.dy === -1 && top) pick = c;
        if (c.dy === 1 && !top) pick = c;
      });
    if (pick) {
      const t2 = [...tiles];
      [t2[pick.ei], t2[idx]] = [t2[idx], t2[pick.ei]];
      setTiles(t2);
    }
  };

  const handleMouseMove = (idx: number) => {
    const empties = tiles
      .map((t, i) => (t === 0 ? i : -1))
      .filter((i) => i !== -1);
    const tx = idx % cols,
      ty = Math.floor(idx / cols);

    let cur = "default";
    empties.forEach((ei) => {
      const ex = ei % cols,
        ey = Math.floor(ei / cols);
      const dx = ex - tx,
        dy = ey - ty;
      if (Math.abs(dx) + Math.abs(dy) === 1) {
        if (dx === -1) cur = "w-resize";
        if (dx === 1) cur = "e-resize";
        if (dy === -1) cur = "n-resize";
        if (dy === 1) cur = "s-resize";
      }
    });
    setCursor((p) => ({ ...p, [idx]: cur }));
  };

  const handleMouseLeave = (idx: number) => {
    setCursor((p) => ({ ...p, [idx]: "default" }));
  };

  return (
    <section className="relative w-screen h-screen bg-azulejoBlue flex items-center justify-center overflow-hidden">
      {/* Center text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute z-10 text-center flex flex-col items-center"
      >
        <div className="backdrop-blur-lg bg-azulejoBlue/40 rounded-lg py-6 md:px-6 font-philosopher flex flex-col items-center">
          <h1 className="max-w-28 sm:max-w-full text-xl sm:text-4xl md:text-5xl text-white">
            AZULEJOS DE MAÍZ
          </h1>
          <p className="mt-2 max-w-24 sm:max-w-full text-sm sm:text-xl md:text-2xl text-white">
            RECUERDOS DE MAÍZ AZUL
          </p>
        </div>
        <Link
          className="mt-6 bg-azulejo-lightBlue hover:bg-azulejo-lightBlue/70 text-azulejoBlue font-medium py-2 px-6 rounded-full w-fit text-xs"
          href={`https://wa.me/5215585720802?text=${encodeURIComponent(
            "¡Hola! Quisiera hacer un pedido, por favor."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          HACER PEDIDO
        </Link>
      </motion.div>

      {/* Tiles */}
      <div
        className="relative z-0"
        style={{ width: tileSize * cols, height: tileSize * rows }}
      >
        {tiles.map(
          (tile, idx) =>
            tile !== 0 &&
            (() => {
              const neighbor = getNeighbor(idx);
              const axis = neighbor
                ? Math.abs(neighbor.dx) === 1
                  ? "x"
                  : "y"
                : (false as const);

              return (
                <motion.div
                  key={idx}
                  className="absolute rounded overflow-hidden"
                  style={{
                    width: tileSize - 4,
                    height: tileSize - 4,
                    top: Math.floor(idx / cols) * tileSize,
                    left: (idx % cols) * tileSize,
                    cursor: cursor[idx] || "default",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    x:
                      demo && orderMap[idx] === total - 1
                        ? [0, tileSize, 0]
                        : 0,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 1 + (orderMap[idx] || 0) * 0.35,
                    x:
                      demo && orderMap[idx] === total - 1
                        ? { duration: 1, ease: "easeInOut" }
                        : undefined,
                  }}
                  drag={axis}
                  dragConstraints={{
                    left: axis === "x" && neighbor!.dx === 1 ? 0 : -tileSize,
                    right: axis === "x" && neighbor!.dx === -1 ? 0 : tileSize,
                    top: axis === "y" && neighbor!.dy === 1 ? 0 : -tileSize,
                    bottom: axis === "y" && neighbor!.dy === -1 ? 0 : tileSize,
                  }}
                  dragElastic={0}
                  onDragEnd={(_e, info: PanInfo) => {
                    const moved = axis === "x" ? info.offset.x : info.offset.y;
                    if (Math.abs(moved) > tileSize / 2) {
                      swapWithEmpty(idx);
                    }
                  }}
                  onClick={(e) => handleClick(idx, e)}
                  onMouseMove={() => handleMouseMove(idx)}
                  onMouseLeave={() => handleMouseLeave(idx)}
                >
                  <Image
                    src={imagePaths[(tile - 1) % imagePaths.length]}
                    alt="Logo tile"
                    width={tileSize}
                    height={tileSize}
                    className="object-cover w-full h-full bg-amber-50 p-2 rounded-lg"
                  />
                </motion.div>
              );
            })()
        )}
      </div>
    </section>
  );
}
