import { Heart, Trash2 } from 'lucide-react';
import React from 'react'
import RatingStars from './RatingStars';
import useWishlist from '../context/useWishlist';
import { useNavigate } from 'react-router-dom';
import useCart from '../context/useCart';

const ProductCard = ({ product, showDiscount, isWishlistCard = false }) => {
  const { addToWishlist, removeFromWishlist: removeFromWishlistContext, isInWishlist } = useWishlist(); // Renamed to avoid conflict
  const { addToCart: addToCartContext } = useCart(); // Renamed
  const navigate = useNavigate();

  const handleWishlistToggle = (e) => { e.stopPropagation(); if (isInWishlist(product.id)) removeFromWishlistContext(product.id); else addToWishlist(product); };
  const handleCardClick = () => navigate(`/product/${product.id}`);
  const handleAddToCart = (e) => { e.stopPropagation(); addToCartContext(product, 1); alert(`${product.name} added to cart!`); /* Add better notification */ };

  return (
    <div className="bg-white overflow-hidden group relative pb-10">
      <div className="relative rounded-sm bg-gray-100 p-4 flex justify-center items-center h-48 cursor-pointer" onClick={handleCardClick}>
        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" onError={(e) => e.target.src='https://placehold.co/270x250/cccccc/969696?text=Img+Error'} />
        {showDiscount && product.discount && (<span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">-{product.discount}%</span>)}
        {product.isNew && !showDiscount && (<span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">NEW</span>)}
        <button onClick={handleAddToCart} className="w-full cursor-pointer bg-black text-white py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 right-0 rounded-b-md">Add To Cart</button>
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button onClick={handleWishlistToggle} className="bg-white p-2 rounded-full shadow hover:bg-gray-100"><Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'text-red-500 fill-red-500' : 'text-gray-700'}`} /></button>
          {isWishlistCard && (<button onClick={(e) => { e.stopPropagation(); removeFromWishlistContext(product.id); }} className="bg-white p-2 rounded-full shadow hover:bg-gray-100"><Trash2 className="h-5 w-5 text-gray-700 hover:text-red-500" /></button>)}
        </div>
      </div>
      <div className="p-4 cursor-pointer" onClick={handleCardClick}>
        <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
        <div className="flex items-center space-x-2 mb-2"><p className="text-red-500 font-bold text-sm">${product.price.toFixed(2)}</p>{product.oldPrice && <p className="text-gray-400 line-through text-xs">${product.oldPrice.toFixed(2)}</p>}</div>
        <RatingStars rating={product.rating} reviews={product.reviews} />
      </div>
    </div>
  );
};

export default ProductCard