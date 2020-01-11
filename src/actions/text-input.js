import { CLEAR_INPUT_VALUE, SET_INPUT_VALUE } from '../constants';

export const clearInputValue = () => ({
  type: CLEAR_INPUT_VALUE,
  textInputValue: '',
});

export const setInputValue = (textInputValue) => ({
  type: SET_INPUT_VALUE,
  textInputValue,
});
