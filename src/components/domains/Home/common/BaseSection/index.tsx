import cn from 'clsx';
import { motion } from 'framer-motion';

import styles from './BaseSection.module.css';
import { sectionVariants } from '@/components/domains/Home/common/BaseSection/BaseSection.variants';
import { IBaseSectionProps } from '@/components/domains/Home/common/BaseSection/type';
import { SectionTitle } from '@/components/domains/Home/common/SectionTitle';

export const BaseSection = ( {
                               id,
                               className,
                               children,
                               sectionTitle,
                             }: IBaseSectionProps ) => (
  <section id={ id } className={ cn( styles.section, className ) }>
    <motion.div
      className={ styles.inner }
      initial="sectionHidden"
      whileInView="sectionVisible"
      viewport={ { once: true, margin: '-100px' } }
      variants={ sectionVariants }
    >
      <SectionTitle titleText={ sectionTitle }/>
      { children }
    </motion.div>
  </section>
);
