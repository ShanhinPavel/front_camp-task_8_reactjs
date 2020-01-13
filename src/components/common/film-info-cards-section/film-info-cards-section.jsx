import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import './film-info-cards-section.css';
import { FilmInfoCard } from './film-info-card';
import { activeLoading } from '../../../actions';
import { Error } from '../error';
import { Spinner } from '../spinner';

const createFilmInfoCards = (filmsList, clickCardHandler) => {
  if (!filmsList.length) return null;

  return filmsList.map((filmInfo) => (
    <FilmInfoCard key={filmInfo.id} filmInfo={filmInfo} onClick={clickCardHandler} />
  ));
};

export const FilmInfoCardsSection = () => {
  const { filmsList } = useSelector((state) => state);
  const dispatch = useDispatch();

  const hadleClickCard = () => {
    dispatch(activeLoading(true));
  };

  const filmsInfoCards = createFilmInfoCards(filmsList, hadleClickCard);

  return (
    <>
      {filmsInfoCards ? (
        <div className="films-cards-section">{filmsInfoCards}</div>
      ) : (
        <p className="no-films-message">No films found</p>
      )}
    </>
  );
};
