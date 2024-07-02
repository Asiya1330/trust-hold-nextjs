import CoreValues from "@/components/core-values";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
const CoreValuesPage: React.FC = () => {
  const coreValues = [
    {
      title: "Trust",
      description:
        "The assurance that Trusthold will follow through with all agreements instilling a confidence in every investment opportunity.",
    },
    {
      title: "Reliability",
      description:
        "Consistency in quality performance coupled with vast experience across the real-estate sector puts investors, tenants and residents of every Trusthold project at ease.",
    },
    {
      title: "Professionalism",
      description:
        "A competence and skill covering every aspect of real-estate development.",
    },
    {
      title: "Ethical Leadership",
      description:
        "Operating with moral values and a code of principles that ensures trust and reliability on a professional and human level.",
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
  const imageUrl = "/path/to/your/image.jpg"; // Replace with the actual image path

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
              src="/corevalues.jpg"
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
            <CoreValues values={coreValues} imageUrl={imageUrl} />

          </motion.div>
        </div>
      </div>
    </div>

  );
};

export default CoreValuesPage;
