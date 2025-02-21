'use client';
import { ChangeEvent, useState } from 'react';
import { useDebounce } from '@/widgets/search/useDebounce';

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearch = useDebounce(searchTerm, 500);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
};
