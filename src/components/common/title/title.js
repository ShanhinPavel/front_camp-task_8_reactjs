import React from 'react';
import PropTypes from 'prop-types';

export const Title = (props) => {
  const { content } = props;
  return <h1 style={{ color: '#ffffff' }}>{content}</h1>;
};

Title.propTypes = {
  content: PropTypes.string.isRequired,
};
