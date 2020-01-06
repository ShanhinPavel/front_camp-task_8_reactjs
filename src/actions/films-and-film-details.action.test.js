import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchFilmsDetailsAndFilmsByGenres } from './films-and-film-details.action';
import { RECEIVE_FILMS } from './films.action';
import { RECEIVE_FILM_DETAILS } from './film-details.action';

const mockArrayOfFilms = [
  { title: 'transformers', genre: 'action' },
  { title: 'transformers5', genre: 'action' },
];

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('fetchFilmsDetails action', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('getting filmDetails executes with success', () => {
    beforeAll(() => {
      store.dispatch(fetchFilmsDetailsAndFilmsByGenres(1));
    });

    const store = mockStore({});

    fetch
      .once(JSON.stringify({ id: '12345', genres: ['action'] }))
      .once(JSON.stringify({ data: mockArrayOfFilms }));

    const actions = store.getActions();

    it('should return object {type: "LOADING", isLoading: true} ', () => {
      expect(actions[0]).toEqual({ type: 'LOADING', isLoading: true });
    });

    it('should return object with fields type and filmDetails ', () => {
      expect(actions[1]).toEqual({
        type: RECEIVE_FILM_DETAILS,
        filmDetails: { id: '12345', genres: ['action'] },
      });
    });

    it('should return object { type: "LOADING", isLoading: false }', () => {
      expect(actions[2]).toEqual({ type: 'LOADING', isLoading: false });
    });

    it('should return object with fields type and films ', () => {
      expect(actions[3]).toEqual({
        type: RECEIVE_FILMS,
        films: mockArrayOfFilms,
      });
    });
  });

  describe('getting filmDetails executes with fail', () => {
    beforeAll(() => {
      store.dispatch(fetchFilmsDetailsAndFilmsByGenres(1));
    });
    const store = mockStore({});
    fetch.mockReject(new Error('Server did not respond'));
    const actions = store.getActions();

    it('should return object with error field', () => {
      expect(actions[0]).toEqual({ type: 'LOADING', isLoading: true });
      expect(actions[1]).toEqual({ error: true, type: 'DOWNLOADING_ERROR' });
      expect(actions[2]).toEqual({ type: 'LOADING', isLoading: false });
    });
  });
});
