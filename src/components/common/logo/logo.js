import React from 'react';

import styles from './logo.module.css';

const COMPANY = 'netflix';
const COMPANY_PRODUCT = 'roulette';

export const Logo = () => (
  <p className={styles.logo}>
    <span className={styles.company}>{COMPANY}</span>
    {COMPANY_PRODUCT}
  </p>
);
