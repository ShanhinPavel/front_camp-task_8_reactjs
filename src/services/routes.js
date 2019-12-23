export const Routes = {
  home: '/',
  filmDetail: '/film/:filmId',
  error: '/error',
};

export const generatePathToFilmDetails = (filmId) => `/film/${filmId}`;
