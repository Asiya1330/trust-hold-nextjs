// Logo.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Logo = ({ animate }: { animate: boolean }) => (
  <div>
    <motion.div
      initial={{ opacity: 0, x: 200, y: 200, rotate: 360 }}
      animate={animate ? { opacity: 1, x: 0, y: 0, rotate: 0 } : {}}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
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
      initial={{ opacity: 0, x: -200 }}
      animate={animate ? { opacity: 1, x: 0 } : {}}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <Image
        src="/remaining-logo.jpeg"
        alt="Trusthold Logo"
        width={150}
        height={60}
        priority
        className="mix-blend-multiply"
      />
    </motion.div>
  </div>
);

export default Logo;
