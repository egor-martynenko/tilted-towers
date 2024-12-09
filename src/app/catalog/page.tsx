'use client';
import { useAllAccounts } from '@/shared/api/useAllAccounts';
import { useEffect } from 'react';
import Heading from '@/shared/ui/Heading';
import { AccountsGallery } from '@/shared/ui/accountsGallery/AccountsGallery';

export default function CatalogPage() {
  const { data, isLoading } = useAllAccounts();


  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="">
      <Heading title={'CATALOG'} />
      <AccountsGallery accounts={data?.data || []} />
    </div>
  );
}
