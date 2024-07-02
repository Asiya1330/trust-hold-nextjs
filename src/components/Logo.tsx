// Logo.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Logo = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const pathname = usePathname();
  console.log(pathname, "set pathname");
  console.log(startAnimation, "set start animation");
  useEffect(() => {
    // Trigger animation on route change to "/"
    if (pathname === "/") {
      console.log("pathname is /");
      setStartAnimation(true);
    }
    else {
      setStartAnimation(false);
    }
  }, [pathname]);
  return (
    <Link
      className="link-underline link-underline-black z-10 flex"
      href="/"
      rel="noreferrer"
    >
      <motion.div
        key={pathname === "/" ? "home-animation" : "default-animation"}
        initial={{ opacity: 0, x: 0, y: 50, rotate: 360 }}
        animate={startAnimation ? { opacity: 1, y: [0, 50, 0], rotate: [0, 360, 0] } : { opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 4, times: [0, 0.5, 1], ease: "easeOut" }}
      
        // animate={startAnimation ? { opacity: 1, y: [0, 50, 0] } : { opacity: 1, y: 0 }}
        // transition={{ duration: 2, times: [0, 0.5, 1], ease: "easeOut" }}
        // // animate={startAnimation ? { opacity: 1, x: 0, y: 0, rotate: 0 } : { opacity: 1, x: 0, y: 0, rotate: 0 }}
        // // // animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
        // // transition={{ duration: 3 }}
      >
        <Image
          src="/redT-remove.png"
          alt="Trusthold Logo"
          width={20}
          height={20}
          priority
          className="h-5 mix-blend-multiply"
        />
      </motion.div>
      <motion.div
        key={pathname === "/" ? "home-text-animation" : "default-text-animation"}

        initial={{ opacity: 0, x: -200 }}
        animate={startAnimation ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        // animate={startAnimation ? { opacity: 1, x: 0 } : {}}
        // animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3 }}
      >
        <Image
          src="/remaining-logo-remove.png"
          alt="Trusthold Logo"
          width={150}
          height={60}
          priority
          className="mix-blend-multiply"
        />
      </motion.div>
    </Link>
  )
};

export default Logo;
