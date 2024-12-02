import { IAuthResponse, IToken } from '@/store/user/user.interface';
import Cookies from 'js-cookie';

export const saveTokensStorage = (data: IToken)=>{
  Cookies.set('accessToken', data.accessToken);
  Cookies.set('refreshToken', data.refreshToken);
}

export const saveToStorage = (data : IAuthResponse) => {
  saveTokensStorage(data);
  localStorage.setItem('auth', JSON.stringify(data.user));
}

export const removeTokensStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
}