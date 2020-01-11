import { error } from './error';
import { filmDetails } from './film-details';
import { filmsList } from './films-list';
import { TAB_BUTTON_VALUES } from '../components/common/tab-buttons-section';
import { loading } from './loading-data';
import { searchBy } from './search-by';
import { sortBy } from './sort-by';
import { textInput } from './text-input';
import {
  DOWNLOADING_ERROR,
  RECEIVE_FILM_DETAILS,
  RECEIVE_FILMS,
  LOADING,
  SET_SEARCH_TYPE,
  SET_SORT_TYPE,
  SET_INPUT_VALUE,
} from '../constants';

describe('test all reducers', () => {
  describe('error reducer', () => {
    it('should return true if action type DOWNLOADING_ERROR ', () => {
      expect(error(false, { type: DOWNLOADING_ERROR, error: true })).toBeTruthy();
    });

    it('should return return initial state if action type is not DOWNLOADING_ERROR ', () => {
      expect(error(false, { type: 'ERROR', error: true })).toBeFalsy();
    });
  });

  describe('filmDetails reducer', () => {
    it('should return object if action type RECEIVE_FILM_DETAILS ', () => {
      expect(
        filmDetails(
          {},
          {
            type: RECEIVE_FILM_DETAILS,
            filmDetails: { id: 12356, genres: ['action'] },
          },
        ),
      ).toEqual({ id: 12356, genres: ['action'] });
    });

    it('should return return initial state if action type is not RECEIVE_FILM_DETAILS ', () => {
      expect(filmDetails({}, { type: 'RECEIVE' })).toEqual({});
    });
  });

  describe('film-list reducer', () => {
    it('should return array with films if action type RECEIVE_FILMS ', () => {
      expect(
        filmsList([], {
          type: RECEIVE_FILMS,
          films: [{ id: 12356, genres: ['action'] }],
        }),
      ).toEqual([{ id: 12356, genres: ['action'] }]);
    });

    it('should return return initial state if action type is not RECEIVE_FILMS ', () => {
      expect(filmsList([], { type: 'RECEIVE' })).toEqual([]);
    });
  });

  describe('loading reducer', () => {
    it('should return false if action type LOADING ', () => {
      expect(
        loading(true, {
          type: LOADING,
          isLoading: false,
        }),
      ).toBeFalsy();
    });

    it('should return  initial state if action type is not LOADING ', () => {
      expect(loading(true, { type: 'LOAD' })).toBe(true);
    });
  });

  describe('searchByReducer reducer', () => {
    it('should return "genres" if action type SET_SEARCH_TYPE ', () => {
      expect(
        searchBy(TAB_BUTTON_VALUES.TITLE, {
          type: SET_SEARCH_TYPE,
          searchType: TAB_BUTTON_VALUES.GENRES,
        }),
      ).toBe(TAB_BUTTON_VALUES.GENRES);
    });

    it('should return initial state if action type is not SET_SEARCH_TYPE ', () => {
      expect(searchBy(TAB_BUTTON_VALUES.TITLE, { type: 'SET_TYPE' })).toBe(TAB_BUTTON_VALUES.TITLE);
    });
  });

  describe('sortByReducer reducer', () => {
    it('should return "vote_average" if action type SET_SORT_TYPE ', () => {
      expect(
        sortBy(TAB_BUTTON_VALUES.RELEASE_DATE, {
          type: SET_SORT_TYPE,
          sortType: TAB_BUTTON_VALUES.RAITING,
        }),
      ).toBe(TAB_BUTTON_VALUES.RAITING);
    });

    it('should return initial state if action type is not SET_SORT_TYPE ', () => {
      expect(sortBy(TAB_BUTTON_VALUES.RELEASE_DATE, { type: 'SET_TYPE' })).toBe(
        TAB_BUTTON_VALUES.RELEASE_DATE,
      );
    });
  });

  describe('textInputReducer reducer', () => {
    it('should return "vote_average" if action type SET_TEXT_INPUT_VALUE ', () => {
      expect(
        textInput('', {
          type: SET_INPUT_VALUE,
          textInputValue: 'hello',
        }),
      ).toBe('hello');
    });

    it('should return initial state if action type is not SET_TEXT_INPUT_VALUE ', () => {
      expect(textInput('', { type: 'SET_TEXT' })).toBe('');
    });
  });
});
