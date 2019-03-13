const is = require('../../../dist/umd/ispro.js');

describe('time/yesterday', () => {

  test('should return true if given date is yesterday', () => {
    let date = new Date();
    let yesterday = new Date(date.setDate(date.getDate() - 1));
    expect(is.yesterday(yesterday)).toBe(true);
  });

  test('should return false if given date is not yesterday', () => {
    let date = new Date();
    expect(is.yesterday(date)).toBe(false);
  });

});
