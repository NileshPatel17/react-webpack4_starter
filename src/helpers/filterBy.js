import { filter, includes } from 'lodash';

//using core javascript code
// export const filterByCategory = (_data, categories = []) =>
//   categories.length ? _data.filter(({ category }) => categories.indexOf(category) > -1) : _data;

// export const filterByPredicate = (_data, predicate = '') => _data.filter(({ name }) => name.match(new RegExp(predicate, 'i')));

//Using lodash lobrary
export const filterByCategory = (_data, categories = []) => {
  return categories.length ? filter(_data, ({ category }) => includes(categories, category)) : _data;
};
export const filterByPredicate = (_data, predicate = '') => filter(_data, ({ name }) => name.match(new RegExp(predicate, 'i')));
