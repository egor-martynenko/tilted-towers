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
      icon: 'MdRefresh',
      link: '/fresh',
      title: 'Fresh accounts',
    },
    {
      icon: 'MdLocalFireDepartment',
      link: '/trending',
      title: 'Trending now',
    },
  ],
};

export const userMenu: IMenu = {
  title: 'General',
  items: [],
};
