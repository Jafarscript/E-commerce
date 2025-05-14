import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

// Placeholder data (replace with actual data from an API or state management)
const flashSaleProducts = [
  {
    id: 1,
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    oldPrice: 160,
    discount: 40,
    rating: 5,
    reviews: 88,
    image: "https://placehold.co/270x250/f5f5f5/b22222?text=Gamepad",
  },
  {
    id: 2,
    name: "AK-900 Wired Keyboard",
    price: 960,
    oldPrice: 1160,
    discount: 35,
    rating: 4,
    reviews: 75,
    image: "https://placehold.co/270x250/f5f5f5/b22222?text=Keyboard",
  },
  {
    id: 3,
    name: "IPS LCD Gaming Monitor",
    price: 370,
    oldPrice: 400,
    discount: 30,
    rating: 5,
    reviews: 99,
    image: "https://placehold.co/270x250/f5f5f5/b22222?text=Monitor",
  },
  {
    id: 4,
    name: "S-Series Comfort Chair",
    price: 375,
    oldPrice: 400,
    discount: 25,
    rating: 4.5,
    reviews: 99,
    image: "https://placehold.co/270x250/f5f5f5/b22222?text=Chair",
  },
  {
    id: 5,
    name: "Another Product",
    price: 500,
    oldPrice: 600,
    discount: 20,
    rating: 4,
    reviews: 50,
    image: "https://placehold.co/270x250/f5f5f5/b22222?text=Product+5",
  },
];

const FlashSales = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  }); // Example time

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
              else {
                // Timer ended
                clearInterval(timer);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="container mx-auto px-4 mt-12 md:mt-20 max-w-7xl">
      <div className="flex items-center mb-6">
        <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
        <h2 className="text-red-500 font-semibold text-sm">Today's</h2>
      </div>
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
        <div className="flex items-end space-x-4 md:space-x-8">
          <h3 className="text-2xl md:text-3xl font-semibold text-black">
            Flash Sales
          </h3>
          <div className="flex space-x-2 md:space-x-3 items-center ">
            <div>
              <span className="text-xs">Days</span>
              <p className="text-xl md:text-2xl font-bold flex gap-2 items-center">
                {String(timeLeft.days).padStart(2, "0")}<span className="text-red-500 mb-1 text-xl md:text-2xl font-bold">
              :
            </span>
            </p>
            </div>
            
            <div>
              <span className="text-xs">Hours</span>
              <p className="text-xl md:text-2xl font-bold flex gap-2 items-center">
                {String(timeLeft.hours).padStart(2, "0")}<span className="text-red-500 mb-1 text-xl md:text-2xl font-bold">
              :
            </span>
            </p>
            </div>
            <div>
              <span className="text-xs">Minutes</span>
              <p className="text-xl md:text-2xl font-bold flex gap-2 items-center">
                {String(timeLeft.minutes).padStart(2, "0")}<span className="text-red-500 mb-1 text-xl md:text-2xl font-bold">
              :
            </span>
            </p>
            </div>
            <div>
              <span className="text-xs">Seconds</span>
              <p className="text-xl md:text-2xl font-bold flex gap-2 items-center">
                {String(timeLeft.seconds).padStart(2, "0")}<span className="text-red-500 opacity-0 mb-1 text-xl md:text-2xl font-bold">
              :
            </span>
            </p>
            </div>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          {/* Navigation arrows could go here if it's a carousel */}
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
        {flashSaleProducts.map((product) => (
          <ProductCard key={product.id} product={product} showDiscount={true} />
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-red-500 text-white px-8 py-3 rounded-md hover:bg-red-600 transition">
          View All Products
        </button>
      </div>
      <hr className="my-12 md:my-16 border-gray-200" />
    </div>
  );
};

export default FlashSales;
