import { RECEIVE_FILM_DETAILS, receiveFilmDetails } from './film-details.action';

describe('Film details action', () => {
  it('should return object {type: "RECEIVE_FILM_DETAILS", filmDetails: {title: "transformers", genre: "action"}', () => {
    expect(receiveFilmDetails({ title: 'transformers', genre: 'action' })).toEqual({
      type: 'RECEIVE_FILM_DETAILS',
      filmDetails: { title: 'transformers', genre: 'action' },
    });
  });
});
