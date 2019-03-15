const is = require('../../../dist/umd/ispro.js');

describe('type/plainObject', () => {

  test('should return true if given value is plainObject', () => {
    expect(is.plainObject({})).toBe(true);
  });

  test('should return true if given value is not plainObject', () => {
    expect(is.plainObject('123456')).toBe(false);
  });
  
});
