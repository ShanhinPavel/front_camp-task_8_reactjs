import { DOWNLOADING_ERROR } from '../constants';

export const activeError = (error) => ({
  type: DOWNLOADING_ERROR,
  error,
});
