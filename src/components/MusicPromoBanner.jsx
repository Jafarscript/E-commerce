import React, { useEffect, useState } from 'react'

const MusicPromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
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
  <div className="container mx-auto px-4 my-12 md:my-20 max-w-7xl">
    <div className="bg-black text-white p-8 md:p-16 rounded-md flex flex-col md:flex-row items-center justify-between" style={{ backgroundImage: `url('https://placehold.co/1200x400/000000/111111?text=Music+Background')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="md:w-1/2 mb-8 md:mb-0">
        <p className="text-green-400 font-semibold mb-2">Categories</p>
        <h2 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight">Enhance Your <br />Music Experience</h2>
        {/* Countdown timer could be added here if needed */}
        <div className="flex space-x-3 mb-8">
          <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center text-xs font-bold"><span className="text-lg">{timeLeft.days}</span>DAYS</div>
          <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center text-xs font-bold"><span className="text-lg">{timeLeft.hours}</span>HRS</div>
          <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center text-xs font-bold"><span className="text-lg">{timeLeft.days}</span>MIN</div>
          <div className="bg-white text-black rounded-full h-16 w-16 flex flex-col items-center justify-center text-xs font-bold"><span className="text-lg">{timeLeft.seconds}</span>SEC</div>
        </div>
        <button className="bg-green-500 text-white px-8 py-3 rounded-md hover:bg-green-600 transition font-semibold">Buy Now!</button>
      </div>
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <img src="/jbl2.png" alt="Music Product"/>
      </div>
    </div>
  </div>
)};

export default MusicPromoBanner