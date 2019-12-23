import React from 'react';
import PropTypes from 'prop-types';

import styles from './poster.module.css';

export const Poster = props => {
  const { title, poster_path } = props;

  return <img alt={title} src={poster_path} className={styles.poster} />;
};

Poster.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string
};
