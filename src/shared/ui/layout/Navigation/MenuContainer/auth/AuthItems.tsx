'use client'
import { FC } from 'react';
import { useAuth } from '@/shared/hooks/useAuth';
import MenuItem from '@/shared/ui/layout/Navigation/MenuContainer/MenuItem';
import LogoutButton from '@/shared/ui/layout/Navigation/MenuContainer/auth/LogoutButton';

export const AuthItems: FC = () => {
  const {user} = useAuth()
  return <>{
    user ? <>
      <MenuItem item={{
      icon: "MdSettings",
      link: '/profile',
      title: 'Profile'
      }} />
      <LogoutButton/>
    </> :  <MenuItem item={{
      icon: "MdLogin",
      link: '/auth',
      title: 'LogIn'
    }} />}

    {
      user?.isAdmin && <MenuItem
        item={{
        icon: "MdLock",
        link: '/admin',
        title: 'AdminPanel'
      }} />
    }
  </>;
};
