import React, { FC } from 'react';

const Hero: FC = () => {
  return (
    <div className="hero-section flex items-center justify-center h-screen text-white text-center">
      <div>
        <h1 className="text-6xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-xl">We are committed to delivering the best services for our clients.</p>
      </div>
    </div>
  );
};

export default Hero;
