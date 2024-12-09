export const API_URL = `${process.env.API_URL || ''}/api`;
export const getAccountsUrl = (string: string) => `/accounts/${string}`;
export const getAuthUrl = (string: string) => `/auth/${string}`;
export const getImageUrl = (string: string) => `${string}`;

