import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { usersReducer } from './slices/usersSlice.ts';

export const store = configureStore( {
  reducer: {
    usersReducer,
  },
} );

export type AppRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector;
