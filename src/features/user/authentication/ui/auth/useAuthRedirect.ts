'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '@/entities/user/model/userSlice';

export const useAuthRedirect = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const user = useSelector(selectUser);
  const redirect = searchParams.get('redirect') || '/';

  useEffect(() => {
    if (user) {
      router.push(redirect);
    }
  }, [user, redirect, router]);
};
