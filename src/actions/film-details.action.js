import { activeError } from './active-error.action';
import { activeLoading } from './active-loading.action';
import { getFilmById } from '../services/api';

export const RECEIVE_FILM_DETAILS = 'RECEIVE_FILM_DETAILS';

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
