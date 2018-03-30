export default function(collection, defaults) {
  return collection.map(el => {
    return Object.assign({}, el, defaults);
    // return { ...el, ...defaults };
  });
}
