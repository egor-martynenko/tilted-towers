'use client';
import { FC, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import HeadProvider from '@/providers/HeadProvider/HeadProvider';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <HeadProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </Provider>

    </HeadProvider>

  );
};

export default MainProvider;
