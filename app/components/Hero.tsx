"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Draggable from "react-draggable";
import Link from "next/link";

type Cookie = {
  id: string;
  src: string;
  alt: string;
  left: string;
  top: string;
};

const cookies: Cookie[] = [
  {
    id: "cookie1",
    src: "/cookies/cookie1.png",
    alt: "Cookie 1",
    left: "5%",
    top: "10%",
  },
  {
    id: "cookie2",
    src: "/cookies/cookie2.png",
    alt: "Cookie 2",
    left: "45%",
    top: "5%",
  },
  {
    id: "cookie3",
    src: "/cookies/cookie3.png",
    alt: "Cookie 3",
    left: "85%",
    top: "10%",
  },
  {
    id: "cookie4",
    src: "/cookies/cookie4.png",
    alt: "Cookie 4",
    left: "10%",
    top: "45%",
  },
  {
    id: "cookie5",
    src: "/cookies/cookie5.png",
    alt: "Cookie 5",
    left: "90%",
    top: "45%",
  },
  {
    id: "cookie6",
    src: "/cookies/cookie1.png",
    alt: "Cookie 6",
    left: "8%",
    top: "85%",
  },
  {
    id: "cookie7",
    src: "/cookies/cookie2.png",
    alt: "Cookie 7",
    left: "45%",
    top: "90%",
  },
  {
    id: "cookie8",
    src: "/cookies/cookie3.png",
    alt: "Cookie 8",
    left: "85%",
    top: "85%",
  },
  {
    id: "cookie9",
    src: "/cookies/cookie4.png",
    alt: "Cookie 9",
    left: "20%",
    top: "30%",
  },
  {
    id: "cookie10",
    src: "/cookies/cookie5.png",
    alt: "Cookie 10",
    left: "70%",
    top: "70%",
  },
];

const Hero: React.FC = () => {
  // create one ref per cookie, once
  const cookieRefs = useRef(
    cookies.map(() => React.createRef<HTMLDivElement>())
  ).current;

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Centered title + button */}
      <div className="z-10 text-center">
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-azulejoBlue">
          AZULEJOS DE MAÍZ
        </h1>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl text-azulejoBlue">
          RECUERDOS DE MAÍZ AZUL
        </p>
        <Link
          className="mt-6 bg-azulejo-lightBlue hover:bg-azulejo-lightBlue/70 text-azulejoBlue font-medium py-2 px-6 rounded-full hover:cursor-pointer"
          href={`https://wa.me/5215585720802?text=${encodeURIComponent(
            "Hola, me gustaría hacer un pedido"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          HACER PEDIDO
        </Link>
      </div>

      {/* Draggable cookies */}
      {cookies.map((cookie, idx) => (
        <Draggable key={cookie.id} nodeRef={cookieRefs[idx]} bounds="parent">
          <div
            ref={cookieRefs[idx]}
            className="absolute cursor-grab touch-pan-x"
            style={{ left: cookie.left, top: cookie.top }}
          >
            <Image
              src={cookie.src}
              alt={cookie.alt}
              width={80}
              height={80}
              draggable={false}
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 select-none"
            />
          </div>
        </Draggable>
      ))}
    </section>
  );
};

export default Hero;
