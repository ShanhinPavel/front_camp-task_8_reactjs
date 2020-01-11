import React from 'react';
import { useDispatch } from 'react-redux';

import { Logo } from '../logo';
import './footer.css';
import { setDefaultFilmsSearchingSortingParams } from '../../../actions';

export const Footer = () => {
  const dispatch = useDispatch();

  const hadleClickLogo = () => {
    dispatch(setDefaultFilmsSearchingSortingParams());
  };

  return (
    <div className="footer">
      <Logo onClick={hadleClickLogo} />
    </div>
  );
};
