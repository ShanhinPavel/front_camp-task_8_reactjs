import {
  CLEAR_INPUT_VALUE,
  SET_INPUT_VALUE,
  clearInputValue,
  setInputValue,
} from './text-input-action';

describe('Text input action', () => {
  it('should return object when function clearTextInputValue is called', () => {
    expect(clearInputValue()).toEqual({ type: CLEAR_INPUT_VALUE, textInputValue: '' });
  });

  it('should reuturn object when function setTextInputValue is called', () => {
    expect(setInputValue('transformers')).toEqual({
      type: SET_INPUT_VALUE,
      textInputValue: 'transformers',
    });
  });
});
