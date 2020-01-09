import React from 'react';

import { Logo } from '../logo';
import styles from './footer.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  );
};
