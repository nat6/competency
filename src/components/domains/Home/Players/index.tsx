"use client";
import cn from 'clsx';

import { SECTIONS_DATA } from '@/utils/constants';

import { STAGES_DESCRIPTION } from '@/components/domains/Home/Stages/Stages.data';
import styles from '@/components/domains/Home/Players/Players.module.scss';
import type { ITeam } from '@/components/domains/Home/Players/Team/type';
import { Team } from '@/components/domains/Home/Players/Team';

import { BaseSection } from '@/components/domains/Home/common/BaseSection';
import React, {
  useEffect,
  useState,
} from 'react';

export const Players = () => {
  const [ posts, setPosts ] = useState<ITeam[] | []>( [] );
  // const [ num, setNum ] = useState( 0 );

  // const now = new Date().getTime();
  // const registrationStart = new Date( GAME_DATES.registrationStart ).getTime();
  // const registrationStop = new Date( GAME_DATES.registrationStop ).getTime();
  // const gameEnd = new Date( GAME_DATES.gameEnd ).getTime();

  // const sortTeams = ( team: ITeamItem[] ) => {
  //   const latestOnTop = team.slice()
  //                           .sort( ( a, b ) => new Date( b.regAt ).getTime() - new Date( a.regAt ).getTime() );
  //
  //   let sortedPosts = latestOnTop;
  //
  //   if ( now > registrationStop && now < gameEnd ) {
  //     const earliestOnTop = team.slice()
  //                               .sort( ( a, b ) => new Date( a.regAt ).getTime() - new Date( b.regAt ).getTime() );
  //
  //     sortedPosts = earliestOnTop;
  //   }
  //
  //   if ( now > gameEnd ) {
  //     const winnersOnTop = team.slice()
  //                              .sort( ( a, b ) => {
  //                                if ( a.inEventPlace === 0 && b.inEventPlace !== 0 ) {
  //                                  return 1;
  //                                }
  //                                if ( b.inEventPlace === 0 && a.inEventPlace !== 0 ) {
  //                                  return -1;
  //                                }
  //                                return a.inEventPlace - b.inEventPlace;
  //                              } );
  //
  //     sortedPosts = winnersOnTop;
  //   }
  //
  //   setPosts( sortedPosts );
  // };

  useEffect( () => {
    fetch(
      './test-data.json',
    )
      .then( ( res ) => res.json() )
      .then( ( data ) => {
        if ( data.teams && Array.isArray( data.teams ) ) {
          setPosts( data.teams );
          // setNum( data.teams.length );
        }
      } ).catch( ( err ) => {
      console.log( err.message );
    } );
  }, [] );

  // const isRegistrationStart = now > registrationStart;

  // const emptyText = isRegistrationStart ? EMPTY_TEXT.loading : EMPTY_TEXT.beforeStart;

  // const titleNum = num > 0 ? ( ` [` + num + `]` ) : '';

  // const titleText = [ {
  //   id: SECTION_TITLES.teams[0].id,
  //   text: isRegistrationStart ? SECTION_TITLES.teams[0].text + titleNum : SECTION_TITLES.teams[0].text,
  // } ];

  return (
    <BaseSection
      id={ SECTIONS_DATA.players.id }
      className={ cn( styles.players,
                      // {
                      //   [styles.playersEmpty]: num === 0,
                      // },
                      'section' ) }
      sectionTitle={ SECTIONS_DATA.players.title }
    >
      <div className={ styles.description }>{ STAGES_DESCRIPTION }</div>
      {/*<div className={ styles.content }>*/ }

      <div className={ styles.players__scroll }>
        <div className={ styles.players__grid }>
          { posts.map( ( item: ITeam ) => {
            return (
              <Team key={ item.teamID } item={ item }/>
            );
          } ) }
        </div>
      </div>


      {/*</div>*/ }
    </BaseSection>
  );
};
