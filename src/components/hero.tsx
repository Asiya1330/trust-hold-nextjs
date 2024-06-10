import React, { FC } from 'react';
import SliderComponent from './home/heroSlider';

const Hero: FC = () => {
  return (
    <div className="relative h-screen pt-12">
      <div className="absolute top-0 left-0 w-1/2 h-full bg-white"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-red-500"></div>

      <div className="relative flex items-center justify-center h-full">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <div className="flex flex-col justify-center items-start text-left text-black ">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Website</h1>
            <p className="text-lg md:text-xl">We are committed to delivering the best services for our clients.</p>
          </div>
          <div className="flex justify-center items-center">
            <SliderComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
