import { TabButtonValues } from '../components/common/tab-buttons-section';

const initialSearchByReducer = TabButtonValues.TITLE;

export const searchByReducer = function (state = initialSearchByReducer, action) {
  switch (action.type) {
    case 'SET_SEARCH_TYPE':
      return action.searchType;
  }
  return state;
};
