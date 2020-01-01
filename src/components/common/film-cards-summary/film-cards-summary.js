import React from 'react';
import PropTypes from 'prop-types';

import styles from './film-cards-summary.module.css';

export const FilmCardsSummaryTypes = {
  SAME_GENRES: 'SAME_GENRES',
  AMOUNT_FOUND_FILMS: 'AMOUNT_FOUND_FILMS',
};

export const FilmsCardsSummary = ({ filmsSummary }) => (
  <p className={styles.text}>{filmsSummary}</p>
);

FilmsCardsSummary.propTypes = {
  filmsSummary: PropTypes.string,
};
