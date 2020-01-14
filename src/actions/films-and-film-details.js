import { receiveFilmDetails } from './film-details';
import { receiveFilms } from './films';
import { activeLoading } from './active-loading';
import { activeError } from './active-error';
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
          const filteredFilms = response.data.filter((film) => film.id !== +filmId);

          dispatch(receiveFilms({ ...response, data: filteredFilms }));
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
