import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmsDetailsAndFilmsByGenres, activeLoading } from '../../actions';
import './detail-film-info.css';
import { Header } from './header-detail-film-info';
import { FilmsCardsSummary, Footer, FilmInfoCardsSection } from '../../components/common';
import { generateStringWithGenreFoundMovies } from '../../components/common/film-cards-summary';

export const FilmDetailsContainer = (props) => {
  const dispatch = useDispatch();
  const { filmDetails } = useSelector((state) => state);
  dispatch(activeLoading);

  useEffect(() => {
    const { filmId } = props.match.params;
    dispatch(fetchFilmsDetailsAndFilmsByGenres(filmId));
  }, [props.match.params]);

  return (
    <div className="film-details-container">
      <Header />
      <div className="films-genre-summary">
        <FilmsCardsSummary filmsSummary={generateStringWithGenreFoundMovies(filmDetails)} />
      </div>
      <FilmInfoCardsSection />
      <Footer />
    </div>
  );
};
