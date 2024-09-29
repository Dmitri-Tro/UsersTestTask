import { FC } from 'react';
import { useRouteError } from 'react-router-dom';
import { Button } from '../../components/common/button/Button.tsx';
import { useGoBack } from '../../hooks/useGoBack.ts';
import styles from './error.module.css';

export const Error: FC = () => {

  const error = useRouteError();
  const goBack = useGoBack();

  return (
    <div className={ styles.container }>
      <h1>Oops!</h1>
      <p className={ styles.note }>Sorry, an unexpected error has occurred.</p>
      <p className={ styles.description }>{ error.statusText || error.message }</p>
      <Button onClick={ goBack }>To previous page</Button>
    </div>
  );
};
