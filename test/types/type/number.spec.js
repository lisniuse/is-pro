const is = require('../../../dist/umd/ispro.js');

describe('type/number', () => {

  test('should return true if passed parameter type is number', () => {
    expect(is.number(1)).toBe(true);
  });
  
  test('should return false if passed parameter type is not number', () => {
    expect(is.number('test')).toBe(false);
  });
  
  test('should return false if passed parameter is NaN', () => {
    expect(is.number(NaN)).toBe(false);
  });

  // test('should return false if passed parameter type is number', () => {
  //   expect(is.not.number(1)).toBe(false);
  // });

  // test('should return false if passed parameter is (\'foo\', 1)', () => {
  //   expect(is.all.number('foo', 1)).toBe(false);
  // });

  // test('should return true if passed parameter is ({}, 2)', () => {
  //   expect(is.any.number(({}, 2))).toBe(true);
  // });
  
});
