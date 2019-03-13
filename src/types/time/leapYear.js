// is the given year a leap year?
const isLeapYear = function (year) {
  return this.number(year) && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
};

export default isLeapYear;
