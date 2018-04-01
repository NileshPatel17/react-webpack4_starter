import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { assertPropTypes } from 'check-prop-types';
import PropTypes from 'prop-types';
import SearchInput from '../components/SearchInput';

describe('<SearchInput />', () => {
  const inputText = 'refs';
  const mockSearchChange = jest.fn();
  const props = { searchPredicate: inputText, handleSearchChange: mockSearchChange };
  const component = shallow(<SearchInput {...props} />);

  it('SearchInput component should render as expected', () => {
    const tree = toJson(component);
    expect(component).toMatchSnapshot();
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

  describe('When the user types into the input', () => {
    // beforeEach(() => {
    //   component.find('input').simulate('change', { target: { value: inputText } });
    // });
    // it('should call mock function when use types into the input', () => {
    //   component.find('input').simulate('change', { target: { value: inputText } });
    //   expect(typeof component.find('input').node.props.value).toBe(inputText);
    //   expect(mockSearchChange).toHaveBeenCalled();
    // });
  });
});
