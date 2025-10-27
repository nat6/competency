'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import cn from 'clsx';

import { hexVariants } from './Hexagon.variants';
import type { IHexagonProps } from './type';
import styles from './Hexagon.module.scss';

export const Hexagon = memo<IHexagonProps>(() => {
  return (
    <motion.div
      className={cn(styles.hex)}
      variants={hexVariants}
      whileHover="hover"
      whileTap="tap"
    >
      <span className={styles.surface} />
      <span className={styles.light} />
    </motion.div>
  );
});

Hexagon.displayName = 'Hexagon';
