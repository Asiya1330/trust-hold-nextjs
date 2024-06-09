import React, { useRef, useState } from "react";
import "intersection-observer"; // For better browser support
import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";

export interface Slide {
  image: string;
  name: string;
  title: string;
  quote: string;
}

interface CarouselProps {
  slides: Slide[];
  skip?: number;
}

const TestimonialCrousal: React.FC<CarouselProps> = ({ slides, skip = 1 }) => {
  const sliderRef = useRef<HTMLUListElement>(null);
  const [atBeginning, setAtBeginning] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const handleScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setAtBeginning(scrollLeft === 0);
      setAtEnd(scrollLeft + clientWidth === scrollWidth);
    }
  };

  const to = (strategy: (current: number, offset: number) => number) => {
    if (sliderRef.current) {
      const slider = sliderRef.current;
      const current = slider.scrollLeft;
      const offset =
        slider.firstElementChild?.getBoundingClientRect().width || 0;
      slider.scrollTo({ left: strategy(current, offset), behavior: "smooth" });
    }
  };

  const next = () => to((current, offset) => current + offset * skip);
  const prev = () => to((current, offset) => current - offset * skip);

  return (
    <div
      className="flex flex-col w-full"
      aria-labelledby="carousel-label"
      role="region"
      tabIndex={0}
    >
      <h2 className="sr-only" id="carousel-label">
        TestimonialCrousal
      </h2>
      <div className="items-center inline-flex lg:px-2 space-x-2">
        <button
          className={`bg-red-500 hover:bg-red-600 size-8 flex focus:bg-red-400 rounded-full items-center text-white ${
            atBeginning ? "opacity-50" : ""
          }`}
          onClick={prev}
          aria-disabled={atBeginning}
          tabIndex={atEnd ? -1 : 0}
        >
          <span aria-hidden="true" className="mx-auto">
            ←
          </span>
          <span className="sr-only">Skip to previous slide page</span>
        </button>
        <button
          className={`bg-red-500 hover:bg-red-600 size-8 flex focus:bg-red-400 rounded-full items-center text-white ${
            atEnd ? "opacity-50" : ""
          }`}
          onClick={next}
          aria-disabled={atEnd}
          tabIndex={atEnd ? -1 : 0}
        >
          <span aria-hidden="true" className="mx-auto">
            →
          </span>
          <span className="sr-only">Skip to next slide page</span>
        </button>
      </div>
      <ul
        className="flex gap-3 overflow-x-scroll mt-4 scrollbar-hide snap-mandatory snap-x w-full rounded-2xl"
        role="listbox"
        aria-labelledby="carousel-content-label"
        tabIndex={0}
        ref={sliderRef}
        onScroll={handleScroll}
      >
        {slides.map((slide, index) => (
          <li
            key={index}
            className="items-center justify-center w-full flex flex-col shrink-0 snap-start h-full p-8 rounded-2xl lg:p-10 bg-gray-100"
            role="option"
            aria-selected
          >
            <figure>
              <div className="max-w-2xl">
                <div className="flex flex-col gap-12">
                  <p className="text-base text-gray-900 font-display text-balance">
                  <ImQuotesLeft />  {slide.quote}
                  </p>
                  <div className="block flex-shrink-0">
                    <div className="flex items-center">
                      <div>
                        <Image
                          className="inline-block h-9 w-9 rounded-full object-cover object-center"
                          src={'/contact.jpg'}
                          width={400}
                          height={600}
                          alt={slide.name}
                        />
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-700">
                          {slide.name}
                        </p>
                        <p className="text-xs font-medium text-gray-500">
                          {slide.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </figure>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestimonialCrousal;
