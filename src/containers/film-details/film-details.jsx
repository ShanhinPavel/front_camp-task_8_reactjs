import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchFilmsDetailsAndFilmsByGenres,
  receiveFilmDetailsPreviousFetching,
} from '../../actions';
import { FilmDetailsHeader } from './film-details-header';
import { FilmsCardsSummary, Footer, FilmInfoCardsSection } from '../../components/common';
import { generateMoviesGenre } from '../../components/common/film-cards-summary';
import { useParams } from 'react-router-dom';
import './film-details.css';

export const FilmDetails = () => {
  const dispatch = useDispatch();
  const { filmDetails, filmsList } = useSelector((state) => state);
  const { filmId } = useParams();
  const [filmsDownloaded, setFilmsDownloaded] = useState(false);
  console.log(filmsDownloaded);
  console.log(filmsList);

  useEffect(() => {
    if (!filmsDownloaded) {
      dispatch(fetchFilmsDetailsAndFilmsByGenres(filmId));
      setFilmsDownloaded(true);
    } else {
      dispatch(receiveFilmDetailsPreviousFetching(filmId, filmsList));
    }
  }, [filmId]);

  const filteredFilmsList = filmsList.filter((film) => film.id !== +filmId);

  return (
    <>
      <div className="film-details-container">
        <FilmDetailsHeader />
        <div className="films-genre-summary">
          <FilmsCardsSummary filmsSummary={generateMoviesGenre(filmDetails)} />
        </div>
        <FilmInfoCardsSection filmsList={filteredFilmsList} />
      </div>
      <Footer />
    </>
  );
};
