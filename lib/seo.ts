import type { Metadata } from "next";

const DEFAULT_OG_IMAGE = {
  url: "/logo/logo-bright-blue.png",
  width: 1200,
  height: 630,
  alt: "Azulejos de Maíz - Recuerdos de Maíz Azul",
};

export const DEFAULT_METADATA: Metadata = {
  title: "Azulejos de Maíz",
  description:
    "Galletas artesanales mexicanas hechas con maíz autóctono, inspiradas en los diseños tradicionales de los azulejos. Una mezcla única de mestizaje, sabor y artesanía.",
  openGraph: {
    title: "Azulejos de Maíz",
    description:
      "Galletas artesanales mexicanas hechas con maíz autóctono, inspiradas en los diseños tradicionales de los azulejos. Una mezcla única de mestizaje, sabor y artesanía.",
    url: "https://mercedeslopezarratia.com",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
};
