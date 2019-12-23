import { searchBy } from '../services';

const initialSearchByReducer = searchBy.TITLE;

export const searchByReducer = function (state = initialSearchByReducer, action) {
  switch (action.type) {
    case 'SET_SEARCH_TYPE':
      return action.searchType;
  }
  return state;
};
