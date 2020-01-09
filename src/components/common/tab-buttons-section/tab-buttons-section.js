import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { TabButton } from './tab-button';
import styles from './tab-buttons-section.css';

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

export const TabButtonSection = ({
  sectionTitle,
  tabButtonsTitles,
  activeTab,
  onClickTabButton,
}) => {
  const [firstButtonTitle, secondButtonTitle] = tabButtonsTitles;
  const firstButtonValue = TabButtonValues[firstButtonTitle];
  const secondButtonValue = TabButtonValues[secondButtonTitle];

  return (
    <div className={styles.container}>
      <p className={styles.sectionTitle}>{sectionTitle}</p>
      <TabButton
        title={firstButtonTitle}
        onClickButton={() => onClickTabButton(firstButtonValue)}
        rightRadius={false}
        isClicked={firstButtonValue === activeTab}
      />
      <TabButton
        title={secondButtonTitle}
        onClickButton={() => onClickTabButton(secondButtonValue)}
        rightRadius={true}
        isClicked={secondButtonValue === activeTab}
      />
    </div>
  );
};

TabButtonSection.propTypes = {
  sectionTitle: PropTypes.string,
  tabButtonsTitles: PropTypes.arrayOf(PropTypes.string),
};
