const is = require('../../../dist/umd/ispro.js');

describe('typeError', () => {

  test('should return true if passed parameter type is error', () => {
    let error = new Error();
    expect(is.error(error)).toBe(true);
  });

  test('should return false if passed parameter type is not error', () => {
    let notError = 'test';
    expect(is.error(notError)).toBe(false);
  });

});
