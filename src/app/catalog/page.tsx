'use client';
import { useAllAccounts } from '@/shared/api/useAllAccounts';
import { useEffect } from 'react';
import Heading from '@/shared/ui/Heading';

export default function CatalogPage() {
  const { data, isLoading } = useAllAccounts();

  useEffect(() => {
    console.log(data);
  }, [data]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="mx-auto max-w-8xl py-5">
      <Heading title={'CATALOG'} />
    </div>
  );
}
