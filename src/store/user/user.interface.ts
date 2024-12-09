import { IUser } from '@/entities/user/model/user.types';

export interface IUserState {
  email: string;
  isAdmin: boolean;
}

export interface IToken {
  accessToken: string;
  refreshToken: string;
}

export interface IInitialState {
  user: IUserState | null;
  isLoading: boolean;
  error: string | null;
}

export interface IEmailPassword {
  email: string;
  password: string;
}

export interface IAuthResponse extends IToken {
  user: IUser & {
    isAdmin: boolean;
  };
}