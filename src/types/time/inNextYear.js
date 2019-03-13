// is a given date in next year range?
const isInNextYear = function (date) {
  return this.inDateRange(date, new Date(), new Date(new Date().setFullYear(new Date().getFullYear() + 1)));
};

export default isInNextYear;
