import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface CardItemProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
}

const CardItem: React.FC<CardItemProps> = ({
  imgSrc,
  imgAlt,
  title,
  description,
  linkText,
  linkHref,
}) => {
  return (
    <Link
      className="max-w-[280px] w-full rounded-lg overflow-hidden flex flex-col h-full bg-azulejo-lightBlue p-4 transform transition-transform duration-300 hover:scale-105"
      href={linkHref}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="relative w-full aspect-square">
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw,
                 (max-width: 1024px) 50vw,
                 33vw"
        />
      </div>
      <div className="py-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-azulejoBlue mb-2">{title}</h3>
        <p className="text-azulejoBlue mb-4 flex-grow">{description}</p>
        <p className="mt-auto text-blue-800 hover:underline font-medium">
          {linkText} --&gt;
        </p>
      </div>
    </Link>
  );
};

export default CardItem;
