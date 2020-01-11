import { activeLoading } from './active-loading';
import { LOADING } from '../constants';

describe('', () => {
  it('should return object {type: "LOADING", isLoading: "true"}', () => {});
  expect(activeLoading(true)).toEqual({ type: LOADING, isLoading: true });
});
