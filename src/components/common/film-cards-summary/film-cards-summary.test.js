import React from 'react';
import { create } from 'react-test-renderer';

import { FilmsCardsSummary } from './film-cards-summary';

describe('FilmCardsSummary component', () => {
  let component;
  beforeAll(() => {
    component = create(<FilmsCardsSummary filmsSummary={'Summary'} />).toJSON();
  });

  it('Should render', () => {
    expect(component).toMatchSnapshot();
  });
});
