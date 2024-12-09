import type { Metadata } from 'next';
import '@/shared/styles/globals.css';
import { MainLayout } from '@/shared/ui/layout/MainLayout';
import MainProvider from '@/providers/MainProvider';
import { titleMerge } from '@/shared/config/seo.config';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: titleMerge('Home'),
  description: '',
};

const RootLayout  = ({ children}:{children : ReactNode}) => {
  return (
    <html lang="en">
      <body>
        <MainProvider >
          <MainLayout>{children}</MainLayout>
        </MainProvider>
      </body>
    </html>
  );
}

export default RootLayout
