'use client';
import { FC } from 'react';
import styles from './MenuContainer.module.scss';
import { Menu } from '@/shared/ui/layout/Navigation/MenuContainer/Menu';
import {
  firstMenu,
  userMenu,
} from '@/shared/ui/layout/Navigation/MenuContainer/menu.data';
export const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <Menu menu={userMenu} />
    </div>
  );
};
