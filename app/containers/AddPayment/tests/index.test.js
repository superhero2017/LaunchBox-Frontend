import React from 'react';
import { shallow } from 'enzyme';

import AddPayment from '../index';

describe('<AddPayment />', () => {
  it('should render the page message', () => {
    shallow(<AddPayment />);
  });
});
