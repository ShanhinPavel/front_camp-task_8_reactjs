import React from 'react';
import PropTypes from 'prop-types';

import './search-input.css';

export const SearchInput = ({ value, onChange }) => {
  return <input type="text" size="40" value={value} onChange={onChange} className="text-input" />;
};

SearchInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
