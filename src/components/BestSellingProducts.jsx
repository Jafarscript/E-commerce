import { allProductsData } from "../data";
import ProductCard from "./ProductCard";


const BestSellingProducts = () => {
  const bestSellers = allProductsData.sort((a,b) => (b.reviews * b.rating) - (a.reviews * a.rating)).slice(0,4); // Example logic
  return (
  <div className="container mx-auto px-4 mt-12 md:mt-20 max-w-7xl">
    <div className="flex items-center mb-6">
      <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
      <h2 className="text-red-500 font-semibold text-sm">This Month</h2>
    </div>
    <div className="flex justify-between items-center mb-8">
      <h3 className="text-2xl md:text-3xl font-semibold text-black">Best Selling Products</h3>
      <button className="bg-red-500 text-white px-6 py-2 rounded-md text-sm hover:bg-red-600 transition">View All</button>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {bestSellers.map(product => <ProductCard key={product.id} product={product} showDiscount={false} />)}
    </div>
  </div>
  )
};


export default BestSellingProducts