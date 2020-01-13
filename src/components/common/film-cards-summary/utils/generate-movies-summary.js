export const generateMoviesAmount = (foundMovies) => `${foundMovies.length} movies have been found`;

export const generateMoviesGenre = (filmDetails) => (filmDetails.genres ? `Films by ${filmDetails.genres[0]} genre` : '');
