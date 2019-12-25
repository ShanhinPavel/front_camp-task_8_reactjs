import { setSortType } from './set-sort-type.action';
import { setSearchType } from './set-search-type.action';
import { clearTextInputValue } from './text-input-action';
import { TabButtonValues } from '../components/common/tab-buttons-section';

export const setDefaultFilmsSearchingSortingParams = (dispatch) => {
  dispatch(clearTextInputValue());
  dispatch(setSearchType(TabButtonValues.TITLE));
  dispatch(setSortType(TabButtonValues.RELEASE_DATE));
};
