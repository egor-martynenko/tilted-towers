import { api } from '@/app/api';
import { TUser } from '@/entities/user/model/user.types';

type TAuthResponse = {
  user: {
    access_token: string;
  };
  refreshToken: string;
  accessToken: string;
};

export const userApi = api.injectEndpoints({
  endpoints: builder => ({
    register: builder.mutation<
      TAuthResponse,
      { email: string; password: string }
    >({
      query: ({ email, password }) => ({
        url: `/auth/register`,
        method: 'POST',
        body: { email, password },
      }),
      invalidatesTags: ['User'],
    }),
    login: builder.mutation<TAuthResponse, { email: string; password: string }>(
      {
        query: ({ email, password }) => ({
          url: `/auth/login`,
          method: 'POST',
          body: { email, password },
        }),
        invalidatesTags: ['User'],
      },
    ),
    getUser: builder.query({
      query: () => '/users/profile',
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation, useGetUserQuery } =
  userApi;
