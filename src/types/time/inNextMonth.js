// is a given date in next month range?
const isInNextMonth = function (date) {
  return this.inDateRange(date, new Date(), new Date(new Date().setMonth(new Date().getMonth() + 1)));
};

export default isInNextMonth;
