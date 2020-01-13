export const Routes = {
  home: '/',
  filmDetail: '/film/:filmId',
  error: '/error',
};

export const generateFilmDetailsPath = (filmId) => `/film/${filmId}`;
