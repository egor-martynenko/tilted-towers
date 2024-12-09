import { ReactNode } from 'react';

export interface IMenuItem {
  icon ?: ReactNode;
  title: string;
  link: string;
}
export interface IMenu {
  title: string;
  items: IMenuItem[];
}
