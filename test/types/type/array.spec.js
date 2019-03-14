const is = require('../../../dist/umd/ispro.js');

describe('type/array', () => {

  test('should return true if passed parameter type is array', () => {
    let array = ['test'];
    expect(is.array(array)).toBe(true); 
  });

  test('should return false if passed parameter type is not array', () => {
    let notArray = 'test';
    expect(is.array(notArray)).toBe(false);
  });

  test('is.not.array({foo: \'bar\'}) => true', () => {
    expect(is.not.array({foo: 'bar'})).toBe(true);
  });

  test('is.all.array([\'foo\'], \'bar\') => false', () => {
    expect(is.all.array(['foo'], 'bar')).toBe(false);
  });

  test('is.any.array([\'foo\'], \'bar\') => true', () => {
    expect(is.any.array(['foo'], 'bar')).toBe(true);
  });
  
  test('is.all.array([[1, 2], \'foo\', \'bar\']) => false', () => {
    expect(is.all.array([[1, 2], 'foo', 'bar'])).toBe(false);
  });

});
