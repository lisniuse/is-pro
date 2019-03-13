// is a given dates year equal given year parameter?
const isYear = function (date, year) {
  return this.date(date) && this.number(year) && year === date.getFullYear();
};
// year method does not support 'all' and 'any' interfaces
isYear.api = ['not'];

export default isYear;
