import React, { useState, useEffect } from 'react';
import phone from '../assets/phone.png'; 
import graph from '../assets/Candlesticks.png'; 
import './animations.css';

const HeroSection = () => {
  const [tradersCount, setTradersCount] = useState(0);

  useEffect(() => {
    const targetCount = 235000;
    let currentCount = 0;
    const increment = Math.ceil(targetCount / 100); // Increment to reach the target smoothly

    const interval = setInterval(() => {
      if (currentCount < targetCount) {
        currentCount += increment;
        setTradersCount(currentCount);
      } else {
        setTradersCount(targetCount);
        clearInterval(interval);
      }
    }, 20); // Adjust the interval for smoother animation, lower values mean faster animation

    // Cleanup
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-0">
      {/* Grid for desktop */}
      <div className='text-white flex flex-col md:flex-row  mb-8 md:mb-0'>

        {/* First Section */}
        <div className='flex flex-col md:w-1/2'>
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Supercharge your trading journey with Trade.p</h1>
            <h4 className="text-lg">Trade on Bitcoin, Gold, Oil, Apple, Tesla, crude oil, and 6,400+ other world-renowned markets.</h4>
          </div>

          <div className="mt-8">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 md:py-5 md:px-7 mr-4 rounded">Start Trading</button>
            <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 md:py-5 md:px-7 rounded">Learn Trading</button>
          </div>
        </div>

        {/* Second Section - Phone */}
        <div className='flex justify-center md:justify-end mt-8 md:mt-0'>
          <img src={phone} alt="phone" className="h-64 md:h-auto" />
        </div>

        {/* Third Section */}
        <div className='flex flex-col items-center md:items-start md:w-1/2 md:ml-4'>
          <h1 className="text-4xl font-bold mb-4 number-animation">{tradersCount}</h1>
          <h4 className=" mb-4">Global Traders</h4>
          <img src={graph} alt="graph" className="w-32 mb-4" />

          <h4 className="text-lg">Advanced AI technology</h4>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
          <p className="text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus.</p>
        </div>

      </div>

      {/* Grid for mobile */}
      <div className="text-white text-center border-t border-gray-600 py-8 md:hidden">
        <div className="grid grid-cols-2 gap-4">
          {/* First Division */}
          <div>
            <h1 className="text-4xl">#1</h1>
            <p className="text-lg">IT Broker</p>
            <p className="text-lg">Company In UK</p>
          </div>
          
          {/* Second Division */}
          <div>
            <h1 className="text-4xl">250+</h1>
            <p className="text-lg">Trading Platforms</p>
          </div>
          
          {/* Third Division */}
          <div>
            <h1 className="text-4xl">30k</h1>
            <p className="text-lg">Users</p>
            <p className="text-lg">Trading</p>
          </div>
          
          {/* Fourth Division */}
          <div>
            <h1 className="text-4xl">$45M</h1>
            <p className="text-lg">Traded Volume</p>
          </div>
        </div>
        <div className="mt-4">
          <h1 className="text-4xl">#1 IT Broker</h1>
          <p className="text-lg">Company In UK</p>
          <p className="text-lg">250+ Trading Platforms</p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
