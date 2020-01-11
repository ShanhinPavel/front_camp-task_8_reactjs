import { CLEAR_TEXT_INPUT_VALUE, SET_TEXT_INPUT_VALUE } from '../constants';

export const clearTextInputValue = () => ({
  type: CLEAR_TEXT_INPUT_VALUE,
  textInputValue: '',
});

export const setTextInputValue = (textInputValue) => ({
  type: SET_TEXT_INPUT_VALUE,
  textInputValue,
});
