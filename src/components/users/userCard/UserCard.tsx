import { FC } from 'react';
import { User } from '../../../models/User.ts';
import styles from './userCard.module.css';

type UserCardProps = {
  user: User,
}

export const UserCard: FC<UserCardProps> = ( { user } ) => {

  return (
    <li className={ styles.container }>
      <h2 className={ styles.name }>{ user.name }</h2>
      <div className={ styles.info }>
        <div className={ styles.infoBlock }>
          <h3 className={ styles.blockTitle }>Contacts: </h3>
          <p className={ styles.blockItem }><b>E-mail:</b> { user.email }</p>
          <p className={ styles.blockItem }><b>Phone:</b> { user.phone }</p>
          <p className={ styles.blockItem }><b>Website:</b> { user.website }</p>
        </div>
        <div className={ styles.infoBlock }>
          <h3 className={ styles.blockTitle }>Address: </h3>
          <p className={ styles.blockItem }><b>City:</b> { user.address.city }</p>
          <p className={ styles.blockItem }><b>Street:</b> { user.address.street }</p>
          <p className={ styles.blockItem }><b>Suite:</b> { user.address.suite }</p>
          <p className={ styles.blockItem }><b>Z-code:</b> { user.address.zipcode }</p>
        </div>
      </div>
    </li>
  );
};
