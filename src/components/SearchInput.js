import React from 'react';
import cxs from 'cxs';
import PropTypes from 'prop-types';

const SearchInput = ({ searchPredicate, handleSearchChange }) => (
  <label>
    <span
      className={cxs({
        position: 'absolute !important',
        clip: 'rect(1px, 1px, 1px, 1px)'
      })}
    >
      Filter Search
    </span>
    <input
      placeholder="Filter by name"
      type="text"
      autoFocus
      className={cxs({
        padding: '1rem',
        width: '100%',
        borderRadius: '2px',
        border: '1px solid #adb5bd',
        color: '#000',
        overflow: 'visible',
        margin: 0,
        boxSizing: 'border-box'
      })}
      value={searchPredicate}
      onChange={e => {
        handleSearchChange(e.target.value);
      }}
    />
  </label>
);
SearchInput.propTypes = {
  searchPredicate: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired
};
export default SearchInput;
