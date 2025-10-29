import cn from 'clsx';
import { INavItem } from '@/components/domains/Home/Header/type';
import {
  ISectionData,
  ISectionsData,
} from '@/utils/types';
import Link from 'next/link';
import {
  useEffect,
  useRef,
  useState,
} from 'react';

import styles from './Nav.module.scss';
import {
  INavProps,
} from '@/components/domains/Home/Header/Nav/type';
import { NavItem } from '@/components/domains/Home/Header/NavItem';

import {
  SECTIONS_DATA,
} from '@/utils/constants';

export const Nav = ( props: INavProps ) => {
  const { activeSection, navRef } = props;

  const itemRefs = useRef<Record<string, HTMLLIElement | null>>( {} );

  const [ indicatorStyle, setIndicatorStyle ] = useState( { left: 0, width: 0 } );

  useEffect( () => {
    // @ts-ignore
    const nav = navRef.current;
    const item = itemRefs.current[activeSection];

    if ( nav && item ) {
      const navRect = nav.getBoundingClientRect();
      const itemRect = item.getBoundingClientRect();

      setIndicatorStyle( {
                           left: itemRect.left - navRect.left,
                           width: itemRect.width,
                         } );
    }
  }, [ activeSection ] );

  return (
    <nav ref={ navRef }
         className={ styles.nav }
    >
      <div className={ styles.indicator }
           style={ {
             transform: `translateX(${ indicatorStyle.left }px)`,
             width: `${ indicatorStyle.width }px`,
           } }
      />
      { Object.entries( SECTIONS_DATA ).map( ( [ key, section ]: [ string, ISectionData ] ) => {

                                               let linkPath = `#${ section.id }`;

                                               return (
                                                 <li key={ section.id }
                                                     ref={ ( element ) => {
                                                       itemRefs.current[section.id] = element;
                                                     } }

                                                     className={ cn( styles.item,
                                                                     // ADDITIONAL_FONT.className,
                                                                     {
                                                                       [styles.item_active]: activeSection
                                                                         === section.id,

                                                                       [styles.item_main]: section.type &&
                                                                         section.type === 'main',
                                                                     },
                                                     ) }>

                                                   <Link href={ linkPath }
                                                         className={ cn( styles.link,
                                                         ) }
                                                   >
                                                     { section.label }
                                                   </Link>
                                                 </li>
                                               );
                                             },
      ) }
    </nav>
  );
};
