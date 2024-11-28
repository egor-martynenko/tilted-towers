import { FC } from 'react';
import Logo from '../../components/Logo';

import styles from './Navigation.module.scss';
import { MenuContainer } from '@/shared/ui/layout/Navigation/MenuContainer/MenuContainer';

const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <MenuContainer />
    </div>
  );
};

export default Navigation;
