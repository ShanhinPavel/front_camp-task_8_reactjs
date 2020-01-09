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
import styles from './header.css';
import { setSearchType } from '../../../actions';

const FIND_YOUR_MOVIE = 'FIND YOUR MOVIE';

export const Header = () => {
  const dispatch = useDispatch();

  const searchingSectionActiveTab = useSelector(
    (state) => state[TAB_BUTTON_SECTION_TYPES.SEARCH_BY],
  );

  const clickSearchingSectionTab = (buttonValue) => {
    dispatch(setSearchType(buttonValue));
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.searchContainer}>
        <Title content={FIND_YOUR_MOVIE} />
        <SearchForm />
        <TabButtonSection
          sectionTitle={TAB_BUTTON_SECTION_TITLES.SEARCH_BY}
          tabButtonsTitles={[TAB_BUTTON_SECTION_TITLES.TITLE, TAB_BUTTON_SECTION_TITLES.GENRES]}
          activeTab={searchingSectionActiveTab}
          onClickTabButton={clickSearchingSectionTab}
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
