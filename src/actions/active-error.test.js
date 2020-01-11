import { activeError } from './active-error';
import { DOWNLOADING_ERROR } from '../constants';

describe('Active-error action', () => {
  it('should return object with fields "type", "error" with values ', () => {
    expect(activeError('error')).toEqual({ type: DOWNLOADING_ERROR, error: 'error' });
  });
});
