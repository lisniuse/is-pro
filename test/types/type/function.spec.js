const is = require('../../../dist/umd/ispro.js');

describe('type/function', () => {

  test('should return true if passed parameter type is function', () => {
    expect(is.function(is.function)).toBe(true);
  });

  test('should return false if passed parameter type is not function', () => {
    let notFunction = 'test';
    expect(is.function(notFunction)).toBe(false);
  });

  test('is.not.function({foo: \'bar\'}) => true', () => {
    expect(is.not.function({foo: 'bar'})).toBe(true);
  });

  test('is.all.function(toString, \'bar\') => false', () => {
    expect(is.all.function(toString, 'bar')).toBe(false);
  });
  
  test('is.any.function(toString, \'bar\') => true', () => {
    expect(is.any.function(toString, 'bar')).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.function([toString, \'foo\', \'bar\']); => false', () => {
    expect(is.all.function([toString, 'foo', 'bar'])).toBe(false);
  });

});
