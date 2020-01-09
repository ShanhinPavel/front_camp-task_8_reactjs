const initialTextInput = '';

export const textInput = function (state = initialTextInput, action) {
  switch (action.type) {
    case 'SET_TEXT_INPUT_VALUE':
      return action.textInputValue;
  }
  return state;
};
