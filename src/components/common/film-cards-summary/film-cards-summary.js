import React from 'react';
import PropTypes from 'prop-types';

import styles from './film-cards-summary.module.css';
import { generateStingWithAmountFoundMovies } from './utils';
import { useSelector } from 'react-redux';

export const FilmsCardsSummary = () => {
  const { filmsList } = useSelector((state) => state);
  const filmsSummary = generateStingWithAmountFoundMovies(filmsList.length);

  return <p className={styles.text}>{filmsSummary}</p>;
};

FilmsCardsSummary.propTypes = {
  filmsSummary: PropTypes.string,
};
