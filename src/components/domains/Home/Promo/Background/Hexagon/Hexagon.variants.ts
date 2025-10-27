import type { Variants } from 'framer-motion';

export const hexVariants: Variants = {
  hover: {
    filter: 'brightness(1.18) saturate(1.05)',
    scale: 1.015,
    transition: { type: 'spring', stiffness: 420, damping: 26, mass: 0.7 },
  },
  tap: {
    scale: 0.985,
    transition: { type: 'spring', stiffness: 560, damping: 34 },
  },
};
