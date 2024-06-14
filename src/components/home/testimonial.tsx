import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TestimonialCrousal, { Slide } from "./testimonial-crousal";

const Testimonial = () => {
  const slides: Slide[] = [
    {
      quote:
        "I've been using this services for years, and they consistently exceed my expectations. The support team is fantastic!",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Pepe Madrid",
      title: "CEO of Something INC",
    },
    {
      quote:
        "The financial solutions they offer are top-notch. I've seen significant growth in my investments since I started using their platform.",
      image: "https://alfred.lexingtonthemes.com/avatar1.png",
      name: "Michael Andreuzza",
      title: "CEO of Something INC",
    },
    {
      quote:
        "Their customer service is unparalleled. They really go the extra mile to ensure customer satisfaction.",
      image:
        "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Fernando Pio",
      title: "CEO of Something INC",
    },
  ];
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <motion.div
            className="flex justify-center items-center w-full"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 1 }}
          >
            <TestimonialCrousal slides={slides} />
          </motion.div>
        </div>
        <div className="flex flex-col justify-start items-start px-4">
          <motion.div
            className="flex flex-col justify-start items-start px-4"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-4xl mb-4 text-primary font-light">
              Clients Testimonial
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              This is your text content. It can be a description, an article, or
              any other type of content you want to display alongside the image.
              This section is styled to be responsive and adapt to different
              screen sizes. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Corrupti magni a temporibus cupiditate excepturi,
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
