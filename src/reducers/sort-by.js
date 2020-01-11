import { TAB_BUTTON_VALUES } from '../components/common/tab-buttons-section';
import { SET_SORT_TYPE } from '../constants';

const initialSortBy = TAB_BUTTON_VALUES.RELEASE_DATE;

export const sortBy = function (state = initialSortBy, action) {
  switch (action.type) {
    case SET_SORT_TYPE:
      return action.sortType;
  }
  return state;
};
