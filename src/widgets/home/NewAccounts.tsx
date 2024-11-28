'use client';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '@/shared/api/firebase/config';

import { AccountCard } from '@/entities/account/ui/AccountCard';

const NewAccounts = () => {
  const [accounts, setAccounts] = useState<TAccount[]>([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      const accountsCollection = collection(firestore, 'accounts');
      const accountsSnapshot = await getDocs(accountsCollection);
      const accountsList: TAccount[] = accountsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as TAccount[];
      setAccounts(accountsList);
    };
    fetchAccounts();
  }, []);

  return (
    <section className="mx-auto max-w-8xl px-6 py-20 lg:px-8">
      <h2 className="text-4xl">New Accounts</h2>
      <div className="grid grid-cols-4 gap-8 mt-8">
        {accounts.map(account => (
          <AccountCard key={account.id} account={account} />
        ))}
      </div>
    </section>
  );
};

export default NewAccounts;
