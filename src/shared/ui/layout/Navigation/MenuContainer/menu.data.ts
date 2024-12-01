import { IMenu } from '@/shared/ui/layout/Navigation/MenuContainer/menu.interface';

export const firstMenu: IMenu = {
  title: 'Menu',
  items: [
    {
      icon: 'MdHome',
      link: '/',
      title: 'Home',
    },
    {
      icon: 'MdArchive',
      link: '/catalog',
      title: 'Catalog',
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/hotOffer',
      title: 'Hot Offer',
    },
    {
      icon: 'MdListAlt',
      link: '/terms',
      title: 'General Terms',
    },
    {
      icon: 'MdBook',
      link: '/policy',
      title: 'Policy',
    },
  ],
};

export const userMenu: IMenu = {
  title: 'General',
  items: [],
};
