import React from 'react';
import PropTypes from 'prop-types';

import './tab-button.css';

export const TabButton = (props) => {
  const { onClickButton, title, rightRadius, isClicked } = props;

  return (
    <button
      className={rightRadius ? ' tab-button right-button' : 'tab-button left-button'}
      onClick={onClickButton}
      style={{ backgroundColor: isClicked ? '#f65261' : '#232323' }}
    >
      {title}
    </button>
  );
};

TabButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
  rightRadius: PropTypes.bool,
  isClicked: PropTypes.bool,
};
