import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { TabButton } from './tab-button';
import styles from './tab-buttons-section.module.css';

export const TabButtonSectionTitles = {
  GENRES: 'GENRES',
  TITLE: 'TITLE',
  SEARCH_BY: 'SEARCH BY',

  SORT_BY: 'SORT BY',
  RELEASE_DATE: 'RELEASE_DATE',
  RAITING: 'RAITING',
};

export const TabButtonValues = {
  GENRES: 'genres',
  TITLE: 'title',
  RELEASE_DATE: 'release_date',
  RAITING: 'vote_average',
};

export const TabButtonSection = ({ sectionTitle, tabButtonsTitles, tabAction }) => {
  const dispatch = useDispatch();
  const [firstButtonTitle, secondButtonTitle] = tabButtonsTitles;

  return (
    <div className={styles.container}>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
      <TabButton
        title={firstButtonTitle}
        onClickButton={() => dispatch(tabAction(TabButtonValues[firstButtonTitle]))}
        rightRadius={false}
      />
      <TabButton
        title={secondButtonTitle}
        onClickButton={() => dispatch(tabAction(TabButtonValues[secondButtonTitle]))}
        rightRadius={true}
      />
    </div>
  );
};

TabButtonSection.propTypes = {
  sectionTitle: PropTypes.string,
  tabButtonsTitles: PropTypes.arrayOf(PropTypes.string),
};
