import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  bgImageSrc?: string; // optional background image
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  linkText,
  linkHref,
}) => (
  <div className="flex-shrink-0 w-52 md:w-80 p-4 rounded-lg">
    <Link href={linkHref} target="_blank" rel="noopener noreferrer">
      <div className="w-full h-full border border-azulejoBlue overflow-hidden mb-4">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={320}
          height={320}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-semibold text-blue-800 mb-2">{title}</h3>
      <p className="text-sm text-blue-800 mb-2">{description}</p>
      <p className="text-sm font-semibold text-blue-800 underline hover:cursor-pointer">
        {linkText}
      </p>
    </Link>
  </div>
);
