import { FC } from 'react';
import { Button } from '../button/Button.tsx';
import styles from './sortButton.module.css';

type SortButtonProps = {
  title: string,
  isSortAsc: boolean | null,
  callback: () => void,
}

export const SortButton: FC<SortButtonProps> = ( { title, isSortAsc, callback } ) => {

  return (
    <Button className={ styles.btn }
            onClick={ callback }
    >
      { title }: { isSortAsc ? 'ASC' : isSortAsc === null ? 'N/A' : 'DESC' }
    </Button>
  );
};