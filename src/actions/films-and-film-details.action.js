import { receiveFilmDetails } from './film-details.action';
import { receiveFilms } from './films.action';
import { activeLoading } from './active-loading.action';
import { activeError } from './active-error.action';
import { getFilmById, getFilmsByQuery } from '../services/api';
import { TAB_BUTTON_VALUES } from '../components/common/tab-buttons-section';

export const fetchFilmsDetailsAndFilmsByGenres = (filmId) => (dispatch) => {
  dispatch(activeLoading(true));

  return getFilmById(filmId).then(
    (response) => {
      const { genres } = response;

      dispatch(receiveFilmDetails(response));

      getFilmsByQuery({ search: genres[0], searchBy: TAB_BUTTON_VALUES.GENRES }).then(
        (response) => {
          dispatch(receiveFilms(response));
        },
      );
      dispatch(activeLoading(false));
    },
    (error) => {
      dispatch(activeError(true));
      dispatch(activeLoading(false));
    },
  );
};
