// is a given value Array?
// check native isArray first
const isArray = Array.isArray || function (value) {
  return toString.call(value) === '[object Array]';
};

export default isArray;
