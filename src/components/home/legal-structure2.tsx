import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LegalStructure2 = () => {
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
        <div className="flex flex-col justify-start items-start">
          <motion.div
            className="flex flex-col justify-start items-start"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1 }}
          >
            <p className="text-base md:text-lg leading-relaxed">
              The Holding company will be governed by a Board of Directors,
              which is the decisionmaking body, and retains overall
              responsibility for the management of the Project. Among other
              things, the Board will approve the appointment of the Development
              Manager, the Architect, the various consultants, the Contractors,
              etc. and will delegate certain day-to-day responsibilities to the
              Development Manager
            </p>
          </motion.div>
        </div>
        <div className="flex justify-center items-center">
          <motion.div
            className="flex justify-center items-center"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            transition={{ duration: 1 }}
          >
            <Image
              src="/legal-2.png"
              alt="Descriptive Alt Text"
              className="max-w-full h-auto rounded-3xl"
              width={500}
              height={500}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LegalStructure2;
