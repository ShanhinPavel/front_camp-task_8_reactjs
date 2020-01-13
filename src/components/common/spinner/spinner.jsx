import React, { useState } from 'react';
import { css } from '@emotion/core';
import { BarLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Spinner = () => {
  const { isLoading } = useState((state) => state);
  return (
    <div style={{ margin: '0 auto' }}>
      <BarLoader css={override} size={25} color={'#ffffff'} loading={isLoading} />
    </div>
  );
};
