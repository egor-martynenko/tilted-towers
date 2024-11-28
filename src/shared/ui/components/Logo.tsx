import Link from 'next/link';
import { FC } from 'react';

const Logo: FC = () => {
  return (
    <Link className="px-10 text-3xl mb-10 block font-bold" href="/public">
      Tilted Towers
    </Link>
  );
};

export default Logo;
