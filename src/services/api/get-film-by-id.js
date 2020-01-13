import PropTypes from 'prop-types';
import { request } from '../request';

const FILMS_BY_ID_PATH = 'https://reactjs-cdp.herokuapp.com/movies/';

export const getFilmById = (filmId) => {
  const url = `${FILMS_BY_ID_PATH}${filmId}`;
  return request(url);
};

export const Film = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  tagline: PropTypes.string,
  vote_average: PropTypes.number,
  vote_count: PropTypes.number,
  release_date: PropTypes.string,
  poster_path: PropTypes.string,
  overview: PropTypes.string,
  budget: PropTypes.number,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
});
