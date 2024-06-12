// CustomSlider.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const CustomSlider = () => {
  const settings = {
    dots: false, // Hide the navigation bullets
    arrows: false, // Hide the left and right arrow buttons
    infinite: true, // Enable infinite scrolling
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay interval to 3000ms
    pauseOnHover: false, // Should stop playing on user interaction
    fade: true, // Enable fade transition
  };

  return (
    <Slider {...settings}>
      <div>
        <Image
          src="/1st.jpeg"
          alt="Image 1"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src="/1858-2nd.jpeg"
          alt="Image 2"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src="/rubik-3rd.jpeg"
          alt="Image 3"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div>
        <Image
          src="/loft705-4th.jpeg"
          alt="Image 3"
          layout="fill"
          objectFit="cover"
        />
      </div><div>
        <Image
          src="/spears88-5th.jpeg"
          alt="Image 3"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </Slider>
  );
};

export default CustomSlider;
