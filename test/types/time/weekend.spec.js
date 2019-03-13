const is = require('../../../dist/umd/ispro.js');

describe('time/weekend', () => {

  test('should return true if given date is weekend', () => {
    let time = 1421572235303;
    expect(is.weekend(new Date(time))).toBe(true);
  });

  test('should return false if given date is not weekend', () => {
    let time = 1421572235303;
    let date = new Date(time);
    let friday = new Date(date.setDate(date.getDate() - 2));
    expect(is.weekend(friday)).toBe(false);
  });

});
