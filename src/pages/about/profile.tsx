import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import HomeHero from "@/components/home/home-hero";

const profile = () => {
  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  
  return (

    <>
          <HomeHero />
    
    </>
  );
};

export default profile;
