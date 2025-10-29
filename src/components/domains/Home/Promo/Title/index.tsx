import cn from 'clsx';

// import {
//   ADDITIONAL_FONT,
//   GAME_NAME,
// } from '@/app/datspulse/utils/constants/common';

import styles from './Title.module.scss';

import {
  SUBTITLE,
  TITLE,
} from '@/components/domains/Home/Promo/Title/Title.data';


export const Title = () => {
  return (
    // <div className={ cn( ADDITIONAL_FONT.className, styles.title ) }>
    <div className={ cn( styles.title ) }>

      <h2 className={ styles.title__text }>
        { TITLE }
      </h2>
      <div className={ cn( styles.title__text, styles.title__subtitle, 'fontMichroma' ) }>
        { SUBTITLE }
      </div>
    </div>
  );
};
