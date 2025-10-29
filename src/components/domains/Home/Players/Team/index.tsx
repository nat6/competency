import cn from 'clsx';

// import { decode } from 'html-entities';

import {
  ITeam,
  IUser,
} from '@/components/domains/Home/Players/Team/type';

// import { getRandomNumber } from '@/app/datspulse/utils/getRangomNumber';

// import {
//   IMAGES,
//   ICONS,
//   TEAM_ITEM_TOOLTIPS,
//   FIRST_PLACE_IMG,
//   SECOND_PLACE_IMG,
//   THIRD_PLACE_IMG,
// } from '@/app/datspulse/utils/constants/teams';

// import {
//   TITLE_FONT,
//   ADDITIONAL_FONT,
// } from '@/app/datspulse/utils/constants/common';

import styles from './Team.module.scss';


export const Team = ( { item }: { item: ITeam } ) => {
  // const iconNum = getRandomNumber( { min: 0, max: IMAGES.length - 1 } );
  // const name = decode( item.name );
  const name = item.name;
  // const maxTechnologyLength = 78;
  // const delimiter = ', ';
  //
  // let technology = '';

  // if ( Array.isArray( item.techs ) && item.techs.length ) {
  //   technology = item.techs.join( delimiter );
  // }

  // if ( technology.length > maxTechnologyLength ) {
  //   const arr = technology.split( delimiter );
  //
  //   technology = arr.filter( ( item, index ) => {
  //     if ( arr.slice( 0, index + 1 ).join( delimiter ).length < maxTechnologyLength ) {
  //       return item;
  //     }
  //   } ).join( delimiter ).concat( '...' );
  // }
  //
  // let coinImg = FIRST_PLACE_IMG;
  //
  // if ( item.inEventPlace === 2 ) {
  //   coinImg = SECOND_PLACE_IMG;
  // } else if ( item.inEventPlace === 3 ) {
  //   coinImg = THIRD_PLACE_IMG;
  // }
  //
  // const isEventWinner = item.inEventPlace > 0 && item.inEventPlace < 4;

  const generateUsersArr = ( teamItem: ITeam ): IUser[] => {
    const usersArr: IUser[] = [];
    let idCounter = 1;

    const addUser = ( user: IUser ) => {
      usersArr.push( {
                       name: user.name,
                       wins: user.wins,
                       participations: user.participations,
                       id: `user_${ idCounter++ }`,
                     } );
    };

    if ( teamItem.lead ) {
      addUser( teamItem.lead );
    }

    if ( Array.isArray( teamItem.members ) ) {
      teamItem.members.forEach( member => addUser( member ) );
    }

    while ( usersArr.length < 3 ) {
      addUser( {
                 name: '-',
                 wins: 0,
                 participations: 0,
               } );
    }

    return usersArr;
  };

  const drawUserInfo = ( user: IUser ) => {
    // const userParticipations = user.participations - 1;
    // const userWins = user.wins;
    //
    // const isGreatUserParticipations = userParticipations > 4;

    return (
      <li className={ styles.team__listItem }>
        { user.name }
      </li>
    );
  };

  return (
    <div className={ cn( styles.team,
                         // {
                         //   [styles.topWinner]: isEventWinner,
                         //   [styles.firstPlace]: item.inEventPlace === 1,
                         //   [styles.secondPlace]: item.inEventPlace === 2,
                         //   [styles.thirdPlace]: item.inEventPlace === 3,
                         // },
    ) }
         id={ item.teamID }
    >
      <div className={ styles.team__inner }>
        <div className={ styles.team__head }>
          <div className={ styles.team__headIconWrapper }>
            <div className={ cn( styles.team__headIcon,
                                 {/*                     // ADDITIONAL_FONT.className,*/ },
            ) }>
              {/*     style={ { backgroundImage: `url(${ IMAGES[iconNum] })` } }*/ }
              {/*>*/ }
              {/*  {*/ }
              {/*    isEventWinner &&*/ }
              {/*    <div className={ styles.team__coin }>*/ }
              {/*      <div className={ cn( styles.team__coinFace, styles.team__coinHead ) }*/ }
              {/*           style={ { backgroundImage: `url(${ coinImg })` } }*/ }
              {/*      ></div>*/ }
              {/*      <div className={ cn( styles.team__coinFace, styles.team__coinTail ) }*/ }
              {/*      ></div>*/ }
              {/*    </div>*/ }
              {/*  }*/ }
            </div>
          </div>

          <h3 className={ cn( styles.team__subtitle,
                              // ADDITIONAL_FONT.className,
                              {
                                [styles.team__subtitle_upperMiddle]: name.length > 13,
                                [styles.team__subtitle_middle]: name.length > 24,
                                [styles.team__subtitle_small]: name.length > 50,
                              },
          ) }
          >
            {/*<div className={ cn( styles.team__additional,*/ }
            {/*                     {*/ }
            {/*                       [styles.team__additional_small]: technology.length > 40,*/ }
            {/*                     },*/ }
            {/*) }*/ }
            {/*>*/ }
            {/*<span*/ }
            {/*  className={ cn(*/ }
            {/*    styles.team__location,*/ }
            {/*  ) }*/ }
            {/*>*/ }
            {/*  [{ item.countryShort }]*/ }
            {/*</span>*/ }

            {/*  <span className={ styles.team__technology }>*/ }
            {/*  { technology }*/ }
            {/*</span>*/ }
            {/*</div>*/ }
            <div className={ styles.team__name }>
              { name }
            </div>

          </h3>

          {/*<div className={ styles.team__achievements }>*/ }
          {/*  {*/ }
          {/*    item.participations > 0 &&*/ }
          {/*    (*/ }
          {/*      <div className={ cn( styles.team__achievementsItem, styles.team__achievementsPart ) }*/ }
          {/*           data-team-part-tooltip={ TEAM_ITEM_TOOLTIPS.team.part.common }*/ }
          {/*           style={ { backgroundImage: `url(${ ICONS.starSrc })` } }*/ }
          {/*      ></div>*/ }
          {/*    )*/ }
          {/*  }*/ }
          {/*  {*/ }
          {/*    item.wins > 0 &&*/ }
          {/*    (*/ }
          {/*      <div className={ cn( styles.team__achievementsItem, styles.team__achievementsWin ) }*/ }
          {/*           data-team-part-tooltip={ TEAM_ITEM_TOOLTIPS.team.win.common }*/ }
          {/*           style={ { backgroundImage: `url(${ ICONS.winSrc })` } }*/ }
          {/*      ></div>*/ }
          {/*    )*/ }
          {/*  }*/ }
          {/*</div>*/ }

        </div>

        <div className={ styles.team__text }
        >
          <ol className={ styles.team__list }>
            {
              generateUsersArr( item ).map( ( member: IUser ) => {
                return drawUserInfo( member );
              } )
            }
          </ol>
        </div>
      </div>
    </div>
  );
};
