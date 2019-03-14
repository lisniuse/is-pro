const is = require('../../../dist/umd/ispro.js');
const today = new Date();
const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));

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

  test('is.not.tomorrow(today) => true', () => {
    expect(is.not.tomorrow(today)).toBe(true);
  });

  test('is.all.tomorrow(tomorrow, today) => false', () => {
    expect(is.all.tomorrow(tomorrow, today)).toBe(false);
  });
  
  test('is.any.tomorrow(today, tomorrow) => true', () => {
    expect(is.any.tomorrow(today, tomorrow)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.tomorrow([today, tomorrow]) => false', () => {
    expect(is.all.tomorrow([today, tomorrow])).toBe(false);
  });

});
