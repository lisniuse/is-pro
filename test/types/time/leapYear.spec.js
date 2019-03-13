const is = require('../../../dist/umd/ispro.js');

describe('time/leapYear', () => {

  test('should return true if given year is a leap year', () => {
    expect(is.leapYear(2016)).toBe(true);
  });

  test('should return false if given year is not a leap year', () => {
    expect(is.leapYear(2015)).toBe(false);
  });

});
