import { Clock, Gamepad2, Headphones, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'

const categories = [
  { name: 'Phones', icon: <Phone className="h-8 w-8 mx-auto" /> },
  { name: 'Computers', icon: <MapPin className="h-8 w-8 mx-auto" /> }, // Placeholder, replace with computer icon
  { name: 'SmartWatch', icon: <Clock className="h-8 w-8 mx-auto" /> },
  { name: 'Camera', icon: <Mail className="h-8 w-8 mx-auto" /> }, // Placeholder, replace with camera icon
  { name: 'HeadPhones', icon: <Headphones className="h-8 w-8 mx-auto" /> }, // Placeholder
  { name: 'Gaming', icon: <Gamepad2 className="h-8 w-8 mx-auto" /> }, // Placeholder
];

const Categories = () => (
  <div className="container mx-auto px-4 mt-12 md:mt-20 max-w-7xl">
    <div className="flex items-center mb-6">
      <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
      <h2 className="text-red-500 font-semibold text-sm">Categories</h2>
    </div>
    <h3 className="text-2xl md:text-3xl font-semibold text-black mb-8">Browse By Category</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
      {categories.map(category => (
        <button key={category.name} className="border border-gray-300 rounded-md p-6 text-center hover:bg-red-500 hover:text-white transition group">
          <div className="text-gray-700 group-hover:text-white mb-2">{category.icon}</div>
          <p className="text-sm font-medium">{category.name}</p>
        </button>
      ))}
    </div>
    <hr className="my-12 md:my-16 border-gray-200" />
  </div>
);
export default Categories