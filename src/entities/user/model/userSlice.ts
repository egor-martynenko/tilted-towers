import { createSlice } from '@reduxjs/toolkit';
import { TUser } from './user.types';

type TUserSlice = {
  user?: TUser;
  error: string;
};
const initialUserState: TUserSlice = {
  user: undefined,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = undefined;
    },
  },
  selectors: {
    selectUser: state => state.user,
    selectError: state => state.error,
  },
});

export const { setUser, logout } = userSlice.actions;
export const { selectUser, selectError } = userSlice.selectors;
