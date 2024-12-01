import { TAccount } from '@/entities/account/model/account.type';
import { getAccountsUrl } from '@/shared/config/api.config';
import { axiosClassic } from '@/app/api/interceptors';

export const AccountsService = {
  async getAllAccounts() {
    return axiosClassic.get<TAccount[]>(getAccountsUrl(''));
  },

  async getBySearch(searchTerm?: string) {
    return axiosClassic.get<TAccount[]>(getAccountsUrl(''), {
      params: searchTerm ? {searchTerm} : {},
    });
  },
};
