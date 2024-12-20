"use client"
import { FC } from 'react';
import styles from './Sidebar.module.scss'
import { Search } from '@/widgets/search/Search';


const Sidebar:FC = () => {
  return <div className={styles.sidebar}>
    <Search/>
  </div>;
};

export default Sidebar;
