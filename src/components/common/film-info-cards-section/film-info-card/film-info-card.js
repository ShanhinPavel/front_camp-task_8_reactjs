import React from 'react';
import PropTypes from 'prop-types';

import './film-info-card.module.css';
import { concatGenres, getReleaseYear } from '../../../../utils';
import { Poster } from '../../poster';
import { Link } from 'react-router-dom';
import { generatePathToFilmDetails } from '../../../../routes/';

export const FilmInfoCard = ({ filmInfo, onClick }) => {
  const { poster_path, title, genres, release_date, id } = filmInfo;

  const relatedGenres = concatGenres(genres);
  const releaseYear = getReleaseYear(release_date);

  return (
    <div className="film-info-card">
      <Link to={generatePathToFilmDetails(id)} onClick={onClick}>
        <Poster title={title} poster_path={poster_path} />
      </Link>
      <div className="film-info-card-summary">
        <div className="title-relise">
          <p className="film-title">{title}</p>
          <p className="film-relise">{releaseYear}</p>
        </div>
        <p className="film-genre">{relatedGenres}</p>
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
