import React from 'react';
import PropTypes from 'prop-types';

import './tab-button.css';

export const TabButton = ({ onClick, title, rightRadius, isClicked }) => {
  return (
    <button
      className={rightRadius ? ' tab-button right-button' : 'tab-button left-button'}
      onClick={onClick}
      style={{ backgroundColor: isClicked ? '#f65261' : '#232323' }}
    >
      {title}
    </button>
  );
};

TabButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  rightRadius: PropTypes.bool,
  isClicked: PropTypes.bool,
};
