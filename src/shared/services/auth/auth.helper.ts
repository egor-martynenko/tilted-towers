import { IAuthResponse, IToken } from '@/store/user/user.interface';

export const saveTokensStorage = (data: IToken)=>{
  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('refreshToken', data.refreshToken);
}

export const saveToStorage = (data : IAuthResponse) => {
  saveTokensStorage(data);
  localStorage.setItem('user', JSON.stringify(data.user));
}

export const removeTokensStorage = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
}