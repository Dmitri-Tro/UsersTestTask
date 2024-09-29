import { User } from '../models/User.ts';

export const filterUsers = ( users: User[], query: string ): User[] => {
  if ( !query.trim() ) {
    return users;
  } else {
    return users.filter( ( user ) => {
      const lowerCaseQuery = query.toLowerCase();

      return (
        user.name.toLowerCase().includes( lowerCaseQuery ) ||
        user.phone.toLowerCase().includes( lowerCaseQuery ) ||
        user.email.toLowerCase().includes( lowerCaseQuery ) ||
        user.website.toLowerCase().includes( lowerCaseQuery ) ||
        user.address.city.toLowerCase().includes( lowerCaseQuery ) ||
        user.address.street.toLowerCase().includes( lowerCaseQuery ) ||
        user.address.suite.toLowerCase().includes( lowerCaseQuery ) ||
        user.address.zipcode.toLowerCase().includes( lowerCaseQuery )
      );
    } );
  }
};
