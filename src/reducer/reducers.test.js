import { errorReducer } from './error-reducer';
import { filmDetailsReducer } from './film-details-reducer';
import { filmListReducer } from './film-list-reducer';
import { TabButtonValues } from '../components/common/tab-buttons-section';
import { loadingReducer } from './loading-data-reducer';
import { searchByReducer } from './search-by-reducer';
import { sortByReducer } from './sort-by-reducer';
import { textInputReducer } from './text-input-reducer';

const initialState = {
  filmsList: [],
  filmDetails: {},
  textInputValue: '',
  searchBy: TabButtonValues.TITLE,
  sortBy: TabButtonValues.RELEASE_DATE,
  error: false,
  isLoading: true,
};

describe('test all reducers', () => {
  describe('error reducer', () => {
    it('should return true if action type DOWNLOADING_ERROR ', () => {
      expect(errorReducer(false, { type: 'DOWNLOADING_ERROR', error: true })).toBeTruthy();
    });

    it('should return return initial state if action type is not DOWNLOADING_ERROR ', () => {
      expect(errorReducer(false, { type: 'ERROR', error: true })).toBeFalsy();
    });
  });

  describe('filmDetails reducer', () => {
    it('should return object if action type RECEIVE_FILM_DETAILS ', () => {
      expect(
        filmDetailsReducer(
          {},
          {
            type: 'RECEIVE_FILM_DETAILS',
            filmDetails: { id: 12356, genres: ['action'] },
          },
        ),
      ).toEqual({ id: 12356, genres: ['action'] });
    });

    it('should return return initial state if action type is not RECEIVE_FILM_DETAILS ', () => {
      expect(filmDetailsReducer({}, { type: 'RECEIVE' })).toEqual({});
    });
  });

  describe('film-list reducer', () => {
    it('should return array with films if action type RECEIVE_FILMS ', () => {
      expect(
        filmListReducer([], {
          type: 'RECEIVE_FILMS',
          films: [{ id: 12356, genres: ['action'] }],
        }),
      ).toEqual([{ id: 12356, genres: ['action'] }]);
    });

    it('should return return initial state if action type is not RECEIVE_FILMS ', () => {
      expect(filmListReducer([], { type: 'RECEIVE' })).toEqual([]);
    });
  });

  describe('loading reducer', () => {
    it('should return false if action type LOADING ', () => {
      expect(
        loadingReducer(true, {
          type: 'LOADING',
          isLoading: false,
        }),
      ).toBeFalsy();
    });

    it('should return  initial state if action type is not LOADING ', () => {
      expect(loadingReducer(true, { type: 'LOAD' })).toBe(true);
    });
  });

  describe('searchByReducer reducer', () => {
    it('should return "genres" if action type SET_SEARCH_TYPE ', () => {
      expect(
        searchByReducer(TabButtonValues.TITLE, {
          type: 'SET_SEARCH_TYPE',
          searchType: TabButtonValues.GENRES,
        }),
      ).toBe(TabButtonValues.GENRES);
    });

    it('should return initial state if action type is not SET_SEARCH_TYPE ', () => {
      expect(searchByReducer(TabButtonValues.TITLE, { type: 'SET_TYPE' })).toBe(
        TabButtonValues.TITLE,
      );
    });
  });

  describe('sortByReducer reducer', () => {
    it('should return "vote_average" if action type SET_SORT_TYPE ', () => {
      expect(
        sortByReducer(TabButtonValues.RELEASE_DATE, {
          type: 'SET_SORT_TYPE',
          sortType: TabButtonValues.RAITING,
        }),
      ).toBe(TabButtonValues.RAITING);
    });

    it('should return initial state if action type is not SET_SORT_TYPE ', () => {
      expect(sortByReducer(TabButtonValues.RELEASE_DATE, { type: 'SET_TYPE' })).toBe(
        TabButtonValues.RELEASE_DATE,
      );
    });
  });

  describe('textInputReducer reducer', () => {
    it('should return "vote_average" if action type SET_TEXT_INPUT_VALUE ', () => {
      expect(
        textInputReducer('', {
          type: 'SET_TEXT_INPUT_VALUE',
          textInputValue: 'hello',
        }),
      ).toBe('hello');
    });

    it('should return initial state if action type is not SET_TEXT_INPUT_VALUE ', () => {
      expect(textInputReducer('', { type: 'SET_TEXT' })).toBe('');
    });
  });
});
