import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Logo, Title, TabButtonSection, TabButtonSectionTitles } from '../../../components';
import { SearchForm } from './search-form';
import styles from './header.css';
import { setSearchType } from '../../../actions';
import { TabSectionTypes } from '../../../components/common/tab-buttons-section/tab-buttons-section';

const FIND_YOUR_MOVIE = 'FIND YOUR MOVIE';

export const Header = () => {
  const dispatch = useDispatch();

  const searchingSectionActiveTab = useSelector((state) => state[TabSectionTypes.SEARCH_BY]);

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
          sectionTitle={TabButtonSectionTitles.SEARCH_BY}
          tabButtonsTitles={[TabButtonSectionTitles.TITLE, TabButtonSectionTitles.GENRES]}
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
