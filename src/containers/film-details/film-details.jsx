import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmsDetailsAndFilmsByGenres, activeLoading } from '../../actions';
import './film-details.css';
import { FilmDetailsHeader } from './film-details-header';
import { FilmsCardsSummary, Footer, FilmInfoCardsSection } from '../../components/common';
import { generateMoviesGenre } from '../../components/common/film-cards-summary';
import { useParams } from 'react-router-dom';

export const FilmDetails = () => {
  const dispatch = useDispatch();
  const { filmDetails } = useSelector((state) => state);
  const { filmId } = useParams();

  dispatch(activeLoading);

  useEffect(() => {
    dispatch(fetchFilmsDetailsAndFilmsByGenres(filmId));
  }, [filmId]);

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
