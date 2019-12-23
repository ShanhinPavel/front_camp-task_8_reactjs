import { request } from '../request';

export const searchBy = {
  GENRES: 'genres',
  TITLE: 'title',
};

export const sortBy = {
  RELEASE_DATE: 'release_date',
  RATING: 'vote_count',
};

export const queryParams = {
  SEARCH_BY: 'searchBy',
  SEARCH: 'search',
  SORT_BY: 'sortBy',
  SORT_ORDER: 'sortOrder',
  FILTER: 'filter',
  OFFSET: 'offset',
  LIMIT: 'limit',
};

const FILMS_BY_ID_PATH = 'https://reactjs-cdp.herokuapp.com/movies';

export const getFilmsByQuery = (searchParams) => {
  const queryString = Object.entries(searchParams)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const url = `${FILMS_BY_ID_PATH}?${queryString}`;
  return request(url);
};
