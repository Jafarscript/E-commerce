// import { Truck, Headphones, ShieldCheck } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FlashSales from './components/FlashSales';
import Categories from './components/Categories';
import BestSellingProducts from './components/BestSellingProducts';
import MusicPromoBanner from './components/MusicPromoBanner';
import ExploreProducts from './components/ExploreProducts';
import NewArrivals from './components/NewArrivals';
import Footer from './components/Footer';
import Features from './components/Features';


const App = () => {
  return (
    <section className="font-sans bg-white">
      <Header />
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
      <Footer />
    </section>
  )
}

export default App