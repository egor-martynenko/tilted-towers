'use client';
import { ReactNode, useEffect } from 'react';

import styles from './Layout.module.scss';
import { Sidebar } from '@/shared/ui/layout/Sidebar/Sidebar';
import { Navigation } from '@/shared/ui/layout/Navigation/Navigation';
import { useGetUserQuery } from '@/entities/user/api/userApi';
import { useDispatch } from 'react-redux';
import { setUser } from '@/entities/user/model/userSlice';

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();

  const { data: userData } = useGetUserQuery(undefined);

  useEffect(() => {
    dispatch(setUser(userData));
  }, [userData]);

  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  );
};
