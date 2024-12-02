import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { titleMerge } from '@/shared/config/seo.config';

export const metadata: Metadata = {
  title: titleMerge('Terms'),
  description: 'TiltedTowers Catalog',
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <section>{children}</section>;
}
