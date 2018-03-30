export const filterByCategory = (_data, categories = []) =>
  categories ? _data.filter(({ category }) => categories.indexOf(category) > -1) : _data;

export const filterByPredicate = (_data, predicate = '') =>
  predicate ? _data.filter(({ name }) => name.match(new RegExp(predicate, 'i'))) : _data;
