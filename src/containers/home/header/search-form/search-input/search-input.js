import React from 'react';
import PropTypes from 'prop-types';

import './search-input.css';

export const SearchInput = ({ inputValue, onChangeInputValue }) => {
  return (
    <input
      type="text"
      size="40"
      value={inputValue}
      onChange={onChangeInputValue}
      className="text-input"
    />
  );
};

SearchInput.propTypes = {
  inputValue: PropTypes.string.isRequired,
  onChangeInputValue: PropTypes.func.isRequired,
};
