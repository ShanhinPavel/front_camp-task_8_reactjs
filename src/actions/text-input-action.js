export const CLEAR_INPUT_VALUE = 'CLEAR_INPUT_VALUE';
export const SET_INPUT_VALUE = 'SET_INPUT_VALUE';

export const clearInputValue = () => ({
  type: CLEAR_INPUT_VALUE,
  textInputValue: '',
});

export const setInputValue = (textInputValue) => ({
  type: SET_INPUT_VALUE,
  textInputValue,
});
