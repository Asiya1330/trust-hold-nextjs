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
            <p>
              Trusthold Development Group is built on the foundations of trust
              and rooted in professional integrity. A private real-estate
              development firm, Trusthold invests in real-estate and develops
              high-end residential, commercial, and retail projects in Lebanon.
            </p>

            <p>
              Trusthold operates on the highest level of ethical standards to
              ensure quality investments. With an eye for detail and an
              assurance of excellence, Trusthold manages all services from the
              inception of a project straight through to the Post-Development
              phase.
            </p>
            <p>
              In the reliable hands of our Trusthold management team, our
              clients are our first priority. Our uncompromising faith in our
              core values and our versatile experiences across the real-estate
              sector ensure a long-term business relationship with our clients
              in the Middle East.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
