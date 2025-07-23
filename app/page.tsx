import { Metadata } from "next";
import { DEFAULT_OG_IMAGE } from "@/lib/constants";
import CookieTypes from "./components/CookieTypes";
import Footer from "./components/Footer";
import GalletasFeature from "./components/GalletasFeature";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductSection";
import QuoteSection from "./components/QuoteSection";
import StorySection from "./components/StorySection";
import VisionSection from "./components/VisionSection";

export const metadata: Metadata = {
  title: "Azulejos de Maíz",
  description:
    "Galletas artesanales mexicanas hechas con maíz autóctono, inspiradas en los diseños tradicionales de los azulejos. Una mezcla única de mestizaje, sabor y artesanía.",
  openGraph: {
    title: "Azulejos de Maíz | Recuerdos de Maíz Azul",
    description:
      "Galletas artesanales mexicanas hechas con maíz autóctono, inspiradas en los diseños tradicionales de los azulejos. Una mezcla única de mestizaje, sabor y artesanía.",
    url: "https://mercedeslopezarratia.com",
    type: "website",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function Home() {
  return (
    <div className="bg-background">
      <main>
        <Navbar />
        <HeroSection />
        <GalletasFeature />
        <CookieTypes id="productos" />
        <VisionSection id="vision" />
        <StorySection id="historia" />
        <ProductsSection id="formas" />
        <QuoteSection />
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
}
