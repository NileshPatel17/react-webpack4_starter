import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { filterByCategory, filterByPredicate } from '../helpers/filterBy';

export default class ReactCheatSheet extends Component {
  constructor() {
    super();
    this.state = {
      predicate: '',
      categories: []
    };
  }
  render() {
    const { data, children } = this.props;
    const { predicate, categories } = this.state;
    const _categories = data.reduce((acc, { category }) => (acc.indexOf(category) === -1 ? acc.concat(category) : acc), []);
    return children({
      selectedCategories: categories,
      // filteredResults: filterByPredicate(filterByCategory(data, categories), predicate),
      filteredResults: filterByCategory(data, categories),
      categories: _categories,
      handleCategoryChange: (category, checked) =>
        this.setState({
          categories: checked ? categories.concat(category) : categories.filter(item => item != category)
        }),
      searchPredicate: predicate,
      handleSearchChange: newValue => this.setState({ predicate: newValue })
    });
  }
}

ReactCheatSheet.propTypes = {
  data: PropTypes.array
};
