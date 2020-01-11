import React from 'react';
import PropTypes from 'prop-types';
import './search-button.css';

export const SearchButton = ({ onClick }) => (
  <button className="search-button" onClick={onClick}>
    SEARCH
  </button>
);

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
