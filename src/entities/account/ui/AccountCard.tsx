import { FC } from 'react';
import { TAccount } from '@/entities/account/model/account.type';
import styles from './AccountCard.module.scss';
import { getImageUrl } from '@/shared/config/api.config';
import ImageIcon from '@/shared/ui/icons/ImageIcon';
import Link from 'next/link';

export const AccountCard :FC<TAccount> = ({name, images, tags, price, parameters, slug }) => {
  const imgUrl = getImageUrl(images[2].url)

  return (

      <div className={styles.card}>
        <div className={styles.image}>
          <img src={imgUrl} alt={images[2].name} />
          <div className={styles.imagesQuantity}>
            <ImageIcon/>
            <span>{images.length}</span>
          </div>
        </div>

        <span className={styles.title}>{name}</span>

        <ul className={styles.parameters}>
          <li className={styles.parameters_item}>
            <span>Skins</span>
            <span>{parameters.outfits}</span>
          </li>
          <li className={styles.parameters_item}>
            <span>V-Bucks</span>
            <span>{parameters.vbucks}</span>
          </li>
          <li className={styles.parameters_item}>
            <span>Level</span>
            <span>{parameters.level}</span>
          </li>
          <li className={styles.parameters_item}>
            <span>Pickaxes</span>
            <span>{parameters.pickaxes}</span>
          </li>
          <li className={styles.parameters_item}>
            <span>Backbling</span>
            <span>{parameters.backbling}</span>
          </li>
          <li className={styles.parameters_item}>
            <span>Emotes</span>
            <span>{parameters.emotes}</span>
          </li>
          <li className={styles.parameters_item}>
            <span>Gliders</span>
            <span>{parameters.gliders}</span>
          </li>
          <li className={styles.parameters_item}>
            <span>Loadings</span>
            <span>{parameters.loadings}</span>
          </li>
        </ul>

        <div className={styles.cardBottom}>
          <div className={styles.price}>
            <span className={styles.price_num}>${price}</span>
            <span className={styles.price_currency}>usd</span>
          </div>

          <button className={styles.addBtn}>
            To Card
          </button>

        </div>

        <span className={styles.moreBtn}>
          <Link href={`/account/${slug}`}>
            more information ...
          </Link>
        </span>

      </div>

  );
};

