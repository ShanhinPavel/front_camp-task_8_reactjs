import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { setTextInputValue, fetchFilms } from '../../../../actions';
import { SearchInput } from './search-input';
import { SearchButton } from './search-button';
import styles from './search-form.css';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const { searchBy, sortBy, textInputValue: search } = useSelector((state) => state);

  const changeInputValue = (event) => {
    dispatch(setTextInputValue(event.target.value));
  };

  const clickSearchButton = () => {
    dispatch(fetchFilms({ search, sortBy, searchBy }));
  };

  return (
    <div className={styles.container}>
      <SearchInput inputValue={search} onChangeInputValue={changeInputValue} />
      <SearchButton onClickSearchButton={clickSearchButton} />
    </div>
  );
};
