import { useQuery } from 'react-query';
import { AccountsService } from '@/shared/services/accounts.service';

export const useAllAccounts = () => {
  const queryData = useQuery('all accounts', () =>
    AccountsService.getAllAccounts(),
  );

  return queryData;
};
