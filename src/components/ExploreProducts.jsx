import { allProductsData } from "../data";
import ProductCard from "./ProductCard";


const ExploreProducts = () => {
  const exploreProds = allProductsData.filter(p => !p.discount).slice(0,8);
  return (
  <div className="container mx-auto px-4 mt-12 md:mt-20 max-w-7xl">
    <div className="flex items-center mb-6">
      <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
      <h2 className="text-red-500 font-semibold text-sm">Our Products</h2>
    </div>
    <h3 className="text-2xl md:text-3xl font-semibold text-black mb-8">Explore Our Products</h3>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {exploreProds.slice(0, 8).map(product => <ProductCard key={product.id} product={product} showDiscount={false} />)}
    </div>
    <div className="text-center mt-8">
      <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition">View All Products</button>
    </div>
     <hr className="my-12 md:my-16 border-gray-200" />
  </div>
)};


export default ExploreProducts