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
  const { filmsList, isLoading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  const hadleClickCard = () => {
    dispatch(activeLoading(true));
  };

  const filmsInfoCards = createFilmInfoCards(filmsList, hadleClickCard);

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

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

FilmInfoCardsSection.propTypes = {
  filmsInfo: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      tagline: PropTypes.string,
      vote_average: PropTypes.number,
      vote_count: PropTypes.number,
      release_date: PropTypes.string,
      poster_path: PropTypes.string,
      overview: PropTypes.string,
      budget: PropTypes.number,
      revenue: PropTypes.number,
      genres: PropTypes.arrayOf(PropTypes.string),
      runtime: PropTypes.number,
    }),
  ),
};
