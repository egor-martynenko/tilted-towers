import { Auth } from '@/features/user/authentication/ui/auth/Auth';
import { Suspense } from 'react';

export default function AuthPage() {
  return (
    <div className="mx-auto py-5 text-white">
      <h2 className="text-4xl font-bold leading-tight mx-auto text-center">Auth</h2>
      <Suspense fallback={<div>Loading...</div>}>
      <Auth/>
      </Suspense>
    </div>
  );
}


