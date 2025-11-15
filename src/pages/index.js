import PartnersContainer from "@/components/PartnersContainer/PartnersContainer";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import OfferSection from "@/components/OfferSection/OfferSection";
import FeaturedProjects from "@/components/FeaturedProjects/FeaturedProjects";
import Footer from "@/components/Footer/Footer";
import SEOHead from "@/components/SEOHead";

export default function Home() {
  return (
    <>
      <SEOHead />
      <HeroBanner />
      <PartnersContainer />
      <OfferSection />
      <FeaturedProjects />
      <Footer />
    </>
  );
}
