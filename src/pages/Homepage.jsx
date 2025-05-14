import HeroSection from '../components/HeroSection';
import FlashSales from '../components/FlashSales';
import Categories from '../components/Categories';
import BestSellingProducts from '../components/BestSellingProducts';
import MusicPromoBanner from '../components/MusicPromoBanner';
import ExploreProducts from '../components/ExploreProducts';
import NewArrivals from '../components/NewArrivals';
import Features from '../components/Features';
const Homepage = () => {
  return (
    <main>
        <HeroSection />
        <FlashSales />
        <Categories />
        <BestSellingProducts />
        <MusicPromoBanner />
        <ExploreProducts />
        <NewArrivals />
        <Features />
    </main>
  )
}

export default Homepage