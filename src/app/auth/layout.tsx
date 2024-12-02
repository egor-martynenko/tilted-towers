import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { titleMerge } from '@/shared/config/seo.config';

export const metadata: Metadata = {
  title: titleMerge('Auth'),
  description: 'TiltedTowers Shop',
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <section>{children}</section>;
}
