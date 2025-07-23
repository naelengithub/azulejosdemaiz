"use client";

import React, { useRef, useState, useEffect } from "react";
import { ProductCard } from "./common/ProductCard";

interface ProductsSectionProps {
  id?: string;
}

const products = [
  {
    imageSrc: "/cookies/azulejo-cerdito.png",
    imageAlt: "Azulejo Cerdito",
    title: "Azulejo Cerdito",
    description:
      "Inspirado en el tradicional alcancía de barro, este diseño en forma de cerdito es un guiño al cariño, la abundancia y el apapacho. Un regalo entrañable para compartir dulzura en cada mordida.",
    linkText: "Hacer pedido",
    linkHref: `https://wa.me/5215585720802?text=${encodeURIComponent(
      "Hola, me gustaría hacer un pedido del Azulejo Cerdito."
    )}`,
  },
  {
    imageSrc: "/cookies/azulejo-maiz.png",
    imageAlt: "Azulejo Maíz",
    title: "Azulejo Maíz",
    description:
      "El maíz, corazón de nuestra tierra, toma forma en esta galleta como símbolo de origen, alimento y cultura. Una delicia que honra nuestras raíces con cada bocado.",
    linkText: "Comprar galletas",
    linkHref: `https://wa.me/5215585720802?text=${encodeURIComponent(
      "Hola, me gustaría hacer un pedido del Azulejo Maíz."
    )}`,
  },
  {
    imageSrc: "/cookies/azulejo-alfajor.png",
    imageAlt: "Galleta 3",
    title: "Azulejo Alfajor",
    description:
      "Con forma de flor, este alfajor evoca lo festivo y lo artesanal. Su relleno de dulce de leche y su toque de canela y piloncillo lo hacen tan cálido como una celebración en familia.",
    linkText: "Hacer pedido",
    linkHref: `https://wa.me/5215585720802?text=${encodeURIComponent(
      "Hola, me gustaría hacer un pedido del Azulejo Alfajor."
    )}`,
  },
  // Add more products as needed
];

export default function ProductsSection({ id }: ProductsSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const maxScrollLeft = el.scrollWidth - el.clientWidth;
      if (maxScrollLeft <= 0) {
        setScrollProgress(1);
      } else {
        setScrollProgress(el.scrollLeft / maxScrollLeft);
      }
    };

    handleScroll();

    el.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    // Drag event handlers
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      el.classList.add("cursor-grabbing");
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      el.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      el.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX.current) * 1; // scroll speed factor
      el.scrollLeft = scrollLeft.current - walk;
    };

    el.addEventListener("mousedown", handleMouseDown);
    el.addEventListener("mouseleave", handleMouseLeave);
    el.addEventListener("mouseup", handleMouseUp);
    el.addEventListener("mousemove", handleMouseMove);

    // Clean up
    return () => {
      el.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      el.removeEventListener("mousedown", handleMouseDown);
      el.removeEventListener("mouseleave", handleMouseLeave);
      el.removeEventListener("mouseup", handleMouseUp);
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id={id}
      className="w-full flex flex-col md:pl-12 sm:flex-row py-24"
    >
      {/* Left static text */}
      <div className="flex-shrink-0 sm:w-1/3 p-4">
        <h2 className="text-2xl font-philosopher font-bold text-azulejoBlue mb-4">
          Cada creación, un pedacito de México
        </h2>
        <p className="text-azulejoBlue">
          En Azulejos del Maíz, cada galleta es más que un sabor: es una forma
          de contar historias. Nuestros diseños se inspiran en figuras
          emblemáticas de la cultura mexicana —desde el maíz hasta el cerdito
          del ahorro— y se moldean con cariño para rendir homenaje a nuestras
          raíces. Cada pieza combina un diseño artesanal con ingredientes
          auténticos, creando un regalo que deleita tanto por dentro como por
          fuera.
        </p>
      </div>

      {/* Right scrollable product cards with drag */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div
          ref={scrollRef}
          className="overflow-x-auto -mx-4 px-4 pr-24 hide-scrollbar cursor-grab min-w-full"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex space-x-4">
            {products.map((product, index) => (
              <div key={index} className="flex-shrink-0 w-52 md:w-80">
                <ProductCard
                  imageSrc={product.imageSrc}
                  imageAlt={product.imageAlt}
                  title={product.title}
                  description={product.description}
                  linkText={product.linkText}
                  linkHref={product.linkHref}
                />
              </div>
            ))}
            <div className="flex-shrink-0 w-6 md:w-12"></div>
          </div>
        </div>

        {/* Progress bar under cards */}
        <div className="h-1 bg-gray-300 mt-4 mx-4 relative">
          <div
            className="h-full rounded-full bg-azulejoBlue transition-all duration-150 ease-out"
            style={{ width: `${scrollProgress * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
