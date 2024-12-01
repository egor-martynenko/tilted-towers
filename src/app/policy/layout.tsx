import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Policy',
  description: 'TiltedTowers Catalog',
};

export default function PolicyLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <section>{children}</section>;
}
