import { useMemo } from 'react';
import cn from 'clsx';

import { BACKGROUND_CONFIG } from './Background.data';
import {
  deriveHexDims,
  computeGrid,
} from './helpers';
import { useWindowSize } from './hooks/useWindowSize';
// import { usePointerPosition } from './hooks/usePointerPosition';
import type { TGridDims } from './type';
import styles from './Background.module.scss';

type TProps = { className?: string; zIndex?: number };

export const Background = ( { className, zIndex = -1 }: TProps ) => {
  const { width, height } = useWindowSize();
  // const { x, y } = usePointerPosition();

  const dims = useMemo( () => deriveHexDims( BACKGROUND_CONFIG.hex.width, BACKGROUND_CONFIG.hex.overlapRatio ), [] );
  const grid: TGridDims = useMemo( () => computeGrid( {
                                                        viewportW: width,
                                                        viewportH: height,
                                                        dims,
                                                        gap: BACKGROUND_CONFIG.hex.gap,
                                                      } ), [ width, height, dims ] );

  const cssVars: React.CSSProperties = useMemo( () => ( {
    ['--bg-z' as any]: zIndex,
    ['--hex-w' as any]: `${ dims.width }px`,
    ['--hex-h' as any]: `${ dims.height }px`,
    ['--gap' as any]: `${ BACKGROUND_CONFIG.hex.gap }px`,
    ['--overlap' as any]: `${ dims.overlap }px`,
    ['--bg-honey-dark' as any]: BACKGROUND_CONFIG.colors.honeyBgDark,
    ['--bg-honey-deep' as any]: BACKGROUND_CONFIG.colors.honeyBgDeep,
    ['--hex-left' as any]: BACKGROUND_CONFIG.colors.hexLeft,
    ['--hex-right' as any]: BACKGROUND_CONFIG.colors.hexRight,
    // ['--mx' as any]: `${x}px`,
    // ['--my' as any]: `${y}px`,
    ['--glow-softness' as any]: `${ BACKGROUND_CONFIG.glow.softnessPx }px`,
    ['--glow-intensity' as any]: BACKGROUND_CONFIG.glow.intensity.toString(),
    // }), [zIndex, dims, x, y]);
  } ), [ zIndex, dims ] );

  if ( !width || !height ) {
    return null;
  }

  return (
    <div className={ cn( styles.container, className ) } style={ cssVars } aria-hidden>
      <div className={ styles.grid }>
        { Array.from( { length: grid.rows } ).map( ( _, r ) => {
          const odd = r % 2 === 1;
          const cols = odd ? grid.colsOdd : grid.colsEven;
          return (
            <div
              key={ `row-${ r }` }
              className={ cn( styles.row, odd && styles.rowOdd ) }
            >
              { Array.from( { length: cols } ).map( ( __, c ) => (
                <div key={ `hex-${ r }-${ c }` } className={ styles.hex }/>
              ) ) }
            </div>
          );
        } ) }
      </div>
      <div className={ styles.glow }/>
    </div>
  );
};

export default Background;
