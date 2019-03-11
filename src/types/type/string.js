// is a given value String?
const isString = function(value) {
  return toString.call(value) === '[object String]';
};

export default isString;
