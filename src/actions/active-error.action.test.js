import { activeError, DOWNLOADING_ERROR } from './active-error.action';

describe('Active-error action', () => {
  it('should return object with fields "type", "error" with values ', () => {
    expect(activeError('error')).toEqual({ type: DOWNLOADING_ERROR, error: 'error' });
  });
});
