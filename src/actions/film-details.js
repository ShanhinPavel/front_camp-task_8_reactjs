import { activeError } from './active-error';
import { activeLoading } from './active-loading';
import { getFilmById } from '../services/api';
import { RECEIVE_FILM_DETAILS } from '../constants';

export const receiveFilmDetails = (filmDetails) => ({
  type: RECEIVE_FILM_DETAILS,
  filmDetails: { ...filmDetails },
});

export const fetchFilmsDetails = (filmId) => (dispatch) => {
  dispatch(activeLoading(true));

  return getFilmById(filmId).then(
    (response) => {
      dispatch(activeLoading(false));
      dispatch(receiveFilmDetails(response));
    },
    (error) => {
      dispatch(activeLoading(false));
      dispatch(activeError(true));
    },
  );
};
