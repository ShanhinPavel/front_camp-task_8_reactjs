import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmsDetailsAndFilmsByGenres, activeLoading } from '../../actions';
import './film-details.css';
import { FilmDetailsHeader } from './film-details-header';
import { FilmsCardsSummary, Footer, FilmInfoCardsSection } from '../../components/common';
import { generateMoviesGenre } from '../../components/common/film-cards-summary';

export const FilmDetails = (props) => {
  const dispatch = useDispatch();
  const { filmDetails } = useSelector((state) => state);
  dispatch(activeLoading);

  useEffect(() => {
    const { filmId } = props.match.params;
    dispatch(fetchFilmsDetailsAndFilmsByGenres(filmId));
  }, [props.match.params]);

  return (
    <div className="film-details-container">
      <FilmDetailsHeader />
      <div className="films-genre-summary">
        <FilmsCardsSummary filmsSummary={generateMoviesGenre(filmDetails)} />
      </div>
      <FilmInfoCardsSection />
      <Footer />
    </div>
  );
};
