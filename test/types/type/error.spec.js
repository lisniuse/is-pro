const is = require('../../../dist/umd/ispro.js');

describe('type/error', () => {

  test('should return true if passed parameter type is error', () => {
    let error = new Error();
    expect(is.error(error)).toBe(true);
  });

  test('should return false if passed parameter type is not error', () => {
    let notError = 'test';
    expect(is.error(notError)).toBe(false);
  });

  test('is.not.error({foo: \'bar\'}) => true', () => {
    expect(is.not.error({foo: 'bar'})).toBe(true);
  });

  test('is.all.error(new Error(), \'bar\') => false', () => {
    expect(is.all.error(new Error(), 'bar')).toBe(false);
  });
  
  test('is.any.error(new Error(), \'bar\') => true', () => {
    expect(is.any.error(new Error(), 'bar')).toBe(true);
  });

  test('is.all.error([new Error(), \'foo\', \'bar\']) => false', () => {
    expect(is.all.error([new Error(), 'foo', 'bar'])).toBe(false);
  });

});
