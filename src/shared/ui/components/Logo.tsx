import Link from 'next/link';
import { FC } from 'react';

import Image from 'next/image';
const Logo: FC = () => {
  return (
    <Link className="px-10 text-3xl mb-10 block font-bold" href="/">
      <Image src={'/img/logo.svg'} alt={'logo'} width={150} height={20} />
    </Link>
  );
};

export default Logo;
