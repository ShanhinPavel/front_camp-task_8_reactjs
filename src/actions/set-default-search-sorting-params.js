import { clearInputValue } from './text-input';
import { TAB_BUTTON_VALUES } from '../components/common/tab-buttons-section';
import { setSortType } from './set-sort-type';
import { setSearchType } from './set-search-type';

export const setDefaultFilmsSearchingSortingParams = (dispatch) => {
  dispatch(clearInputValue());
  dispatch(setSearchType(TAB_BUTTON_VALUES.TITLE));
  dispatch(setSortType(TAB_BUTTON_VALUES.RELEASE_DATE));
};
