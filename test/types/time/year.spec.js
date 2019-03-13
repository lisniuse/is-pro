const is = require('../../../dist/umd/ispro.js');

describe('time/year', () => {

  test('should return true if given year string is the year of the date object', () => {
    let time = 1421572235303;
    expect(is.year(new Date(time), 2015)).toBe(true);
  });

  test('should return false if given year string is not the year of the date object', () => {
    let time = 1421572235303;
    expect(is.year(new Date(time), 2016)).toBe(false);
  });

});
