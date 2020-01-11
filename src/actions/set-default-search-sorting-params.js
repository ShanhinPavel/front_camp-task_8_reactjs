import { setSortType } from './set-sort-type';
import { setSearchType } from './set-search-type';
import { clearTextInputValue } from './text-input';
import { TabButtonValues } from '../components/common/tab-buttons-section';

export const setDefaultFilmsSearchingSortingParams = (dispatch) => {
  dispatch(clearTextInputValue());
  dispatch(setSearchType(TabButtonValues.TITLE));
  dispatch(setSortType(TabButtonValues.RELEASE_DATE));
};
