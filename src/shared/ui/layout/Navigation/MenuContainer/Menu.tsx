'use client';
import { FC } from 'react';
import styles from './Menu.module.scss';
import { IMenu } from '@/shared/ui/layout/Navigation/MenuContainer/menu.interface';
import { AuthItems } from '@/shared/ui/layout/Navigation/MenuContainer/auth/AuthItems';
import MenuItem from '@/shared/ui/layout/Navigation/MenuContainer/MenuItem';

export const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.ul}>
        {items.map(item => (
          <MenuItem key={item.link} item={item} />
        ))}
        {title === 'General' ? <AuthItems /> : null}
      </ul>
    </div>
  );
};
