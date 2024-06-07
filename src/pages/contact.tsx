import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const contact = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 flex items-center justify-center bg-red p-10"
      >
        <div>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="mb-4">Atrium Building, 3rd Floor</p>
          <p className="mb-4">Beirut Central District, Lebanon</p>
          <p className="mb-4">T.I.F.</p>
          <p className="mb-4">M. +961 1 999 802/3</p>
          <p className="mb-4">+961 76 725 000</p>
          <p className="mb-4">info@trustholdgroup.com</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-1/2 flex items-center justify-center p-10"
      >
        <Image
          src="/contact.jpg"
          alt="Contact Us"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </div>
  );
};

export default contact;
