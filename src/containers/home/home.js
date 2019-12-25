import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './home.module.css';
import {
  FilmsCardsSummary,
  FilmInfoCardsSection,
  Footer,
  TabButtonSection,
  TabButtonSectionTitles,
} from '../../components';
import { Header } from './header';
import { fetchFilms } from '../../actions';
import { generateStingWithAmountFoundMovies } from '../../components/common/film-cards-summary';
import { setSortType } from '../../actions';
import { TabSectionTypes } from '../../components/common/tab-buttons-section/tab-buttons-section';

export const Home = () => {
  const dispatch = useDispatch();
  const { textInputValue, searchBy, sortBy, filmsList } = useSelector((state) => state);

  useEffect(() => {
    dispatch(
      fetchFilms({
        searchBy: searchBy,
        sortBy: sortBy,
        search: textInputValue,
      }),
    );
  }, []);

  const sortingSectionActiveTab = useSelector((state) => state[TabSectionTypes.SORT_BY]);
  const clickTabSorting = (buttonValue) => {
    dispatch(setSortType(buttonValue));
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.filmsCardsSortingSummary}>
        <FilmsCardsSummary filmsSummary={generateStingWithAmountFoundMovies(filmsList)} />
        <TabButtonSection
          tabButtonsTitles={[TabButtonSectionTitles.RAITING, TabButtonSectionTitles.RELEASE_DATE]}
          sectionTitle={TabButtonSectionTitles.SORT_BY}
          activeTab={sortingSectionActiveTab}
          onClickTabButton={clickTabSorting}
        />
      </div>
      <FilmInfoCardsSection />
      <Footer />
    </div>
  );
};
