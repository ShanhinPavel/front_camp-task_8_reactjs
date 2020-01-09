import React from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../../routes';

import styles from './logo.css';

const COMPANY = 'netflix';
const COMPANY_PRODUCT = 'roulette';

export const Logo = () => (
  <p>
    <NavLink to={Routes.home} className={styles.logo}>
      <span className={styles.company}>{COMPANY}</span>
      {COMPANY_PRODUCT}
    </NavLink>
  </p>
);
