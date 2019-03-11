import { toString } from '../../core/prototype';

// is a given value Date Object?
const isDate = function(value) {
  return toString.call(value) === '[object Date]';
};

export default isDate;
