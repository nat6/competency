'use client';

import cn from 'clsx';

import { BaseSection } from '@/components/domains/Home/common/BaseSection';
import {
  LOREM,
  SECTIONS_DATA,
} from '@/utils/constants';

import styles from './Statistics.module.scss';

export const Statistics = () => {
  return (
    <BaseSection
      id={ SECTIONS_DATA.statistics.id }
      className={ cn( styles.statistics, 'section' ) }
      sectionTitle={ SECTIONS_DATA.statistics.title }
    >
      <div className={ styles.description }>{ LOREM }</div>
    </BaseSection>
  );
};
