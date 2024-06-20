// components/Carousel.tsx
"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  src: string;
  label: string;
  content: string;
  details: string | null;
}

interface CarouselProps {
  slides: Slide[];
  interval?: number; // Optional interval prop for specifying time between slide changes (in milliseconds)
}

const CarouselSlider: React.FC<CarouselProps> = ({ slides, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    }, interval);

    return () => clearInterval(intervalId);
  }, [slides, interval]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) => (
          index === currentIndex && (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full flex flex-col md:flex-row transition-opacity duration-1000 ease-in-out"
            >
              <motion.div
                className="relative w-full h-full md:w-3/5"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 1 }}
              >
                <Image src={slide.src} className="w-full h-full md:object-cover" alt={`Slide ${index + 1}`} layout="fill" />
              </motion.div>
              <div className="relative w-full md:h-full md:w-2/5 bg-black bg-opacity-50 text-white md:text-black flex items-center justify-center md:bg-transparent md:flex md:items-center md:justify-center">
                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 md:relative md:bg-transparent md:p-6">
                  <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">{slide.label}</h2>
                  <p className="text-sm md:text-lg italic md:hidden block">{slide.content}</p>
                  {slide.details && (
                    <div className="hidden md:block mt-4">
                      <span className="text-sm md:text-base whitespace-pre-wrap">{slide.details}</span>
                    </div>
                  )}
                  <button className="mt-2 md:mt-4 bg-red-700 text-white px-2 py-1 md:px-4 md:py-2 rounded hover:bg-red-600 focus:outline-none">Learn More</button>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>
      <button className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 text-white rounded-l focus:outline-none" onClick={prevSlide} title='prev'>
        <FaChevronCircleLeft />
      </button>
      <button className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 text-white rounded-r focus:outline-none" onClick={nextSlide} title='next'>
        <FaChevronCircleRight />
      </button>
    </div>
  );
};

export default CarouselSlider;
