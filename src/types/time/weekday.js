import not from '../../core/not';

// is a given date weekday?
const isWeekday = function(value) {
  return not(this.weekend, this)(value);
}

export default isWeekday;
