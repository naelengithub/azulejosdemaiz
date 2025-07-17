import React from "react";
import Image from "next/image";

interface FeatureSectionProps {
  id?: string;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="relative max-w-[900px] mx-6 md:mx-auto my-24 md:my-52 bg-azulejoBlue border-2 border-azulejoBlue rounded-xl p-8 md:p-16 overflow-visible"
    >
      {/* ───── Top Row ───── */}
      <div className="flex flex-col md:flex-row items-center mb-12">
        {/* Pulled-out Image */}
        <div
          className={
            "flex-shrink-0 " +
            "w-40 h-40 md:w-80 md:h-80 " + // ← only larger on md+
            "-translate-x-4 -translate-y-2 md:-translate-x-16 md:-translate-y-8 " +
            "rotate-[-6deg] " +
            "overflow-hidden  border border-azulejoBlue " +
            "mb-6 md:mb-0 md:mr-8"
          }
        >
          <Image
            src="/images/azulejo-maiz.png"
            alt="Galletas artesanales sobre maíz azul"
            fill
            className="object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex-1 text-center md:text-left md:mb-12">
          <h2 className="text-3xl md:text-4xl font-philosopher font-bold text-white">
            Artesanal y mexicano
          </h2>
          <p className="mt-4 text-base md:text-lg text-white">
            Cada galleta está hecha con amor y dedicación, como cada azulejo que
            adorna nuestra cultura. Elaboradas a mano, reflejan la belleza y
            tradición de México en cada detalle.
          </p>
        </div>
      </div>

      {/* ───── Bottom Row ───── */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        {/* Text */}
        <div className="flex-1 text-center md:text-left mb-6 md:mb-0 md:mr-8 pt-6 md:pt-0">
          <h2 className="text-3xl md:text-4xl font-philosopher font-bold text-white">
            Maíz azul para todos
          </h2>
          <p className="mt-4 text-base md:text-lg text-white">
            Creemos que los sabores de México deben ser accesibles para todas y
            todos. Por eso, trabajamos con maíz nativo, respetando su origen y
            celebrando su riqueza cultural y nutricional. Queremos que cada
            persona pueda regalarse un pedacito de México, lleno de color, sabor
            y significado.
          </p>
        </div>

        {/* Pulled-out Image */}
        <div
          className={
            "flex-shrink-0 " +
            "w-40 aspect-[3/4] md:w-60 md:aspect-[3/4]" + // ← only larger on md+
            "translate-x-4 translate-y-2 md:translate-x-16 md:translate-y-8 " +
            "rotate-6 overflow-hidden border border-azulejoBlue"
          }
        >
          <Image
            src="/images/azulejo-alfajores.png"
            alt="Repartidor con bolsa de Azulejos de Maíz"
            fill
            className="object-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
