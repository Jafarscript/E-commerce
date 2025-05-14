import ProductCard from "./ProductCard";

const bestSellingProducts = [
  { id: 1, name: 'The north coat', price: 260, oldPrice: 360, rating: 5, reviews: 65, image: '/coat.png' },
  { id: 2, name: 'Gucci duffle bag', price: 960, oldPrice: 1160, rating: 4.5, reviews: 65, image: '/gucci.png' },
  { id: 3, name: 'RGB liquid CPU Cooler', price: 160, oldPrice: 170, rating: 4.5, reviews: 65, image: '/cooler.png' },
  { id: 4, name: 'Small BookSelf', price: 360, rating: 5, reviews: 65, image: '/shelf.png' },
];

const BestSellingProducts = () => (
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
      {bestSellingProducts.map(product => <ProductCard key={product.id} product={product} showDiscount={false} />)}
    </div>
  </div>
);


export default BestSellingProducts