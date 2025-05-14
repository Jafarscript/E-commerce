import React from 'react'

const NewArrivals = () => (
  <div className="container mx-auto px-4 mt-12 md:mt-20 max-w-7xl">
    <div className="flex items-center mb-6">
      <div className="w-5 h-10 bg-red-500 rounded mr-4"></div>
      <h2 className="text-red-500 font-semibold text-sm">Featured</h2>
    </div>
    <h3 className="text-2xl md:text-3xl font-semibold text-black mb-8">New Arrival</h3>
    <div className="grid md:grid-cols-2 gap-6">
      {/* Large Left Item */}
      <div className="relative bg-black text-white rounded-md p-6 flex flex-col justify-end min-h-[300px] md:min-h-[500px] overflow-hidden group" style={{ backgroundImage: `url('/ps5.png')`, backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <img src="/ps5.png" alt="PlayStation 5" className="absolute inset-0 w-full h-full object-contain opacity-70 group-hover:scale-105 transition-transform duration-300" />
        <div className="relative z-10">
          <h4 className="text-xl md:text-2xl font-semibold mb-2">PlayStation 5</h4>
          <p className="text-xs md:text-sm mb-3 opacity-80">Black and White version of the PS5 <br />coming out on sale.</p>
          <a href="#" className="font-medium underline hover:text-gray-300 text-sm md:text-base">Shop Now</a>
        </div>
      </div>
      {/* Right Column Items */}
      <div className="grid gap-6">
        {/* Top Right Item */}
        <div className="relative bg-black text-white rounded-md p-6 flex flex-col justify-end min-h-[238px] md:min-h-[238px] overflow-hidden group" style={{ backgroundImage: `url('https://placehold.co/570x238/000000/111111?text=Woman+Collection')`, backgroundSize: 'contain', backgroundPosition: 'center right', backgroundRepeat: 'no-repeat' }}>
          <img src="/woman2.png" alt="Woman's Collection" className="absolute right-0 bottom-0 h-full w-auto object-contain opacity-70 group-hover:scale-105 transition-transform duration-300" />
          <div className="relative z-10">
            <h4 className="text-xl md:text-2xl font-semibold mb-2">Women’s Collections</h4>
            <p className="text-xs md:text-sm mb-3 opacity-80">Featured woman collections that <br />give you another vibe.</p>
            <a href="#" className="font-medium underline hover:text-gray-300 text-sm md:text-base">Shop Now</a>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Bottom Left (of right column) Item */}
          <div className="relative bg-black text-white rounded-md p-6 flex flex-col justify-end min-h-[238px] md:min-h-[238px] overflow-hidden group">
            <img src="/speakers.png" alt="Speakers" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            <div className="relative z-10">
              <h4 className="text-xl font-semibold mb-1">Speakers</h4>
              <p className="text-xs opacity-80 mb-2">Amazon wireless speakers</p>
              <a href="#" className="font-medium underline hover:text-gray-300 text-xs">Shop Now</a>
            </div>
          </div>
          {/* Bottom Right (of right column) Item */}
          <div className="relative bg-black text-white rounded-md p-6 flex flex-col justify-end min-h-[238px] md:min-h-[238px] overflow-hidden group">
            <img src="/perfume.png" alt="Perfume" className="absolute inset-0 w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
            <div className="relative z-10">
              <h4 className="text-xl font-semibold mb-1">Perfume</h4>
              <p className="text-xs opacity-80 mb-2">GUCCI INTENSE OUD EDP</p>
              <a href="#" className="font-medium underline hover:text-gray-300 text-xs">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default NewArrivals