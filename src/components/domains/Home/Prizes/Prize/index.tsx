import styles from './Prize.module.scss';

import { IPrize } from '@/components/domains/Home/Prizes/Prize/type';

export const Prize = ( { item }: { item: IPrize } ) => {
  return (
    <div className={ styles.card }>
      <div className={ styles.card__back }>
        <p className={ styles.card__text }>
          { item.present }
        </p>
        <div className={ styles.card__img }
             style={ { backgroundImage: `url(${ item.img })` } }>
        </div>
      </div>
      {/*<div className={ styles.card__front }>*/ }
      {/*  <div className={ styles.card__header }>*/ }
      {/*    <div className={ styles.card__icon }*/ }
      {/*         style={ { backgroundImage: `url(${ item.icon })` } }*/ }
      {/*    ></div>*/ }
      {/*  </div>*/ }
      {/*</div>*/ }
    </div>
  );
};
