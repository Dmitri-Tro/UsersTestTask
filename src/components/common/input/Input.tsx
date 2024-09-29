import { ElementType, FC } from 'react';
import styles from './input.module.css';

export const Input: FC<ElementType<'input'>> = ( { ...elementProps } ) => {

  return (
    <input className={ styles.input } { ...elementProps } />
  );
};
