import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Input from "../common/input";
import Button from "../common/button";

const Contact = () => {
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
            <div className="rounded shadow w-full p-9">
              <div className=" border-red-500 border-b m-1 mb-6">
                <h2 className="text-3xl text-red-500"> Get in Touch With Us</h2>
              </div>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Phone" />
              <Input placeholder="Message" />

              <Button text="Send Message"/>
            </div>
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
            <Image
              className=""
              src={"/contact.jpg"}
              width={400}
              height={600}
              alt={"contact"}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
