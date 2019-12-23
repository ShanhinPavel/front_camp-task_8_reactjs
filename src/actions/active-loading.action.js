export const LOADING = 'LOADING';

export const activeLoading = (isLoading) => ({
  type: LOADING,
  isLoading,
});
