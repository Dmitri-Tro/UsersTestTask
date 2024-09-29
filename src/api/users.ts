import { User } from '../models/User.ts';
import { axiosInstance } from './axios.ts';

export const fetchUsers = (): Promise<User[]> => {
  return axiosInstance.get( '/users' );
};
