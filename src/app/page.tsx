import Carrousel from "@/components/Home/Carrousel";
import Collection from "@/components/Home/Collection";
import OfferSection from "@/components/Home/OfferSection";
import TrendingProducts from "@/components/Home/TrendingProducts";

export default function Home() {
  return (
    <>
      <Carrousel />
      <Collection />
      <TrendingProducts />
      <OfferSection />
    </>
  );
}
