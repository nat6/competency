import cn from 'clsx';

import { IPromoContentText } from '@/components/domains/Home/Promo/PromoContent/types';
// import { IInfoItem } from '@/components/domains/Home/Promo/InfoItem/types';

import {
  PROMO_INFO,
  PROMO_TEXTS,
} from '@/components/domains/Home/Promo/PromoContent/PromoContent.data';

// import { InfoItem } from '@/components/domains/Home/Promo/InfoItem/InfoItem';

import styles from '@/components/domains/Home/Promo/PromoContent/PromoContent.module.scss';


export const PromoContent = () => {
  return (
    <div className={ cn( styles.promoContent ) }>
      {/*{ PROMO_INFO.map( ( item: IInfoItem ) => (*/}
      {/*  <InfoItem key={ item.id } item={ item }/>*/}
      {/*) ) }*/}

      <div className={ cn( styles.promoContent__inner ) }>
        { PROMO_TEXTS.map( ( item: IPromoContentText ) => (
          <div
            key={ item.id }
            className={ cn( styles.promoContent__text ) }
          >
            { item.text }
          </div>
        ) ) }
      </div>
    </div>
  );
};
