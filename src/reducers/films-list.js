export const filmsList = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_FILMS':
      return [...action.films];

    default:
      return state;
  }
};
