import { configureStore } from '@reduxjs/toolkit';
import { reducers } from '@/store/rootReducer';

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type TypeRootState = ReturnType<typeof store.getState>;