"use client";

import Image from "next/image";

interface VisionSectionProps {
  id?: string;
}

export default function VisionSection({ id }: VisionSectionProps) {
  return (
    <section
      id={id}
      className="bg-azulejoLightGolden px-4 py-24 md:px-8 min-h-screen"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 md:grid-rows-[repeat(6,minmax(0,1fr))] gap-8">
        {/* Text Block 1 */}
        <div className="bg-azulejoBlue p-6 rounded-xl md:row-span-2 md:col-start-1 md:row-start-1 order-1">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Artesanal y mexicano
          </h2>
          <p className="text-white text-base leading-relaxed">
            Cada galleta está hecha con amor y dedicación, como cada azulejo que
            adorna nuestra cultura. Elaboradas a mano, reflejan la belleza y
            tradición de México en cada detalle.
          </p>
        </div>

        {/* Image 1 */}
        <div className="md:row-span-4 md:col-start-2 md:row-start-1 order-2">
          <div className="w-full aspect-[3/4] md:h-full relative">
            <Image
              src="/images/azulejo-maiz.png"
              alt="Galletas artesanales sobre maíz azul"
              fill
              className="rounded-xl object-fit border-azulejoBlue border"
            />
          </div>
        </div>

        {/* Text Block 2 */}
        <div className="bg-azulejoBlue p-6 rounded-xl md:row-span-2 md:col-start-2 md:row-start-5 order-3">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Maíz azul para todas y todos
          </h2>
          <p className="text-white text-base leading-relaxed">
            Creemos que los sabores de México deben ser accesibles para todas y
            todos. Por eso, trabajamos con maíz nativo, respetando su origen y
            celebrando su riqueza cultural y nutricional. Queremos que cada
            persona pueda regalarse un pedacito de México, lleno de color, sabor
            y significado.
          </p>
        </div>

        {/* Image 2 */}
        <div className="md:row-span-4 md:col-start-1 md:row-start-3 order-4">
          <div className="w-full aspect-[3/4] md:h-full relative">
            <Image
              src="/images/azulejo-alfajores.png"
              alt="Repartidor con bolsa de Azulejos de Maíz"
              fill
              className="rounded-xl object-top border-azulejoBlue border"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
