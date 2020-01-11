import { SET_INPUT_VALUE, CLEAR_INPUT_VALUE } from '../constants';

const initialTextInput = '';

export const textInput = function (state = initialTextInput, action) {
  switch (action.type) {
    case CLEAR_INPUT_VALUE:
    case SET_INPUT_VALUE:
      return action.textInputValue;
  }

  return state;
};
