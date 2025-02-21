'use client';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import HeadProvider from '@/providers/HeadProvider/HeadProvider';
import { rootStore } from '@/app/store';

const MainProvider = ({ children }: { children: ReactNode }) => {
  return (
    <HeadProvider>
      <Provider store={rootStore}>{children}</Provider>
    </HeadProvider>
  );
};

export default MainProvider;
