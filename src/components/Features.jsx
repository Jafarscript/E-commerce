import { Headphones, ShieldCheck, Truck } from 'lucide-react';
import React from 'react'

const Features = () => (
  <div className="container mx-auto px-4 my-12 md:my-20 max-w-7xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 rounded-full p-3 mb-4 inline-block">
          <div className="bg-black text-white rounded-full p-3">
            <Truck className="h-6 w-6" /> {/* Placeholder for actual icon */}
          </div>
        </div>
        <h4 className="font-semibold text-lg mb-1">FREE AND FAST DELIVERY</h4>
        <p className="text-xs text-gray-600">Free delivery for all orders over $140</p>
      </div>
      <div className="flex flex-col items-center">
         <div className="bg-gray-200 rounded-full p-3 mb-4 inline-block">
          <div className="bg-black text-white rounded-full p-3">
             <Headphones className="h-6 w-6" /> {/* Placeholder for actual icon */}
          </div>
        </div>
        <h4 className="font-semibold text-lg mb-1">24/7 CUSTOMER SERVICE</h4>
        <p className="text-xs text-gray-600">Friendly 24/7 customer support</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 rounded-full p-3 mb-4 inline-block">
          <div className="bg-black text-white rounded-full p-3">
            <ShieldCheck className="h-6 w-6" /> {/* Placeholder for actual icon */}
          </div>
        </div>
        <h4 className="font-semibold text-lg mb-1">MONEY BACK GUARANTEE</h4>
        <p className="text-xs text-gray-600">We return money within 30 days</p>
      </div>
    </div>
  </div>
);

export default Features