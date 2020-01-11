import React from 'react';
import PropTypes from 'prop-types';

import { TabButton } from './tab-button';
import './tab-buttons-section.css';

export const TAB_BUTTON_SECTION_TITLES = {
  GENRES: 'GENRES',
  TITLE: 'TITLE',
  SEARCH_BY: 'SEARCH BY',

  SORT_BY: 'SORT BY',
  RELEASE_DATE: 'RELEASE_DATE',
  RAITING: 'RAITING',
};

export const TAB_BUTTON_VALUES = {
  GENRES: 'genres',
  TITLE: 'title',
  RELEASE_DATE: 'release_date',
  RAITING: 'vote_average',
};

export const TAB_BUTTON_SECTION_TYPES = {
  SORT_BY: 'sortBy',
  SEARCH_BY: 'searchBy',
};

export const TabButtonSection = ({ sectionTitle, tabButtonsTitles, activeTab, onClickTab }) => {
  const [firstButtonTitle, secondButtonTitle] = tabButtonsTitles;
  const firstButtonValue = TAB_BUTTON_VALUES[firstButtonTitle];
  const secondButtonValue = TAB_BUTTON_VALUES[secondButtonTitle];

  return (
    <div className="tab-buttons-section">
      <p className="section-title">{sectionTitle}</p>
      <TabButton
        title={firstButtonTitle}
        onClick={() => onClickTab(firstButtonValue)}
        rightRadius={false}
        isClicked={firstButtonValue === activeTab}
      />
      <TabButton
        title={secondButtonTitle}
        onClick={() => onClickTab(secondButtonValue)}
        rightRadius={true}
        isClicked={secondButtonValue === activeTab}
      />
    </div>
  );
};

TabButtonSection.propTypes = {
  sectionTitle: PropTypes.string,
  tabButtonsTitles: PropTypes.arrayOf(PropTypes.string),
  onClickTab: PropTypes.func,
  activeTab: PropTypes.string,
};
