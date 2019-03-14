const is = require('../../../dist/umd/ispro.js');
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));

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

  test('is.not.past(tomorrow) => true', () => {
    expect(is.not.past(tomorrow)).toBe(true);
  });
  
  test('is.all.past(tomorrow, yesterday) => false', () => {
    expect(is.all.past(tomorrow, yesterday)).toBe(false);
  });

  test('is.any.past(yesterday, tomorrow) => true', () => {
    expect(is.any.past(yesterday, tomorrow)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.past([yesterday, tomorrow]) => false', () => {
    expect(is.all.past([yesterday, tomorrow])).toBe(false);
  });
  
});
