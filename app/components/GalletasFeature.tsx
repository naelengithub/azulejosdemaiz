import Image from "next/image";
import Link from "next/link";
import React from "react";

const GalletasFeature: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-azulejoBlue to-background via-background py-24 md:pb-24 md:pt-72 px-4">
      <div className="max-w-6xl mx-auto flex flex-col justify-center md:flex-row items-center gap-8">
        {/* Image + Badge */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          {/* Main Image */}
          <div className="overflow-hidden rounded-lg ring-2 ring-azulejoBlue">
            <Image
              src="/images/plato-maizitos.png"
              alt="Galletas artesanales"
              width={600}
              height={400}
              className="object-cover w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full max-w-md md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-philosopher font-bold text-azulejoBlue">
            Galletas artesanales que enamoran.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-azulejoBlue">
            Elaboradas con ingredientes naturales y un toque de tradición
            mexicana en cada bocado.
          </p>
          <Link
            className="mt-6 inline-block bg-azulejoBlue hover:bg-azulejo-lightBlue border border-azulejoBlue text-azulejo-lightBlue hover:text-azulejoBlue hover:cursor-pointer text-sm sm:text-base font-medium py-2 px-6 rounded-full transition"
            href={`https://wa.me/5215585720802?text=${encodeURIComponent(
              "¡Hola! Quisiera hacer un pedido, por favor."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            COMPRAR
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalletasFeature;
