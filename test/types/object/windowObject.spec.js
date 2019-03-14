const is = require('../../../dist/umd/ispro.js');

describe('object/windowObject', () => {

  test('should return true if given object is window object', () => {
    expect(is.windowObject(window)).toBe[!!window];
  });

  test('should return false if given object is not window object', () => {
    expect(is.windowObject({})).toBe(false);
  });

  test('is.not.windowObject({}) => true;', () => {
    expect(is.not.windowObject({})).toBe(true);
  });

  test('is.all.windowObject(window, {nope: \'nope\'}) => false;', () => {
    expect(is.all.windowObject(window, {nope: 'nope'})).toBe(false);
  });
  
  test('is.any.windowObject(window, {nope: \'nope\'}) => true;', () => {
    expect(is.any.windowObject(window, {nope: 'nope'})).toBe(true);
  });
  
  // 'all' and 'any' interfaces can also take array parameter
  test('is.all.windowObject([window, {nope: \'nope\'}]) => false;', () => {
    expect(is.all.windowObject([window, {nope: 'nope'}])).toBe(false);
  });

});
