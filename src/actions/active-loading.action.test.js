import { activeLoading, LOADING } from './active-loading.action';

describe('', () => {
  it('should return object {type: "LOADING", isLoading: "true"}', () => {});
  expect(activeLoading(true)).toEqual({ type: LOADING, isLoading: true });
});
