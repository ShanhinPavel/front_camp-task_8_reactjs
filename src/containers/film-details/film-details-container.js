import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilmsDetailsAndFilmsByGenres } from '../../actions';
import styles from './detail-film-info.module.css';
import { Header } from './header-detail-film-info';
import { FilmsCardsSummary, Footer, FilmInfoCardsSection } from '../../components/common/';

export const FilmDetailsContainer = (props) => {
  const dispatch = useDispatch();
  const { error, isLoading } = useSelector((state) => state);

  useEffect(() => {
    const { filmId } = props.match.params;
    dispatch(fetchFilmsDetailsAndFilmsByGenres(filmId));
  }, [props.match.params]);

  if (error) return <div>Error</div>;

  if (isLoading) return <div>Spinner</div>;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.filmsCardsSortingSummary}>
        <FilmsCardsSummary />
      </div>
      <FilmInfoCardsSection />
      <Footer />
    </div>
  );
};
