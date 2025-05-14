import { Facebook, Instagram, Linkedin, Send, Twitter } from 'lucide-react';
import React from 'react'

const Footer = () => (
  <footer className="bg-black text-gray-300 pt-16 pb-8 mt-12 md:mt-20">
    <div className="container mx-auto px-4 max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
        {/* Column 1: Exclusive */}
        <div>
          <h5 className="text-xl font-bold text-white mb-4">Exclusive</h5>
          <p className="text-sm mb-3">Subscribe</p>
          <p className="text-xs mb-4">Get 10% off your first order</p>
          <div className="flex">
            <input type="email" placeholder="Enter your email" className="bg-transparent border border-gray-400 text-white text-sm rounded-l-md py-2 px-3 focus:outline-none w-full" />
            <button className="bg-transparent border border-gray-400 border-l-0 text-white p-2 rounded-r-md hover:bg-gray-700">
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Column 2: Support */}
        <div>
          <h5 className="text-lg font-medium text-white mb-4">Support</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</a></li>
            <li><a href="#" className="hover:text-white">exclusive@gmail.com</a></li>
            <li><a href="#" className="hover:text-white">+88015-88888-9999</a></li>
          </ul>
        </div>

        {/* Column 3: Account */}
        <div>
          <h5 className="text-lg font-medium text-white mb-4">Account</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">My Account</a></li>
            <li><a href="#" className="hover:text-white">Login / Register</a></li>
            <li><a href="#" className="hover:text-white">Cart</a></li>
            <li><a href="#" className="hover:text-white">Wishlist</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
          </ul>
        </div>

        {/* Column 4: Quick Link */}
        <div>
          <h5 className="text-lg font-medium text-white mb-4">Quick Link</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Terms Of Use</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 5: Download App */}
        <div>
          <h5 className="text-lg font-medium text-white mb-4">Download App</h5>
          <p className="text-xs text-gray-400 mb-2">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-3">
            <img src="https://placehold.co/80x80/333333/FFFFFF?text=QR" alt="QR Code" className="w-20 h-20 rounded" />
            <div className="flex flex-col space-y-1 justify-center">
              <a href="#"><img src="https://placehold.co/100x30/333333/FFFFFF?text=Google+Play" alt="Google Play" className="h-8 rounded" /></a>
              <a href="#"><img src="https://placehold.co/100x30/333333/FFFFFF?text=App+Store" alt="App Store" className="h-8 rounded" /></a>
            </div>
          </div>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6 text-center">
        <p className="text-xs text-gray-500">&copy; Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  </footer>
);


export default Footer