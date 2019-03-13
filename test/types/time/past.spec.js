const is = require('../../../dist/umd/ispro.js');

describe('time/past', () => {

  test('should return true if given date is past', () => {
    let date = new Date();
    let past = new Date(date.setDate(date.getDate() - 1));
    expect(is.past(past)).toBe(true);
  });

  test('should return false if given date is not past', () => {
    let date = new Date();
    expect(is.past(date)).toBe(false);
  });

});
