import { setSearchType } from './set-search-type';
import { SET_SEARCH_TYPE } from '../constants';

describe('set-search-type-action', () => {
  it('should return object with fields "type" and "searchType"', () => {
    expect(setSearchType('titles')).toEqual({ type: SET_SEARCH_TYPE, searchType: 'titles' });
  });
});
