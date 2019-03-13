const is = require('../../../dist/umd/ispro.js');

describe('time/month', () => {

  test('should return true if given month string is the month of the date object', () => {
    let time = 1421572235303;
    expect(is.month(new Date(time), 'january')).toBe(true);
  });

  test('should return false if given month string is not the month of the date object', () => {
    let time = 1421572235303;
    expect(is.month(new Date(time), 'february')).toBe(false);
  });

});
