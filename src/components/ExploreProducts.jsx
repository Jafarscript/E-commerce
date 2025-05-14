import ProductCard from "./ProductCard";

const exploreProducts = [
  { id: 1, name: 'Breed Dry Dog Food', price: 100, rating: 3, reviews: 35, image: 'https://placehold.co/270x250/f5f5f5/000000?text=Dog+Food' },
  { id: 2, name: 'CANON EOS DSLR Camera', price: 360, rating: 4, reviews: 95, image: 'https://placehold.co/270x250/f5f5f5/000000?text=Camera' },
  { id: 3, name: 'ASUS FHD Gaming Laptop', price: 700, rating: 5, reviews: 325, image: 'https://placehold.co/270x250/f5f5f5/000000?text=Laptop' },
  { id: 4, name: 'Curology Product Set', price: 500, rating: 4, reviews: 145, image: 'https://placehold.co/270x250/f5f5f5/000000?text=Curology+Set' },
  { id: 5, name: 'Kids Electric Car', price: 960, isNew: true, rating: 5, reviews: 65, image: 'https://placehold.co/270x250/f5f5f5/000000?text=Kids+Car' },
  { id: 6, name: 'Jr. Zoom Soccer Cleats', price: 1160, rating: 4.5, reviews: 35, image: 'https://placehold.co/270x250/f5f5f5/000000?text=Soccer+Cleats' },
  { id: 7, name: 'GP11 Shooter USB Gamepad', price: 660, isNew: true, rating: 4.5, reviews: 55, image: 'https://placehold.co/270x250/f5f5f5/000000?text=Gamepad' },
  { id: 8, name: 'Quilted Satin Jacket', price: 660, rating: 4.5, reviews: 55, image: 'https://placehold.co/270x250/f5f5f5/000000?text=Jacket' },
];

const ExploreProducts = () => (
  <div className="container mx-auto px-4 mt-12 md:mt-20 max-w-7xl">
    <div className="flex items-center mb-6">
      <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
      <h2 className="text-red-500 font-semibold text-sm">Our Products</h2>
    </div>
    <h3 className="text-2xl md:text-3xl font-semibold text-black mb-8">Explore Our Products</h3>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
      {exploreProducts.slice(0, 8).map(product => <ProductCard key={product.id} product={product} showDiscount={false} />)}
    </div>
    <div className="text-center mt-8">
      <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition">View All Products</button>
    </div>
     <hr className="my-12 md:my-16 border-gray-200" />
  </div>
);


export default ExploreProducts