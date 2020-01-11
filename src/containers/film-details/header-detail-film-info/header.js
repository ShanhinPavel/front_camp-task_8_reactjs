import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';

import { Logo, Poster, Title, Error, Spinner } from '../../../components';
import './header-detail-film-info.css';
import { getReleaseYear } from '../../../utils';
import { Routes } from '../../../routes';
import { setDefaultFilmsSearchingSortingParams } from '../../../actions';

export const DetailFilmInfoHeader = () => {
  const dispatch = useDispatch();
  const { filmDetails, error, isLoading } = useSelector((state) => state);

  if (error) return <Error />;
  if (isLoading) return <Spinner />;

  const { poster_path, title, vote_average, runtime = 200, release_date, overview } = filmDetails;
  const releaseYear = getReleaseYear(release_date);

  return (
    <div className="film-details-header">
      <div className="logo-search-button">
        <Logo />
        <Link
          to={{ pathname: Routes.home }}
          onClick={dispatch(setDefaultFilmsSearchingSortingParams)}
        >
          <FontAwesomeIcon icon={faSearch} size="3x" color="#f65261" />
        </Link>
      </div>
      <div className="film-details-info">
        <Poster poster_path={poster_path} title={title} />
        <div className="general-info">
          <div className="title-rating">
            <Title content={title} />
            <p className="raiting">{vote_average}</p>
          </div>
          <div className="duration-release-date">
            <p className="release-date">{releaseYear}</p>
            <p className="duration">{runtime} min</p>
          </div>
          <p className="description">{overview}</p>
        </div>
      </div>
    </div>
  );
};
