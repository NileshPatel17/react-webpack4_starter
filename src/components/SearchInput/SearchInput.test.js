import React from 'react';
import { shallow } from 'enzyme';
import { assertPropTypes } from 'check-prop-types';
import PropTypes from 'prop-types';
import SearchInput from './SearchInput.jsx';

describe('<SearchInput />', () => {
  const inputText = 'refs';
  let mockSearchChange;

  let wrapper;

  beforeEach(() => {
    mockSearchChange = jest.fn();
    const props = { searchPredicate: inputText, handleSearchChange: mockSearchChange };
    wrapper = shallow(<SearchInput {...props} />);
  });

  it('SearchInput component should render as expected', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('has "searchPredicate" a required SearchInput propTypes', () => {
    assertPropTypes(
      SearchInput.propTypes,
      { searchPredicate: 'refs', handleSearchChange: () => {} },
      SearchInput.searchPredicate,
      SearchInput.searchPredicate
    );
  });

  it('has "handleSearchChange" a required function propTypes', () => {
    expect(SearchInput.propTypes.handleSearchChange).toBe(PropTypes.func.isRequired);
  });

  it('should "searchPredicate" get updated, When the user types into the input', () => {
    const input = wrapper.find('input');
    input.simulate('change', { target: { value: inputText } });
    expect(mockSearchChange).toHaveBeenCalled();
    expect(input.props().value).toEqual(inputText);
  });
});
