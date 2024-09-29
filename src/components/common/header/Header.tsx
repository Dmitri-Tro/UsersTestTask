import { FC } from 'react';
import styles from './header.module.css';
import { useLocation } from 'react-router-dom';

export const Header: FC = () => {

  const { pathname } = useLocation();

  return (
    <header className={ styles.container }>
      <h1 className={ styles.title }>{ pathname.slice( 1 ).toUpperCase() }</h1>
    </header>
  );
};
