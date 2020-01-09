import { setSortType } from './set-sort-type.action';
import { setSearchType } from './set-search-type.action';
import { clearInputValue } from './text-input-action';
import { TAB_BUTTON_VALUES } from '../components/common/tab-buttons-section';

export const setDefaultFilmsSearchingSortingParams = (dispatch) => {
  dispatch(clearInputValue());
  dispatch(setSearchType(TAB_BUTTON_VALUES.TITLE));
  dispatch(setSortType(TAB_BUTTON_VALUES.RELEASE_DATE));
};
