import cn from 'clsx';
import { BaseSection } from '@/components/domains/Home/common/BaseSection';
import { SECTIONS_DATA } from '@/utils/constants';

import {
  STAGES_DESCRIPTION,
  EXPAND_ITEMS,
} from './Stages.data';
import type { TStageItem } from './type';
import { Row } from './Row';
import styles from './Stages.module.scss';

export const Stages = () => {
  const items: TStageItem[] = EXPAND_ITEMS;

  return (
    <BaseSection
      id={ SECTIONS_DATA.stages.id }
      className={ cn( styles.stages, 'section' ) }
      sectionTitle={ SECTIONS_DATA.stages.title }
    >
      <div className={ styles.description }>{ STAGES_DESCRIPTION }</div>

      <div className={ styles.wrapper }>
        <div className={ styles.rows }>
          { items.map( ( item, i ) => (
            <Row
              key={ item.id }
              id={ item.id }
              title={ item.title }
              text={ item.text }
              isEven={ ( i + 1 ) % 2 === 0 }
            />
          ) ) }
        </div>
      </div>
    </BaseSection>
  );
};
