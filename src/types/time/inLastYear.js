// is a given date in last year range?
const isInLastYear = function (date) {
  return is.inDateRange(date, new Date(new Date().setFullYear(new Date().getFullYear() - 1)), new Date());
};

export default isInLastYear;
