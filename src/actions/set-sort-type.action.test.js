import { SET_SORT_TYPE, setSortType } from './set-sort-type.action';

describe('set-sort-type-action', () => {
  it('should return object with fields "type" and "sortType"', () => {
    expect(setSortType('release date')).toEqual({
      type: SET_SORT_TYPE,
      sortType: 'release date',
    });
  });
});
