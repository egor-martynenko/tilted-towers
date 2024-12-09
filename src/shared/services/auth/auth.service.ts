import { axiosClassic } from '@/app/api/interceptors';
import { IAuthResponse } from '@/store/user/user.interface';
import { getAuthUrl } from '@/shared/config/api.config';
import { removeTokensStorage, saveToStorage } from '@/shared/services/auth/auth.helper';
import { getContentType } from '@/app/api/api.helpers';

export const AuthService = {

  async register( email: string, password: string) {
    const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('register'), { email, password });

    if (response.data.accessToken)
      saveToStorage(response.data);
      return response;
  },

  async login( email: string, password: string) {
    try{
      const response = await axiosClassic.post<IAuthResponse>(getAuthUrl('login'), { email, password });
      if (response.data.accessToken)
        saveToStorage(response.data);
      return response;

    } catch (error){
      // @ts-ignore
      if (error.response?.status === 401) {
        console.warn('Unauthorized access');
      }
    }

  },

  logout(){
    removeTokensStorage();
    localStorage.removeItem('user');
  },

  async getNewTokens(){
    const refreshToken = localStorage.getItem('refreshToken');
    const response = await axiosClassic.post<IAuthResponse>(
      getAuthUrl('login/access-token'),
      { refreshToken },
      {headers: getContentType() }
    );

    if (response.data.accessToken)
      saveToStorage(response.data);
    return response;
  }

}