import { AppRootState } from '../store.ts';

export const selectIsLoading = ( state: AppRootState ) => state.usersReducer.isLoading;

export const selectUsers = ( state: AppRootState ) => state.usersReducer.users;