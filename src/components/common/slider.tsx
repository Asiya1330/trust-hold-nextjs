import React, { useEffect, useRef } from 'react';

const Slider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    let animationFrameId: number;

    const animate = () => {
      if (slider) {
        slider.scrollLeft += 1;
        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
          slider.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div
        ref={sliderRef}
        className="flex space-x-4 animate-slide flex-none"
        style={{ width: '100%' }}
      >
        <div className="w-56 h-24 bg-blue-500">Icon 1</div>
        <div className="w-56 h-24 bg-green-500">Icon 2</div>
        <div className="w-56 h-24 bg-red-500">Icon 3</div>
        <div className="w-56 h-24 bg-yellow-500">Icon 4</div>
        <div className="w-56 h-24 bg-purple-500">Icon 5</div>
        <div className="w-56 h-24 bg-pink-500">Icon 6</div>
      </div>
    </div>
  );
};

export default Slider;
