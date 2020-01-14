import React from 'react';
import PropTypes from 'prop-types';

import { FilmInfoCard } from './film-info-card';
import { FilmEntities } from '../../../../services';

export const FilmCards = ({ filmsList, handleClickCard }) => {
  if (!filmsList.length) return <p className="no-films-message">No films found</p>;

  return filmsList.map((filmInfo) => (
    <FilmInfoCard key={filmInfo.id} filmInfo={filmInfo} onClick={handleClickCard} />
  ));
};

FilmCards.propTypes = {
  filmsList: FilmEntities.Films,
  handleClickCard: PropTypes.func,
};
