import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HomeHero = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex justify-center items-center">
          <motion.div
            className="flex justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 1 }}
          >
            <Image
              src="/officeImg.jpg"
              alt="Descriptive Alt Text"
              className="max-w-full h-auto rounded-3xl"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
        <div className="flex flex-col justify-start items-start">
          <motion.div
            className="flex flex-col justify-start items-start"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            <h2 className="text-2xl md:text-4xl mb-4 text-primary font-bold">
              Profile
            </h2>
            <p className="text-base md:text-lg leading-relaxed">
              Trusthold is dedicated to becoming one of the leading developers
              in labanon. Trusthold is committed to maintaining ethical
              practices in business and project development. Our word holds
              strong and steady, from initial concept to the finalization of
              each project. For more details about the core business, services
              and current projects, kindly refer to the attached Company&lsquo;s
              Profile. Along With the company;s profile,You will find all
              current projects that are being developrd under the management of
              Trusthold Development Group.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
