import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Career = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className=" rounded-lg p-8 mx-auto flex flex-col md:flex-row items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 mb-6 md:mb-0"
        >
          <Image
            src="/careers.jpg"
            alt="Career Image"
            width={500}
            height={500}
            className="rounded-lg shadow-md"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 md:pl-8"
        >
          <h1 className="text-3xl font-bold mb-6 text-center md:text-left text-primary">Careers at TrustHold Group</h1>
          <p className="text-gray-700 mb-4">
            As we continue to grow and offer high-quality services, we seek to hire talented people to join us and our professional team.
          </p>
          <p className="text-gray-700 mb-6">
            Kindly send your CV to: <a href="mailto:info@trustholdgroup.com" className="text-blue-500 underline">info@trustholdgroup.com</a>
          </p>
          <div className="text-center md:text-left">
            <a href="mailto:info@trustholdgroup.com" className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Send Your CV
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Career;
