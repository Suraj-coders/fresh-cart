import BannerSection from "@/components/Content/Bannersection";
import DailyBestSells from "@/components/Content/Dailysells";
import FeaturedCategories from "@/components/Content/FeaturesCategory";
import FeaturesSection from "@/components/Content/FeatureSection";
import HeroCarousel from "@/components/Content/Herosection";
import PopularProducts from "@/components/Content/Popularproduct";



export default function Home() {
  return (
    <>
    <HeroCarousel />
    <FeaturedCategories />
    <BannerSection />
    <PopularProducts  />
    <DailyBestSells />
    <FeaturesSection />
    
    </>
  );
}
