// is a given value object?
const isObject = function (value) {
  if (!value) return false;
  return Object(value) === value || typeof value === 'object';
};

export default isObject;
