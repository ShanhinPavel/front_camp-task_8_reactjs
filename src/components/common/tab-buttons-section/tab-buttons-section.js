import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { TabButton } from './tab-button';
import styles from './tab-buttons-section.module.css';
import { setSearchType } from '../../../actions/';

export const TabButtonSectionTitles = {
  GENRES: 'GENRES',
  TITLE: 'TITLE',
  SEARCH_BY: 'SEARCH BY',

  SORT_BY: 'SORT BY',
  RELEASE_DATE: 'REALISE_DATE',
  RAITING: 'RAITING',
};

const TabButtonValues = {
  GENRES: 'genres',
  TITLE: 'title',
  REALISE_DATE: 'release_date',
  RAITING: 'vote_count',
};

export const TabButtonSection = ({ sectionTitle, tabButtonsTitles }) => {
  const dispatch = useDispatch();

  const createTabButtons = (tabButtonsTitles) =>
    tabButtonsTitles.map((tabButtonTitle, index) => (
      <TabButton
        title={tabButtonTitle}
        onClickButton={() => dispatch(setSearchType(TabButtonValues[tabButtonTitle]))}
        key={tabButtonTitle}
        rightRadius={!!index}
      />
    ));

  return (
    <div className={styles.container}>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
      {createTabButtons(tabButtonsTitles)}
    </div>
  );
};

TabButtonSection.propTypes = {
  sectionTitle: PropTypes.string,
  tabButtonsTitles: PropTypes.arrayOf(PropTypes.string),
};
