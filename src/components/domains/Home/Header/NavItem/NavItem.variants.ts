import type { Variants } from "framer-motion";

export const subNavItemVariants: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  showOpen: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 420,
      damping: 28,
      bounce: 0.4,
      delay: i * 0.12,
    },
  }),
  showSwitch: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
  exit: { opacity: 0, y: -8, scale: 0.96, transition: { duration: 0.2 } },
};
