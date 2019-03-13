// is a given date in last week range?
const isInLastWeek = function (date) {
  return is.inDateRange(date, new Date(new Date().setDate(new Date().getDate() - 7)), new Date());
};

export default isInLastWeek;
