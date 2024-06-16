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
    <div className="container mx-auto py-8 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="flex justify-center items-center"
          initial="hidden"
          whileInView="visible"
          variants={imageVariants}
          transition={{ duration: 1 }}
        >
          <Image
            src="/legal-1.png"
            alt="Descriptive Alt Text"
            className="max-w-full h-auto rounded-3xl"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          className="flex flex-col justify-start items-start"
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
            To optimize the fiscal and legal structure, the Investors will
            establish a Lebanese Holding company that will fully own an SAL
            company, a project-specific joint-stock company created to own the
            land and to develop the project. This Structure would allow the
            Holding to benefit from the use of internal and external debt
            structure to reduce taxable income at the joint-stock company level.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalStructure1;
