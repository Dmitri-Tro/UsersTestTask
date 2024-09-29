import { fetchUsers } from '../../api/users.ts';
import { User } from '../../models/User.ts';
import { createAppAsyncThunk } from '../../utils/createAppAsyncThunk.ts';
import { usersActions } from '../slices/usersSlice.ts';

const getUsers = createAppAsyncThunk<{ users: User[] }>(
  'users/fetchUsers',
  async ( arg, thunkAPI ) => {
    const { dispatch, rejectWithValue } = thunkAPI;
    try {
      dispatch( usersActions.setIsLoading( { isLoading: true } ) );
      return { users: await fetchUsers() };
    } catch ( e ) {
      return rejectWithValue( { error: e } );
    } finally {
      dispatch( usersActions.setIsLoading( { isLoading: false } ) );
    }
  }
);

export const usersThunks = { getUsers };