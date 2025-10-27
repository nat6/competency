'use client';

import cn from 'clsx';

import { BaseSection } from '@/components/domains/Home/common/BaseSection';
import {
  LOREM,
  SECTIONS_DATA,
} from '@/utils/constants';

import styles from './Schedule.module.scss';

export const Schedule = () => {
  return (
    <BaseSection
      id={ SECTIONS_DATA.schedule.id }
      className={ cn( styles.schedule, 'section' ) }
      sectionTitle={ SECTIONS_DATA.schedule.title }
    >
      <div className={ styles.description }>{ LOREM }</div>
    </BaseSection>
  );
};
