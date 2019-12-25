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

export const TabSectionTypes = {
  SORT_BY: 'sortBy',
  SEARCH_BY: 'searchBy',
};

export const TabButtonSection = ({ sectionTitle, tabButtonsTitles, tabAction, tabType }) => {
  const dispatch = useDispatch();
  const activeValue = useSelector((state) => state[tabType]);
  const [firstButtonTitle, secondButtonTitle] = tabButtonsTitles;
  const firstButtonValue = TabButtonValues[firstButtonTitle];
  const secondButtonValue = TabButtonValues[secondButtonTitle];

  return (
    <div className={styles.container}>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
      <TabButton
        title={firstButtonTitle}
        onClickButton={() => dispatch(tabAction(firstButtonValue))}
        rightRadius={false}
        isClicked={firstButtonValue === activeValue}
      />
      <TabButton
        title={secondButtonTitle}
        onClickButton={() => dispatch(tabAction(secondButtonValue))}
        rightRadius={true}
        isClicked={secondButtonValue === activeValue}
      />
    </div>
  );
};

TabButtonSection.propTypes = {
  sectionTitle: PropTypes.string,
  tabButtonsTitles: PropTypes.arrayOf(PropTypes.string),
};
