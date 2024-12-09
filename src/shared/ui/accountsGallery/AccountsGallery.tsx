import { FC } from 'react';
import styles from './AccountsGallery.module.scss';
import { TAccount } from '@/entities/account/model/account.type';
import { AccountCard } from '@/entities/account/ui/AccountCard';

type AccountsGalleryProps = {
  accounts: TAccount[];
}

export const AccountsGallery: FC<AccountsGalleryProps> = ({ accounts }) => {
  return (
    <div className={styles.accountsGallery}>
      {accounts.map((account) => (
        <AccountCard
          key={account._id}
          _id={account._id}
          name={account.name}
          slug={account.slug}
          images={account.images}
          tags={account.tags}
          price={account.price}
          parameters={account.parameters}
        />
      ))}
    </div>
  );
};
