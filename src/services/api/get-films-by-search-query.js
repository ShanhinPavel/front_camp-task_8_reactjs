import { request } from '../request';

export const QUERY_PARAMS = {
  SEARCH_BY: 'searchBy',
  SEARCH: 'search',
  SORT_BY: 'sortBy',
  SORT_ORDER: 'sortOrder',
  FILTER: 'filter',
  OFFSET: 'offset',
  LIMIT: 'limit',
};

const SORT_ORDER = {
  DESCENDING: 'desc',
  ASCENDING: 'asc',
};

const FILMS_BY_ID_PATH = 'https://reactjs-cdp.herokuapp.com/movies';

export const getFilmsByQuery = (searchParams) => {
  const queryString = Object.entries({
    ...searchParams,
    [QUERY_PARAMS.SORT_ORDER]: SORT_ORDER.DESCENDING,
  })
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
  const url = `${FILMS_BY_ID_PATH}?${queryString}`;
  return request(url);
};
