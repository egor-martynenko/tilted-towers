"use client"
import {ChangeEvent, useState} from "react";
import { useDebounce } from '@/widgets/search/useDebounce';
import { useQuery } from 'react-query';
import { AccountsService } from '@/shared/services/accounts.service';


export const useSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearch = useDebounce(searchTerm, 500)

    const {isSuccess, data} = useQuery(['search items', debouncedSearch],
        () => AccountsService.getBySearch(debouncedSearch), {
            select: ({data}) => data,
            enabled: !!debouncedSearch
    });

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    return {searchTerm, isSuccess, data, handleSearch};
}