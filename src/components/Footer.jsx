import { Facebook, Instagram, Linkedin, Send, Twitter } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-black text-gray-300 pt-16 pb-8 mt-12 md:mt-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
        <div> {/* Col 1 */}
          <h5 className="text-xl font-bold text-white mb-4">Exclusive</h5>
          <p className="text-sm mb-3">Subscribe</p>
          <p className="text-xs mb-4">Get 10% off your first order</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input type="email" placeholder="Enter your email" className="bg-transparent border border-gray-400 text-white text-sm rounded-l-md py-2 px-3 focus:outline-none focus:border-white w-full" />
            <button type="submit" className="bg-transparent border border-gray-400 border-l-0 text-white p-2 rounded-r-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"><Send className="h-5 w-5" /></button>
          </form>
        </div>
        <div> {/* Col 2 */}
          <h5 className="text-lg font-medium text-white mb-4">Support</h5>
          <ul className="space-y-2 text-sm">
            <li><p className="hover:text-white cursor-default">111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh.</p></li>
            <li><a href="mailto:exclusive@gmail.com" className="hover:text-white">exclusive@gmail.com</a></li>
            <li><a href="tel:+88015-88888-9999" className="hover:text-white">+88015-88888-9999</a></li>
          </ul>
        </div>
        <div> {/* Col 3 */}
          <h5 className="text-lg font-medium text-white mb-4">Account</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/account" className="hover:text-white">My Account</Link></li>
            <li><Link to="/login" className="hover:text-white">Login / Register</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/wishlist" className="hover:text-white">Wishlist</Link></li>
            <li><Link to="/products/all" className="hover:text-white">Shop</Link></li>
          </ul>
        </div>
        <div> {/* Col 4 */}
          <h5 className="text-lg font-medium text-white mb-4">Quick Link</h5>
          <ul className="space-y-2 text-sm">
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="hover:text-white">Terms Of Use</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div> {/* Col 5 */}
          <h5 className="text-lg font-medium text-white mb-4">Download App</h5>
          <p className="text-xs text-gray-400 mb-2">Save $3 with App New User Only</p>
          <div className="flex space-x-2 mb-3">
            <img src="/qr.jpg" alt="QR Code" className="w-20 h-20 border-white border-2" onError={(e) => e.target.src='https://placehold.co/80x80/cccccc/969696?text=QR+Error'}/>
            <div className="flex flex-col space-y-1 justify-center">
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="Google Play" className="h-8 rounded" /></a>
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png" alt="App Store" className="h-8 rounded" /></a>
            </div>
          </div>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" className="hover:text-white"><Facebook className="h-5 w-5" /></a><a href="#" className="hover:text-white"><Twitter className="h-5 w-5" /></a><a href="#" className="hover:text-white"><Instagram className="h-5 w-5" /></a><a href="#" className="hover:text-white"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-6 text-center"><p className="text-xs text-gray-500">&copy; Copyright Rimel 2022. All right reserved</p></div>
    </div>
  </footer>
);


export default Footer