import { request } from '../request'

const FILMS_BY_ID_PATH = 'https://reactjs-cdp.herokuapp.com/movies/'

export const getFilmById = (filmId) => {
  const url = `${FILMS_BY_ID_PATH}${filmId}`;
  return request(url)
}