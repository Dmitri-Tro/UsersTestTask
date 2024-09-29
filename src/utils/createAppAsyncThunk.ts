import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, AppRootState } from '../store/store.ts';

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppRootState;
  rejectValue: null | { error: string };
  dispatch: AppDispatch;
}>();