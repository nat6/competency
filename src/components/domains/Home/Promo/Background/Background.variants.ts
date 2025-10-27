import type { Variants } from 'framer-motion';

export const containerVariants: Variants = {
  hidden: { opacity: 0, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export const hexStaggerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.012,
      delayChildren: 0.05,
    },
  },
};

export const rowVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};
