const is = require('../../../dist/umd/ispro.js');

describe('object/length', () => {

  test('should return `true` for lengths', () => {
    expect(is.length(3)).toBe(true);
  });

  test('should return `false` for non-lengths', () => {
    let value1 = Number.MIN_VALUE;
    let value2 = Infinity;
    let value3 = '3'; 
    expect(is.length(value1)).toBe(false);
    expect(is.length(value2)).toBe(false);
    expect(is.length(value3)).toBe(false);
  });

});
