import React from 'react'

const MusicPromoBanner = () => (
  <div className="container mx-auto px-4 my-12 md:my-20 max-w-7xl">
    <div className="bg-black text-white p-8 md:p-16 rounded-md flex flex-col md:flex-row items-center justify-between" style={{ backgroundImage: `url('https://placehold.co/1200x400/000000/111111?text=Music+Background')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <p className="text-green-400 font-semibold mb-2">Categories</p>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">Enhance Your <br />Music Experience</h2>
        {/* Countdown timer could be added here if needed */}
        <div className="flex space-x-3 mb-8">
          <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center text-xs font-bold"><span className="text-lg">23</span>HRS</div>
          <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center text-xs font-bold"><span className="text-lg">05</span>DAYS</div>
          <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center text-xs font-bold"><span className="text-lg">59</span>MIN</div>
          <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center text-xs font-bold"><span className="text-lg">35</span>SEC</div>
        </div>
        <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition font-semibold">Buy Now!</button>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img src="https://placehold.co/400x300/111111/FFFFFF?text=JBL+Speaker" alt="Music Product" className="max-w-xs md:max-w-md" />
      </div>
    </div>
  </div>
);

export default MusicPromoBanner