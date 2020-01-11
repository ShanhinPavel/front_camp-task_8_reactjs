export const CLEAR_INPUT_VALUE = 'CLEAR_INPUT_VALUE';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';
import { CLEAR_TEXT_INPUT_VALUE, SET_TEXT_INPUT_VALUE } from '../constants';

export const clearInputValue = () => ({
  type: CLEAR_INPUT_VALUE,
  textInputValue: '',
});

export const setInputValue = (textInputValue) => ({
  type: SET_INPUT_VALUE,
  textInputValue,
});
