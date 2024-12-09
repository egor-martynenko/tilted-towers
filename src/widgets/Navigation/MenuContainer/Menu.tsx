'use client';
import { FC, useEffect, useState } from 'react';
import styles from './Menu.module.scss';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon } from '@/shared/ui/icons/HomeIcon';
import HotOfferIcon from '@/shared/ui/icons/HotOfferIcon';
import PolicyIcon from '@/shared/ui/icons/PolicyIcon';
import GeneralTermsIcon from '@/shared/ui/icons/GeneralTermsIcon';
import LogInIcon from '@/shared/ui/icons/LogInIcon';
import CatalogIcon from '@/shared/ui/icons/CatalogIcon';
import { useActions } from '@/shared/hooks/useActions';
import { useAuth } from '@/shared/hooks/useAuth';
import ProfileIcon from '@/shared/ui/icons/Profile';
import AdminIcon from '@/shared/ui/icons/AdminIcon';

export const Menu: FC = () => {
  const pathname = usePathname();
  const { user } = useAuth();
  const { logout } = useActions();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true);
      setIsAdmin(user.isAdmin || false);
    } else {
      setIsAuthenticated(false);
      setIsAdmin(false);
    }
  }, [user]);

  const logoutHandler = () => {
    logout();
  };

  return (
    <div className={styles.menu}>
      <div className={styles.heading}>Menu</div>
      <ul className={styles.ul}>
        <li className={cn({ [styles.active]: pathname === '/' })}>
          <Link href={'/'} className={styles.link}>
            <HomeIcon active={pathname === '/'} />
            <span>Home</span>
          </Link>
        </li>

        <li className={cn({ [styles.active]: pathname === '/catalog' })}>
          <Link href={'/catalog'} className={styles.link}>
            <CatalogIcon active={pathname === '/catalog'} />
            <span>Catalog</span>
          </Link>
        </li>

        <li className={cn({ [styles.active]: pathname === '/hotOffer' })}>
          <Link href={'/hotOffer'} className={styles.link}>
            <HotOfferIcon active={pathname === '/hotOffer'} />
            <span>HotOffer</span>
          </Link>
        </li>

        <li className={cn({ [styles.active]: pathname === '/terms' })}>
          <Link href={'/terms'} className={styles.link}>
            <GeneralTermsIcon active={pathname === '/terms'} />
            <span>General Terms</span>
          </Link>
        </li>

        <li className={cn({ [styles.active]: pathname === '/policy' })}>
          <Link href={'/policy'} className={styles.link}>
            <PolicyIcon active={pathname === '/policy'} />
            <span>Policy</span>
          </Link>
        </li>
      </ul>

      <div className={styles.heading}>General</div>

      <ul className={styles.ul}>
        {isAuthenticated ? (
          <>
            <li className={cn({ [styles.active]: pathname === '/profile' })}>
              <Link href={'/profile'} className={styles.link}>
                <ProfileIcon active={pathname === '/profile'} />
                <span>Profile</span>
              </Link>
            </li>

            <li>
              <Link href={'#'} onClick={logoutHandler} className={styles.link}>
                <LogInIcon active={false} />
                <span>LogOut</span>
              </Link>
            </li>
          </>
        ) : (
          <li className={cn({ [styles.active]: pathname === '/auth' })}>
            <Link href={'/auth'} className={styles.link}>
              <LogInIcon active={pathname === '/auth'} />
              <span>Login</span>
            </Link>
          </li>
        )}
        {isAdmin && (
          <li className={cn({ [styles.active]: pathname === '/admin' })}>
            <Link href={'/admin'} className={styles.link}>
              <AdminIcon active={pathname === '/admin'} />
              <span>Admin Panel</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
