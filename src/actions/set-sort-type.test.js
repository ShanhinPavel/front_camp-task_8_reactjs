import { setSortType } from './set-sort-type';
import { SET_SORT_TYPE } from '../constants';

describe('set-sort-type-action', () => {
  it('should return object with fields "type" and "sortType"', () => {
    expect(setSortType('release date')).toEqual({
      type: SET_SORT_TYPE,
      sortType: 'release date',
    });
  });
});
