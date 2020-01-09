import { TabButtonValues } from '../components/common/tab-buttons-section';

const initialSearchBy = TabButtonValues.TITLE;

export const searchBy = function (state = initialSearchBy, action) {
  switch (action.type) {
    case 'SET_SEARCH_TYPE':
      return action.searchType;
  }
  return state;
};
