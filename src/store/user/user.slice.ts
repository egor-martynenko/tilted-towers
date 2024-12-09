import { IInitialState } from '@/store/user/user.interface';
import { createSlice } from '@reduxjs/toolkit';
import { getStoreLocal } from '@/shared/utils/local-storage';
import { checkAuth, login, logout, register } from '@/store/user/user.actions';

const initialState:IInitialState = {
  isLoading: false,
  user: getStoreLocal('user'),
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder)=>{
    builder.addCase(register.pending, state => {
      state.isLoading = true;
      state.error = null;
    }).addCase(register.fulfilled, (state, {payload} )=> {
      state.isLoading = false;
      state.user = payload.user
      state.error = null;
    }).addCase(register.rejected, state => {
      state.isLoading = false;
      state.user = null;
      state.error = 'Registration failed';
    }).addCase(login.pending, state => {
        state.isLoading = true;
        state.error = null;
    }).addCase(login.fulfilled, (state, {payload} )=> {
      state.isLoading = false;
      state.error = null;
      state.user = payload.user
    }).addCase(login.rejected, state => {
      state.isLoading = false;
      state.user = null;
      state.error = 'Incorrect login or password';
    }).addCase(logout.fulfilled, state => {
      state.isLoading = false;
      state.user = null
      state.error = null;
    }).addCase(checkAuth.fulfilled, (state, {payload} )=> {
      state.user = payload.user
    })
  }
})

export const {reducer} = userSlice