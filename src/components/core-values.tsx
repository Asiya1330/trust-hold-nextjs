import React from "react";
import { motion } from "framer-motion";

interface CoreValuesProps {
  values: { title: string; description: string }[];
  imageUrl: string;
}

const CoreValues: React.FC<CoreValuesProps> = ({ values, imageUrl }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5, // Adjust this value for the delay between animations
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1, // Adjust this value for the speed of the animation
      },
    },
  };

  return (
    <section className="py-16 flex flex-col md:flex-row items-center justify-center">
      <div className="w-full mx-auto md:mx-0 px-4 sm:px-6 lg:px-8 mb-8 md:mb-0">
        <motion.div
          className="space-y-8"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <h2 className="text-3xl font-extrabold text-primary">{value.title}</h2>
              <p className="mt-2 text-base text-gray-500">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
