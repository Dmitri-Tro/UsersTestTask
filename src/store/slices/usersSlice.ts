import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../../models/User.ts';
import { usersThunks } from '../thunks/usersThunks.ts';

type UsersSliceState = {
  users: User[],
  isLoading: boolean,
}

const slice = createSlice( {
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
  } as UsersSliceState,
  reducers: {
    setIsLoading: ( state, action: PayloadAction<{ isLoading: boolean }> ) => {
      state.isLoading = action.payload.isLoading;
    },
  },
  extraReducers: ( builder ) => {
    builder
      .addCase( usersThunks.getUsers.fulfilled, ( state: Draft<UsersSliceState>, action ) => {
        state.users = action.payload.users;
      } );
  },
} );

export const usersReducer = slice.reducer;
export const usersActions = slice.actions;
