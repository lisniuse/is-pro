const is = require('../../../dist/umd/ispro.js');
const today = new Date();  
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

describe('time/today', () => {

  test('should return true if given date is today', () => {
    let date = new Date();
    expect(is.today(date)).toBe(true);
  });

  test('should return false if given date is not today', () => {
    let date = new Date();
    expect(is.today(date.setDate(date.getDate() - 1))).toBe(false);
  });

  test('is.not.today(yesterday) => true', () => {
    expect(is.not.today(yesterday)).toBe(true);
  });

  test('is.all.today(today, today) => true', () => {
    expect(is.all.today(today, today)).toBe(true);
  });
  
  test('is.any.today(today, yesterday) => true', () => {
    expect(is.any.today(today, yesterday)).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.today([today, yesterday]) => false', () => {
    expect(is.all.today([today, yesterday])).toBe(false);
  });

});
