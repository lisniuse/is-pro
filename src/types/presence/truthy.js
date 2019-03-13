import not from '../../core/not';

// is a given value truthy?
const isTruthy = function(value) {
  return not(this.falsy, this)(value);
}

export default isTruthy;
