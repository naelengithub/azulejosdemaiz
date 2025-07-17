import React from "react";
import Image from "next/image";
import Link from "next/link";

interface StorySectionProps {
  id?: string;
}

export default function StorySection({ id }: StorySectionProps) {
  return (
    <section
      id={id}
      className="max-w-5xl mx-auto px-4 py-24 flex flex-col md:flex-row items-center md:items-start gap-8"
    >
      {/* Image */}
      <div className="flex-shrink-0 rounded-xl overflow-hidden border border-blue-800 md:max-w-1/2">
        <Image
          src="/images/maiz-galletas.png" // replace with your image path
          alt="Maíz azul y galletas de Azulejos del Maíz"
          width={600}
          height={400}
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="text-azulejoBlue m-auto">
        <h2 className="text-3xl font-philosopher font-bold mb-4">
          De un recuerdo a un sueño de maíz azul
        </h2>
        <p className="mb-4">
          Todo empezó con un recuerdo de infancia. Laura Salas creció caminando
          por los pasillos del tianguis, buscando con cien pesos el regalo
          perfecto para su mamá. Años después, descubrió en un viaje el poder
          del maíz azul y decidió crear algo que combinara ese amor por los
          detalles con la riqueza de nuestra tierra. Así nació Azulejos del
          Maíz: galletas que son pequeños regalos, hechas con maíz azul y con el
          corazón puesto en cada pieza.
        </p>
        <p>
          En Azulejos del Maíz elaboramos galletas artesanales con maíz azul,
          inspiradas en los azulejos tradicionales mexicanos. Cada diseño cuenta
          una historia y cada bocado conecta con nuestra cultura. Creemos que la
          tradición y la innovación pueden caminar juntas para crear algo que
          alimente el cuerpo y el alma.
        </p>
        <Link
          className="mt-6 inline-block bg-azulejoBlue hover:bg-azulejo-lightBlue border border-azulejoBlue text-azulejo-lightBlue hover:text-azulejoBlue hover:cursor-pointer text-sm sm:text-base font-medium py-2 px-6 rounded-full transition"
          href={`https://wa.me/5215585720802?text=${encodeURIComponent(
            "¡Hola! Quisiera hacer un pedido."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          COMPRAR
        </Link>
      </div>
    </section>
  );
}
