const is = require('../../../dist/umd/ispro.js');

describe('type/json', () => {

  test('should return true if passed parameter type is a json object', () => {
    expect(is.json({})).toBe(true);
  });

  test('should return false if passed parameter type is not a json object', () => {
    let notObject = 'test';
    expect(is.json(notObject)).toBe(false);
  });

});
