import { sortBy } from '../services';

const initialSortByReducer = sortBy.RELEASE_DATE;

export const sortByReducer = function (state = initialSortByReducer, action) {
  switch (action.type) {
    case 'SET_SORT_TYPE':
      return action.sortType;
  }
  return state;
};
