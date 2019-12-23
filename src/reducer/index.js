import { combineReducers } from 'redux';
import { filmListReducer } from './film-list-reducer';
import { filmDetailsReducer } from './film-details-reducer';
import { searchByReducer } from './search-by-reducer';
import { sortByReducer } from './sort-by-reducer';
import { textInputReducer } from './text-input-reducer';
import { errorReducer } from './error-reducer';
import { loadingReducer } from './loading-data-reducer';

export const allReducers = combineReducers({
  filmsList: filmListReducer,
  filmDetails: filmDetailsReducer,
  textInputValue: textInputReducer,
  searchBy: searchByReducer,
  sortBy: sortByReducer,
  error: errorReducer,
  isLoading: loadingReducer,
});
