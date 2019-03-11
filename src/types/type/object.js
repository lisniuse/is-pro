// is a given value object?
const isObject = function (value) {
  return Object(value) === value;
};

export default isObject;
