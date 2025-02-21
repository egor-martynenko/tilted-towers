import { configureStore } from '@reduxjs/toolkit';

import { api } from './api';
import { userSlice } from '@/entities/user/model/userSlice';

export const rootStore = configureStore({
  reducer: {
    [userSlice.name]: userSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(api.middleware),
});

export type RootState = ReturnType<typeof rootStore.getState>;
