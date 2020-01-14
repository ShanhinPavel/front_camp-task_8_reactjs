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
  Spinner,
  Error,
} from '../../components';
import { HomeHeader } from './home-header';
import { fetchFilms, activeLoading } from '../../actions';
import { generateMoviesAmount } from '../../components/common/film-cards-summary';
import { setSortType } from '../../actions';

export const Home = () => {
  const dispatch = useDispatch();
  const { textInputValue, searchBy, sortBy, filmsList, isLoading, error } = useSelector(
    (state) => state,
  );

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

  const handleClickCard = () => {
    dispatch(activeLoading(true));
  };

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <div className="home-container">
        <HomeHeader />
        <div className="films-sorting-summary">
          <FilmsCardsSummary filmsSummary={generateMoviesAmount(filmsList)} />
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
        <FilmInfoCardsSection handleClickCard={handleClickCard} filmsList={filmsList} />
      </div>
      <Footer />
    </>
  );
};
