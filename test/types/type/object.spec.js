const is = require('../../../dist/umd/ispro.js');

describe('typeObject', () => {

  test('should return true if passed parameter type is object', () => {
    expect(is.object({})).toBe(true);
  });

  test('should return false if passed parameter type is not object', () => {
    let notObject = 'test';
    expect(is.object(notObject)).toBe(false);
  });

});
