import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchFilmsDetailsAndFilmsByGenres, activeLoading } from '../../actions';
import { FilmDetailsHeader } from './film-details-header';
import { FilmsCardsSummary, Footer, FilmInfoCardsSection } from '../../components/common';
import { generateMoviesGenre } from '../../components/common/film-cards-summary';
import { useParams } from 'react-router-dom';
import './film-details.css';

export const FilmDetails = () => {
  const dispatch = useDispatch();
  const { filmDetails, filmsList } = useSelector((state) => state);
  const { filmId } = useParams();

  useEffect(() => {
    dispatch(activeLoading(true));
    dispatch(fetchFilmsDetailsAndFilmsByGenres(filmId));
  }, [filmId]);

  const handleClickCard = () => {
    dispatch(activeLoading(true));
  };

  return (
    <>
      <div className="film-details-container">
        <FilmDetailsHeader />
        <div className="films-genre-summary">
          <FilmsCardsSummary filmsSummary={generateMoviesGenre(filmDetails)} />
        </div>
        <FilmInfoCardsSection filmsList={filmsList} handleClickCard={handleClickCard} />
      </div>
      <Footer />
    </>
  );
};
