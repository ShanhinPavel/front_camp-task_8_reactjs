import { LOADING } from '../constants';

export const loading = (state = true, action) => {
  switch (action.type) {
    case LOADING:
      return action.isLoading;

    default:
      return state;
  }
};
