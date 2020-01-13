import React from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';
import { Routes } from '../../../routes';

import './logo.css';

export const Logo = ({ onClick }) => (
  <p>
    <NavLink to={Routes.home} className="logo" onClick={onClick}>
      <span className="logo-company">netflix</span>
      roulette
    </NavLink>
  </p>
);

Logo.propsTypes = {
  onClick: PropTypes.func,
};
