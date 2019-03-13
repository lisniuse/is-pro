const is = require('../../../dist/umd/ispro.js');

describe('time/today', () => {

  test('should return true if given date is today', () => {
    let date = new Date();
    expect(is.today(date)).toBe(true);
  });

  test('should return false if given date is not today', () => {
    let date = new Date();
    expect(is.today(date.setDate(date.getDate() - 1))).toBe(false);
  });

});
