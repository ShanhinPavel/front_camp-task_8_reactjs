import React from 'react';
import PropTypes from 'prop-types';

import './poster.css';

export const Poster = (props) => {
  const { title, poster_path } = props;

  return <img alt={title} src={poster_path} className="poster" />;
};

Poster.propTypes = {
  title: PropTypes.string,
  poster_path: PropTypes.string,
};
