'use client';

import { SECTIONS_DATA } from '@/utils/constants';
import cn from 'clsx';

import styles from './Header.module.scss';
import { MobileNav } from '@/components/domains/Home/Header/MobileNav';
import { Nav } from '@/components/domains/Home/Header/Nav';
import {
  useEffect,
  useRef,
  useState,
} from 'react';

export const Header = () => {
  const isScrollWatching = useRef( false );
  const navRef = useRef<HTMLDivElement | null>( null );

  const [ activeSection, setActiveSection ] = useState( SECTIONS_DATA.competency.id );

  const updateActiveSection = () => {
    const sections = document.querySelectorAll<HTMLElement>( '.section' );
    const windowHeight = window.innerHeight;

    let isActiveSectionFound = false;
    let activeSectionId = activeSection;

    sections.forEach( ( section ) => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;

      const visibleHeight = Math.min( windowHeight, rect.bottom ) - Math.max( 0, rect.top );
      const visibleRatio = visibleHeight / sectionHeight;

      if ( !isActiveSectionFound && visibleRatio >= 0.4 ) {
        activeSectionId = section.id;
        isActiveSectionFound = true;
      }
    } );

    if ( isActiveSectionFound && activeSectionId !== activeSection ) {
      setActiveSection( activeSectionId );
    }

    isScrollWatching.current = false;
  };


  useEffect( () => {
    // const handleScroll = throttle( () => {
    const handleScroll = () => {
      if ( !isScrollWatching.current ) {
        window.requestAnimationFrame( updateActiveSection );
        isScrollWatching.current = true;
      }
    };

    window.addEventListener( 'scroll', handleScroll );

    return () => {
      window.removeEventListener( 'scroll', handleScroll );
    };
  }, [ activeSection ] );

  return (
    <header className={ cn( styles.header, 'fontSourceCode' ) }>
      <div className={ styles.desktop }>
        <Nav activeSection={ activeSection }
          // @ts-ignore
             navRef={ navRef }
        />
      </div>

      <div className={ styles.mobile }>
        <div className={ styles.mobileActions }>
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};
