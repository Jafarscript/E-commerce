import React from 'react'
import { allProductsData } from '../data';
import { Link } from 'react-router-dom';

const NewArrivals = () => { /* ... (Keep existing NewArrivals code, ensure links use React Router Link) ... */ 
  const ps5 = allProductsData.find(p => p.name.includes("PlayStation 5")) || { name: "PlayStation 5", description: "Black and White version...", image: "ps5.png", id: "new1" };
  const womensCollection = { name: "Women’s Collections", description: "Featured woman collections...", image: "woman2.png", id: "new2" };
  const speakers = { name: "Speakers", description: "Amazon wireless speakers", image: "speakers.png", id: "new3" };
  const perfume = { name: "Perfume", description: "GUCCI INTENSE OUD EDP", image: "perfume.png", id: "new4" };

  return (
    <div className="container mx-auto px-4 mt-12 md:mt-20 max-w-7xl">
      <div className="flex items-center mb-6"><div className="w-5 h-10 bg-red-500 rounded mr-4"></div><h2 className="text-red-500 font-semibold text-sm">Featured</h2></div>
      <h3 className="text-2xl md:text-3xl font-semibold text-black mb-8">New Arrival</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <Link to={`/product/${ps5.id}`} className="relative bg-black text-white rounded-md p-6 flex flex-col justify-end min-h-[300px] md:min-h-[500px] overflow-hidden group">
          <img src={ps5.image} alt={ps5.name} className="absolute inset-0 w-full h-full object-contain opacity-70 group-hover:scale-105 transition-transform duration-300" onError={(e) => e.target.src='https://placehold.co/600x500/000000/969696?text=PS5+Error'}/>
          <div className="relative z-10"><h4 className="text-xl md:text-2xl font-semibold mb-2">{ps5.name}</h4><p className="text-xs md:text-sm mb-3 opacity-80">{ps5.description}</p><span className="font-medium underline hover:text-gray-300 text-sm md:text-base">Shop Now</span></div>
        </Link>
        <div className="grid gap-6">
          <Link to={`/category/womens-fashion`} className="relative bg-black text-white rounded-md p-6 flex flex-col justify-end min-h-[238px] overflow-hidden group">
            <img src={womensCollection.image} alt={womensCollection.name} className="absolute right-0 bottom-0 h-full w-auto object-contain opacity-70 group-hover:scale-105 transition-transform duration-300" onError={(e) => e.target.src='https://placehold.co/570x238/000000/969696?text=Woman+Error'}/>
            <div className="relative z-10"><h4 className="text-xl md:text-2xl font-semibold mb-2">{womensCollection.name}</h4><p className="text-xs md:text-sm mb-3 opacity-80">{womensCollection.description}</p><span className="font-medium underline hover:text-gray-300 text-sm md:text-base">Shop Now</span></div>
          </Link>
          <div className="grid sm:grid-cols-2 gap-6">
            <Link to={`/product/${speakers.id}`} className="relative bg-black text-white rounded-md p-6 flex flex-col justify-end min-h-[238px] overflow-hidden group">
              <img src={speakers.image} alt={speakers.name} className="absolute inset-0 w-full h-full object-contain opacity-70 group-hover:scale-105 transition-transform duration-300" onError={(e) => e.target.src='https://placehold.co/270x238/000000/969696?text=Speaker+Error'}/>
              <div className="relative z-10"><h4 className="text-xl font-semibold mb-1">{speakers.name}</h4><p className="text-xs opacity-80 mb-2">{speakers.description}</p><span className="font-medium underline hover:text-gray-300 text-xs">Shop Now</span></div>
            </Link>
            <Link to={`/product/${perfume.id}`} className="relative bg-black text-white rounded-md p-6 flex flex-col justify-end min-h-[238px] overflow-hidden group">
              <img src={perfume.image} alt={perfume.name} className="absolute inset-0 w-full h-full object-contain opacity-70 group-hover:scale-105 transition-transform duration-300" onError={(e) => e.target.src='https://placehold.co/270x238/000000/969696?text=Perfume+Error'}/>
              <div className="relative z-10"><h4 className="text-xl font-semibold mb-1">{perfume.name}</h4><p className="text-xs opacity-80 mb-2">{perfume.description}</p><span className="font-medium underline hover:text-gray-300 text-xs">Shop Now</span></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals