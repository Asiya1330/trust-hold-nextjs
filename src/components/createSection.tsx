// createSection.tsx
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const createVariants = (direction: 'left' | 'right' | 'top' | 'bottom') => {
  switch (direction) {
    case 'left':
      return {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
      };
    case 'top':
      return {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      };
    case 'bottom':
      return {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};

export const createSection = (Component: React.FC, direction: 'left' | 'right' | 'top' | 'bottom') => {
  const Section: React.FC = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50% 0px' });
    const variants = createVariants(direction);

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="shadow-md rounded-md mt-6"
      >
        <Component />
      </motion.div>
    );
  };

  Section.displayName = `Section(${Component.displayName || Component.name || 'Component'})`;

  return Section;
};
