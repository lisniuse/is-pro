const is = require('../../../dist/umd/ispro.js');

describe('type/boolean', () => {

  test('should return true if passed parameter type is boolean', () => {
    let bool = true;
    expect(is.boolean(bool)).toBe(true);
  });

  test('should return false if passed parameter type is not boolean', () => {
    let notBool = 'test';
    expect(is.boolean(notBool)).toBe(false);
  });

});
