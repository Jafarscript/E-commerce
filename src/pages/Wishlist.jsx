/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { allProductsData } from "../data";
import useWishlist from "../context/useWishlist";
import ProductCard from "../components/ProductCard";
import { Heart } from "lucide-react";


const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const navigate = useNavigate();

  const handleMoveAllToBag = () => {
    // Placeholder: In a real app, this would add all items to cart and potentially clear wishlist
    alert(`Moving ${wishlistItems.length} items to bag (not implemented).`);
    // wishlistItems.forEach(item => addToCart(item)); // Assuming addToCart function exists
    // setWishlistItems([]); // If items should be removed from wishlist after moving
  };

  // Example "Just For You" products - could be based on user history, etc.
  const justForYouProducts = allProductsData.sort(() => 0.5 - Math.random()).slice(0, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-xl font-medium">Wishlist ({wishlistItems.length})</h1>
        {wishlistItems.length > 0 && (
          <button 
            onClick={handleMoveAllToBag}
            className="px-6 py-3 border border-gray-300 rounded text-sm hover:bg-gray-50 transition"
          >
            Move All To Bag
          </button>
        )}
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <Heart size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-600 mb-2">Your wishlist is empty.</p>
          <p className="text-sm text-gray-500 mb-6">Looks like you haven’t added anything to your wishlist yet.</p>
          <Link to="/" className="bg-red-500 text-white px-6 py-3 rounded hover:bg-red-600 transition">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {wishlistItems.map(product => (
            <ProductCard key={product.id} product={product} showDiscount={product.discount > 0} isWishlistCard={true} />
          ))}
        </div>
      )}

      {/* Just For You Section */}
      <div className="mt-16 md:mt-24">
        <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
                <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
                <h2 className="text-red-500 font-semibold text-sm">Just For You</h2>
            </div>
            <Link to="/products/recommended" className="px-6 py-3 border border-gray-300 rounded text-sm hover:bg-gray-50 transition">See All</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {justForYouProducts.map(product => <ProductCard key={product.id} product={product} showDiscount={product.discount > 0} />)}
        </div>
      </div>
    </div>
  );
};

export default WishlistPage