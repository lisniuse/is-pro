const is = require('../../../dist/umd/ispro.js');

describe('time/tomorrow', () => {

  test('should return true if given date is tomorrow', () => {
    let date = new Date();
    let tomorrow = new Date(date.setDate(date.getDate() + 1));
    expect(is.tomorrow(tomorrow)).toBe(true);
  });

  test('should return false if given date is not tomorrow', () => {
    let date = new Date();
    expect(is.tomorrow(date)).toBe(false);
  });

});
