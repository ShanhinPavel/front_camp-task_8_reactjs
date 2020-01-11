import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setInputValue, fetchFilms } from '../../../../actions';
import { SearchInput } from './search-input';
import { SearchButton } from './search-button';
import './search-form.css';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const { searchBy, sortBy, textInputValue } = useSelector((state) => state);

  const handleInputChange = (event) => {
    dispatch(setInputValue(event.target.value));
  };

  const handleButtonClick = () => {
    dispatch(fetchFilms({ search: textInputValue, sortBy, searchBy }));
  };

  return (
    <div className="search-form">
      <SearchInput value={textInputValue} onChange={handleInputChange} />
      <SearchButton onClick={handleButtonClick} />
    </div>
  );
};
