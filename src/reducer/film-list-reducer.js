export { fetchFilms } from '../actions/films.action';

export const filmListReducer = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FILMS':
      return [...action.films];

    default:
      return state;
  }
};
