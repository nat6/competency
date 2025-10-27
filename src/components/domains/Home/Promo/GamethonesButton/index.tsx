import cn from 'clsx';

import Link from 'next/link';

import {
  GAMETHONES_BUTTON,
  ADDITIONAL_FONT,
} from '@/components/domains/Home/Promo/GamethonesButton/GamethonesButton.data';

import styles from '@/components/domains/Home/Promo/GamethonesButton/gamethonesButton.module.scss';


export const GamethonesButton = () => {
  return (
    <Link href={ GAMETHONES_BUTTON.link }
          className={ cn( ADDITIONAL_FONT,
                          styles.gamethonesButton ) }>
      <span className={ styles.gamethonesButton__inner }>
        <span className={ styles.gamethonesButton__text }>
          { GAMETHONES_BUTTON.text }
        </span>
        <span className={ styles.gamethonesButton__text }>
          { GAMETHONES_BUTTON.span }
        </span>
      </span>
    </Link>
  );
};
