const is = require('../../../dist/umd/ispro.js');

describe('typeRegexp', () => {

  test('should return true if passed parameter type is regexp', () => {
    let regexp = new RegExp();
    expect(is.regexp(regexp)).toBe(true);
  });

  test('should return false if passed parameter type is not regexp', () => {
    let notRegexp = 'test';
    expect(is.regexp(notRegexp)).toBe(false);
  });

});
