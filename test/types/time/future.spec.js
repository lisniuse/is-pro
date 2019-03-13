const is = require('../../../dist/umd/ispro.js');

describe('time/future', () => {

  test('should return true if given date is future', () => {
    let date = new Date();
    let future = new Date(date.setDate(date.getDate() + 1));
    expect(is.future(future)).toBe(true);
  });

  test('should return false if given date is not future', () => {
    let date = new Date();
    let past = new Date(date.setDate(date.getDate() - 1));
    expect(is.future(date)).toBe(false);
    expect(is.future(past)).toBe(false);
  });

});
