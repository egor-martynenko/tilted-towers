'use client';
import Heading from '@/shared/ui/Heading';
import { AccountsGallery } from '@/shared/ui/accountsGallery/AccountsGallery';
import { useGetAllAccountsQuery } from '@/entities/account/api/accountApi';

export default function CatalogPage() {
  const { data } = useGetAllAccountsQuery();
  return (
    <div className="">
      <Heading title={'CATALOG'} />
      <AccountsGallery accounts={data || []} />
    </div>
  );
}
