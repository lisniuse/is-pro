const is = require('../../../dist/umd/ispro.js');

describe('time/weekday', () => {

  test('should return true if given date is weekday', () => {
    let time = 1421572235303;
    let date = new Date(time);
    let friday = new Date(date.setDate(date.getDate() - 2));
    expect(is.weekday(friday)).toBe(true);
  });

  test('should return false if given date is not weekday', () => {
    let time = 1421572235303;
    let sunday = new Date(time);
    expect(is.weekday(sunday)).toBe(false);
  });

});
