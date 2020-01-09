import { TAB_BUTTON_VALUES } from '../components/common/tab-buttons-section';

const initialSearchBy = TAB_BUTTON_VALUES.TITLE;

export const searchBy = function (state = initialSearchBy, action) {
  switch (action.type) {
    case 'SET_SEARCH_TYPE':
      return action.searchType;
  }
  return state;
};
