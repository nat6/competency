import cn from 'clsx';
import type { IRowProps } from './type';
import styles from './Row.module.scss';

export const Row = ( { title, id, text, isEven }: IRowProps ) => {
  return (
    <div className={ cn( styles.row, isEven && styles.even ) }
         data-id={ id }
    >
      <div className={ styles.hex } aria-hidden="true">
        <span className={ styles.hexTitle }>{ title }</span>
      </div>

      <div className={ styles.textBar }>
        <p className={ styles.text }>{ text }</p>
      </div>
    </div>
  );
};
