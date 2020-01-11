import { LOADING } from '../constants';

export const activeLoading = (isLoading) => ({
  type: LOADING,
  isLoading,
});
