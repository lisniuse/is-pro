const is = require('../../../dist/umd/ispro.js');

describe('type/json', () => {

  test('should return true if passed parameter type is a json object', () => {
    expect(is.json({})).toBe(true);
  });

  test('should return false if passed parameter type is not a json object', () => {
    let notObject = 'test';
    expect(is.json(notObject)).toBe(false);
  });

  test('is.not.json([]) => true', () => {
    expect(is.not.json([])).toBe(true);
  });
  
  test('is.all.json({}, 1) => false', () => {
    expect(is.all.json({}, 1)).toBe(false);
  });

  test('is.any.json({}, 2) => true', () => {
    expect(is.any.json({}, 2)).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.json([{}, {foo: \'bar\'}]) => true', () => {
    expect(is.all.json([{}, {foo: 'bar'}])).toBe(true);
  });

});
