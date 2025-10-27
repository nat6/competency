import { PRIZES_LIST } from '@/components/domains/Home/Prizes/Prizes.data';
import styles from '@/components/domains/Home/Prizes/Prizes.module.scss';
import cn from 'clsx';

import {
  SECTIONS_DATA,
} from '@/utils/constants';
import { BaseSection } from '@/components/domains/Home/common/BaseSection';


import { Prize } from '@/components/domains/Home/Prizes/Prize';

export const Prizes = () => {
  return (
    <BaseSection
      id={ SECTIONS_DATA.prizes.id }
      className={ cn( styles.prizes, 'section' ) }
      sectionTitle={ SECTIONS_DATA.prizes.title }
    >
      <div className={ styles.wrapper }>
        { PRIZES_LIST.map( ( item ) => (
          <Prize key={ item.id } item={ item }/>
        ) ) }
      </div>
    </BaseSection>
  );
};
