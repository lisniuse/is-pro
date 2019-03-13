// is date within given range?
const isInDateRange = function (date, start, end) {
  if (this.not.date(date) || this.not.date(start) || this.not.date(end)) {
    return false;
  }
  let stamp = date.getTime();
  return stamp > start.getTime() && stamp < end.getTime();
};
// inDateRange method does not support 'all' and 'any' interfaces
isInDateRange.api = ['not'];

export default isInDateRange;
