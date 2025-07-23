"use client";
import { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: "Inicio", href: "/" },
    { label: "Nuestros Productos", href: "/#productos" },
    { label: "Nuestra Visión", href: "/#vision" },
    { label: "Nuestra Historia", href: "/#historia" },
    { label: "Nuestras Formas", href: "/#formas" },
    { label: "Contáctanos \u2197", href: "/#contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex items-center justify-between p-4">
        <div className="text-xl font-bold">
          <Link href="/"></Link>
        </div>
        <button
          onClick={toggleMenu}
          className="text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          <Bars3Icon
            className="h-8 w-8 text-azulejoAccent hover:cursor-pointer"
            strokeWidth={2}
          />
        </button>
      </div>

      {/* Overlay menu */}
      <div
        className={`fixed inset-0 bg-azulejo-lightBlue text-azulejoBlue transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close button inside overlay */}
        {isOpen && (
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 focus:outline-none"
            aria-label="Close menu"
          >
            <XMarkIcon className="h-8 w-8 text-azulejoAccent" />
          </button>
        )}

        <div className="flex flex-col justify-end h-full space-y-6 px-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={toggleMenu}
              className="text-2xl md:text-7xl lg:text-8xl font-medium hover:text-azulejoAccent transition w-full"
            >
              {item.label}
            </Link>
          ))}
          <div className="w-full flex flex-col items-center text-sm md:mt-6 py-4">
            <Image
              src="/cookie-shapes.png"
              alt="Formas de las galletas"
              height={72}
              width={72}
            />
            <p>Azulejos de Maíz 2025</p>
            <p>
              Web por{" "}
              <Link
                href="https://anae.studio"
                target="_blank"
                className="italic"
              >
                anae.studio
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
