"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SlidingGame from "./SlidingGame";

export default function HeroSection() {
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowGame(true);
    }, 800); // Delay of 2 seconds
    return () => clearTimeout(timeout);
  }, []);

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

      {/* Tiles fade in after 2s */}
      {showGame && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SlidingGame />
        </motion.div>
      )}
    </section>
  );
}
