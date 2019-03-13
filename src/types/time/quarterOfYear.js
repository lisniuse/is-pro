// is a given date in the parameter quarter?
const isQuarterOfYear = function (date, quarter) {
  return this.date(date) && this.number(quarter) && quarter === Math.floor((date.getMonth() + 3) / 3);
};
// quarterOfYear method does not support 'all' and 'any' interfaces
isQuarterOfYear.api = ['not'];

export default isQuarterOfYear;
