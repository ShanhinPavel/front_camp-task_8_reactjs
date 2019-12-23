const initialTextInputReducer = '';

export const textInputReducer = function (state = initialTextInputReducer, action) {
  switch (action.type) {
    case 'SET_TEXT_INPUT_VALUE':
      return action.textInputValue;
  }
  return state;
};
