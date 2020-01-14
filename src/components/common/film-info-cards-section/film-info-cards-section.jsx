import React from 'react';
import PropTypes from 'prop-types';

import { FilmCards } from './film-cards/film-cards';
import { FilmEntities } from '../../../services';
import './film-info-cards-section.css';

export const FilmInfoCardsSection = ({ filmsList, handleClickCard }) => {
  return (
    <div className="films-cards-section">
      <FilmCards handleClickCard={handleClickCard} filmsList={filmsList} />
    </div>
  );
};

FilmInfoCardsSection.propTypes = {
  filmsList: FilmEntities.Films,
  handleClickCard: PropTypes.func,
};
