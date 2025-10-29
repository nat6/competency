import { PARTNERS_LIST } from '@/components/domains/Home/Partners/Partners.data';
import cn from 'classnames';

import Link from 'next/link';

import {
  FOOTER_COPYRIGHT,
  FOOTER_DOCS,
  FOOTER_SOCIALS,
  FOOTER_TEXT,
} from './Footer.data';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={ styles.footer }>
      <div className={ styles.footer__wrapper }>
        <div className={ styles.footer__text }>
          { FOOTER_TEXT }
        </div>
        <div className={ styles.footer__inner }>
          <div className={ styles.footer__sponsors }>
            { PARTNERS_LIST.map( ( item ) => (
              <Link key={ item.id }
                    href={ item.link }
                    target="_blank"
                    className={ styles.footer__link }
                    style={ { backgroundImage: `url(${ item.img })` } }
              >
              </Link>
            ) ) }
          </div>

          <div className={ styles.footer__socials }>
            { FOOTER_SOCIALS.map( ( item ) => (
              <Link key={ item.id }
                    href={ item.link }
                    target="_blank"
                    className={ cn(
                      styles.footer__socials_link,
                      {
                        [styles.footer__socials_link_telegram]: item.type === 'telegram',
                        [styles.footer__socials_link_youtube]: item.type === 'youtube',
                      },
                    ) }
                    style={ { backgroundImage: `url(${ item.image })` } }
              >
              </Link>
            ) ) }
          </div>
          <div className={ styles.footer__copyright }>
            { FOOTER_COPYRIGHT }
          </div>
          <div className={ styles.footer__docs }>
            <Link href={ FOOTER_DOCS.terms.url }
            >
              { FOOTER_DOCS.terms.label }
            </Link>
            <Link href={ FOOTER_DOCS.privacy.url }
            >
              { FOOTER_DOCS.privacy.label }
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
