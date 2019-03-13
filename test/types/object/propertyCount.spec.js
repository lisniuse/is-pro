const is = require('../../../dist/umd/ispro.js');

describe('object/propertyCount', () => {

  test('should return true if given count matches that of the object', () => {
    let obj = {
      test: 'test',
      is: 'is',
      good: 'good'
    };
    expect(is.propertyCount(obj, 3)).toBe(true);
  });

  test('should return false if given count does not match that of the object', () => {
    let obj = {
      test: 'test',
      is: 'is'
    };
    expect(is.propertyCount(obj, 3)).toBe(false);
  });

});
