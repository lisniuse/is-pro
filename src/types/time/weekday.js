import not from '../../core/not';

// is a given date weekday?
const isWeekday = function(value) {
  return this.not.weekend(value, this);
}

export default isWeekday;
