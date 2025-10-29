import { motion } from 'framer-motion';

import { splitText } from '@/components/domains/Home/common/SectionTitle/helpers';
import styles from './SectionTitle.module.css';
import {
  containerVariants,
  lettersVariants,
} from '@/components/domains/Home/common/SectionTitle/SectionTitle.variants';

export const SectionTitle = ( { titleText }: { titleText: string } ) => {
  const letters = splitText( titleText );

  return (
    <motion.h2
      className={ styles.sectionTitle }
      variants={ containerVariants }
      initial="hidden"
      whileInView="show"
      viewport={ { once: true } }
      data-text={ titleText }
    >
      { letters.map( ( { id, char } ) => (
        <motion.span
          key={ id }
          className={ styles.letter }
          variants={ lettersVariants }
        >
          { char }
        </motion.span>
      ) ) }
    </motion.h2>
  );
};
