import { ComponentPropsWithoutRef, ElementType } from 'react';
import styles from './button.module.css';

type ButtonOwnProps<T extends ElementType = ElementType> = {
  as?: T,
  fullWidth?: boolean,
  variant?: 'primary' | 'secondary',
}
type ButtonProps<T extends ElementType> = ButtonOwnProps<T> &
                                          Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps>

const defaultElement = 'button';

export const Button = <T extends ElementType = typeof defaultElement>( {
  as,
  className,
  fullWidth = false,
  variant = 'primary',
  ...rest
}: ButtonProps<T> ) => {
  const Component = as || defaultElement;
  const btnStyles = `${ styles.button } ${ styles[variant] } ${ fullWidth ? styles.fullWidth : '' } ${ as ? styles.link : '' } ${
    className ?? ''
  }`;

  return <Component className={ btnStyles } { ...rest } />;
};
