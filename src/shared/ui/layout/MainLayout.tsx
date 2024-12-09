import { ReactNode } from 'react';

import Sidebar from '@/widgets/Sidebar/Sidebar';
import Navigation from '@/widgets/Navigation/Navigation';

import styles from './Layout.module.scss';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  );
};
