import { FC } from 'react';

import styles from './Navigation.module.scss';
import { MenuContainer } from '@/shared/ui/layout/Navigation/MenuContainer/MenuContainer';
import Logo from '@/shared/ui/components/Logo';

export const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <MenuContainer />
    </div>
  );
};
