import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useWishlist from '../context/useWishlist';


const Header = () => {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { wishlistItems } = useWishlist();

  return (
    <header className="border-b sticky top-0 bg-white z-50 ">
      <div className="bg-black text-white py-2 text-center text-xs md:text-sm">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link to="/" className="font-semibold underline ml-2">ShopNow</Link></p>
      </div>
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-black">Exclusive</Link>
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link to="/contact" className="text-gray-700 hover:text-black">Contact</Link>
            <Link to="/about" className="text-gray-700 hover:text-black">About</Link>
            <Link to="/signup" className="text-gray-700 hover:text-black">Sign Up</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center gap-4 bg-gray-100 px-3 py-2 rounded-md">
              <input type="text" placeholder="What are you looking for?" className="bg-transparent text-sm focus:outline-none w-full" />
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <Link to="/wishlist" className="relative text-gray-700 hover:text-black">
              <Heart className="h-6 w-6" />
              {wishlistItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlistItems.length}
                </span>
              )}
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-black"> {/* Assuming a cart page might exist */}
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span> {/* Placeholder count */}
            </Link>
            <Link to="/login" className="hidden md:block text-gray-700 hover:text-black">
              <User className="h-6 w-6" />
            </Link>
            <button className="md:hidden text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="mt-4 md:hidden flex flex-col space-y-2">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black py-2 border-b">Home</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black py-2 border-b">Contact</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black py-2 border-b">About</Link>
            <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black py-2">Sign Up</Link>
            <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-700 hover:text-black py-2 border-t">Log In</Link>
            <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md mt-2">
              <input type="text" placeholder="What are you looking for?" className="bg-transparent text-sm focus:outline-none w-full" />
              <Search className="h-5 w-5 text-gray-500" />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header