import React from 'react';
import { shallow } from 'enzyme';

import App from './App.jsx';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
