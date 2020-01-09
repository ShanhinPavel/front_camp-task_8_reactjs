import React from 'react';
import PropTypes from 'prop-types';
import styles from './search-button.css';

const SEARCH = 'SEARCH';

export const SearchButton = ({ onClickSearchButton }) => (
  <button className={styles.button} onClick={onClickSearchButton}>
    {SEARCH}
  </button>
);

SearchButton.propTypes = {
  onClickSearchButton: PropTypes.func.isRequired,
};
