import { FC } from 'react';
import { TAccount } from '@/entities/account/model/account.type';
import styles from './AccountCard.module.scss';
import { getImageUrl } from '@/shared/config/api.config';

export const AccountCard :FC<TAccount> = ({_id, name, slug, images, tags, price, parameters }) => {
  const imgUrl = getImageUrl(images[2].url)

  return (

      <div className={styles.card}>
        <div className={styles.image}>
          <img src={imgUrl} alt={images[2].name} />
        </div>

        <span className={styles.title}>{name}</span>
        <span className={styles.price}>{price}</span>

      </div>

  );
};

