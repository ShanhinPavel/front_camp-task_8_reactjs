import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setDefaultFilmsSearchingSortingParams } from './set-default-search-sorting-params';
import { SET_SEARCH_TYPE, SET_SORT_TYPE, CLEAR_INPUT_VALUE } from '../constants';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  const store = mockStore({});
  const actions = store.getActions();

  beforeAll(() => {
    store.dispatch(setDefaultFilmsSearchingSortingParams());
  });

  it('should execute actions clearInputField, setSearchType, setSortType ', () => {
    expect(actions[0]).toEqual({ type: CLEAR_INPUT_VALUE, textInputValue: '' });
    expect(actions[1]).toEqual({ type: SET_SEARCH_TYPE, searchType: 'title' });
    expect(actions[2]).toEqual({ type: SET_SORT_TYPE, sortType: 'release_date' });
  });
});
