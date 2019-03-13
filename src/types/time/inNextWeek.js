// is a given date in next week range?
const isInNextWeek = function (date) {
  return this.inDateRange(date, new Date(), new Date(new Date().setDate(new Date().getDate() + 7)));
};

export default isInNextWeek;
