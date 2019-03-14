// is a given date in last month range?
const isInLastMonth = function (date) {
  return this.inDateRange(date, new Date(new Date().setMonth(new Date().getMonth() - 1)), new Date());
};

isInLastMonth.api = ['not'];

export default isInLastMonth;
