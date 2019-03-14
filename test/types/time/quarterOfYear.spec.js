const is = require('../../../dist/umd/ispro.js');
const secondQuarter = new Date('05/26/2015');

describe('time/quarterOfYear', () => {

  test('should return true if given quarter is the quarter of the date object', () => {
    let time = 1421572235303;
    let date = new Date(time);
    expect(is.quarterOfYear(date, 1)).toBe(true);
  });

  test('should return false if given quarter is not the quarter of the date object', () => {
    let time = 1421572235303;
    let date = new Date(time);
    expect(is.quarterOfYear(date, 2)).toBe(false);
  });

  test('is.not.quarterOfYear(secondQuarter, 1) => true', () => {
    expect(is.not.quarterOfYear(secondQuarter, 1)).toBe(true);
  });

});
