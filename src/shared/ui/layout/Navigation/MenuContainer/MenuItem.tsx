import cn from 'classnames';
import Link from 'next/link';
import { FC } from 'react';
import { usePathname } from 'next/navigation';

import styles from './Menu.module.scss';
import { IMenuItem } from '@/shared/ui/layout/Navigation/MenuContainer/menu.interface';
import { MaterialIcon } from '@/shared/ui/icons/MaterialIcon';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const pathname = usePathname();

  return (
    <li
      className={cn({
        [styles.active]: pathname === item.link,
      })}
    >
      <Link href={item.link} className={styles.link}>
        <MaterialIcon name={item.icon} />
        <span>{item.title}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
