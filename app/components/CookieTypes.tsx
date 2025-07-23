import React from "react";
import CardItem, { CardItemProps } from "./common/CardItem";

// Extend CardItemProps to include optional id
interface ExtendedCardItemProps extends CardItemProps {
  id?: string;
}

const cards: ExtendedCardItemProps[] = [
  {
    id: "detalles-especiales",
    imgSrc: "/images/caja-galletas-mano.png",
    imgAlt: "Caja con galletas en forma de hoja",
    title: "Detalles especiales",
    description:
      "El regalo perfecto para consentir a quienes más quieres, con sabores que enamoran en cada bocado.",
    linkText: "Comprar detalles especiales",
    linkHref: `https://wa.me/5215585720802?text=${encodeURIComponent(
      "Hola, quisiera comprar un detalle especial de Azuljos de Maíz."
    )}`,
  },
  {
    id: "eventos-corporativos",
    imgSrc: "/images/caja-galletas.png",
    imgAlt: "Galletas corporativas decoradas con chocolate",
    title: "Eventos y regalos corporativos",
    description:
      "Sorprende a tu equipo o clientes con galletas artesanales personalizadas que transmiten calidad y calidez.",
    linkText: "Comprar regalos corporativos",
    linkHref: `https://wa.me/5215585720802?text=${encodeURIComponent(
      "Hola, quisiera más información acerca de los productos para eventos o regalos corporativos."
    )}`,
  },
  {
    id: "cafeterias-establecimientos",
    imgSrc: "/images/cafe-maizito.png",
    imgAlt: "Galletas empaquetadas con listón",
    title: "Cafeterías y establecimientos",
    description:
      "Ofrece nuestras galletas en tu negocio y agrega un toque artesanal único que encantará a tus clientes.",
    linkText: "Descubrir más",
    linkHref: `https://wa.me/5215585720802?text=${encodeURIComponent(
      "Hola, quisiera más información para ofrecer sus productos en mi establecimiento."
    )}`,
  },
];

const CookieTypes: React.FC<{ id?: string }> = ({ id }) => {
  return (
    <section id={id} className="pt-12 pb-24 px-4 md:px-24">
      <div className="max-w-4xl mx-auto text-center mb-10 text-azulejoBlue">
        <h2 className="text-3xl font-philosopher font-bold text-azulejoBlue sm:text-4xl mb-4">
          Galletas para toda ocasión
        </h2>
        <p className="text-lg text-azulejoBlue">
          Nuestras galletas no son solo repostería. Son detalles especiales que
          llevan la esencia de México a cada mesa. Ideales como regalos
          corporativos o como un gesto de cariño en casa, cada azul﻿ejo de maíz
          azul refleja el trabajo artesanal, la estética cuidada y el amor con
          el que fueron creados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-[950px] justify-items-center">
        {cards.map((card) => (
          <CardItem key={card.id ?? card.title} {...card} />
        ))}
      </div>
    </section>
  );
};

export default CookieTypes;
