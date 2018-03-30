import React from 'react';
import cxs from 'cxs';
import PropTypes from 'prop-types';

const CategoryFilter = ({ active, name, onToggle }) => (
  <label
    className={cxs({
      marginRight: '.5rem',
      marginTop: '.5rem',
      borderRadius: '2px',
      backgroundColor: active ? '#ffd43b' : '#868e96',
      fontWeight: '500',
      color: '#fff',
      fontSize: '1em',
      lineHeight: '2em',
      display: 'inline-block',
      padding: '0 1em',
      cursor: 'pointer',
      whiteSpace: 'nowrap',
      textDecoration: 'none',
      borderWidth: '1px',
      borderStyle: 'solid',
      userSelect: 'none',
      outline: 'none'
    })}
  >
    <span
      className={cxs({
        color: active ? '#212529' : '#fff'
      })}
    >
      {name + ' '}
    </span>
    <input
      type="checkbox"
      checked={active}
      className={cxs({
        marginLeft: '.25em',
        verticalAlign: 'middle',
        position: 'relative',
        top: '-2px'
      })}
      onChange={e => onToggle(name, e.target.checked)}
    />
  </label>
);
CategoryFilter.propTypes = {
  active: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onToggle: PropTypes.func.isRequired
};
export default CategoryFilter;
