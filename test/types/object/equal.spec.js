const is = require('../../../dist/umd/ispro.js');

describe('arithmetic/equal', () => {

  test('should return true if given two numbers are equal', () => {
    expect(is.equal(3, 1 + 2)).toBe(true);
  });

  test('should return false if given two numbers are not equal', () => {
    expect(is.equal(3, 2)).toBe(false);
  });

  test('should return true if given two strings are same', () => {
    expect(is.equal('test', 'test')).toBe(true);
  });

  test('should return false if given two strings are not same', () => {
    expect(is.equal('test', 'test2')).toBe(false);
  });

  test('should return true if given two complex types', () => {
    let value1 = [
      1,
      '2',
      function() {
        return false
      },
      {
        a: 1,
        b: 2
      }
    ];
    let value2 = [
      1,
      '2',
      function() {
        return false
      },
      {
        a: 1,
        b: 2
      }
    ]
    expect(is.equal(value1, value2)).toBe(true);
  });

  test('should return false if given two complex types', () => {
    let value1 = [
      1,
      '2',
      function() {
        return false
      },
      {
        a: 1,
        b: 2
      }
    ];
    let value2 = [
      1,
      '2',
      function() {
        return true
      },
      {
        a: 1,
        b: 2
      }
    ]
    expect(is.equal(value1, value2)).toBe(false);
  });

  test('should return true if given two boolean are same', () => {
    expect(is.equal(false, false)).toBe(true);
  });
  
  test('should return false if given two boolean are not same', () => {
    expect(is.equal(false, true)).toBe(false);
  });

  test('is.not.equal(\'yeap\', \'nope\') => true', () => {
    expect(is.not.equal('yeap', 'nope')).toBe(true);
  });

});
