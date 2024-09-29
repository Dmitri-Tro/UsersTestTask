import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../../components/common/input/Input.tsx';
import { Loader } from '../../components/common/loader/Loader.tsx';
import { SortButton } from '../../components/common/sortButton/SortButton.tsx';
import { UserCard } from '../../components/users/userCard/UserCard.tsx';
import { User } from '../../models/User.ts';
import { selectIsLoading, selectUsers } from '../../store/selectors/usersSelectors.ts';
import { useAppSelector } from '../../store/store.ts';
import { usersThunks } from '../../store/thunks/usersThunks.ts';
import { filterUsers } from '../../utils/filterUsers.ts';
import styles from './users.module.css';

export const Users: FC = () => {

  const users = useAppSelector( selectUsers );
  const isUsersLoading = useAppSelector( selectIsLoading );
  const dispatch = useDispatch();
  const [ filter, setFilter ] = useState( '' );
  const [ sortedUsers, setSortedUsers ] = useState<User[]>( [] );
  const [ isNameSortAsc, setIsNameSortAsc ] = useState<boolean | null>( null );
  const [ isEmailSortAsc, setIsEmailSortAsc ] = useState<boolean | null>( null );

  useEffect( () => {
    dispatch( usersThunks.getUsers() );
  }, [ dispatch ] );

  useEffect( () => {

    const filtered = filterUsers( users, filter );

    if ( isNameSortAsc !== null ) {
      setSortedUsers( [ ...filtered ].sort( ( a, b ) => isNameSortAsc ? a.name.localeCompare( b.name ) : b.name.localeCompare( a.name ) ) );
    } else if ( isEmailSortAsc !== null ) {
      setSortedUsers( [ ...filtered ].sort( ( a, b ) => isEmailSortAsc ? a.email.localeCompare( b.email ) : b.email.localeCompare( a.email ) ) );
    } else {
      setSortedUsers( filtered );
    }
  }, [ users, filter, isNameSortAsc, isEmailSortAsc ] );

  const filterUsersHandler = ( event: ChangeEvent<HTMLInputElement> ) => {
    setFilter( event.currentTarget.value );
  };

  const sortByName = () => {
    setIsEmailSortAsc( null );
    setIsNameSortAsc( !isNameSortAsc );
  };

  const sortByEmail = () => {
    setIsNameSortAsc( null );
    setIsEmailSortAsc( !isEmailSortAsc );
  };

  if ( isUsersLoading ) {
    return <Loader/>;
  }

  return (
    <div className={ styles.container }>
      <div className={ styles.options }>
        <Input placeholder={ 'Search' } value={ filter } onChange={ filterUsersHandler }/>
        <SortButton title="Sort by name" isSortAsc={ isNameSortAsc } callback={ sortByName }/>
        <SortButton title="Sort by email" isSortAsc={ isEmailSortAsc } callback={ sortByEmail }/>
      </div>
      <ul className={ styles.usersList }>
        { sortedUsers.map( user => <UserCard key={ user.id } user={ user }/> ) }
      </ul>
    </div>
  );
};
