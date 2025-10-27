'use client';

import React, {
  useState,
  useRef,
} from 'react';
// import { useSearchParams } from 'next/navigation';

import cn from 'clsx';

import Link from 'next/link';

import {
  IRegistrationButton,
  IMousePosition,
} from '@/components/domains/Home/RegistrationButton/types';

import {
  MAIN_BUTTON,
  // ADDITIONAL_FONT,
} from '@/components/domains/Home/RegistrationButton/RegistrationButton.data';

import { GAME_DATES } from '@/utils/constants/dates';

import styles from '@/components/domains/Home/RegistrationButton/registrationButton.module.scss';


export const RegistrationButton = ( { className = '' }: IRegistrationButton ) => {
  const [ mousePos, setMousePos ] = useState<IMousePosition | null>( null );
  const isRippleRef = useRef( false );

  // const searchParams = useSearchParams() || '';
  // const clonedSearchParams = new URLSearchParams( searchParams );
  // const source = clonedSearchParams.get( 'utm_source' );

  const now = Date.now();
  const stop = new Date( GAME_DATES.registrationStop ).getTime();

  let buttonUrl = '';
  let buttonText = '';

  function clearSource( source: string ): string {
    return source.replace( /[^a-zA-Z0-9]/g, '' );
  }

  if ( now < stop ) {
    // buttonUrl = source ? MAIN_BUTTON.registration.link + '-source-' + clearSource( source ) : MAIN_BUTTON.registration.link;
    buttonText = MAIN_BUTTON.registration.menuText;
  } else {
    buttonUrl = MAIN_BUTTON.broadcast.link;
    buttonText = MAIN_BUTTON.broadcast.menuText;
  }

  const handleRippleEffect = ( e: React.MouseEvent<HTMLAnchorElement> ) => {
    if ( isRippleRef.current ) {
      return;
    }
    isRippleRef.current = true;

    const target = e.currentTarget;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos( { x: x, y: y } );
  };

  const onRippleEnd = () => {
    isRippleRef.current = false;
    setMousePos( null );
  };

  return (
    <Link href={ buttonUrl }
          onMouseEnter={ handleRippleEffect }
          // className={ cn( ADDITIONAL_FONT.className, styles.button, className ) }

          className={ cn( styles.button, className ) }

          target={ '_blank' }>
      <div className={ styles.button__inner }>
        { buttonText }
        { mousePos && (
          <span
            style={ {
              top: `${ mousePos.y }px`,
              left: `${ mousePos.x }px`,
            } }
            onAnimationEnd={ onRippleEnd }
          ></span>
        ) }
      </div>
    </Link>
  );
};
