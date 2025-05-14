import { Heart } from 'lucide-react';
import React from 'react'
import RatingStars from './RatingStars';

const ProductCard = ({ product, showDiscount }) => (
  <div className="bg-white overflow-hidden group">
    <div className="relative rounded-md bg-gray-100 p-4 flex justify-center items-center h-48">
      <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300" />
      {showDiscount && product.discount && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          -{product.discount}%
        </span>
      )}
      {product.isNew && !showDiscount && (
         <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded">
          NEW
        </span>
      )}
      <button className="mt-3 w-full bg-black text-white py-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute bottom-0 left-0 right-0">
        Add To Cart
      </button>
      <div className="absolute top-2 right-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
          <Heart className="h-5 w-5 text-gray-700" />
        </button>
        {/* Add to cart button can be placed here or below */}
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-sm font-semibold text-gray-800 mb-1 truncate">{product.name}</h3>
      <div className="flex items-center space-x-2 mb-2">
        <p className="text-red-500 font-bold text-sm">${product.price}</p>
        {product.oldPrice && <p className="text-gray-400 line-through text-xs">${product.oldPrice}</p>}
      </div>
      <RatingStars rating={product.rating} reviews={product.reviews} />
    </div>
  </div>
);

export default ProductCard