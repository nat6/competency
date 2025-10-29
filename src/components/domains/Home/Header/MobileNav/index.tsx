import { ISectionData } from '@/utils/types';
import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import { useMobileNav } from '@/components/domains/Home/Header/MobileNav/hooks/useMobileNav';
import styles from './MobileNav.module.scss';
import {
  panelVariants,
  overlayVariants,
} from '@/components/domains/Home/Header/MobileNav/MobileNav.variants';
import { NavItem } from '@/components/domains/Home/Header/NavItem';
import {
  NAV_ITEM_TYPES,
  SCREEN_VARIANTS,
} from '@/components/domains/Home/Header/type';

import { SECTIONS_DATA } from '@/utils/constants';

export const MobileNav = () => {
  const { isOpen, openMenu, closeMenu } =
    useMobileNav();

  return (
    <div className={ styles.wrapper }>
      { !isOpen && (
        <button
          className={ styles.burger }
          aria-label="Open menu"
          onClick={ openMenu }
          type="button"
        >
          <span aria-hidden>☰</span>
        </button>
      ) }

      <AnimatePresence>
        { isOpen && (
          <>
            <motion.div
              className={ styles.overlay }
              onClick={ closeMenu }
              variants={ overlayVariants }
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={ { duration: 0.22 } }
            />

            <motion.aside
              className={ styles.panel }
              role="dialog"
              aria-modal="true"
              variants={ panelVariants }
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={ { type: 'spring', stiffness: 220, damping: 26 } }
            >
              <div className={ styles.headerRow }>
                <div className={ styles.headerRight }>
                  <button
                    className={ styles.closeBtn }
                    aria-label="Close menu"
                    onClick={ closeMenu }
                    type="button"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className={ styles.content }>
                <AnimatePresence initial={ false } mode="wait">
                  <motion.div className={ styles.level }>
                    { Object.entries( SECTIONS_DATA ).map( ( [ key, section ]: [ string, ISectionData ] ) => {
                                                             let linkPath = `#${ section.id }`;

                                                             const item = {
                                                               label: section.label,
                                                               href: linkPath,
                                                             };

                                                             return (
                                                               <NavItem key={ section.id }
                                                                        item={ item }
                                                                        onClick={ () => closeMenu() }
                                                                        screenVariant={ SCREEN_VARIANTS.mobile }
                                                               />
                                                             );
                                                           },
                    )
                    }
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.aside>
          </>
        ) }
      </AnimatePresence>
    </div>
  );
};
