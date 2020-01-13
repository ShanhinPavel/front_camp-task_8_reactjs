import React from 'react';
import PropTypes from 'prop-types';

import './film-cards-summary.css';

export const FilmCardsSummaryTypes = {
  SAME_GENRES: 'SAME_GENRES',
  AMOUNT_FOUND_FILMS: 'AMOUNT_FOUND_FILMS',
};

export const FilmsCardsSummary = ({ filmsSummary }) => (
  <p className={'films_summary'}>{filmsSummary}</p>
);

FilmsCardsSummary.propTypes = {
  filmsSummary: PropTypes.string,
};
