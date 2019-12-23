export const errorReducer = (state = false, action) => {
  switch (action.type) {
    case 'DOWNLOADING_ERROR':
      return action.error;
    default:
      return state;
  }
};
