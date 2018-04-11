import React from 'react';
import { shallow } from 'enzyme';

import CategoryFilter from './CategoryFilter.jsx';

describe('<CategoryFilter/>', () => {
  let wrapper;
  let mockOnToggle;
  const name = 'children';
  const checked = false;
  beforeEach(() => {
    mockOnToggle = jest.fn();
    const props = { active: checked, name: name, onToggle: mockOnToggle };
    wrapper = shallow(<CategoryFilter {...props} />);
  });

  it('CategoryFilter component should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render label text and input checkbox value correctly', () => {
    expect(
      wrapper
        .find('span')
        .text()
        .trim()
    ).toBe(name);
    expect(wrapper.find('input').props().checked).toBe(checked);
  });

  it('should checkbox active, when toggle', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { checked: true } });
    expect(mockOnToggle).toHaveBeenCalled();
    // expect(input.props().checked).toBe(true);
  });
});
