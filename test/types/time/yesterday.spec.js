const is = require('../../../dist/umd/ispro.js');
const today = new Date();
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));

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

  test('is.not.yesterday(today) => true', () => {
    expect(is.not.yesterday(today)).toBe(true);
  });

  test('is.all.yesterday(yesterday, today) => false', () => {
    expect(is.all.yesterday(yesterday, today)).toBe(false);
  });
  
  test('is.any.yesterday(today, yesterday) => true', () => {
    expect(is.any.yesterday(today, yesterday)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.yesterday([today, yesterday]) => false', () => {
    expect(is.all.yesterday([today, yesterday])).toBe(false);
  });

});
