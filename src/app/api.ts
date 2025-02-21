import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'rootApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4200/api/',
    prepareHeaders: headers => {
      const token = localStorage.getItem('access_token');
      if (token) {
        headers.set(
          'Authorization',
          `Bearer ${localStorage.getItem('access_token')}`,
        );
      }
      return headers;
    },
  }),
  tagTypes: ['User', 'Account', 'Chat', 'Message'],
  endpoints: () => ({}),
});
