import React from 'react';
import PropTypes from 'prop-types';

import { FilmEntities } from '../../../../../services';
import './film-info-card.css';
import { concatGenres, getReleaseYear } from '../../../../../utils';
import { Poster } from '../../../poster';
import { Link } from 'react-router-dom';
import { generateFilmDetailsPath } from '../../../../../routes';

export const FilmInfoCard = ({ filmInfo, onClick }) => {
  const { poster_path, title, genres, release_date, id } = filmInfo;

  const relatedGenres = concatGenres(genres);
  const releaseYear = getReleaseYear(release_date);

  return (
    <div className="film-info-card">
      <Link to={generateFilmDetailsPath(id)} onClick={onClick}>
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
  filmInfo: FilmEntities.Film,
  onClick: PropTypes.func,
};
