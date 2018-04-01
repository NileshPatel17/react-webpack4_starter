import React from 'react';

test('render a label', () => {
  const wrapper = shallow(<label>Hello Jest22!</label>);
  expect(wrapper).toMatchSnapshot();
});
