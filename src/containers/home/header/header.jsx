import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import {
  Logo,
  Title,
  TabButtonSection,
  TAB_BUTTON_SECTION_TITLES,
  TAB_BUTTON_SECTION_TYPES,
} from '../../../components';
import { SearchForm } from './search-form';
import './header.css';
import { setSearchType, setDefaultFilmsSearchingSortingParams } from '../../../actions';

export const Header = () => {
  const dispatch = useDispatch();

  const searchingSectionActiveTab = useSelector(
    (state) => state[TAB_BUTTON_SECTION_TYPES.SEARCH_BY],
  );

  const handleClickTab = (buttonValue) => {
    dispatch(setSearchType(buttonValue));
  };

  const handleClickLogo = () => {
    dispatch(setDefaultFilmsSearchingSortingParams());
  };

  return (
    <div className="home-header-container">
      <div className="logo-container">
        <Logo onClick={handleClickLogo} />
      </div>
      <div className="search-container">
        <Title content="FIND YOUR MOVIE" />
        <SearchForm />
        <TabButtonSection
          sectionTitle={TAB_BUTTON_SECTION_TITLES.SEARCH_BY}
          tabButtonsTitles={[TAB_BUTTON_SECTION_TITLES.TITLE, TAB_BUTTON_SECTION_TITLES.GENRES]}
          activeTab={searchingSectionActiveTab}
          onClickTab={handleClickTab}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  onClickTabButton: PropTypes.func,
  onClickSubmitButton: PropTypes.func,
  changeInputTextFieldValue: PropTypes.func,
  textInputValue: PropTypes.string,
};
