const is = require('../../../dist/umd/ispro.js');

describe('time/leapYear', () => {

  test('should return true if given year is a leap year', () => {
    expect(is.leapYear(2016)).toBe(true);
  });

  test('should return false if given year is not a leap year', () => {
    expect(is.leapYear(2015)).toBe(false);
  });

  test('is.not.leapYear(2015) => true', () => {
    expect(is.not.leapYear(2015)).toBe(true);
  });

  test('is.all.leapYear(2015, 2016) => false', () => {
    expect(is.all.leapYear(2015, 2016)).toBe(false);
  });
  
  test('is.all.leapYear(2015, 2016) => false', () => {
    expect(is.all.leapYear(2015, 2016)).toBe(false);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.leapYear([2016, 2080]) => true', () => {
    expect(is.all.leapYear([2016, 2080])).toBe(true);
  });

});
