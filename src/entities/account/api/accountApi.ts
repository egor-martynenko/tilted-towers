import { api } from '@/app/api';

export const accountApi = api.injectEndpoints({
  endpoints: builder => ({
    getAllAccounts: builder.query({
      query: (arg?: void) => '/accounts',
      providesTags: ['Account'],
    }),
  }),
});
export const { useGetAllAccountsQuery } = accountApi;
