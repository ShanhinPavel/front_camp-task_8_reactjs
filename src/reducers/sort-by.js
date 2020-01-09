import { TabButtonValues } from '../components/common/tab-buttons-section';

const initialSortBy = TabButtonValues.RELEASE_DATE;

export const sortBy = function (state = initialSortBy, action) {
  switch (action.type) {
    case 'SET_SORT_TYPE':
      return action.sortType;
  }
  return state;
};
