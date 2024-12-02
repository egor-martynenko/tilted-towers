import type { Metadata } from 'next';
import '@/shared/styles/globals.css';
import { MainLayout } from '@/shared/ui/layout/MainLayout';
import MainProvider from '@/providers/MainProvider';
import { titleMerge } from '@/shared/config/seo.config';

export const metadata: Metadata = {
  title: titleMerge('Home'),
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainProvider>
          <MainLayout>{children}</MainLayout>
        </MainProvider>
      </body>
    </html>
  );
}
