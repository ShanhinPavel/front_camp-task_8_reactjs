import React from 'react';
import { shallow, mount } from 'enzyme';

import { Error } from './error';

describe('Render component', () => {
  it('Component should render', () => {
    shallow(<Error />);
  });
});
