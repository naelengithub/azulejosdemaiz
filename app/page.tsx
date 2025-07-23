import CookieTypes from "./components/CookieTypes";
import Footer from "./components/Footer";
import GalletasFeature from "./components/GalletasFeature";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProductsSection from "./components/ProductSection";
import QuoteSection from "./components/QuoteSection";
import StorySection from "./components/StorySection";
import VisionSection from "./components/VisionSection";

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
