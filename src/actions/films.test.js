import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { fetchFilms, receiveFilms } from './films';
import { RECEIVE_FILMS, LOADING, DOWNLOADING_ERROR } from '../constants';

const mockArrayOfFilms = [
  { title: 'transformers', genre: 'action' },
  { title: 'transformers5', genre: 'action' },
];

describe('receiveFilms action', () => {
  it('should return object {type: "RECEIVE_FILMS", films: [{title: "transformers", genre: "action"}]}', () => {
    expect(
      receiveFilms({
        data: mockArrayOfFilms,
      }),
    ).toEqual({
      type: RECEIVE_FILMS,
      films: mockArrayOfFilms,
    });
  });
});

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('fetchFilmsDetails action', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  describe('getting filmDetails executes with success', () => {
    beforeAll(() => {
      store.dispatch(fetchFilms({}));
    });
    const store = mockStore({});
    fetch.mockResponseOnce(JSON.stringify({ data: mockArrayOfFilms }));
    const actions = store.getActions();

    it('should return object {type: "LOADING", isLoading: true} ', () => {
      expect(actions[0]).toEqual({ type: LOADING, isLoading: true });
    });

    it('should return object { type: "LOADING", isLoading: false }', () => {
      expect(actions[1]).toEqual({ type: LOADING, isLoading: false });
    });

    it('should return object with fields type and films ', () => {
      expect(actions[2]).toEqual({
        type: RECEIVE_FILMS,
        films: mockArrayOfFilms,
      });
    });
  });

  describe('getting films executes with fail', () => {
    beforeAll(() => {
      store.dispatch(fetchFilms({}));
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
