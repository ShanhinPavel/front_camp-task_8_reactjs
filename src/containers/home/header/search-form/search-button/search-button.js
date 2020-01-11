import React from 'react';
import PropTypes from 'prop-types';
import './search-button.css';

export const SearchButton = ({ onClickSearchButton }) => (
  <button className="search-button" onClick={onClickSearchButton}>
    SEARCH
  </button>
);

SearchButton.propTypes = {
  onClickSearchButton: PropTypes.func.isRequired,
};
