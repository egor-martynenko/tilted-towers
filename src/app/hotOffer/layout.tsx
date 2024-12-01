import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Catalog',
  description: 'TiltedTowers Catalog',
};

export default function HotOfferLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <section>{children}</section>;
}
