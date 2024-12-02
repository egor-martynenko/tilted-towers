import { createAsyncThunk } from '@reduxjs/toolkit';
import { IAuthResponse, IEmailPassword } from '@/store/user/user.interface';
import { AuthService } from '@/shared/services/auth/auth.service';
import { errorCatch } from '@/app/api/api.helpers';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>
('auth/register', async ({email, password}, thunkAPI) => {
  try {
    const response = await  AuthService.register(email, password)
    return response.data;
  } catch (e){
    console.error(errorCatch(e));
    return thunkAPI.rejectWithValue(e)
  }
})

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>
('auth/login', async ({email, password}, thunkAPI) => {
  try {
    const response = await  AuthService.login(email, password)
    return response.data;
  } catch (e){
    console.error(errorCatch(e));
    return thunkAPI.rejectWithValue(e)
  }
})

export const logout = createAsyncThunk('auth/logout', async ()=>{
  await AuthService.logout()
})

export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPassword>
('auth/check-auth', async (_, thunkAPI) => {
  try {
    const response = await  AuthService.getNewTokens()
    return response.data;
  } catch (e){
    if(errorCatch(e) === 'jwt expired'){
      thunkAPI.dispatch(logout())
    }
    console.error(errorCatch(e));
    return thunkAPI.rejectWithValue(e)
  }
})