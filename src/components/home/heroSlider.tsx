// CustomSlider.tsx
import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
// @ts-ignore
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Image from 'next/image';

const CustomSlider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  return (
    <AutoplaySlider
    bullets={true} // Hide the navigation bullets
      buttons={false} // Hide the left and right arrow buttons
      organicArrows={false} // Hide the organic arrow buttons
      infinite={true} // 
      play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
       >
      <div>
        <Image src="/hero-building-img.png" alt="Image 1" width={500} height={500} />
      </div>
      <div>
        <Image src="/loft705.jpeg" alt="Image 2" width={500} height={500} />
      </div>
      <div>
        <Image src="/rubik1709.jpeg" alt="Image 3" width={500} height={500} />
      </div>
    </AutoplaySlider>
  );
};

export default CustomSlider;
