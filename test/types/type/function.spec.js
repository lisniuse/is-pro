const is = require('../../../dist/umd/ispro.js');

describe('type/function', () => {

  test('should return true if passed parameter type is function', () => {
    expect(is.function(is.function)).toBe(true);
  });

  test('should return false if passed parameter type is not function', () => {
    let notFunction = 'test';
    expect(is.function(notFunction)).toBe(false);
  });

});
