import React from 'react';
import { shallow, mount } from 'enzyme';
import { create } from 'react-test-renderer';

import { Error } from './error';

describe('Render component', () => {
  it('Component should render', () => {
    const renderedValue = create(<Error />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
