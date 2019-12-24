import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import styles from './film-info-card.module.css';
import { concatGenres, getReleaseYear } from '../../../../utils';
import { Poster } from '../../poster';
import { Link } from 'react-router-dom';
import { generatePathToFilmDetails } from '../../../../services/routes';
import { fetchFilms, fetchFilmsDetailsAndFilmsByGenres, activeLoading } from '../../../../actions';
import { searchBy } from '../../../../services';

export const FilmInfoCard = (props) => {
  const dispatch = useDispatch();
  const { filmInfo } = props;
  const { poster_path, title, genres, release_date, id } = filmInfo;
  const relatedGenres = concatGenres(genres);
  const releaseYear = getReleaseYear(release_date);

  return (
    <div className={styles.cardContainer}>
      <Link to={generatePathToFilmDetails(id)} onClick={() => dispatch(activeLoading(true))}>
        <Poster title={title} poster_path={poster_path} />
      </Link>
      <div className={styles.filmInfoContainer}>
        <div className={styles.titleAndRealizeDataContainer}>
          <p className={styles.filmTitle}>{title}</p>
          <p className={styles.realizeData}>{releaseYear}</p>
        </div>
        <p className={styles.filmGenre}>{relatedGenres}</p>
      </div>
    </div>
  );
};

FilmInfoCard.propTypes = {
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
  runtime: PropTypes.number,
  genres: PropTypes.arrayOf(PropTypes.string),
};
