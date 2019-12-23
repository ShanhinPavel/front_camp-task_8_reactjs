export const DOWNLOADING_ERROR = 'DOWNLOADING_ERROR';

export const activeError = (error) => ({
  type: DOWNLOADING_ERROR,
  error,
});
