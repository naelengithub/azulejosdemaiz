import CookieTypes from "./components/CookieTypes";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";
import GalletasFeature from "./components/GalletasFeature";
import HeroSection from "./components/HeroSection";
import ProductsSection from "./components/ProductSection";
import QuoteSection from "./components/QuoteSection";
import StorySection from "./components/StorySection";

export default function Home() {
  return (
    <div className="bg-background">
      <main>
        <HeroSection />
        <GalletasFeature />
        <CookieTypes id="productos" />
        <FeatureSection id="vision" />
        <StorySection id="historia" />
        <ProductsSection id="formas" />
        <QuoteSection />
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
}
