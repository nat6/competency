import type { Variants } from "framer-motion";

export const sectionVariants: Variants = {
  sectionHidden: { opacity: 0, y: 40 },
  sectionVisible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
