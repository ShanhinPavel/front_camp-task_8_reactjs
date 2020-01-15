import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  receiveFilmDetails,
  fetchFilmsDetails,
  receiveFilmDetailsPreviousFetching,
} from './film-details';
import { RECEIVE_FILM_DETAILS, DOWNLOADING_ERROR, LOADING } from '../constants';

const middlewares = [thunk];

describe('receiveFilmDetails action', () => {
  it('should return object {type: "RECEIVE_FILM_DETAILS", filmDetails: {title: "transformers", genre: "action"}', () => {
    expect(receiveFilmDetails({ title: 'transformers', genre: 'action' })).toEqual({
      type: RECEIVE_FILM_DETAILS,
      filmDetails: { title: 'transformers', genre: 'action' },
    });
  });
});

describe('receiveFilmDetailsPreviousFetching', () => {
  const filmsList = [
    { id: 1, name: 'first' },
    { id: 2, name: 'second' },
  ];

  const mockStore = configureStore(middlewares);
  const store = mockStore({});

  beforeAll(() => {
    store.dispatch(receiveFilmDetailsPreviousFetching(2, filmsList));
  });

  it('should return object { filmDetails: { id: 2, name: second}, type: RECEIVE_FILM_DETAILS}', () => {
    const actions = store.getActions();

    expect(actions[0]).toEqual({
      filmDetails: {
        id: 2,
        name: 'second',
      },
      type: 'RECEIVE_FILM_DETAILS',
    });
  });
});

const mockStore = configureStore(middlewares);

describe('fetchFilmsDetails action', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('getting filmDetails executes with success', () => {
    beforeAll(() => {
      store.dispatch(fetchFilmsDetails(1));
    });
    const store = mockStore({});
    fetch.mockResponseOnce(JSON.stringify({ id: '12345', genres: ['action'] }));
    const actions = store.getActions();

    it('should return object {type: "LOADING", isLoading: true} ', () => {
      expect(actions[0]).toEqual({ type: LOADING, isLoading: true });
    });

    it('should return object { type: "LOADING", isLoading: false }', () => {
      expect(actions[1]).toEqual({ type: LOADING, isLoading: false });
    });

    it('should return object with fields type and filmDetails ', () => {
      expect(actions[2]).toEqual({
        type: RECEIVE_FILM_DETAILS,
        filmDetails: { id: '12345', genres: ['action'] },
      });
    });
  });

  describe('getting filmDetails executes with fail', () => {
    beforeAll(() => {
      store.dispatch(fetchFilmsDetails(1));
    });
    const store = mockStore({});
    fetch.mockReject(new Error('Server did not respond'));
    const actions = store.getActions();

    it('should return object with error field', () => {
      expect(actions[0]).toEqual({ type: LOADING, isLoading: true });
      expect(actions[1]).toEqual({ type: LOADING, isLoading: false });
      expect(actions[2]).toEqual({ error: true, type: DOWNLOADING_ERROR });
    });
  });
});
