import { motion } from "framer-motion";

import { ARROW_DIRECTION_ANGLES } from "@/components/domains/Home/Header/NavItem/NavItem.data";
import styles from "@/components/domains/Home/Header/NavItem/NavItem.module.scss";
import { IArrowIconProps } from "@/components/domains/Home/Header/NavItem/type";

export const ArrowIcon = ({
  isActive = false,
  directionAngle = ARROW_DIRECTION_ANGLES.down,
}: IArrowIconProps) => {
  const rotationAngle = isActive ? ARROW_DIRECTION_ANGLES.up : directionAngle;

  return (
    <motion.span
      aria-hidden
      initial={false}
      animate={{ rotate: rotationAngle }}
      transition={{ duration: 0.22 }}
      className={styles.arrow}
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 9l6 6 6-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.span>
  );
};
