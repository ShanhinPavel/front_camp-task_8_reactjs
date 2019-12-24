export const generateStingWithAmountFoundMovies = (foundMovies) => `${foundMovies.length} movies have been found`;

export const generateStringWithGenreFoundMovies = (filmDetails) => (filmDetails.genres ? `Films by ${filmDetails.genres[0]} genre` : '');
