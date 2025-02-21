'use client';
import styles from './NewAccounts.module.scss';

import { AccountsGallery } from '@/shared/ui/accountsGallery/AccountsGallery';
import Heading from '@/shared/ui/Heading';
import Link from 'next/link';

export const NewAccounts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Heading title={'New Accounts'} />
        <Link href={'/catalog'}>
          <span className={styles.showAll}>Show All</span>
        </Link>
      </div>
      <AccountsGallery accounts={[]} />
    </div>
  );
};
