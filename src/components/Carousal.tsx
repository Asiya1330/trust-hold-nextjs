// components/Carousel.tsx
"use client";
import Image from 'next/image';
import Slider from "react-slick";
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import { motion, AnimatePresence } from 'framer-motion';
import "slick-carousel/slick/slick-theme.css";

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
const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 px-2 py-1 text-primary rounded-r cursor-pointer z-10" onClick={onClick}>
      <FaChevronCircleRight className="md:text-3xl" />
    </div>
  );
  
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-2 py-1 text-primary rounded-l cursor-pointer z-10" onClick={onClick}>
      <FaChevronCircleLeft className="md:text-3xl" />
    </div>
  );
  
const CarouselSlider: React.FC<CarouselProps> = ({ slides, interval = 5000 }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: interval,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        // responsive: [
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       arrows: false,
        //       dots: true
        //     }
        //   }
        // ]
      };

  return (
    <div className="relative h-[87vh] overflow-hidden">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <AnimatePresence key={index}>
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative h-full !flex flex-col md:flex-row"
          >
            <div className="relative  w-full h-[100vh] md:w-3/5">
              <Image src={slide.src} className="w-full h-full md:object-cover" alt={`Slide ${index + 1}`} layout="fill" />
            </div>
            <div className="relative w-full md:h-[100vh] md:w-2/5 bg-black bg-opacity-50 text-white md:text-black flex items-center md:bg-transparent md:flex md:items-center md:justify-center">
              <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 p-4 md:relative md:bg-transparent md:p-6">
                <h2 className="text-2xl md:text-4xl font-semibold mb-2 md:mb-4">{slide.label}</h2>
                <p className="text-sm md:text-lg italic md:hidden block">{slide.content}</p>
                {slide.details && (
                  <div className="hidden md:block mt-4">
                    <span className="text-sm md:text-base whitespace-pre-wrap">{slide.details}</span>
                  </div>
                )}
                <button className="mt-2 md:mt-4 bg-primary text-white px-2 py-1 md:px-4 md:py-2 rounded hover:bg-red-600 focus:outline-none">Learn More</button>
              </div>
            </div>
            </motion.div>
          </AnimatePresence>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselSlider;
