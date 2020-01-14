import { combineReducers } from 'redux';
import { filmsList } from './films-list';
import { filmDetails } from './film-details';
import { searchBy } from './search-by';
import { sortBy } from './sort-by';
import { textInput } from './text-input';
import { error } from './error';
import { loading } from './loading';

export const reducers = combineReducers({
  filmsList,
  filmDetails,
  textInputValue: textInput,
  searchBy,
  sortBy,
  error,
  isLoading: loading,
});
