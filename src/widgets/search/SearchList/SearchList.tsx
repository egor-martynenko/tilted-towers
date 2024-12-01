import { FC } from 'react';
import styles from './SearchList.module.scss';
import { TAccount } from '@/entities/account/model/account.type';
import Link from 'next/link';
import { getAccountsUrl } from '@/shared/config/api.config';
import Image from 'next/image';

export const SearchList: FC<{ accounts: TAccount[] }> = ({ accounts }) => {
  return <div className={styles.list}>

    {accounts.length ? accounts.map(account => (
      <Link key={account._id} href={getAccountsUrl(account.slug)}>
        <Image
          src={account.images[0].url}
          alt={account.images[0].name}
          width={50}
          height={50}
          objectFit="cover"
          objectPosition="top"
          draggable={false}/>
        <span>{account.name}</span>
      </Link>
    )) : <div className={'text-white text-center py-4'}>Accounts Not Found</div>}
  </div>;
};
