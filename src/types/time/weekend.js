// is a given date weekend?
// 6: Saturday, 0: Sunday
const isWeekend = function (date) {
  return this.date(date) && (date.getDay() === 6 || date.getDay() === 0);
};

export default isWeekend;
