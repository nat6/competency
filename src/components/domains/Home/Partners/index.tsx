import cn from 'clsx';

import Link from 'next/link';

import { BaseSection } from '@/components/domains/Home/common/BaseSection';

import { IPartnersItem } from '@/components/domains/Home/Partners/type';

import {
  SECTIONS_DATA,
} from '@/utils/constants';

import { PARTNERS_LIST } from '@/components/domains/Home/Partners/Partners.data';

import styles from './Partners.module.scss';

export const Partners = () => {
  return (
    <BaseSection
      id={ SECTIONS_DATA.partners.id }
      className={ cn( styles.partners, 'section' ) }
      sectionTitle={ SECTIONS_DATA.partners.title }
    >
        <div className={ styles.partners__inner }>
          { PARTNERS_LIST.map( ( item: IPartnersItem ) => (
              <Link className={ styles.partners__item }
                    key={ item.id }
                    target="_blank"
                    href={ item.link }
              >
                <div
                  className={ styles.partners__link }
                  style={ { backgroundImage: `url(${ item.img })` } }
                >
                </div>
                {
                  item.note && (
                    <div className={ styles.partners__noteWrapper }>
                      <div className={ styles.partners__note }>
                        { item.note }
                      </div>
                    </div>
                  )
                }
              </Link>
          ) ) }
        </div>
    </BaseSection>
  );
};
