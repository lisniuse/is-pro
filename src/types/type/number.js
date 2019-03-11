import isNan from './nan';

// is a given value number?
const isNumber = function (value) {
  return !isNan(value) && toString.call(value) === '[object Number]';
};

export default isNumber;
