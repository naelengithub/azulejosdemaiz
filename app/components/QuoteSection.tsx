import React from "react";
import Image from "next/image";

export default function QuoteSection() {
  return (
    <section className="relative max-w-4xl mx-auto px-4 py-12 overflow-hidden">
      {/* Background card */}
      <div className="bg-[#f2e4cd] rounded-lg p-8 md:p-24 text-center">
        <p className="text-azulejoBlue text-xl md:text-4xl font-philosopher font-medium mb-4">
          “Azulejos de Maíz es una empresa creada por Laura Salas para conectar
          a las personas y sus familias con las tradiciones a través del maíz
          azul”
        </p>
        <p className="text-azulejoBlue text-lg">El Universal</p>
      </div>

      {/* Decorative images */}
      <div className="absolute left-4 bottom-4 md:-bottom-4 md:left-12 w-20 md:w-48 h-20 md:h-48">
        <Image
          src="/images/elote-azul.png"
          alt="Elote azul"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-4 left-0 md:left-2 md:bottom-18 w-18 md:w-40 h-40 md:h-40">
        <Image
          src="/cookies/cookie2.png"
          alt="Galleta cerdito"
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute -right-2 top-0 w-20 md:w-24 h-20 md:h-56">
        <Image
          src="/cookies/cookie1.png"
          alt="Galleta blanca"
          fill
          className="object-contain"
        />
      </div>
    </section>
  );
}
