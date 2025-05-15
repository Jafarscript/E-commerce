/* eslint-disable no-unused-vars */
import { ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const HeroSection = () => { /* ... (Keep existing HeroSection code, but ensure any product links use React Router Link or navigate) ... */ 
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { brand: "iPhone 14 Series", title: "Up to 10%", subtitle: "off Voucher", image: "iphone14.jpg", bgColor: "bg-black", textColor: "text-white", link: "/category/smartphones" },
    { brand: "Samsung Galaxy S23", title: "Save $150", subtitle: "Limited Time Offer", image: "https://placehold.co/600x384/333333/FFFFFF?text=Galaxy+S23", bgColor: "bg-gray-800", textColor: "text-white", link: "/category/smartphones" }
  ];
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  useEffect(() => { const slideInterval = setInterval(nextSlide, 5000); return () => clearInterval(slideInterval); }, []);

  return (
    <div className="container mx-auto px-4 mt-8 max-w-7xl">
      <div className="md:flex md:space-x-8">
        <div className="hidden md:block w-1/4 border-r pr-4 py-2">
          <nav className="space-y-1">
            {['Woman\'s Fashion', 'Men\'s Fashion', 'Electronics', 'Home & Lifestyle', 'Medicine', 'Sports & Outdoor', 'Baby\'s & Toys', 'Groceries & Pets', 'Health & Beauty'].map(cat => (
              <Link key={cat} to={`/category/${cat.toLowerCase().replace(/\s+/g, '-')}`} className="flex justify-between items-center text-gray-700 hover:text-black py-1.5 text-sm">
                {cat} { (cat.includes('Fashion')) && <ChevronRight className="h-4 w-4" />}
              </Link>
            ))}
          </nav>
        </div>
        <div className="md:w-3/4 relative overflow-hidden rounded-md min-h-[200px] md:min-h-[384px]">
          {slides.map((slide, index) => (
            <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${slide.bgColor} ${slide.textColor} p-6 md:p-12 flex items-center ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
              <div className="w-3/5">
                <p className="text-xs md:text-base font-light mb-2 md:mb-4 opacity-80 flex items-center"><img src={`https://placehold.co/30x30/${slide.textColor === 'text-white' ? 'ffffff/000000' : '000000/ffffff'}?text=${slide.brand.substring(0,1)}`} alt="Brand" className="h-6 w-6 mr-2 rounded-sm"/>{slide.brand}</p>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 md:mb-6">{slide.title} <br className="hidden md:block" /> {slide.subtitle}</h1>
                <Link to={slide.link} className="inline-flex items-center text-sm md:text-base font-medium hover:underline">Shop Now <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" /></Link>
              </div>
              <div className="w-2/5 flex justify-center items-center"> <img src={slide.image} alt={slide.title} className="max-h-[150px] md:max-h-[300px] object-contain" onError={(e) => e.target.src='https://placehold.co/600x384/cccccc/969696?text=Banner+Error'}/> </div>
            </div>
          ))}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
            {slides.map((_, index) => ( <button key={index} onClick={() => setCurrentSlide(index)} className={`h-2 w-2 md:h-2.5 md:w-2.5 rounded-full ${index === currentSlide ? 'bg-red-500 scale-125 ring-2 ring-offset-1 ring-red-300' : 'bg-gray-300 hover:bg-gray-400'} transition-all`}></button> ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection