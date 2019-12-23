import React from 'react';
import PropTypes from 'prop-types';

import styles from './tab-button.module.css';

export const TabButton = props => {
  const { onClickButton, title, rightRadius, isClicked } = props;

  return (
    <button
      className={rightRadius ? styles.right : styles.left}
      onClick={onClickButton}
    >
      {title}
    </button>
  );
};

TabButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClickButton: PropTypes.func.isRequired,
  rightRadius: PropTypes.bool
};
