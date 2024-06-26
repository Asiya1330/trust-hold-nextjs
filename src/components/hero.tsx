import React, { FC } from "react";
import CustomSlider from "./home/heroSlider";
import Link from "next/link";

const Hero: FC = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <CustomSlider />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-gray-900 opacity-60"></div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto text-center px-4 md:px-8">
          <div className=" md:w-1/2 w-full flex flex-col justify-center items-start text-left text-white md:px-8">
            <h1 className="text-4xl md:text-6xl text-primary font-bold mb-4">
              Welcome to Trusthold Group
            </h1>
            <p className="text-lg md:text-xl">
              Trusthold Development Group is built on the foundations of trust
              and rooted in professional integrity. A private real-estate
              development firm, Trusthold invests in real-estate and develops
              high-end residential, commercial, and retail projects in Lebanon.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="/projects" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                Our Projects

              </Link>
              <Link href="/about-us" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
                About Us

              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
