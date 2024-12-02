import { configureStore } from '@reduxjs/toolkit';
import { reducers } from '@/store/rootReducer';

export const store = configureStore({
  reducer: reducers
})

export type TypeRootState = ReturnType<typeof store.getState>;