import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-azulejoBlue text-white py-12 px-6 md:px-12 mt-24 md:mt-52 flex flex-col ">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
        <ul className="flex flex-col gap-2">
          <li>
            <Link href="/" className="hover:underline font-semibold">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#productos" className="hover:underline font-semibold">
              Nuestros Productos
            </Link>
          </li>
          <li>
            <Link href="#vision" className="hover:underline font-semibold">
              Nuestra Visión
            </Link>
          </li>
          <li>
            <Link href="#historia" className="hover:underline font-semibold">
              Nuestra Historia
            </Link>
          </li>
          <li>
            <Link href="#formas" className="hover:underline font-semibold">
              Nuestras Formas
            </Link>
          </li>
          <li>
            <Link
              href="https://wa.me/5215585720802"
              target="_blank"
              className="hover:underline font-semibold"
            >
              Contáctanos &#8599;
            </Link>
          </li>
          <p className="text-sm mt-6 hidden md:block">
            Azulejos de Maíz 2025 <br />
            Web por{" "}
            <Link href="https://anae.studio" target="_blank" className="italic">
              anae.studio
            </Link>
            .
          </p>
        </ul>

        <div className="pt-12 flex flex-col items-center">
          <Image
            src="/logo/logo-white.png"
            alt="Azulejos de Maíz - Recuerdos de Maíz Azul"
            width={80}
            height={80}
            className="object-contain"
          />
          <h1 className="mt-2 font-philosopher text-sm text-white">
            AZULEJOS DE MAÍZ
          </h1>
          <p className="font-philosopher  text-sm text-white">
            RECUERDOS DE MAÍZ AZUL
          </p>
        </div>
      </div>
      <p className="text-sm mt-6 md:hidden">
        Azulejos de Maíz 2025
        <br />
        Web por{" "}
        <Link href="https://anae.studio" target="_blank" className="italic">
          anae.studio
        </Link>
        .
      </p>
    </footer>
  );
};

export default Footer;
