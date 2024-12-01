import { FC } from 'react';
import styles from './Search.module.scss';
import { useSearch } from '@/widgets/search/useSearch';
import { SearchList } from '@/widgets/search/SearchList/SearchList';
import SearchField from '@/shared/ui/search-field/SearchField';

export const Search:FC = () => {
  const {isSuccess, searchTerm, handleSearch, data} = useSearch();
  return (
    <div className={styles.wrapper}>
      <SearchField searchTerm={searchTerm} handleSearch={handleSearch}/>
      {isSuccess && <SearchList accounts={data || []} />}
    </div>
  );
};

