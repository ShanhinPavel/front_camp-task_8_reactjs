import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import styles from './film-info-cards-section.module.css';
import { FilmInfoCard } from './film-info-card';

const createFilmInfoCards = (filmsList) => {
  if (!filmsList.length) return null;

  return filmsList.map((filmInfo) => <FilmInfoCard key={filmInfo.id} filmInfo={filmInfo} />);
};

export const FilmInfoCardsSection = () => {
  const { filmsList, isLoading, error } = useSelector((state) => state);
  const filmsInfoCards = createFilmInfoCards(filmsList);

  if (isLoading) return <div>Spinner</div>;
  if (error) return <div>Error</div>;

  return (
    <>
      {filmsInfoCards ? (
        <div className={styles.container}>{filmsInfoCards}</div>
      ) : (
        <p className={styles.noFilmsMessage}>No films found</p>
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
