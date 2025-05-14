/* eslint-disable no-unused-vars */
import { ArrowRight, ChevronDown } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const HeroSection = () => {
  // Basic slider state (can be expanded with more images)
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      brand: "iPhone 14 Series",
      title: "Up to 10%",
      subtitle: "off Voucher",
      image: "https://placehold.co/600x384/000000/FFFFFF?text=iPhone+14+Pro",
      bgColor: "bg-black",
      textColor: "text-white"
    },
    {
      brand: "Samsung Galaxy S23",
      title: "Save $150",
      subtitle: "Limited Time Offer",
      image: "https://placehold.co/600x384/333333/FFFFFF?text=Galaxy+S23",
      bgColor: "bg-gray-800",
      textColor: "text-white"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(slideInterval);
  }, []);


  return (
    <div className="container mx-auto px-4 mt-8 max-w-7xl">
      <div className="md:flex md:space-x-8">
        {/* Side Navigation (Optional, as in some e-commerce layouts) */}
        <div className="hidden md:block w-1/4 border-r pr-4">
          <nav className="space-y-2">
            <a href="#" className="flex justify-between items-center text-gray-700 hover:text-black py-1">Woman's Fashion <ChevronDown className="h-4 w-4 transform -rotate-90" /></a>
            <a href="#" className="flex justify-between items-center text-gray-700 hover:text-black py-1">Men's Fashion <ChevronDown className="h-4 w-4 transform -rotate-90" /></a>
            <a href="#" className="text-gray-700 hover:text-black block py-1">Electronics</a>
            <a href="#" className="text-gray-700 hover:text-black block py-1">Home & Lifestyle</a>
            <a href="#" className="text-gray-700 hover:text-black block py-1">Medicine</a>
            <a href="#" className="text-gray-700 hover:text-black block py-1">Sports & Outdoor</a>
            <a href="#" className="text-gray-700 hover:text-black block py-1">Baby's & Toys</a>
            <a href="#" className="text-gray-700 hover:text-black block py-1">Groceries & Pets</a>
            <a href="#" className="text-gray-700 hover:text-black block py-1">Health & Beauty</a>
          </nav>
        </div>

        {/* Main Banner/Slider */}
        <div className="md:w-3/4 relative overflow-hidden rounded-md min-h-[200px] md:min-h-[384px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide.bgColor} ${slide.textColor} p-8 md:p-12 flex items-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              <div className="w-1/2 md:w-3/5">
                <p className="text-sm md:text-base font-light mb-2 md:mb-4 opacity-80">{slide.brand}</p>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 md:mb-6">
                  {slide.title} <br className="hidden md:block" /> {slide.subtitle}
                </h1>
                <a href="#" className="inline-flex items-center text-sm md:text-base font-medium hover:underline">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </a>
              </div>
              <div className="w-1/2 md:w-2/5 flex justify-center items-center">
                <img src={slide.image} alt={slide.title} className="max-h-[150px] md:max-h-[300px] object-contain" />
              </div>
            </div>
          ))}
          {/* Slider Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${index === currentSlide ? 'bg-red-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'} transition-all`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection