'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useAuth } from '@/shared/hooks/useAuth';

export const useAuthRedirect = () => {
	const { user } = useAuth();
	const router = useRouter();
	const searchParams = useSearchParams();

	const redirect = searchParams.get('redirect') || '/';

	useEffect(() => {
		if (user) {
			router.push(redirect);
		}
	}, [user, redirect, router]);
};
