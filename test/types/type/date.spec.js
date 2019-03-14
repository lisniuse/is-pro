const is = require('../../../dist/umd/ispro.js');

describe('type/date', () => {

  test('should return true if passed parameter type is date', () => {
    let date = new Date();
    expect(is.date(date)).toBe(true);
  });

  test('should return false if passed parameter type is not date', () => {
    let notDate = 'test';
    expect(is.date(notDate)).toBe(false);
  });

  test('is.not.date({foo: \'bar\'}) => true', () => {
    expect(is.not.date({foo: 'bar'})).toBe(true);
  });

  test('is.all.date(new Date(), \'bar\') => false', () => {
    expect(is.all.date(new Date(), 'bar')).toBe(false);
  });
  
  test('is.any.date(new Date(), \'bar\') => true', () => {
    expect(is.any.date(new Date(), 'bar')).toBe(true);
  });

  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.date([new Date(), \'foo\', \'bar\']) => false', () => {
    expect(is.all.date([new Date(), 'foo', 'bar'])).toBe(false);
  });

});
