import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LegalStructure1 = () => {
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
        <motion.div
          className="flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={imageVariants}
          transition={{ duration: 1 }}
        >
          <Image
            src="/legal-struc1.jpeg"
            alt="Descriptive Alt Text"
            className="max-w-full h-auto rounded-3xl"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-start items-start px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={textVariants}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl md:text-4xl mb-4 text-primary font-light">
            Legal Structure
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
  );
};

export default LegalStructure1;
