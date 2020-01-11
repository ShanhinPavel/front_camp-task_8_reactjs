import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../../routes';

import './logo.css';

export const Logo = () => (
  <p>
    <NavLink to={Routes.home} className="logo">
      <span className="logo-company">netflix</span>
      roulette
    </NavLink>
  </p>
);
