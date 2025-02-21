import { FC } from 'react';
import styles from './Search.module.scss';
import { SearchList } from '@/widgets/search/SearchList/SearchList';
import SearchField from '@/shared/ui/search-field/SearchField';

export const Search: FC = () => {
  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={''} handleSearch={() => {}} />
      <SearchList accounts={[]} />
    </div>
  );
};
