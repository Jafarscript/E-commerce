import { Heart, Menu, Search, ShoppingCart, User } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b">
      {/* Top bar */}
      <div className="bg-black text-white py-2 text-center text-xs md:text-sm">
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="font-semibold underline ml-2">ShopNow</a></p>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-black">Exclusive</a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="text-gray-700 hover:text-black">Home</Link>
            <Link to="/" className="text-gray-700 hover:text-black">Contact</Link>
            <Link to="/" className="text-gray-700 hover:text-black">About</Link>
            <Link to="/signup" className="text-gray-700 hover:text-black">Sign Up</Link>
          </nav>

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-md">
              <input type="text" placeholder="What are you looking for?" className="bg-transparent text-sm focus:outline-none" />
              <Search className="h-5 w-5 text-gray-500" />
            </div>
            <button className="relative text-gray-700 hover:text-black">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">4</span>
            </button>
            <button className="relative text-gray-700 hover:text-black">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
            </button>
            <button className="hidden md:block text-gray-700 hover:text-black">
              <User className="h-6 w-6" />
            </button>
            <button className="md:hidden text-gray-700 hover:text-black" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="mt-4 md:hidden flex flex-col space-y-2">
            <a href="#" className="text-gray-700 hover:text-black py-2 border-b">Home</a>
            <a href="#" className="text-gray-700 hover:text-black py-2 border-b">Contact</a>
            <a href="#" className="text-gray-700 hover:text-black py-2 border-b">About</a>
            <a href="#" className="text-gray-700 hover:text-black py-2">Sign Up</a>
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