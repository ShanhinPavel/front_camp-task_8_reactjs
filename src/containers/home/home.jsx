import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './home.css';
import {
  FilmsCardsSummary,
  FilmInfoCardsSection,
  Footer,
  TabButtonSection,
  TAB_BUTTON_SECTION_TITLES,
  TAB_BUTTON_SECTION_TYPES,
} from '../../components';
import { Header } from './header';
import { fetchFilms } from '../../actions';
import { generateStingWithAmountFoundMovies } from '../../components/common/film-cards-summary';
import { setSortType } from '../../actions';

export const Home = () => {
  const dispatch = useDispatch();
  const { textInputValue, searchBy, sortBy, filmsList } = useSelector((state) => state);

  useEffect(() => {
    dispatch(
      fetchFilms({
        searchBy,
        sortBy,
        search: textInputValue,
      }),
    );
  }, []);

  const sortingSectionActiveTab = useSelector((state) => state[TAB_BUTTON_SECTION_TYPES.SORT_BY]);
  const handleClickTab = (buttonValue) => {
    dispatch(setSortType(buttonValue));
  };

  return (
    <div className="home-container">
      <Header />
      <div className="films-sorting-summary">
        <FilmsCardsSummary filmsSummary={generateStingWithAmountFoundMovies(filmsList)} />
        <TabButtonSection
          tabButtonsTitles={[
            TAB_BUTTON_SECTION_TITLES.RAITING,
            TAB_BUTTON_SECTION_TITLES.RELEASE_DATE,
          ]}
          sectionTitle={TAB_BUTTON_SECTION_TITLES.SORT_BY}
          activeTab={sortingSectionActiveTab}
          onClickTab={handleClickTab}
        />
      </div>
      <FilmInfoCardsSection />
      <Footer />
    </div>
  );
};