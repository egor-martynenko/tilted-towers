import { FC } from 'react';
import Logo from '../../shared/ui/components/Logo';

import styles from './Navigation.module.scss';
import { MenuContainer } from '@/widgets/Navigation/MenuContainer/MenuContainer';

const Navigation: FC = () => {
  return (
    <div className={styles.navigation}>
      <Logo />
      <MenuContainer />
    </div>
  );
};

export default Navigation;
