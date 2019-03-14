const is = require('../../../dist/umd/ispro.js');
const yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
const tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));

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

  test('is.not.future(yesterday) => true', () => {
    expect(is.not.future(yesterday)).toBe(true);
  });

  test('is.all.future(tomorrow, yesterday) => true', () => {
    expect(is.not.future(yesterday)).toBe(true);
  });
  
  test('is.any.future(yesterday, tomorrow) => true', () => {
    expect(is.any.future(yesterday, tomorrow)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.future([yesterday, tomorrow]) => false', () => {
    let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
    let tomorrow = new Date(new Date().setDate(new Date().getDate() + 1));    
    expect(is.all.future([yesterday, tomorrow])).toBe(false);
  });

});
